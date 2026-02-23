import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { Footer } from "../components/Footer";

describe("Footer", () => {
  it("exibe informacoes institucionais", () => {
    render(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    );

    expect(screen.getByRole("contentinfo", { name: /rodape institucional/i })).toBeInTheDocument();
    expect(screen.getByText(/todos os direitos reservados/i)).toBeInTheDocument();
  });
});
