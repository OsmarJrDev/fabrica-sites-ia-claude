---
name: qa-site
description: Executa o checklist de qualidade de um site de cliente (build, screenshots, Lighthouse, acessibilidade, links, formulário, SEO, legal BR/PT e conteúdo inventado) e gera o relatório. Use antes de toda entrega, após alterações e na revisão trimestral. Aceita nível "completo" (padrão) ou "rapido".
---

# Skill: qa-site

Rode dentro da pasta do cliente (ex.: `clientes\br-dentista-sorriso`). Comandos PowerShell um por vez. Nunca rode `astro dev` pelo agente: peça ao usuário para abrir `npm run preview` em terminal separado.

## Nível rápido (alterações de texto, foto, horário)
1. `npm run build` sem erro (inclui validar-conteudo e, em PT, validar-ptpt).
2. Screenshot em 375 px da página alterada.
3. Clique de teste no link wa.me e tel: (href correto, só dígitos).
4. Diff revisado: só mudou o que foi pedido.
Se a alteração mexer em layout, seção nova ou dependência, use o nível completo.

## Nível completo (entrega e revisão trimestral)

### A. Build e conteúdo
- [ ] `npm run build` (astro check && astro build) sem erro e sem warning de tipo.
- [ ] Nenhum `[PREENCHER` no dist de produção. Se houver, o site não vai para produção.
- [ ] Nenhum depoimento, número, registro, prêmio ou tempo de mercado sem `fonte` e `aprovadoPeloCliente: true`.
- [ ] Nenhum lorem, "Cliente Satisfeito", "João S.", "+500" ou número que não esteja em `site.ts`.
- [ ] Nenhuma imagem de IA representando equipe, local real ou antes e depois.

### B. Automatizado
- [ ] `npm run qa`: screenshots 320/375/768/1440 em `qa/<data>/`, zero violação axe séria ou crítica, sem rolagem horizontal, JS total na home <= 50 KB gzip (meta própria), hero <= 150 KB, JSON-LD faz parse.
- [ ] `npx lhci autorun`: Performance >= 90 (meta própria, estimativa), Acessibilidade, SEO e Boas práticas >= 95.
- [ ] Diagnóstico com Chrome DevTools MCP quando algo falhar: `resize_page`, `take_screenshot`, `lighthouse_audit`, `performance_start_trace`/`performance_stop_trace`.
- [ ] LCP <= 2,5 s, INP < 200 ms, CLS < 0,1 (metas do Google; site novo costuma ter só dados de laboratório).

### C. Visual
- [ ] Sem texto cortado nem sobreposição em 320, 375, 768 e 1440.
- [ ] CTA principal visível sem rolar em 375 px; barra fixa mobile funcionando.
- [ ] Máximo 2 famílias de fonte, auto-hospedadas; nenhuma requisição a fonts.googleapis.com.
- [ ] Nenhum padrão proibido do CLAUDE.md.
- [ ] Rubrica em sessão separada (subagente ou ecc:gan-design), que recebe só os screenshots e esta rubrica, nota 1 a 5:
  hierarquia no primeiro viewport | CTA visível em 375 | ritmo de espaçamento | consistência das fotos | assinatura visual | legibilidade.
  Entrega só com nota >= 4 em todos. Depois, revisão humana do usuário.

### D. Acessibilidade (WCAG 2.1 AA)
- [ ] Contraste >= 4,5:1 em texto normal; foco visível; navegação por teclado completa.
- [ ] Alt em imagens (vazio nas decorativas); labels em campos; `lang` correto.
- [ ] `prefers-reduced-motion` respeitado; site funciona sem View Transitions e sem JS.

### E. Links e contato
- [ ] wa.me só com dígitos e mensagem com origem; testado no celular.
- [ ] tel: correto; e-mail correto; links externos abrem.
- [ ] Rotas /whatsapp e /ligar (se existirem) redirecionam e contam.

### F. Formulário (se houver)
- [ ] Envio real recebido por e-mail; página de agradecimento; honeypot presente; Turnstile ativo.
- [ ] Link para a política junto ao formulário; saúde sem campo de sintoma.
- [ ] Monitor de envio de teste agendado (docs/infra.md).

### G. SEO
- [ ] Um H1 por página; title e description únicos; canonical absoluto; og:locale correto.
- [ ] og:image 1200x630 JPEG < 200 KB; preview testado no WhatsApp.
- [ ] JSON-LD com subtipo correto validado no Rich Results Test (manual); NAP igual ao rodapé e ao GBP; sem aggregateRating próprio.
- [ ] sitemap-index.xml; robots.txt com linha Sitemap; 404 com status 404; favicons.

### H. Legal
- [ ] BR ou PT: todos os itens de `docs/legal.md` do país marcados.
- [ ] Registros profissionais do nicho visíveis; status normativo do nicho = verificado ou livre.
- [ ] Nenhum embed, pixel ou script de terceiro sem banner de consentimento.
- [ ] PT: `validar-ptpt` passou e texto aprovado por nativo.

### I. Operação
- [ ] `.gitignore` com .env, .dev.vars, node_modules, dist; nenhum segredo no repo.
- [ ] `.nvmrc`, `engines` e NODE_VERSION alinhados em Node 24.
- [ ] Produção só pelo branch `producao`; preview testado.

## Relatório (formato)
```
## QA <slug> | nível: completo|rapido | data: DD/MM/AAAA
Resultado: APROVADO | REPROVADO
Build: OK/ERRO
Lighthouse mobile P/A/BP/SEO: __/__/__/__ (lhci)
LCP __ s | CLS __ | JS home __ KB gz | hero __ KB | og __ KB
axe: __ violações sérias
Screenshots: qa/<data>/ (320, 375, 768, 1440)
Rubrica: H_ C_ R_ F_ A_ L_
Falhas:
- [item] o que falhou -> correção feita ou pendente
Pendências [PREENCHER]:
Itens manuais para o usuário: Rich Results Test, preview WhatsApp, teste no celular, revisão nativa (PT)
REGRA PROPOSTA (se houver):
```
Salve o relatório em `qa/<data>/relatorio.md` no repositório do cliente.
