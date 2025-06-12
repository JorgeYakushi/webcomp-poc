import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { resolve } from "path";

const pkgPath = resolve("./package.json");
const modulesDir = resolve("./src/modules");

const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));

const folders = readdirSync(modulesDir).filter((name) => {
  const indexPath = resolve(modulesDir, name, "index.ts");
  return (
    statSync(resolve(modulesDir, name)).isDirectory() &&
    statSync(indexPath).isFile()
  );
});

pkg.exports = {};

for (const name of folders) {
  pkg.exports[`./${name}`] = {
    import: `./dist/${name}.js`,
  };
}

writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
console.log("✅ package.json exports updated");
