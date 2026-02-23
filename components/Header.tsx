"use client";

"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  background: #ffffff;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Inner = styled.div`
  width: min(1120px, 100% - 2rem);
  margin: 0 auto;
  padding: 0.8rem 0;
  display: grid;
  gap: 0.8rem;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: auto 1fr auto;
  }
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  strong {
    color: ${({ theme }) => theme.colors.textHeading};
    font-size: 1.125rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  a {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    font-weight: 700;
    border-radius: 6px;
    padding: 0 0.35rem;
  }
`;

const Cta = styled.div`
  display: flex;
  justify-content: flex-start;

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

const CtaLink = styled.a`
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 12px 18px;
  font-weight: 700;
  font-size: 0.95rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textOnPrimary};
  transition: background 150ms ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }

  &:focus-visible {
    outline: 3px solid #003f2f;
    outline-offset: 2px;
  }
`;

export function Header() {
  return (
    <Container role="banner">
      <a href="#conteudo" className="sr-only">
        Pular para o conteudo principal
      </a>
      <Inner>
        <Brand>
          <Image
            src="/images/Icone lacreisaude.png"
            alt="Logotipo Lacrei Saude"
            width={42}
            height={42}
            sizes="42px"
          />
          <strong>Lacrei Saude</strong>
        </Brand>

        <Nav aria-label="Navegacao principal">
          <Link href="/">Inicio</Link>
          <Link href="/proposito">Nosso proposito</Link>
        </Nav>

        <Cta>
          <CtaLink
            href="https://paciente.lacreisaude.com.br/"
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir plataforma para buscar atendimento"
          >
            Buscar atendimento
          </CtaLink>
        </Cta>
      </Inner>
    </Container>
  );
}

