import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Header } from "../components/Header";
import { theme } from "../styles/theme";

describe("Header", () => {
  it("renderiza a navegacao principal", () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    expect(screen.getByRole("navigation", { name: /navegacao principal/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /inicio/i })).toBeInTheDocument();
  });
});
