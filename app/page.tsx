"use client";

"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { ContactActions } from "../components/ContactActions";

const Wrapper = styled.div`
  width: min(1120px, 100% - 2rem);
  margin: 1.5rem auto 0;
  display: grid;
  gap: 1.25rem;
`;

const Hero = styled.section`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 1rem;

  h1 {
    margin: 0 0 0.65rem;
    color: ${({ theme }) => theme.colors.textHeading};
    line-height: 1.2;
  }

  p {
    max-width: 68ch;
  }

  img {
    margin-top: 1rem;
    border-radius: ${({ theme }) => theme.radius.md};
  }

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

const Grid = styled.section`
  display: grid;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.article`
  background: ${({ theme }) => theme.colors.surfaceAlt};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 1rem;

  h2 {
    margin-top: 0;
    color: ${({ theme }) => theme.colors.textHeading};
    font-size: 1.2rem;
  }

  p {
    margin-bottom: 0;
  }
`;

const ActionRow = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const LinkButton = styled(Link)`
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

export default function HomePage() {
  return (
    <Wrapper>
      <Hero aria-labelledby="titulo-home">
        <h1 id="titulo-home">Saude com seguranca, representatividade e acolhimento</h1>
        <p>
          A Lacrei Saude conecta pessoas da comunidade LGBTQIAPN+ a profissionais
          de saude alinhados a um cuidado inclusivo.
        </p>
        <ActionRow>
          <LinkButton href="/proposito" aria-label="Ir para pagina nosso proposito">
            Conheca nosso proposito
          </LinkButton>
        </ActionRow>
        <Image
          src="/images/imagem 2 lacreisaude.jpeg"
          alt="Pessoa sorrindo em atendimento de saude"
          width={700}
          height={467}
          sizes="(max-width: 768px) 100vw, 640px"
          quality={60}
        />
      </Hero>

      <Grid aria-label="Pilares da Lacrei Saude">
        <Card>
          <h2>Missao</h2>
          <p>Promover acesso a saude de qualidade para toda a comunidade.</p>
        </Card>
        <Card>
          <h2>Visao</h2>
          <p>Ser a principal referencia em cuidado inclusivo no Brasil.</p>
        </Card>
        <Card>
          <h2>Valores</h2>
          <p>Representatividade, seguranca, respeito e acessibilidade.</p>
        </Card>
      </Grid>

      <ContactActions />
    </Wrapper>
  );
}

