# Roteiro de saída para o cliente (entrega e comunicação)

Objetivo: padronizar o que é enviado ao cliente em cada portão do fluxo
(CLAUDE.md seção 5), pra não esquecer nenhum item nem inventar aprovação.

## 1. Depois da direção visual (portão 2)
- [ ] Mock do hero em 375px e 1440px (imagem ou link de preview).
- [ ] As 3 direções, com 3 a 5 linhas de justificativa cada.
- [ ] Pedido explícito de escolha por escrito (e-mail ou canal único do
      briefing, seção 11).

## 2. Depois do conteúdo (portão 3)
- [ ] Lista de tudo que ficou `[PREENCHER]`.
- [ ] Pedido de aprovação por escrito do conteúdo regulamentado (registros
      profissionais, preço, número, depoimento).

## 3. Na entrega (portão 6)
- [ ] Link do preview aprovado.
- [ ] Checklist de QA completo (performance, acessibilidade, SEO) com os
      números batidos.
- [ ] Instruções de domínio e e-mail (ver docs/infra.md).
- [ ] Tag `v1.0-entrega` criada no repositório.

## Modelo de mensagem de entrega
```
Assunto: Site no ar — <Nome do cliente>

Olá, <nome>. Seu site já está no ar em <domínio>.

O que foi feito:
- <resumo de 2 a 3 linhas>

Pendências (se houver):
- [PREENCHER: ...]

Qualquer ajuste, é só responder por aqui (ver PROMPT 3 de alteração).
```

## Pendências deste documento
- [PREENCHER] Definir SLA padrão de resposta a pedidos de alteração.
