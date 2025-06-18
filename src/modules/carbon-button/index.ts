import BXButton from "./button";

if (!customElements.get("bx-btn")) {
  customElements.define("bx-btn", BXButton);
}

export { BXButton };
