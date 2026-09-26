// FONTE UNICA DE DADOS DO CLIENTE.
// Este arquivo é o do _base (template). O cliente é FICTÍCIO, criado só para
// provar a estrutura da fábrica. Nenhum dado aqui corresponde a uma pessoa,
// empresa ou clínica real. Ao copiar _base para clientes/<slug>, todo este
// arquivo é substituído pelos dados reais aprovados pelo cliente.
import type { SiteData } from './site.schema';

export const site: SiteData = {
  demo: true,
  avisoDemo: 'SITE DE DEMONSTRAÇÃO, DADOS FICTÍCIOS',
  mercado: 'BR',
  nicho: 'Clínica médica',
  schemaOrgTipo: 'MedicalClinic',

  nap: {
    nomeComercial: 'DEMO Clínica Exemplo',
    enderecoCurto: 'Rua das Amostras, 123, Bairro Modelo, São Paulo - SP, 01000-000',
    telefone: '+55 11 0000-0000',
    whatsappDigitos: '5511000000000',
    email: 'contato@democlinicaexemplo.com.br',
  },

  horarios: [
    { dia: 'segunda', abertura: '08:00', fechamento: '18:00' },
    { dia: 'terca', abertura: '08:00', fechamento: '18:00' },
    { dia: 'quarta', abertura: '08:00', fechamento: '18:00' },
    { dia: 'quinta', abertura: '08:00', fechamento: '18:00' },
    { dia: 'sexta', abertura: '08:00', fechamento: '18:00' },
    { dia: 'sabado', abertura: '08:00', fechamento: '12:00' },
    { dia: 'domingo', abertura: null, fechamento: null },
  ],

  servicos: [
    {
      slug: 'clinica-geral',
      nome: 'Clínico geral',
      descricao: 'Consulta de rotina, check-up e encaminhamento para especialidades (DEMO).',
    },
    {
      slug: 'cardiologia',
      nome: 'Cardiologia',
      descricao: 'Avaliação cardiovascular e eletrocardiograma no local (DEMO).',
    },
    {
      slug: 'dermatologia',
      nome: 'Dermatologia',
      descricao: 'Avaliação de pele, mucosas e anexos cutâneos (DEMO).',
    },
    {
      slug: 'pediatria',
      nome: 'Pediatria',
      descricao: 'Acompanhamento de crescimento e desenvolvimento infantil (DEMO).',
    },
    {
      slug: 'checkup-executivo',
      nome: 'Check-up executivo',
      descricao: 'Bateria de exames preventivos em um único dia (DEMO).',
    },
  ],

  diferenciais: [
    {
      titulo: 'Agendamento pelo WhatsApp',
      descricao: 'Marque sua consulta em poucos minutos, sem precisar ligar (DEMO).',
    },
    {
      titulo: 'Estrutura climatizada',
      descricao: 'Salas de espera e consultórios com clima controlado (DEMO).',
    },
    {
      titulo: 'Equipe multidisciplinar',
      descricao: 'Profissionais de diferentes especialidades no mesmo endereço (DEMO).',
    },
  ],

  // Nenhum depoimento real foi aprovado para este cliente fictício.
  // O componente Depoimentos.astro oculta a seção quando o array está vazio.
  depoimentos: [],

  numeros: [
    {
      valor: '+1.000',
      legenda: 'consultas realizadas (dado fictício de demonstração)',
      fonte: 'DEMO: número inventado só para preencher o layout, sem cliente real por trás',
      aprovadoPeloCliente: true,
    },
  ],

  // Nenhuma credencial real disponível para este cliente fictício.
  credenciais: [],

  // Nenhum prêmio real disponível para este cliente fictício.
  premios: [],

  // Exemplo de FaixaEstatisticas.astro: item real (fictício, DEMO) e um
  // segundo item pendente, para mostrar como o placeholder "[PREENCHER"
  // aparece de forma visível em vez de um número inventado.
  estatisticas: [
    {
      numero: '+1.000',
      legenda: 'consultas realizadas (dado fictício de demonstração)',
      fonte: 'DEMO: número inventado só para preencher o layout, sem cliente real por trás',
      aprovadoPeloCliente: true,
    },
    {
      numero: '[PREENCHER: ano de fundação da clínica]',
      legenda: 'em atividade',
    },
  ],

  // Exemplo de AreaAtendimento.astro (bairros fictícios, DEMO).
  areasAtendimento: ['Bairro Modelo', 'Centro (DEMO)', 'Zona Sul (DEMO)'],

  // Exemplo de TabelaComparativa.astro: só um diferencial fictício, real o
  // suficiente para ilustrar o formato (nunca um diferencial genérico).
  comparativo: [
    {
      diferencial: 'Agendamento pelo WhatsApp sem precisar ligar (DEMO)',
      nos: true,
      outras: false,
      fonte: 'DEMO: exemplo fictício de comparativo, sem cliente real por trás',
      aprovadoPeloCliente: true,
    },
  ],

  // Exemplo de MarcasAtendidas.astro (marca fictícia, DEMO).
  marcasAtendidas: [{ nome: 'Marca Parceira Demo' }],

  registrosProfissionaisBR: [
    {
      tipo: 'CRM',
      numero: 'CRM-SP 000000 (fictício, DEMO)',
      responsavelTecnico: 'Dra. Exemplo da Silva (perfil fictício de demonstração)',
    },
    {
      tipo: 'RQE',
      numero: 'RQE 00000 (fictício, DEMO)',
    },
  ],

  legalBR: {
    razaoSocial: 'DEMO Clínica Exemplo Ltda. (empresa fictícia)',
    cnpj: '00.000.000/0001-00 (fictício, DEMO)',
    enderecoCompleto: 'Rua das Amostras, 123, Bairro Modelo, São Paulo - SP, 01000-000',
    canalTitularDados: 'privacidade@democlinicaexemplo.com.br (canal fictício de demonstração)',
  },

  faq: [
    {
      pergunta: 'Vocês atendem convênio?',
      resposta:
        '[PREENCHER: lista de convênios aceitos, a confirmar com o cliente real antes de publicar]',
    },
    {
      pergunta: 'Preciso de encaminhamento para marcar consulta?',
      resposta: 'Não. Você pode marcar diretamente pelo WhatsApp para a especialidade desejada (DEMO).',
    },
    {
      pergunta: 'Como remarco ou cancelo minha consulta?',
      resposta: 'Fale com a equipe pelo WhatsApp com pelo menos 24 horas de antecedência (DEMO).',
    },
    {
      pergunta: 'Vocês atendem emergência?',
      resposta:
        'Não. Em caso de emergência, procure um pronto-socorro ou ligue para o serviço de emergência local (DEMO).',
    },
  ],

  mapa: {
    imagem: 'mapa-demo.svg',
    linkGoogleMaps:
      'https://www.google.com/maps/search/?api=1&query=Rua+das+Amostras+123+Bairro+Modelo+Sao+Paulo+SP',
  },

  cores: {
    base: '#1F4E5F',
    superficie: '#F7F8F6',
    texto: '#22282B',
    // Ajustado de #8FB3A0 (sugestão de docs/nichos.md) para passar em
    // contraste AA como texto sobre `base` (ver comentário em global.css).
    destaque: '#A3C6B5',
    acento: '#E07A5F',
    linha: '#D9E1DC',
  },

  fontes: {
    titulo: 'Fraunces',
    corpo: 'Inter Tight',
  },

  seo: {
    tituloPadrao: 'DEMO Clínica Exemplo — Clínica médica em São Paulo (SITE DE DEMONSTRAÇÃO)',
    descricaoPadrao:
      'Site de demonstração da fábrica de sites por IA: clínica médica fictícia em São Paulo, com agendamento pelo WhatsApp. Todos os dados são fictícios.',
    ogImagem: 'og.jpg',
  },
};
