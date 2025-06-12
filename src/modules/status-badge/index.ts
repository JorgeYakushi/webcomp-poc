import { StatusBadge } from "./status-badge";

if (!customElements.get("status-badge")) {
  customElements.define("status-badge", StatusBadge);
}

export { StatusBadge };
