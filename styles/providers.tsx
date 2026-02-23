"use client";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global-style";
import { theme } from "./theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
