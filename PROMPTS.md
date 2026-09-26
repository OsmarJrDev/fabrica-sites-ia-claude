# Prompts prontos

Abra o Claude Code na pasta C:\Users\osmar\fabrica-sites-ia antes de colar.

## PROMPT 1: montar a fábrica (uma vez)
```
Leia CLAUDE.md, docs/nichos.md, docs/legal.md e docs/briefing-modelo.md antes de tudo.

1. Ambiente: confirme que o caminho atual não contém OneDrive. Rode, um por vez, node -v, npm -v, git --version e gh --version. Me diga o que falta ou está desatualizado (Node deve ser 24.x). Rode npm config set save-exact true. Rode claude mcp list e me diga se o astro-docs está ativo; se não estiver, NÃO adicione sozinho: me mostre o comando e peça para eu conferir o endereço em docs.astro.build/en/guides/build-with-ai.

2. Crie o template em _base com: npm create astro@latest _base -- --template minimal --install --git --no-ai (se --no-ai não existir, apague o AGENTS.md gerado). Depois, dentro de _base, um comando por vez: npx astro add tailwind --yes, npx astro add sitemap --yes, npm i -D @astrojs/check typescript @playwright/test @axe-core/playwright @lhci/cli. Script build = "astro check && astro build" e prebuild = "node scripts/validar-conteudo.mjs && node scripts/validar-ptpt.mjs".

3. Estrutura conforme CLAUDE.md seção 4:
   - src/data/site.schema.ts com tipos: mercado 'BR'|'PT', nicho, NAP, horários, serviços, depoimentos/números/credenciais/prêmios com { fonte: string; aprovadoPeloCliente: true }, registros profissionais, dados legais do país, cores e fontes.
   - src/data/site.ts preenchido com um cliente FICTÍCIO, nome "DEMO Clínica Exemplo", faixa "SITE DE DEMONSTRAÇÃO, DADOS FICTÍCIOS" visível no topo. Nada de depoimento: seção oculta.
   - src/styles/global.css com @import "tailwindcss" e @theme (4 a 6 cores, 2 fontes, raio, sombra). Fontes pela Fonts API do Astro.
   - Seções com 2 ou 3 variantes estruturais cada (não só de cor): Hero, Servicos, Sobre, Diferenciais, Depoimentos, Faq, Contato (mapa como imagem estática com link), BarraMobile (WhatsApp e Ligar), RodapeBR e RodapePT alternados por site.mercado.
   - Seo.astro e JsonLd.astro alimentados por site.ts; páginas index, politica-de-privacidade (modelo BR e PT), 404; robots.txt, favicon, og.jpg.
   - Golden files em src/components/_exemplos/ com um componente correto de cada tipo.
   - scripts/validar-conteudo.mjs, scripts/validar-ptpt.mjs e scripts/qa.mjs (usa o preview que o usuário já abriu em http://localhost:4321 e para com uma mensagem clara se ele não estiver no ar; screenshots 320/375/768/1440 em qa/<data>/, axe, overflow horizontal, soma de JS gzip, tamanho do hero, parse do JSON-LD) com npm run qa. lighthouserc.json com performance 0.9 e demais 0.95.
   - .gitignore (.env, .dev.vars, node_modules, dist), .nvmrc com 24, engines node ">=24.0.0 <25", wrangler.jsonc com static assets apontando para dist.
   - Transições só com @view-transition { navigation: auto; } e prefers-reduced-motion.

4. Crie também docs/portfolio.md, docs/benchmark.md, docs/saida-cliente.md, docs/plano-b-hospedagem.md, docs/infra.md, docs/dominios.csv e scripts/atualizar-todos.ps1 (percorre clientes, roda npm ci e npm run build, grava relatório).

5. Rode npm run build e corrija todos os erros sozinho. Depois me peça para abrir npm run preview em outro terminal, rode npm run qa, e mostre os screenshots em 375, 768 e 1440 pelo Chrome DevTools MCP com lighthouse_audit. Faça a autocrítica contra a lista de padrões proibidos.

Não use React, tailwind.config.js, ViewTransitions, ClientRouter, Astro.glob nem imagens de conteúdo em public/. Ao final, liste o que ficou pendente e proponha regras novas para o CLAUDE.md.
```

## PROMPT 2: novo cliente
```
Use a skill novo-site.
Briefing: clientes/[SLUG]/briefing.md
Mercado: [BR ou PT]
Nicho: [nicho de docs/nichos.md]
Tipo: [landing de 1 página | institucional com N páginas]
Observações: [ex.: cliente odeia azul; tem fotos boas da fachada]

Pare e me pergunte se faltar registro profissional, dado legal do país ou se o nicho estiver pendente. Traga 3 direções visuais diferentes antes de codar. Não invente nenhum dado: use [PREENCHER].
```

## PROMPT 3: alteração pedida pelo cliente
```
Cliente: clientes/[SLUG]
Pedido (copiado do canal oficial em [DATA]): "[texto do cliente]"

Regras: altere só src/data/site.ts (ou a imagem em src/assets) salvo se for impossível; se o pedido for seção nova ou mudança de layout, pare e me diga que é orçamento à parte. Não invente dados. Rode a skill qa-site no nível rapido. Faça commit "fix: [resumo]" no branch preview, push, e me dê o link do preview e o diff resumido para eu mandar ao cliente. Não publique em producao.
```

## PROMPT 4: revisão visual mais ousada
```
O site em clientes/[SLUG] ficou genérico. Não mexa em textos nem dados.
1. Tire screenshots em 375 e 1440 e dê nota de 1 a 5 na rubrica (hierarquia, CTA em 375, ritmo, fotos, assinatura, legibilidade), explicando o porquê de cada nota.
2. Aponte onde aparecem padrões proibidos do CLAUDE.md.
3. Proponha 2 caminhos mais ousados, cada um mudando o layout do hero, a escala tipográfica (contraste forte entre título e texto) e um elemento-assinatura (grid editorial, tipografia gigante, foto recortada, filete, textura). Confira docs/portfolio.md para não repetir.
4. Espere minha escolha, aplique, mantenha as metas de performance e acessibilidade e rode qa-site completo. Depois peça a rubrica numa sessão separada só com os screenshots.
```
