"use client";

"use client";

import styled from "styled-components";

const Container = styled.footer`
  margin-top: 2.5rem;
  background: linear-gradient(105deg, #018383, #014687);
  color: #ffffff;
`;

const Inner = styled.div`
  width: min(1120px, 100% - 2rem);
  margin: 0 auto;
  padding: 1.1rem 0;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;

  p {
    margin: 0;
    font-weight: 600;
  }
`;

export function Footer() {
  return (
    <Container role="contentinfo" aria-label="Rodape institucional">
      <Inner>
        <p>Lacrei Saude</p>
        <p>(c) 2026 Todos os direitos reservados.</p>
      </Inner>
    </Container>
  );
}

