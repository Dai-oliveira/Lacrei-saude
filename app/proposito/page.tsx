"use client";

"use client";

import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.div`
  width: min(1120px, 100% - 2rem);
  margin: 1.5rem auto 0;
`;

const Section = styled.section`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 1rem;

  h1 {
    margin-top: 0;
    color: ${({ theme }) => theme.colors.textHeading};
  }

  p {
    max-width: 70ch;
    line-height: 1.6;
  }

  img {
    border-radius: ${({ theme }) => theme.radius.md};
    margin-top: 1rem;
  }

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

export default function PropositoPage() {
  return (
    <Wrapper>
      <Section aria-labelledby="titulo-proposito">
        <h1 id="titulo-proposito">Nosso proposito</h1>
        <p>
          Facilitamos a conexao entre pessoas LGBTQIAPN+ e profissionais de
          saude comprometidos com acolhimento e qualidade de atendimento.
          Trabalhamos para reduzir barreiras de acesso por meio de uma experiencia
          segura, representativa e centrada na pessoa.
        </p>
        <Image
          src="/images/imagem lacreisaude.jpg"
          alt="Profissional de saude atendendo paciente com acolhimento"
          width={700}
          height={467}
          sizes="(max-width: 768px) 100vw, 640px"
          quality={60}
          priority
        />
      </Section>
    </Wrapper>
  );
}

