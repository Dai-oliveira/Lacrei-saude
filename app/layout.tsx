import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import StyledComponentsRegistry from "../lib/styled-registry";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Providers } from "../styles/providers";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Lacrei Saude",
  description: "Plataforma de cuidado em saude com foco em inclusao e acolhimento."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={nunito.variable}>
        <StyledComponentsRegistry>
          <Providers>
            <Header />
            <main id="conteudo">{children}</main>
            <Footer />
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
