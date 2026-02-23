"use client";

"use client";

import Link from "next/link";
import styled from "styled-components";

const Card = styled.section`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.surface};
  padding: 1rem;

  p {
    margin-top: 0;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const ActionLink = styled.a`
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

const InternalLink = styled(Link)`
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 12px 18px;
  font-weight: 700;
  font-size: 0.95rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};

  &:hover {
    background: #e9fbf4;
  }

  &:focus-visible {
    outline: 3px solid #003f2f;
    outline-offset: 2px;
  }
`;

export function ContactActions() {
  return (
    <Card aria-label="Acoes de contato">
      <p>Tem alguma duvida? Escolha uma forma de contato:</p>
      <Actions>
        <ActionLink href="mailto:contato@lacreisaude.com.br" aria-label="Enviar e-mail para contato">
          Enviar e-mail
        </ActionLink>
        <InternalLink href="/proposito" aria-label="Abrir pagina com mais informacoes">
          Saber mais
        </InternalLink>
      </Actions>
    </Card>
  );
}

