# Checklist legal por país

**Aviso: este documento é um modelo de trabalho, não parecer jurídico. Não substitui advogado. Valide os modelos de política e rodapé com um advogado de cada país antes de escalar as vendas.** A maior parte das normas abaixo não foi reverificada na pesquisa. Cada item diz o grau de confiança. Confira na fonte primária antes de afirmar ao cliente.

No contrato: conteúdo regulamentado (textos, números de registro, promessas) é responsabilidade do cliente, que aprova por escrito antes da publicação.

## Brasil
| # | O que aparece no site | Fonte | Status |
|---|---|---|---|
| 1 | Política de Privacidade (controlador, dados, finalidade, base legal, prazo de guarda, direitos) com link no rodapé e junto ao formulário | LGPD, Lei 13.709/2018, planalto.gov.br | fato, não reverificado |
| 2 | Canal de comunicação com o titular (e-mail ou formulário) citado na política. Pequeno porte não precisa de encarregado | Resolução CD/ANPD 2/2022, art. 11, gov.br/anpd | confirmado |
| 3 | Consultório pequeno com dado de saúde não perde automaticamente o regime simplificado: o art. 4 exige um critério geral mais um específico. Mesmo assim, formulário sem sintomas | Resolução CD/ANPD 2/2022, arts. 3 e 4 | confirmado (conferir texto antes de afirmar) |
| 4 | Texto curto no formulário com finalidade e link para a política. Consentimento separado só se houver marketing | interpretação | estimativa |
| 5 | Banner de cookies com aceitar e rejeitar só se houver GA4, Meta Pixel ou embeds de terceiros | Guia Orientativo de Cookies ANPD, out/2022 (orientação, não vinculante) | fato |
| 6 | Razão social, CNPJ e endereço no rodapé | prática recomendada; Decreto 7.962/2013 exige só para comércio eletrônico | estimativa |
| 7 | Registros do nicho: CRM e RQE, diretor técnico (médicos); CRO e responsável técnico (dentistas); OAB (advogados); CRECI-J (imobiliárias); CRP, CRN, CREFITO, CRC, CREF, CAU, CRMV conforme o caso | normas dos conselhos | não reverificado, confirmar no conselho |
| 8 | Acessibilidade WCAG 2.1 AA (alt, contraste, teclado, labels) | LBI, Lei 13.146/2015, art. 63 | fato |
| 9 | Fotos de pessoas só com autorização; pacientes com termo específico | Código Civil art. 20; CF art. 5, X | fato |
| 10 | Imagem de IA só ilustrativa, nunca "nossa equipe" nem antes e depois | publicidade enganosa e normas dos conselhos | estimativa |
| 11 | Página de política acessível sem JS e sem cookies | boa prática | estimativa |
| 12 | Se usar formulário de terceiro fora do país: citar transferência internacional na política | Resolução CD/ANPD 19/2024 | não verificado |

## Portugal
| # | O que aparece no site | Fonte | Status |
|---|---|---|---|
| 1 | Identificação do prestador: denominação, morada, e-mail, registo comercial, NIF e, em profissão regulamentada, ordem e título | DL 7/2004, art. 10 | não confirmado na redação |
| 2 | Link ou selo do Livro de Reclamações Eletrónico (livroreclamacoes.pt) em destaque no rodapé de todas as páginas | DL 156/2005 alterado pelo DL 74/2017 | confirmado como obrigação; conferir artigo |
| 3 | Nome e site da entidade RAL | Lei 144/2015, art. 18, redação DL 102/2017 | não reverificado |
| 4 | Política de Privacidade e Cookies: responsável e contactos, finalidades, fundamento, prazos, direitos, direito de reclamar à CNPD | RGPD arts. 13 e 14; Lei 58/2019 | fato |
| 5 | Consentimento prévio para tudo que não seja estritamente necessário; banner com aceitar e rejeitar em igual destaque; nada de GA4 ou pixel antes. "Sem cookies" não garante dispensa | Lei 41/2004, art. 5, alterada pela Lei 46/2012; EDPB Diretrizes 2/2023 | fato |
| 6 | Saúde: registo ERS, licença de funcionamento e cédula profissional | ERS, FAQ de publicidade em saúde | não reverificado |
| 7 | Mediação imobiliária: licença AMI no cabeçalho ou rodapé e nos anúncios | Lei 15/2013 | não reverificado |
| 8 | Fontes auto-hospedadas, mapa por imagem estática, vídeo só no clique | redução de transferência a terceiros | estimativa |
| 9 | WCAG 2.1 AA. EAA/DL 82/2022 isenta microempresas de serviços e provavelmente não abrange site sem venda | DL 82/2022; inr.pt | isenção fato; âmbito estimativa |
| 10 | Direito de imagem: consentimento do retratado | Código Civil art. 79 | fato |
| 11 | Chatbot avisa que é IA; nada de imagem realista de pessoas ou locais que não existem | AI Act, Regulamento UE 2024/1689, art. 50 (aplicável desde 02/08/2026) | não reverificado |
| 12 | Domínio .pt: titular confirma e-mail e telefone | DL 125/2025; regras DNS.pt desde 01/07/2026 | não reverificado |

## Modelos
- `RodapeBR.astro` e `RodapePT.astro` leem de `site.ts` e escondem nada: campo obrigatório vazio faz o build falhar.
- Políticas de privacidade: modelo por país em `_base/src/pages/politica-de-privacidade.astro`, com lacunas `[PREENCHER]` (controlador, finalidades, prazos, canal). Revisar para cada cliente.

## Perguntas em aberto (não sei)
- Normas de publicidade vigentes do CFP, CFN, COFFITO, estética e das ordens portuguesas.
- Posição atual da CNPD sobre analytics sem cookies.
- Se a ANPD aceita legítimo interesse para métricas agregadas sem consentimento.
