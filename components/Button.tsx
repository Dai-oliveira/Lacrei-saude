"use client";

import styled from "styled-components";

type ButtonVariant = "primary" | "secondary";

const StyledButton = styled.button<{ $variant: ButtonVariant }>`
  border: 0;
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 12px 18px;
  min-height: 44px;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  transition: transform 150ms ease, background 150ms ease;

  ${({ $variant, theme }) =>
    $variant === "primary"
      ? `
      background: ${theme.colors.primary};
      color: ${theme.colors.textOnPrimary};
      &:hover { background: ${theme.colors.primaryHover}; transform: translateY(-1px); }
    `
      : `
      background: transparent;
      color: ${theme.colors.primary};
      border: 2px solid ${theme.colors.primary};
      &:hover { background: #e9fbf4; transform: translateY(-1px); }
    `}

  &:focus-visible {
    outline: 3px solid #003f2f;
    outline-offset: 2px;
  }
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({ variant = "primary", ...props }: ButtonProps) {
  return <StyledButton $variant={variant} {...props} />;
}
