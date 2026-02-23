import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { ContactActions } from "../components/ContactActions";
import { theme } from "../styles/theme";

describe("ContactActions", () => {
  it("renderiza os links de contato e navegacao", () => {
    render(
      <ThemeProvider theme={theme}>
        <ContactActions />
      </ThemeProvider>
    );

    expect(screen.getByRole("link", { name: /enviar e-mail para contato/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /abrir pagina com mais informacoes/i })).toBeInTheDocument();
  });
});
