# LEIA-ME: Fábrica de Sites por IA

Guia para você (humano). O Claude lê o CLAUDE.md; este arquivo é para você entender e operar.

## O que é cada arquivo
- **CLAUDE.md**: regras que o Claude segue em toda sessão (stack, design, conteúdo, QA, deploy).
- **PROMPTS.md**: 4 prompts prontos: montar a fábrica, novo cliente, alteração, revisão visual.
- **.claude/skills/novo-site/SKILL.md**: passo a passo para criar um site (comando `/novo-site`).
- **.claude/skills/qa-site/SKILL.md**: checklist de qualidade e relatório (comando `/qa-site`).
- **docs/nichos.md**: playbook de cada nicho, status normativo e vocabulário BR x PT.
- **docs/legal.md**: checklists legais BR e PT com fonte e grau de confiança.
- **docs/briefing-modelo.md**: formulário para o cliente preencher.
- **_base/**: o template (criado pelo PROMPT 1). **clientes/**: um site por cliente. **demos/**: portfólio.

## Por que fora do OneDrive
O node_modules tem dezenas de milhares de arquivos, e a Microsoft recomenda até 300 mil itens sincronizados (fato, support.microsoft.com). Na prática isso costuma dar erros EPERM/EBUSY e conflito (estimativa, há bug aberto no pnpm #7592). O caminho atual também tem espaço e acento. Backup é o GitHub, não o OneDrive. Fotos originais, contratos e aprovações ficam em OneDrive\Clientes\<nome>, separados do código.
Para conferir: no PowerShell, `Get-Item C:\Users\osmar\fabrica-sites-ia` e veja se o caminho não passa por OneDrive. Se um dia a pasta do perfil for redirecionada, mude para C:\dev\fabrica-sites-ia.

## Instalação no Windows (um comando por vez, conferindo a saída)
1. **Node 24 LTS**: baixe em nodejs.org/en/download (a LTS atual é 24.21.0; você tem 24.16.0, atualize). Confira: `node -v` e `npm -v`. O Node 20 acabou em 30/04/2026; o 24 entra em manutenção em 20/10/2026 e tem suporte até 30/04/2028 (fato, schedule.json oficial).
2. `npm config set save-exact true`
3. **Git**: `winget install --id Git.Git -e --source winget` (atualiza para 2.55.0). Confira: `git --version`.
4. **GitHub CLI**: `winget install --id GitHub.cli -e` (confira o id com `winget search GitHub.cli`). Depois `gh auth login`.
5. **Conta GitHub**: crie uma organização só da agência. Ative 2FA por app autenticador e imprima os códigos de recuperação. Repositórios privados são grátis.
6. **Conta Cloudflare**: ative 2FA e um segundo e-mail de recuperação. Hospedagem em Workers.
7. Crie a pasta: `mkdir C:\Users\osmar\fabrica-sites-ia` e copie para ela os arquivos desta fábrica.

Passos de segurança que você faz, não a IA: 2FA, cartão, e qualquer exclusão no Windows Defender (é configuração de segurança; entenda o risco antes).

## Abrir no Claude Code desktop
Abra o app, escolha "abrir pasta" e selecione C:\Users\osmar\fabrica-sites-ia. Ele carrega o CLAUDE.md sozinho. Cole o PROMPT 1 uma vez. Depois disso, para cada cliente, `/novo-site` ou o PROMPT 2.
O servidor de desenvolvimento (`npm run preview` ou `npm run dev`) roda num terminal separado aberto por você, porque no Windows ele fica em primeiro plano e a IA pode travar esperando.

## Fluxo de venda e entrega
1. Antes de vender: monte 3 demos de nichos diferentes. Coloque lado a lado com 2 templates pagos (Framer ou Wix) do mesmo nicho, em 375 e 1440 px. Mostre a 5 donos de negócio sem dizer qual é qual e anote em docs/benchmark.md. Se perder, melhore o template antes.
2. Só venda para nichos com status `verificado` ou `livre` em docs/nichos.md. Para liberar um nicho regulado, leia a norma no site do conselho e registre data, link e artigos.
3. Cliente preenche o briefing. Registre o domínio numa chamada, na conta dele, com você como contato técnico. Anote em docs/dominios.csv e crie lembrete 60 dias antes da renovação.
4. `/novo-site`, escolha a direção, aprove o hero, QA, link de preview ao cliente.
5. Aprovação por escrito, deploy de produção, tag de entrega, Search Console e Google Business Profile.
6. Manutenção: pedidos só pelo canal combinado, prazo de 2 dias úteis, agrupados num dia fixo da semana. Uma alteração = texto ou foto numa seção existente; seção nova é orçamento. Use o PROMPT 3.

No contrato: código-fonte do cliente após quitação, domínio em nome dele, conteúdo regulamentado é responsabilidade dele, o que conta como alteração. Saída de cliente: docs/saida-cliente.md (transferir repo em Settings > Transfer e refazer o Worker na conta dele). Teste isso uma vez com um demo.

Formulário: o padrão é só WhatsApp e telefone. O Web3Forms ficou fora porque preço e limite não foram confirmados (a página deu 403) e, se estourar, as mensagens se perdem sem aviso. Se um cliente exigir formulário, a opção é um Worker de formulário da agência com Turnstile e e-mail transacional, com segredos via `wrangler secret put` e teste agendado.

## Custos
| Item | Valor | Tipo |
|---|---|---|
| Cloudflare Workers (arquivos estáticos) | US$ 0 no Free (até 100 Workers); Paid mínimo US$ 5/mês | fato (developers.cloudflare.com) |
| Netlify (plano B) | Personal US$ 9/mês; Pro US$ 20 a 126/mês | fato (docs.netlify.com) |
| GitHub privados | US$ 0 | fato (github.com/pricing) |
| Astro, Tailwind, GSAP, fontes open source | R$ 0 | fato (licenças MIT e GSAP Standard) |
| Domínio .com.br | cerca de R$ 40/ano, não confirmado: confira em registro.br | estimativa |
| Domínio .pt | 11,95 € (1º ano promocional) a 32,90 €/ano sem IVA, conforme registrador | estimativa, não reverificado |
| Cloudflare Web Analytics | US$ 0, limite flexível de 10 sites por conta; peça ampliação ao suporte antes do 10º cliente | fato (developers.cloudflare.com/web-analytics/faq), não reverificado |
| E-mail Google Workspace (BR) | R$ 40,90/usuário/mês sem impostos | estimativa, não reverificado |
| Claude Code plano Team | não sei o valor do seu plano | não sei |
| Preço de venda BR | landing R$ 800 a 1.500; institucional R$ 1.500 a 3.000; mensalidade R$ 50 a 150 | estimativa sem fonte |
| Preço de venda PT | 400 a 900 € mais 20 a 40 €/mês | estimativa sem fonte |

Precifique a mensalidade supondo que você vai pagar o Workers Paid (US$ 5/mês), mais câmbio e IOF, dividido pelos clientes. Assim a margem aguenta se o plano gratuito mudar. Não prometa posição no Google. Venda prazo, design por nicho, velocidade medida e "você não mexe em nada", não "feito por IA".

## "Treinar" o agente, de forma honesta
Não existe fine-tuning aqui. O modelo não aprende sozinho entre sessões. O que melhora é o que ele lê: CLAUDE.md, docs, skills e exemplos de código bons (golden files).
Rotina:
- **A cada site**: quando corrigir algo, o Claude propõe "REGRA PROPOSTA (data)". Aceite só o que valer para outros clientes.
- **A cada semana**: leia os relatórios de QA; erros repetidos viram regra ou golden file.
- **A cada trimestre**: atualize o `_base` (Astro teve duas majors em 3 meses), teste build e Lighthouse nele, rode `scripts\atualizar-todos.ps1` e atualize os clientes em lote. Refaça o benchmark. Mantenha o Dependabot só para alertas de segurança.
- **Mensal**: `git clone --mirror` dos repositórios para um HD externo; confira renovações de domínio.
- **Teste de confiança**: nos 3 primeiros sites, anote builds quebrados, correções manuais e tempo gasto. Se passar do limite que você combinar consigo, reavalie a versão do Astro.
