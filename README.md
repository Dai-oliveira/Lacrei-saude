# Projeto Lacrei Saude - Desafio Frontend

Aplicacao desenvolvida com **Next.js + TypeScript + Styled-Components**, seguindo os requisitos de acessibilidade, responsividade, performance e testes unitarios.

## Tecnologias

- Next.js 14
- TypeScript
- Styled-Components
- Jest + Testing Library

## Como rodar localmente

1. Instale dependencias:

```bash
npm install
```

2. Rode em desenvolvimento:

```bash
npm run dev
```

3. Abra `http://localhost:3000`.

## Build e execucao de producao

```bash
npm run build
npm start
```

## Testes

Executar suite de testes:

```bash
npm test
```

## Auditoria Lighthouse

Gerar auditoria local com validacao dos thresholds obrigatorios:

```bash
npm run build
npm run lighthouse
```

Regras configuradas:

- Acessibilidade minima: `90`
- Performance minima: `80`

Relatorios e artifacts ficam em `.lighthouseci/`.

Componentes testados (minimo obrigatorio atendido):

- `Header` (navegacao)
- `Footer` (estrutura institucional)
- `ContactActions` (componente interativo)

## Checklist de requisitos

- Duas paginas com roteamento funcional (`/` e `/proposito`)
- Header e Footer personalizados
- Tres botoes interativos com acao real:
  - Buscar atendimento (navegacao externa)
  - Conheca nosso proposito (roteamento interno)
  - Enviar e-mail / Saber mais (acao de contato e navegacao)
- Responsividade mobile-first
- Acessibilidade:
  - HTML semantico
  - uso de `aria-*` quando aplicavel
  - skip link para conteudo principal
  - foco visivel
- Performance:
  - imagens otimizadas com `next/image`
  - estrutura enxuta para bundle
- Mock de dados (bonus): `public/mock-services.json`

## Deploy (Vercel)

1. Suba o repositorio para GitHub.
2. Importe o projeto na Vercel.
3. Configure build command: `npm run build`.
4. Configure output padrão Next.js.

## Rollback funcional (simples)

- Pela Vercel, use o historico de deploys.
- Selecione um deploy anterior estavel e clique em **Promote to Production**.
- Como alternativa segura, valide em **Preview Deploy** antes de promover.

## Justificativas visuais e tecnicas

- Mantive paleta verde-azulada e tipografia sem serifa para consistencia com identidade atual da Lacrei.
- A arquitetura em componentes facilita manutencao e cobertura de testes.
- A navegacao e botoes respeitam area de toque, foco e semantica para melhor acessibilidade.

## Observacao sobre o Style Guide (Figma)

Este projeto foi implementado com base na identidade visual existente no repositorio local e em equivalentes tecnicos do Design System. Caso algum token oficial (cor/fonte/espacamento) difira no Figma, o ajuste final pode ser aplicado rapidamente no arquivo `styles/theme.ts`.
