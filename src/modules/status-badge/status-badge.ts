import { LitElement, html, nothing } from "lit";
import { property, customElement } from "lit/decorators.js";
import {
  StatusBadgeEnum,
  DEFAULT_STATUS_BADGE_MAP,
} from "./status-badge.config";
import { statusBadgeStyles } from "./status-badge.styles";

@customElement("status-badge")
export class StatusBadge extends LitElement {
  static styles = statusBadgeStyles;

  @property({ type: String }) label: string = "";
  @property({ type: String }) color?: StatusBadgeEnum;
  @property({ type: Boolean }) stroke = false;
  @property({ type: Boolean, attribute: "fill-container" }) fillContainer =
    false;

  private readonly statusBadgeMap = DEFAULT_STATUS_BADGE_MAP;

  private normalizeLabel(label: string): string {
    return label.replace(/\s|_/g, "").toLowerCase();
  }

  private get badgeColor(): StatusBadgeEnum {
    const normalizedLabel = this.normalizeLabel(this.label);
    const matchedKey = Object.keys(this.statusBadgeMap).find(
      (key) => this.normalizeLabel(key) === normalizedLabel
    );
    return (
      this.color ||
      this.statusBadgeMap[matchedKey ?? ""] ||
      StatusBadgeEnum.GRAY
    );
  }

  private get statusClass(): string {
    return `${this.badgeColor} ${this.stroke ? "stroke" : ""}`;
  }

  render() {
    const classes = [
      "status-badge",
      this.statusClass,
      this.fillContainer ? "w-100" : "",
      !this.label ? "invisible" : "",
    ]
      .filter(Boolean)
      .join(" ");

    return html`
      <div class=${classes}>
        ${this.label ? this.label.toUpperCase() : nothing}
      </div>
    `;
  }
}
