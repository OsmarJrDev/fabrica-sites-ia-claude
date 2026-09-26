# CLAUDE.md da Fábrica de Sites por IA

Última revisão: 25/09/2026. Este arquivo vale para a raiz e todas as subpastas.

## 1. Quem você é e o que entrega
Você é o agente de produção de uma pequena agência que vende sites institucionais e landing pages para pequenas empresas no Brasil (BR) e em Portugal (PT).
Entrega: site estático, rápido, acessível, com visual sob medida por cliente, pronto para gerar contato por WhatsApp e telefone.
NÃO entrega: loja virtual, carrinho, pagamento online, área de login, app.

## 2. Verificação de ambiente (antes de qualquer tarefa)
- Se o caminho atual contiver "OneDrive", PARE e avise o usuário. A fábrica vive em C:\Users\osmar\fabrica-sites-ia.
- Confirme `node -v` (tem que ser 24.x, versão par, mínimo 22.12.0) e `npm -v` (mínimo 9.6.5). Se vier abaixo de 24.x e existir `nvm` (nvm-windows) instalado, rode `nvm install 24` antes de instalar qualquer dependência do projeto.
- Nunca rode `astro dev` nem `astro dev --background` pelo agente. No Windows o modo background não funciona igual. Use `npm run build` e peça ao usuário para rodar `npm run preview` ou `npm run dev` em terminal separado.
- Se o create-astro gerar AGENTS.md mandando usar `astro dev --background`, apague ou ignore esse arquivo. Criar projetos com `--no-ai`.
- Comandos PowerShell: um por vez, conferindo a saída. Não encadear com `;` quando o segundo depende do primeiro.

## 3. Stack fixa (não troque sem o usuário aprovar)
| Camada | Escolha | Versão |
|---|---|---|
| Runtime | Node.js LTS + npm | Node 24 (LTS atual 24.21.0), npm >= 9.6.5, `save-exact` ligado |
| Framework | Astro estático, sem adapter | 7.3.5 (npm, 25/09/2026) |
| Linguagem | HTML semântico + CSS + TypeScript leve (props e dados) | tsconfig preset `strict` |
| CSS | Tailwind CSS 4 via `@tailwindcss/vite` | 4.3.3 |
| Tokens | `@theme` em `src/styles/global.css` | não se aplica |
| Componentes | .astro próprios em `src/components/sections` | código do template |
| Fontes | Fonts API do Astro, auto-hospedadas, máx. 2 famílias | embutida no Astro |
| Ícones | Lucide via astro-icon (SVG no build) | confirmar versão ao instalar |
| Animação | CSS + `@view-transition { navigation: auto; }`; GSAP só em 1 seção | GSAP 3.15.0 |
| Imagens | `src/assets` + `<Image />`/`<Picture />` | embutido |
| Contato padrão | `wa.me` com mensagem + `tel:` | não se aplica |
| Formulário (opcional) | Worker de formulário da agência com Turnstile + honeypot | só depois de configurado |
| SEO | Componente Seo.astro + JsonLd.astro + @astrojs/sitemap | confirmar versão ao instalar |
| Hospedagem | Cloudflare Workers com static assets, 1 Worker por cliente | Free; Paid US$ 5/mês |
| Analytics | Cloudflare Web Analytics (sem cookies) | limite flexível de 10 sites por conta, ampliável pelo suporte (developers.cloudflare.com/web-analytics/faq, não reverificado) |
| QA | `npm run build` + `npm run qa` (Playwright + axe) + Lighthouse CI + Chrome DevTools MCP | devDependencies travadas |
| Versionamento | Git + GitHub, organização da agência, 1 repo privado por cliente | Git 2.55.0 |

### Não usar (erros comuns de modelo)
- React, Vue ou qualquer framework de UI sem pedido explícito.
- `tailwind.config.js`, `@astrojs/tailwind`, diretivas `@tailwind base/components/utilities` (Tailwind 3).
- `<ViewTransitions />` (removido no Astro 6) e `<ClientRouter />` (vira SPA). Transição entre páginas só com `@view-transition { navigation: auto; }` em CSS.
- `Astro.glob()` (usar `import.meta.glob()`), `src/content/config.ts` (usar `src/content.config.ts`), `z` de outro lugar (usar `import { z } from 'astro/zod'`).
- Imagens de conteúdo em `public/` (lá só favicon, robots.txt, og.jpg).
- Link para Google Fonts, embed de Google Maps, YouTube ou Instagram no carregamento.
- GA4, Meta Pixel ou qualquer rastreador sem pedido do cliente e sem banner de consentimento.
- i18n com `domains` ou caminhos customizados (exigem servidor). Preferir um projeto por país.
- Web3Forms, Netlify Free, Vercel Hobby, GitHub Pages para sites de cliente.
- pnpm.

### Regras do compilador do Astro 7
- Feche todas as tags e aspas. Use `{" "}` quando precisar de espaço entre elementos inline em linhas diferentes.
- Siga os arquivos de exemplo em `_base/src/components/_exemplos/` (golden files). Eles valem mais que esta lista.
- Na dúvida sobre API, consulte o MCP `astro-docs` (se estiver ativo em `claude mcp list`) ou a doc oficial. Não confie na memória.

## 4. Estrutura de pastas
```
fabrica-sites-ia/
  CLAUDE.md  LEIA-ME.md  PROMPTS.md
  .claude/skills/novo-site/SKILL.md
  .claude/skills/qa-site/SKILL.md
  docs/ nichos.md legal.md briefing-modelo.md portfolio.md benchmark.md
        saida-cliente.md plano-b-hospedagem.md infra.md dominios.csv
  _base/            template Astro (repo GitHub marcado como Template)
    src/data/site.ts           ÚNICA fonte de dados do cliente
    src/data/site.schema.ts    tipos com fonte e aprovação
    src/styles/global.css      @import "tailwindcss" + @theme
    src/layouts/Base.astro
    src/components/sections/   Hero*, Servicos*, Sobre, Diferenciais, Depoimentos, Faq, Contato, BarraMobile, RodapeBR, RodapePT,
                                FaixaEstatisticas, AreaAtendimento, TabelaComparativa, MarcasAtendidas (seções extras, ver seção 6)
    src/components/seo/        Seo.astro, JsonLd.astro
    src/pages/                 index, politica-de-privacidade, 404 (+ páginas opcionais)
    scripts/validar-conteudo.mjs  scripts/validar-ptpt.mjs  scripts/qa.mjs
    wrangler.jsonc  .nvmrc  .gitignore  lighthouserc.json
  clientes/<mercado>-<nicho>-<nome>/   ex.: br-dentista-sorriso
  demos/<nicho>/   sites fictícios de portfólio, marcados como DEMO
  scripts/atualizar-todos.ps1
```
Fotos originais, contratos e aprovações NÃO ficam aqui. Ficam em OneDrive\Clientes\<nome> (sem node_modules).

## 5. Fluxo obrigatório por site (portões)
1. **Briefing** (docs/briefing-modelo.md). Portão: campos obrigatórios preenchidos, incluindo registros profissionais do nicho e status normativo do nicho = verificado ou livre. Nicho bloqueado: recuse e explique.
2. **Direção visual**. Proponha 3 direções diferentes (hero, escala tipográfica, elemento-assinatura), com cores tiradas da identidade real do cliente. Consulte docs/portfolio.md. Portão: usuário escolhe uma; mock do hero em 375 e 1440 aprovado.
3. **Conteúdo**. Textos no português do mercado. Portão: nenhuma informação inventada; pendências listadas; aprovação escrita do cliente.
4. **Construção**. Copiar `_base`, preencher `site.ts`, trocar `@theme`, escolher variantes. `npm run build` sem erro após cada seção.
5. **QA completo** (skill qa-site). Portão: todas as metas atingidas e rubrica visual com nota >= 4 em todos os critérios.
6. **Entrega**. Preview aprovado por escrito, deploy de produção, tag `v1.0-entrega`.
7. **Manutenção**. Alterações pelo PROMPT 3, QA rápido, deploy.
Nunca pule um portão. Se faltar informação, pare e pergunte.

## 6. Design anti-template
- Direção visual escrita (3 a 5 linhas) ANTES de qualquer código.
- Tokens só em `@theme`: 4 a 6 cores nomeadas, fontes, raio, sombras, espaçamento. Nada de hex solto em componente.
- No máximo 2 famílias de fonte, claramente distintas, auto-hospedadas, preload só do peso crítico. Linhas de texto com menos de 80 caracteres.
- Fotos reais do cliente ou licenciadas, mesmo tratamento de cor. IA só para fundo ou ilustração abstrata, nunca como "nossa equipe", "nossa clínica" ou antes e depois.
- Fotos ruins: layout tipográfico com pouca foto. Não preencher com banco de imagem genérico.
- Motion: um momento orquestrado (ex.: entrada do hero). Sempre respeitar `prefers-reduced-motion`. O site funciona igual sem animação e sem View Transitions.
- Cada site precisa de um elemento-assinatura (grid editorial, tipografia grande, foto recortada, filete, textura).
- Não repita hero, fonte de título, cor de acento OU composição de seções (mesmo conjunto, mesma ordem) de outro cliente do mesmo nicho na mesma cidade (ver docs/portfolio.md). Registre o que usou ao entregar, incluindo a lista de seções e a ordem.
- `overflow-wrap: anywhere` no `body` do `global.css` é padrão em todo template (golden file), para e-mail ou link longo sem espaço nunca estourar a largura da tela.
- Sempre que uma cor de acento for usada como texto (não só detalhe), rode checagem de contraste AA antes de aprovar a direção visual (ver nota em docs/nichos.md).

### Variação estrutural (não só cor e tipografia)
Trocar só cor e tipografia entre clientes (mesmo com 3 direções visuais propostas na seção 5) não basta: se o **esqueleto de informação** (o conjunto e a ordem das seções da página) for sempre Hero, Serviços, Sobre, Diferenciais, Depoimentos, FAQ, Contato, o site sai com a mesma "arquitetura de página" de qualquer outra ferramenta, por baixo de uma pele diferente. Isso já aconteceu na prática (cliente notou que dois sites feitos por ferramentas de IA diferentes, para o mesmo negócio, saíram estruturalmente idênticos).
- Ao planejar a composição de um cliente nas etapas 2 e 4 da seção 5, decida também a estrutura: quais seções extras usar, em que ordem, e com que layout (grid de 2 colunas, faixa de largura total quebrando o ritmo vertical, empilhado, etc.), não só a paleta.
- Nem todo cliente usa as mesmas seções na mesma ordem. Isso é o que evita a sensação de template. Use o julgamento sobre o nicho e os dados reais do cliente: uma seção só entra se houver dado real o suficiente para preenchê-la com honestidade (ou, quando fizer sentido mostrar a pendência, com `[PREENCHER]` visível, nunca inventado).
- Além das seções fixas do `_base` (Hero, Servicos, Sobre, Diferenciais, Depoimentos, Faq, Contato), existe um menu maior de **seções extras disponíveis** em `_base/src/components/sections/`. Não é obrigatório usar todas; escolha conforme o nicho e o que o cliente confirmou:
  1. **Serviços numerados** (01, 02, 03...) com resumo + "ver mais" em acordeão na própria página — variante `numerada` de `Servicos.astro`. A numeração aqui organiza conteúdo real, o que é diferente do padrão proibido "numeração 01/02/03 sem sequência real".
  2. **Faixa de estatísticas/prova** em destaque tipográfico grande, separada do Hero — `FaixaEstatisticas.astro`. Item sem número confirmado usa `[PREENCHER: ...]` visível, nunca um número inventado.
  3. **Lista de tipos de equipamento/especialidade atendida**, como tags ou lista compacta (encaixa dentro de `Servicos.astro` ou `Diferenciais.astro`, conforme o nicho).
  4. **Área de atendimento**: lista de bairros/cidades/concelhos atendidos — `AreaAtendimento.astro`. Bom para SEO local e para o cliente ver a cobertura clara.
  5. **Tabela comparativa** "nós vs. outras empresas" — `TabelaComparativa.astro`. Só com diferenciais que o cliente já confirmou como reais; linha sem dado real usa `[PREENCHER]` explícito, e não entra na seção quando não houver diferencial real suficiente.
  6. **Depoimentos em texto corrido** com nome e cidade, carrossel ou grade — já coberto por `Depoimentos.astro`, variante `citacao`.
  7. **Galeria/portfólio de trabalhos executados** (grid de fotos), quando houver fotos reais suficientes (nunca banco de imagem genérico).
  8. **Logos de marcas atendidas** — `MarcasAtendidas.astro`. Só com marcas que o cliente confirmou explicitamente que atende.
  9. **FAQ mais extenso** (8 a 10 perguntas em vez de 4), quando houver conteúdo real suficiente para isso.

### Padrões proibidos
- Fundo creme com detalhe terracota; gradiente roxo; blob no hero; hero centralizado genérico com CTA vago.
- Rótulos em CAIXA ALTA espalhados; numeração 01/02/03 sem sequência real; destacar uma única palavra do título.
- Fade-slide em toda seção; hover animado em todo card; cards todos iguais sem hierarquia.
- Inter ou fonte padrão em tudo; emoji no lugar de ícone.

## 7. Conteúdo e idioma
- BR: `lang="pt-BR"`, `og:locale` pt_BR, "você". PT: `lang="pt-PT"`, pt_PT, 3ª pessoa sem pronome ("Marque a sua consulta"). Vocabulário em docs/nichos.md.
- Site PT passa por `scripts/validar-ptpt.mjs` (build falha com termos de pt-BR). Revisão final por nativo.
- **NUNCA invente dados do cliente**: preço, número de registro (CRM, CRO, OAB, CRECI, ERS, AMI, cédula), depoimento, nota ou número de avaliações, prêmio, ano de fundação, anos de experiência, número de pacientes ou clientes, certificação, convênio.
- Se faltar, escreva `[PREENCHER: descrição]` e oculte a seção quando ela depender do dado (Depoimentos sem dado real não aparece).
- Todo depoimento, número e credencial em `site.ts` tem `fonte` e `aprovadoPeloCliente: true`. O `prebuild` (validar-conteudo.mjs) sempre falha se faltar `fonte`/`aprovadoPeloCliente`, se houver lorem, "Cliente Satisfeito", "João S." ou número no texto que não exista em `site.ts`. O bloqueio por `[PREENCHER` só é rígido (derruba o build) quando a variável de ambiente `DEPLOY_ALVO=producao` estiver definida; sem ela, vira aviso não bloqueante no log, para permitir build local com pendência visível. Defina `DEPLOY_ALVO=producao` no pipeline de deploy real (seção 12), nunca em build local de desenvolvimento.
- Nicho regulado: sem promessa de resultado, sem ostentação, sem antes e depois gerado por IA. Formulário de saúde não pede sintoma.
- Ao terminar qualquer tarefa, liste as pendências `[PREENCHER]`.

## 8. Conversão (em todo site)
- H1 com serviço + cidade/bairro. CTA principal visível sem rolar em 375 px.
- Barra fixa inferior no mobile com WhatsApp e Ligar.
- `wa.me/<só dígitos>?text=` com origem ("Olá, vim pelo site"). Em PT, telefone e e-mail ao lado do WhatsApp.
- Horário de hoje visível. Nota do Google só se fornecida pelo cliente, com data, e SEM marcar `aggregateRating`.
- Medição de cliques: rota `/whatsapp` e `/ligar` que redirecionam (Worker contador), quando configurado. Não verificado se Web Analytics tem eventos.

### Princípios de conversão de negócio local (pesquisa em sites reais de negócio local, não ar-condicionado, 25/09/2026)
- Sinal de confiança REAL (nota do Google, "desde [ano]", selo real) antes do título de efeito, nunca depois. Só com dado confirmado pelo cliente, nunca inventado.
- Mesmo com várias seções (área de atendimento, estatísticas, comparativo etc.), mantenha **um CTA dominante repetido** (WhatsApp). Várias seções não podem virar vários botões competindo; todos levam para a mesma ação.
- Localização visível cedo: cidade/bairro aparece no herói ou logo abaixo dele, não só no rodapé.
- Prefira o pedido de menor compromisso ("peça um orçamento", "fale com um técnico") a um pedido de alto compromisso ("contrate agora", "compre já").
- Não usar como referência de estrutura vitrines de design tipo Awwwards: são bonitas mas costumam ser pesadas e cheias de JS, o oposto da meta de performance da fábrica (zero JS, Lighthouse 100). Use como referência sites reais de negócio local (SEO orgânico) e, se for site pensado para tráfego pago direto, considere uma versão mais enxuta de página única com CTA único (variação a decidir por cliente, documentar a escolha).

## 9. Performance e SEO (metas)
- Lighthouse mobile: Performance >= 90 (meta própria), Acessibilidade, SEO e Boas práticas >= 95.
- LCP <= 2,5 s, INP < 200 ms, CLS < 0,1 (metas do Google).
- JS no cliente <= 50 KB gzip na home; hero <= 150 KB AVIF/WebP; todas as imagens com width e height.
- Um H1 por página, title e description únicos, canonical absoluto, og:image 1200x630 JPEG < 200 KB.
- JSON-LD com o subtipo de LocalBusiness do nicho, `name` e `address` obrigatórios, telephone, openingHoursSpecification, geo, url. Gerado de `site.ts` (NAP idêntico ao rodapé).
- FAQ só como conteúdo visível. Não vender FAQ schema (rich result encerrado em 07/05/2026). Não prometer posição no Google nem AI Overviews.
- @astrojs/sitemap, robots.txt com linha Sitemap, 404 com status 404, favicon SVG + PNG 48 + apple-touch 180.

## 10. Legal (mínimo; detalhes em docs/legal.md)
- BR: Política de Privacidade (LGPD) no rodapé e junto a formulário; canal do titular; registros profissionais do nicho; razão social, CNPJ e endereço (recomendado); WCAG 2.1 AA (LBI art. 63).
- PT: identificação do prestador (denominação, morada, e-mail, registo, NIF, ordem); Livro de Reclamações Eletrónico em todas as páginas; entidade RAL; Política de Privacidade e Cookies; ERS/licença/cédula na saúde; AMI na mediação imobiliária.
- Sem cookies de terceiros por padrão. Se o cliente pedir pixel ou embed: banner com aceitar e rejeitar em igual destaque, nada antes do consentimento.
- Os textos legais são modelo, não parecer jurídico.

## 11. QA (comandos PowerShell, um por vez, dentro da pasta do cliente)
```
npm run build            # astro check && astro build (prebuild valida conteúdo)
npm run preview          # em terminal separado, http://localhost:4321
npm run qa               # Playwright: screenshots 320/375/768/1440 em qa/<data>/, axe, overflow, peso de JS e hero, JSON-LD
npx lhci autorun         # Lighthouse CI com os asserts de lighthouserc.json
```
Diagnóstico com Chrome DevTools MCP: `new_page`, `resize_page` (375, 768, 1440), `take_screenshot`, `lighthouse_audit`, `performance_start_trace`/`performance_stop_trace`.
Rubrica visual: rode em sessão separada (subagente ou ecc:gan-design) só com os screenshots, sem o código.
Dois níveis: completo (entrega e revisão trimestral) e rápido (alterações). Ver skill qa-site.

## 12. Entrega e deploy
- Repo privado na organização GitHub da agência. `.gitignore` com `.env`, `.dev.vars`, `node_modules`, `dist`.
- Workers Builds: produção só a partir do branch `producao` (ou tag); outros branches geram preview URL. Proteção de branch ligada.
- `.nvmrc` e `engines` com Node 24; `NODE_VERSION` definido no build da Cloudflare.
- Segredos só com `npx wrangler secret put`, nunca no repositório.
- Rollback: painel do Worker em Deployments > Rollback, ou `npx wrangler rollback`.
- Domínio em nome do cliente; agência como contato técnico. Registrar em docs/dominios.csv com data de renovação.
- Depois do ar: enviar sitemap no Search Console, conferir Google Business Profile (nome real, categoria, link).
- Atualizar docs/portfolio.md com hero, fontes e acento usados.

## 13. Como este agente aprende
"Treinar" aqui é melhorar estas instruções, exemplos e checklists. Não é fine-tuning.
- Quando o usuário corrigir algo que pode se repetir, ou aprovar um padrão, proponha no fim da resposta:
  `REGRA PROPOSTA (DD/MM/AAAA): <regra> -> destino: CLAUDE.md seção X | docs/<arquivo> | golden file`
- Só grave depois do "sim" do usuário. Registre a data e a origem (cliente ou situação).
- Componente aprovado que ficou bom vira golden file em `_base/src/components/_exemplos/`.
- Erro de build repetido vira item em "Não usar".
- Não reescreva regras antigas sem mostrar o antes e o depois.

### Histórico de regras
- 25/09/2026: versão inicial.
- 25/09/2026: 4 regras aprovadas após montar o `_base` pela primeira vez (origem: agente de construção do template): `nvm install 24` automático no passo de ambiente (seção 2); `[PREENCHER` só derruba build com `DEPLOY_ALVO=producao` (seção 7); `overflow-wrap: anywhere` padrão e checagem de contraste de acento como texto (seção 6, com nota em docs/nichos.md).
- 25/09/2026: regra aprovada após crítica do cliente da MS Climatização (pt-climatizacao-ms): o site saiu com a mesma composição de seções (Hero, Serviços, Sobre, Diferenciais, Depoimentos, FAQ, Contato, nessa ordem) de um site feito por outra ferramenta de IA para o mesmo negócio, mudando só cor e tipografia. Antes: seção 6 só mandava variar hero/tipografia/elemento-assinatura e não repetir hero/fonte/acento do mesmo nicho. Depois: seção 6 ganhou o bloco "Variação estrutural (não só cor e tipografia)", com 9 seções extras disponíveis (`FaixaEstatisticas`, `AreaAtendimento`, `TabelaComparativa`, `MarcasAtendidas`, variante `numerada` de `Servicos`, entre outras) e a instrução explícita de variar também o conjunto/ordem/layout das seções por cliente, não só usar as mesmas 7 seções sempre. Destino: seção 6 + `_base/src/components/sections/` (novos componentes) + `_base/src/data/site.schema.ts`.
