# Fábrica de Sites por IA (Claude Code)

**English summary:** a ready-to-use workspace for [Claude Code](https://claude.com/claude-code) that builds professional websites for small local businesses (clinics, lawyers, barbershops and similar) in **Brazil and Portugal**. It combines a project rules file (`CLAUDE.md`), two slash-command skills (`/novo-site` and `/qa-site`), a production-minded Astro + Tailwind CSS template (`_base`), automated content and quality checks, and playbooks per niche. Early-stage, maintained by one person, written mostly in Portuguese.

---

Um espaço de trabalho pronto para o **Claude Code** criar sites profissionais para pequenos negócios locais (clínicas, escritórios, barbearias e parecidos), no **Brasil e em Portugal**. A ideia é que quem não programa consiga pedir um site, aprovar a direção visual e receber um projeto com qualidade conferida.

> **Status:** projeto em estágio inicial, mantido por uma pessoa. O template existe e builda, mas ainda não há clientes entregues registrados em `docs/portfolio.md`. Use como ponto de partida e ajuste ao seu caso.

## O que tem aqui

| Pasta ou arquivo | Para que serve |
|---|---|
| `CLAUDE.md` | Regras que o Claude segue em toda sessão: stack, design, conteúdo, QA e deploy. |
| `.claude/skills/novo-site/` | Comando `/novo-site`. Cria o site de um cliente a partir do briefing, com portões de aprovação. |
| `.claude/skills/qa-site/` | Comando `/qa-site`. Roda o checklist de qualidade e gera um relatório. |
| `PROMPTS.md` | Prompts prontos: montar a fábrica, novo cliente, alteração e revisão visual. |
| `_base/` | Template em **Astro** com **Tailwind CSS 4**. Seções, SEO, dados estruturados (JSON-LD) e scripts de verificação. |
| `docs/nichos.md` | Playbook por nicho, status normativo e vocabulário Brasil x Portugal. |
| `docs/legal.md` | Checklists legais BR e PT, com fonte e grau de confiança. Notas de pesquisa, não aconselhamento jurídico. |
| `docs/briefing-modelo.md` | Formulário para o cliente preencher. |
| `LEIA-ME.md` | Guia para o humano que opera a fábrica (instalação no Windows, fluxo de venda e entrega, custos). |

## O que o template já traz

- Seções prontas: Herói, Serviços, Sobre, Diferenciais, FAQ, Depoimentos, Contato com mapa, Área de atendimento, Barra fixa no celular, Rodapé BR e Rodapé PT.
- Dados do negócio concentrados em um único arquivo (`_base/src/data/site.ts`), com esquema de validação (`site.schema.ts`).
- SEO: título e descrição por página, sitemap, `robots.txt`, imagem de compartilhamento e JSON-LD de negócio local.
- Verificação automática antes do build:
  - `validar-conteudo.mjs` checa o conteúdo e campos obrigatórios.
  - `validar-ptpt.mjs` confere o **português de Portugal** nos sites de mercado PT.
- QA com Playwright, axe-core (acessibilidade) e Lighthouse CI, configurados em `_base/package.json` e `_base/lighthouserc.json`.

## Como usar (resumo)

Requisitos: **Node 24** (`_base/package.json` exige `>=24 <25`), Git e o app **Claude Code**. O passo a passo completo para Windows está no `LEIA-ME.md`.

1. Clone este repositório numa pasta **fora** de pastas sincronizadas (OneDrive e similares), porque o `node_modules` é grande.
2. Abra a pasta no Claude Code. Ele carrega o `CLAUDE.md` sozinho.
3. Preencha o briefing do cliente (`docs/briefing-modelo.md`).
4. No Claude Code, rode `/novo-site`, escolha uma das 3 direções visuais propostas e aprove o herói.
5. Rode `/qa-site` para o relatório de qualidade antes de entregar.

Comandos do template, dentro de `_base/` (ou da pasta do cliente copiada dele):

```
npm ci          # instala as dependências
npm run dev     # servidor de desenvolvimento
npm run build   # valida o conteúdo, checa os tipos e gera o site
npm run preview # abre o site gerado
npm run qa      # roda a bateria de qualidade
```

## Regras de conteúdo que o projeto impõe

- Sem depoimento, resultado ou "antes e depois" inventado. Fotos só reais e autorizadas.
- Sem promessa de resultado e respeito às regras do conselho profissional do cliente. Nichos regulados só entram depois de a norma ser lida e registrada (`docs/nichos.md`).
- Contato padrão por WhatsApp e telefone, sem formulário que perca mensagens em silêncio.

## Limitações

- A documentação é em português. Os checklists legais cobrem Brasil e Portugal e **precisam ser confirmados na fonte oficial** antes de qualquer publicação.
- Partes do `LEIA-ME.md` (custos, preços, caminhos de pasta) refletem o ambiente de quem criou e são estimativas. Ajuste aos seus valores.
- O Claude não aprende sozinho entre sessões. O que melhora o resultado é manter o `CLAUDE.md`, os docs e os exemplos atualizados.

## Licença

[MIT](LICENSE).
