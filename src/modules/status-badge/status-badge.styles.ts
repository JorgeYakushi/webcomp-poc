import { css } from "lit";

export const statusBadgeStyles = css`
  :host {
    display: flex;
    width: 100%;
    --font-family: GothamSSm, Roboto, sans-serif;
  }

  .status-badge {
    font-family: var(--font-family);
    border-radius: 50px;
    border-width: 1px;
    border-style: solid;
    padding: 0.25rem 0.625rem;
    font-weight: bold;
    font-size: 0.75rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  .invisible {
    visibility: hidden;
  }

  .w-100 {
    width: 100%;
  }

  .stroke {
    background-color: transparent !important;
  }

  .BLUE {
    background-color: #d8e9fa;
    color: #0076c0;
    border-color: #b7d8f3;
  }

  .BLUE.stroke {
    border-color: #0076c0;
  }

  .SAFFRON {
    background-color: #fff1cc;
    color: #e17c00;
    border-color: #ffe3a3;
  }

  .SAFFRON.stroke {
    border-color: #e17c00;
  }

  .GRAY {
    background-color: #f1f1f1;
    color: #555;
    border-color: #ddd;
  }

  .GRAY.stroke {
    border-color: #555;
  }

  .RED {
    background-color: #fddede;
    color: #d43f3a;
    border-color: #f7c2c2;
  }

  .RED.stroke {
    border-color: #d43f3a;
  }

  .PLUM {
    background-color: #f2e0f2;
    color: #855fa8;
    border-color: #e6c4e6;
  }

  .PLUM.stroke {
    border-color: #855fa8;
  }

  .GREEN {
    background-color: #ecf8f1;
    color: #2c6332;
    border-color: #bbdec4;
  }

  .GREEN.stroke {
    border-color: #2e8540;
  }
`;
