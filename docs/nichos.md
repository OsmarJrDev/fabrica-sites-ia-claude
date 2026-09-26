# Playbook de nichos

Aviso: o playbook é ponto de partida. Cada cliente recebe 3 direções próprias, com cores da identidade dele. Não repetir hero, fonte de título ou acento de cliente do mesmo nicho na mesma cidade (ver docs/portfolio.md).

Nota de contraste (25/09/2026): toda cor de "direção de partida" abaixo é só ponto de partida visual, não vem validada em contraste. Sempre que uma cor de acento for usada como texto sobre outra cor de fundo (não só como detalhe pequeno), rode uma checagem de contraste AA antes de aprovar a direção visual, e documente o ajuste se precisar escurecer ou clarear o tom. Exemplo real: a sálvia #8FB3A0 da Clínica médica abaixo não passa como texto sobre o azul petróleo #1F4E5F (contraste ~3,96:1); o ajuste usado no _base foi #A3C6B5 (~4,9:1).

## Status normativo (leia antes de vender)
Cada nicho tem um `status_normativo`:
- `livre`: sem conselho profissional com regra de publicidade conhecida. Pode vender.
- `pendente`: há norma, mas o usuário ainda não leu na fonte. A skill novo-site recusa.
- `verificado em DD/MM/AAAA, link, artigos`: liberado. Resuma em "obrigatório" e "proibido".
Nenhuma norma abaixo foi reverificada na pesquisa. Os números citados são pistas para buscar a fonte, não fatos confirmados. Isso não substitui advogado.

## Integrações comuns
wa.me com mensagem e origem, tel:, mapa como imagem estática com link, links externos (sem embed), barra fixa mobile.

---

## Clínica médica
- status_normativo: pendente (BR: Resolução CFM 2.336/2023, conferir em cfm.org.br; PT: ERS, conferir em ers.pt)
- Mercado: ambos | Objetivo: agendamento e confiança | schema.org: MedicalClinic
- Seções: Hero com especialidade e cidade; Especialidades; Corpo clínico com registro; Estrutura; Convênios (BR) ou acordos e seguros (PT); FAQ visível; Localização e horários; Rodapé legal.
- CTA: "Agendar consulta" (BR) / "Marcar consulta" (PT) pelo WhatsApp.
- Integrações: wa.me, tel:, mapa estático, Doctoralia (link).
- Direção de partida: azul petróleo #1F4E5F, sálvia #8FB3A0, papel #F7F8F6, grafite #22282B, coral #E07A5F só no CTA. Fraunces + Inter Tight. Fotos reais, luz natural.
- Regras: BR nome, CRM e RQE ao anunciar especialidade e diretor técnico (a conferir). PT registo ERS, licença e cédula (a conferir). Sem promessa de resultado, sem antes e depois por IA, formulário sem sintomas.

## Dentista
- status_normativo: pendente (BR: CFO-196/2019 e Código de Ética Odontológica; PT: Ordem dos Médicos Dentistas e ERS)
- Mercado: ambos | Objetivo: agendar avaliação | schema.org: Dentist
- Seções: Hero com tratamento principal; Tratamentos; Dentista responsável com CRO; Tecnologia e estrutura; Depoimentos autorizados; Convênios; Localização; Rodapé legal.
- CTA: "Agendar avaliação pelo WhatsApp" (PT: "Marcar avaliação").
- Integrações: wa.me, tel:, Doctoralia, mapa estático.
- Direção de partida: menta escuro #2E6B5E, gelo #EEF4F2, branco #FFFFFF, carvão #1D2322, amarelo manteiga #F2C94C. Manrope com pesos contrastantes, ou Sora + Manrope.
- Regras: nome e CRO, inscrição da clínica e responsável técnico (a conferir). Antes e depois só com termo de consentimento e se a norma permitir. Foto de paciente só com consentimento específico.

## Psicólogo
- status_normativo: pendente (BR: CFP, resolução vigente não identificada; PT: Ordem dos Psicólogos)
- Mercado: ambos | Objetivo: primeiro contato discreto | schema.org: MedicalBusiness (subtipo Psychologist não verificado)
- Seções: Hero acolhedor com abordagem; Como funciona a terapia; Sobre o profissional com CRP ou cédula; Presencial e online; FAQ; Contato.
- CTA: "Conversar sobre uma primeira sessão".
- Integrações: wa.me, Cal.com ou página de agendamento do Google Agenda (link).
- Direção de partida: lavanda acinzentada #8C86A8, areia fria #ECE9E4, ameixa #3E3450, oliva claro #A9B38A. Newsreader + Karla. Ilustração abstrata, nada de pessoas chorando.
- Regras: registro visível, sem promessa de resultado, formulário mínimo sem relato clínico.

## Advocacia
- status_normativo: pendente (BR: Provimento 205/2021 CFOAB e Código de Ética art. 40, conferir em oab.org.br; PT: Ordem dos Advogados)
- Mercado: ambos | Objetivo: autoridade e lead qualificado | schema.org: LegalService (Attorney)
- Seções: Hero sóbrio com áreas; Áreas de atuação; Sócios com OAB ou cédula; Como funciona o atendimento; Artigos informativos; Contato.
- CTA: "Agendar uma reunião".
- Integrações: Cal.com ou Calendly, tel:, e-mail, wa.me.
- Direção de partida: verde garrafa #1E3B34, osso #F3F1EC, tinta #151515, latão #A8834A em filetes. Cormorant Garamond + IBM Plex Sans. Layout de revista.
- Regras: caráter informativo, nome e inscrição, sem promessa de resultado, captação ou ostentação, sem preço, sem depoimento sobre causas.

## Contabilidade
- status_normativo: pendente (BR: CRC; PT: Ordem dos Contabilistas Certificados)
- Mercado: ambos | Objetivo: pedido de orçamento | schema.org: AccountingService
- Seções: Hero com público (MEI, PME); Serviços; Como trocar de contador; Planos "a partir de" (só se a norma permitir); Depoimentos de empresas; Contato.
- CTA: "Pedir orçamento".
- Integrações: wa.me, Cal.com, tel:, e-mail.
- Direção de partida: azul tinta #23395B, verde planilha #3F7D58, papel #F5F6F2, marca-texto #F4D35E. Space Grotesk + Source Sans 3, números tabulares.
- Regras: registro CRC ou OCC visível. Preço público depende de conferência na norma.

## Salão de beleza e estética
- status_normativo: livre para salão; pendente para estética com procedimento (possível conselho de saúde, ex.: CFBM, não verificado)
- Mercado: ambos | Objetivo: reservas e portfólio | schema.org: BeautySalon
- Seções: Hero com trabalho real; Serviços "a partir de"; Galeria; Equipe; Avaliações; Horários e localização.
- CTA: "Agendar horário" (BR) / "Marcar" (PT).
- Integrações: Trinks ou Booksy (BR), Fresha ou Booksy (PT), Instagram por link, wa.me.
- Direção de partida: rosa queimado #C9837A, vinho #5B2333, pérola #F6F1EE, preto quente #1C1717. Playfair Display SC só em títulos grandes + DM Sans.
- Regras: antes e depois só com autorização da cliente.

## Barbearia
- status_normativo: livre
- Mercado: ambos | Objetivo: agendamento rápido | schema.org: HairSalon (BarberShop não verificado)
- Seções: Hero com foto forte; Cortes e preços; Barbeiros; Galeria; Horários; Localização.
- CTA: "Marcar meu corte".
- Integrações: Booksy ou Trinks, wa.me, mapa estático.
- Direção de partida: tabaco #6B4A2F, verde militar #3C4A3A, papel pardo #E8DFD0, preto #111111, laranja sinal #E4572E. Anton ou Bebas Neue + Work Sans. "Tu" aceitável em PT para marca jovem.
- Regras: direito de imagem dos clientes nas fotos.

## Restaurante e café
- status_normativo: livre (PT: alergénios na ementa, não verificado)
- Mercado: ambos | Objetivo: reservas, pedidos externos e visita | schema.org: Restaurant (servesCuisine e menu)
- Seções: Hero com prato real; Pratos em destaque; Cardápio (BR) / Menu ou ementa (PT) em HTML; Horários; Localização; Eventos.
- CTA: "Reservar mesa" / "Pedir no iFood" (BR) / "Encomendar na Glovo ou Uber Eats" (PT).
- Integrações: iFood (BR), TheFork, Glovo, Uber Eats (PT), wa.me, mapa estático. Sem carrinho.
- Direção de partida: tomate #C8412B, azeitona #5E6B3A, farinha #F4EEE3, carvão #231F1C. Recoleta ou Fraunces + Figtree. Grão sutil, fotos quentes.
- Cardápio que muda muito: considerar Pages CMS editando só JSON.

## Academia e personal trainer
- status_normativo: pendente (BR: CREF, norma não verificada)
- Mercado: ambos | Objetivo: aula experimental | schema.org: ExerciseGym
- Seções: Hero com energia; Modalidades; Grade de horários; Planos; Estrutura; Depoimentos; Localização.
- CTA: "Agende sua aula experimental" (só usar "grátis" se o cliente oferecer de fato). PT: "Marque a sua aula".
- Integrações: wa.me, Instagram por link.
- Direção de partida: preto #0E0E0E, lima #C6F432 só em CTA e números, concreto #9A9A96, branco #FAFAFA. Archivo Black + Archivo. Em PT: "ginásio".
- Regras: sem promessa de perda de peso garantida.

## Imobiliária e corretor
- status_normativo: pendente (BR: Lei 6.530/1978 e COFECI, CRECI-J; PT: Lei 15/2013, licença AMI do IMPIC)
- Mercado: ambos | Objetivo: lead de compra, venda ou avaliação | schema.org: RealEstateAgent
- Seções: Hero com bairros; Imóveis em destaque (links para portal ou CRM); Avaliar meu imóvel; Serviços; Equipe; Contato.
- CTA: "Avaliar meu imóvel".
- Integrações: wa.me, links para portais, tel:.
- Direção de partida: ardósia #3A4A5C, terra clara #D9C7B0, off-white #F8F7F4, grafite #202326, musgo #5C7A4E. Instrument Serif + Inter Tight.
- Regras: número do CRECI ou AMI no cabeçalho ou rodapé e em cada anúncio.

## Oficina mecânica
- status_normativo: livre (orçamento prévio ao consumidor, norma não verificada)
- Mercado: ambos | Objetivo: pedido de orçamento | schema.org: AutoRepair
- Seções: Hero com serviços; Serviços; Marcas atendidas; Garantia (só a real); Horários; Mapa.
- CTA: "Pedir orçamento no WhatsApp".
- Integrações: wa.me, tel:, mapa estático.
- Direção de partida: azul macacão #1D3557, amarelo segurança #F2B705, aço #C9CDD2, preto óleo #141414. Barlow Condensed + Barlow.

## Climatização e Ar Condicionado
- status_normativo: livre, com ressalva a confirmar: a instalação e manutenção de sistemas de climatização com gases fluorados costuma exigir certificação técnica do instalador (ligada ao Regulamento (UE) 517/2014 sobre gases fluorados com efeito de estufa e à regulamentação nacional de execução). Isso é uma exigência profissional/técnica de quem instala, não uma regra de publicidade do site em si. Fonte exata não verificada nesta pesquisa: marcar como "a confirmar" antes de anunciar qualquer certificação específica do técnico.
- Mercado: ambos (PT e BR) | Objetivo: gerar mensagem no WhatsApp e ligação | schema.org: HVACBusiness (subtipo de HomeAndConstructionBusiness)
- Seções: Hero com serviço e zona de atuação; Serviços (tipicamente instalação e manutenção/limpeza, mas confirmar lista exata com o cliente antes de publicar); Sobre o técnico responsável; Diferenciais reais (evitar diferenciais genéricos inventados; usar só o que for confirmável, ex.: atendimento direto do técnico, ferramentas profissionais, conteúdo educativo próprio); FAQ aproveitando o tom educativo comum ao setor (mitos sobre ar condicionado e saúde, dicas de manutenção, riscos da falta de manutenção); Contato com mapa estático, telefone e horários.
- CTA: "Pedir orçamento pelo WhatsApp" (PT: sem pronome, ex. "Pedir orçamento pelo WhatsApp"; BR: "Solicitar orçamento pelo WhatsApp").
- Integrações: wa.me, tel:, mapa estático com link, Instagram por link.
- Direção de partida (autoral, pensada para o setor): azul-petróleo profundo #123C44 (sombra e frescor), cal quente #F4EFE4 (parede caiada, luz do Algarve/litoral), terracota queimada #A83E22 (telha de barro, usado no CTA com texto claro por contraste AA), verde-água claro #CFE3DC (azulejo, usado como texto sobre o azul-petróleo), linha em areia #D8CBB3. Tipografia: Space Grotesk (títulos, traço técnico e preciso) + Instrument Sans (corpo, neutro e legível). Elemento-assinatura: uma grelha de lâminas horizontais (referência a persianas/grelhas de ventilação reais da arquitetura da região), nunca ícone de floco de neve ou sol genérico, nunca gradiente.
- Regras: sem promessa de eficiência energética ou economia não comprovada; sem garantir resolução de qualquer avaria; certificação de gases fluorados do instalador só aparece no site se o cliente confirmar o número/registo real (ver ressalva de status_normativo acima).

## Arquiteto e design de interiores
- status_normativo: pendente (BR: CAU; PT: Ordem dos Arquitectos)
- Mercado: ambos | Objetivo: reunião de projeto | schema.org: ProfessionalService (ou HomeAndConstructionBusiness)
- Seções: Hero com projeto em tela cheia; Portfólio grande; Processo; Prêmios e publicações (só reais, com fonte); Sobre; Contato.
- CTA: "Agendar reunião".
- Integrações: Cal.com, e-mail, Instagram por link.
- Direção de partida: gesso #F2F0EB, preto #0F0F0F, pedra #8E8A83, cobalto #2743C9. Schibsted Grotesk + Instrument Serif. Grid assimétrico.
- Regras: crédito do fotógrafo nas imagens.

## Pet shop e veterinário
- status_normativo: livre para pet shop sem clínica; pendente para veterinário (BR: CRMV; PT: Ordem dos Médicos Veterinários)
- Mercado: ambos | Objetivo: consulta ou banho e tosa | schema.org: VeterinaryCare ou PetStore
- Seções: Hero com animais reais; Serviços; Equipe com registro; Estrutura; Depoimentos; Localização.
- CTA: "Agendar banho ou consulta" (PT: "Marcar").
- Integrações: wa.me, tel:, mapa estático.
- Direção de partida: verde folha #3D8B5A, pêssego #F4B393, creme frio #F7F5EF, chocolate #3B2A20. Bricolage Grotesque + Nunito Sans.

---

## Vocabulário pt-BR x pt-PT
| pt-BR | pt-PT |
|---|---|
| celular | telemóvel |
| endereço | morada |
| CEP (00000-000) | código postal (0000-000) |
| CNPJ / CPF | NIF (9 dígitos) |
| agendar | marcar |
| agendamento | marcação |
| cardápio | menu ou ementa |
| academia | ginásio |
| time / equipe | equipa |
| contato | contacto |
| Fale conosco | Contacte-nos |
| ônibus | autocarro |
| estacionamento | parque de estacionamento |
| convênio | acordo ou seguro de saúde |
| registro | registo |
| prêmio | prémio |
| orçamento | orçamento (pedir orçamento) |
| você agenda sua consulta | marque a sua consulta |
| tela | ecrã |
| arquivo (PDF) | ficheiro |
| cadastro | registo ou inscrição |
| café da manhã | pequeno-almoço |
| banheiro | casa de banho |
| +55 (11) 91234-5678 | +351 912 345 678 |
| política de privacidade | política de privacidade e cookies |
| ótimo | ótimo (grafia pós-Acordo) |
| personal trainer | personal trainer ou treinador pessoal |
| horário de funcionamento | horário de funcionamento |

Formato wa.me: só dígitos, sem +, espaço ou traço (ex.: https://wa.me/351912345678).

## Termos proibidos em sites PT (validar-ptpt.mjs faz o build falhar)
celular, contato, cadastro, tela, time (no sentido de equipe), equipe, ônibus, cardápio, academia, banheiro, "Fale conosco", gerúndio progressivo ("estamos atendendo", "estamos esperando"), "você" dirigido ao leitor.
Tratamento PT: 3ª pessoa sem pronome e artigo antes do possessivo ("a sua marcação"). "Tu" só para marcas jovens. Tom mais sóbrio em PT é hipótese: testar com os primeiros clientes. Revisão final por nativo.
