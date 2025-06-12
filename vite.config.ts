import { defineConfig } from "vite";
import { resolve } from "path";
import { readdirSync, statSync } from "fs";

const modulesDir = resolve(__dirname, "src/modules");

const entries = Object.fromEntries(
  readdirSync(modulesDir)
    .filter((folder) => {
      const dirPath = resolve(modulesDir, folder);
      return (
        statSync(dirPath).isDirectory() &&
        statSync(resolve(dirPath, "index.ts")).isFile()
      );
    })
    .map((folder) => [folder, resolve(modulesDir, folder, "index.ts")])
);

export default defineConfig(({ command }) => {
  const isBuild = command === "build";

  return {
    root: isBuild ? "." : resolve(__dirname, "demo"),
    build: isBuild
      ? {
          lib: false,
          outDir: "dist",
          emptyOutDir: true,
          rollupOptions: {
            input: entries,
            output: {
              format: "es",
              entryFileNames: "[name].js",
            },
          },
        }
      : undefined,
    server: {
      open: true,
    },
  };
});
