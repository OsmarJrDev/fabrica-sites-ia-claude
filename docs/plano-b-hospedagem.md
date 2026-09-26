# Plano B de hospedagem

A hospedagem padrão é Cloudflare Workers com static assets, 1 Worker por
cliente (CLAUDE.md seção 3). Este documento existe para quando isso não for
possível ou o cliente já tiver hospedagem própria.

## Quando usar um plano B
- Cliente já paga hospedagem em outro provedor e quer manter.
- Conta Cloudflare do cliente bloqueada ou indisponível no prazo de entrega.
- Limite de 10 sites Web Analytics da conta da agência atingido antes do
  suporte da Cloudflare ampliar (CLAUDE.md seção 3, não reverificado).

## Opções (nenhuma reverificada nesta pesquisa — conferir preço e limites
## atuais antes de prometer ao cliente)
1. **Cloudflare Pages** (em vez de Workers): mesma stack estática, deploy via
   Git. Avaliar se o projeto precisa mesmo de Worker ou se Pages resolve.
2. **Hospedagem própria do cliente com suporte a static assets** (ex.:
   hospedagem cPanel que o cliente já paga): build local (`npm run build`),
   upload manual ou via FTP/SFTP do conteúdo de `dist/`. Perde o Web
   Analytics sem cookies da Cloudflare; avaliar alternativa sem cookies.
3. **VPS ou hospedagem estática de terceiro pago** (nunca as opções banidas
   na seção 3 do CLAUDE.md: Netlify Free, Vercel Hobby, GitHub Pages,
   Web3Forms).

## Pendências
- [PREENCHER] Testar de fato o fluxo de deploy manual (opção 2) com um
  cliente real antes de oferecer como plano B formal.
- [PREENCHER] Confirmar preço atual do plano pago da Cloudflare Workers
  (US$ 5/mês citado no CLAUDE.md, seção 3, não reverificado nesta pesquisa).
