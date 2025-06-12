import { Tag } from "./tag";

if (!customElements.get("poc-tag")) {
  customElements.define("poc-tag", Tag);
}

export { Tag };
