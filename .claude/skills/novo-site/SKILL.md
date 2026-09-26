---
name: novo-site
description: Cria o site de um cliente novo a partir do briefing preenchido, copiando o template _base para clientes/<slug>. Use quando o usuário pedir "novo site", "novo cliente", "começar o site de X" ou colar um briefing. Não use para alterações em site já entregue (use o PROMPT 3).
---

# Skill: novo-site

Siga os passos na ordem. Cada portão bloqueia o próximo passo.

## 0. Pré-checagem
1. Confirme que o caminho atual NÃO contém "OneDrive". Se contiver, pare.
2. Leia `CLAUDE.md`, `docs/nichos.md`, `docs/legal.md` e `docs/portfolio.md`.
3. Confirme que `_base` builda: dentro de `_base`, `npm run build`.

## 1. Briefing (portão 1)
1. Leia o briefing indicado (ex.: `clientes/<slug>/briefing.md`, modelo em `docs/briefing-modelo.md`).
2. Identifique mercado (BR ou PT) e nicho. Se o nicho não estiver em `docs/nichos.md`, pergunte qual é o mais próximo.
3. Leia o `status_normativo` do nicho:
   - `bloqueado` ou `pendente`: PARE. Diga ao usuário qual norma ele precisa ler na fonte e registrar antes.
   - `verificado` ou `livre`: siga.
4. Liste campos obrigatórios vazios (NAP, horários, WhatsApp, registros profissionais do nicho, dados legais do país). Se faltar algo legal ou registro profissional, pare e pergunte. O resto vira `[PREENCHER: ...]`.

## 2. Copiar o template
Slug: `<br|pt>-<nicho>-<nome-curto>`, sem acento nem espaço. Comandos um por vez no PowerShell:
```
robocopy _base clientes\<slug> /E /XD node_modules dist .git qa
(robocopy devolve código 1 quando copiou com sucesso; só código 8 ou maior é erro)
cd clientes\<slug>
npm ci
git init
```
Crie `clientes/<slug>/CLAUDE.md` curto: nome, mercado, nicho, direção escolhida, pendências.

## 3. Direção visual (portão 2)
1. Parta do playbook do nicho como ponto de partida, não como resultado.
2. Extraia cores do logo, fachada e fotos do cliente.
3. Proponha 3 direções. Cada uma com: nome, 3 linhas de conceito, paleta de 4 a 6 tokens nomeados com hex, par de fontes (máx. 2), variante do hero, escala tipográfica, elemento-assinatura, estilo de foto.
4. Confira `docs/portfolio.md`: nenhuma direção repete hero, fonte de título ou acento de cliente do mesmo nicho na mesma cidade.
5. Confira contra a lista de padrões proibidos do CLAUDE.md.
6. Peça ao usuário para escolher. Não siga sem escolha.
7. Gere o bloco `@theme` em `src/styles/global.css` e as fontes em `astro.config.mjs` (Fonts API).
8. Monte só o hero e mostre screenshots em 375 e 1440. Portão: aprovação.

## 4. Textos
1. Escreva no locale do mercado (vocabulário e tratamento em `docs/nichos.md`).
2. Tudo vai em `src/data/site.ts`. Componentes não têm texto fixo de cliente.
3. Depoimentos, números, credenciais e prêmios só com `fonte` e `aprovadoPeloCliente: true`. Sem dado real: seção oculta.
4. Title (serviço + cidade) e description únicos por página.
5. Respeite as regras setoriais do nicho (sem promessa de resultado etc.).

## 5. Seções
1. Escolha a variante de cada seção indicada no playbook e na direção.
2. Obrigatórios: H1 com serviço e cidade, CTA visível em 375 px sem rolar, barra fixa mobile (WhatsApp e Ligar), horário de hoje, rodapé legal do país.
3. Imagens em `src/assets`, com `<Image />`/`<Picture />`, width e height.
4. Depois de cada seção: `npm run build`. Corrija os erros sozinho antes de seguir.

## 6. Integrações
- WhatsApp: `https://wa.me/<só dígitos>?text=` com "Olá, vim pelo site" + contexto (ex.: serviço).
- Telefone: `tel:+55...` ou `tel:+351...`.
- Mapa: imagem estática com link para o Google Maps. Nada de iframe.
- Agendamento externo (Doctoralia, Booksy, Trinks, Fresha, TheFork, Cal.com, iFood, Glovo): só link.
- Formulário: só se o cliente exigir e o Worker de formulário da agência estiver configurado e testado (docs/infra.md). Se não estiver, pare e avise o usuário. Não crie o Worker nem use um serviço de terceiros por conta própria. Honeypot, Turnstile, link para a política, página de agradecimento.

## 7. SEO e legal
1. Preencha `Seo.astro` e `JsonLd.astro` a partir de `site.ts` com o subtipo do nicho.
2. `site` em `astro.config.mjs` com o domínio final. Sitemap, robots.txt, 404, favicon, og.jpg 1200x630 < 200 KB.
3. Ative `RodapeBR` ou `RodapePT` via `site.mercado` e preencha a política de privacidade do modelo em `docs/legal.md`.
4. Confira o checklist legal do país item a item.

## 8. QA
Rode a skill `qa-site` no nível completo. Corrija até passar.

## 9. Relatório final (formato)
```
## Site <slug>: pronto para preview
Direção: <nome> | Fontes: <x + y> | Acento: <hex> | Assinatura: <elemento>
QA: build OK | Lighthouse P/A/BP/SEO: __/__/__/__ | LCP __ s | CLS __ | JS __ KB | hero __ KB
Rubrica visual: hierarquia _ CTA _ ritmo _ fotos _ assinatura _ legibilidade _
Screenshots: qa/<data>/
Pendências [PREENCHER]:
- ...
Precisa do cliente: ...
Riscos/normas a conferir: ...
Próximo passo: push no branch preview e enviar link para aprovação.
REGRA PROPOSTA (se houver): ...
```
Depois da aprovação: atualizar `docs/portfolio.md` e `docs/dominios.csv`.
