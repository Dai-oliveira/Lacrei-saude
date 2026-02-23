"use client";

"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: light;
  }

  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: var(--font-nunito), sans-serif;
    color: ${({ theme }) => theme.colors.textBody};
    background: radial-gradient(circle at top left, #ebfff8 0%, #ffffff 45%);
    min-height: 100vh;
    line-height: 1.5;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  .sr-only:focus {
    position: static;
    width: auto;
    height: auto;
    margin: 0;
    clip: auto;
    overflow: visible;
    padding: 0.5rem 0.75rem;
    border-radius: ${({ theme }) => theme.radius.sm};
    background: #ffffff;
    box-shadow: 0 0 0 3px #003f2f;
  }
`;

