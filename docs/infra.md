# Infraestrutura da agência

## Contas e acessos (preencher conforme forem criadas)
- [PREENCHER] Organização GitHub da agência (nome, quem tem acesso admin).
- [PREENCHER] Conta Cloudflare da agência (e-mail, quem tem acesso).
- [PREENCHER] Registrador de domínios usado por padrão (se houver um
  padrão; ver docs/dominios.csv para o registro por cliente).

## Padrão por cliente
- 1 repositório privado por cliente, criado a partir do template `_base`
  (repo marcado como Template no GitHub).
- 1 Worker Cloudflare por cliente (nome sugerido: `<mercado>-<nicho>-<slug>`,
  igual à pasta em `clientes/`).
- Segredos só via `npx wrangler secret put` (nunca commitados).
- Branch `producao` protegido, gera o deploy de produção; outros branches
  geram preview URL (CLAUDE.md seção 12).

## Node e ferramentas
- Node 24.x fixado por `.nvmrc` e `engines` em cada `package.json` de
  cliente (herdado de `_base`).
- `NODE_VERSION` precisa ser definido nas configurações de build da
  Cloudflare para cada Worker (CLAUDE.md seção 12).

## Pendências
- [PREENCHER] Todos os itens acima marcados como [PREENCHER]: preencher
  assim que as contas da agência existirem de fato.
