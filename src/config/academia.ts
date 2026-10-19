// Único arquivo a editar para personalizar o site de cada cliente.
// Imagens: preencha "src" (ex.: "/img/hero.jpg" em /public/img). Sem src, aparece um campo neutro identificado.
// Vídeo do topo: arquivo em /public/video. Deixe "" para usar só a imagem do hero.
export interface Img { src?: string; alt: string }
export interface Item { titulo: string; texto: string }

export const academia = {
  isDemo: true, // false remove o aviso de demonstração
  nome: "Academia Modelo",
  slogan: "Constância vira resultado.",
  sloganDestaque: "resultado", // trecho do slogan exibido na cor de destaque
  subtitulo: "Musculação, aulas coletivas e acompanhamento de perto. Comece com uma aula experimental, sem compromisso.",
  // Números de impacto exibidos no topo (valores de exemplo)
  numeros: [
    { valor: "18h", rotulo: "Abertos por dia" },
    { valor: "4", rotulo: "Modalidades" },
    { valor: "1ª", rotulo: "Aula grátis" },
  ],
  // Frases curtas da faixa rolante abaixo do topo
  ticker: ["Aula experimental grátis", "Professores no salão", "Treino individual", "Sem fila nos aparelhos", "Avaliação inicial", "Sem fidelidade no mensal"],
  whatsapp: "5511999999999",
  mensagemWhatsapp: "Olá! Quero agendar uma aula experimental.",
  endereco: "Rua Exemplo, 123, Centro, Sua Cidade, UF",
  mapaEmbed: "", // URL "embed" do Google Maps
  horarios: [
    { dia: "Segunda a sexta", hora: "05h às 23h" },
    { dia: "Sábado", hora: "08h às 14h" },
    { dia: "Domingo e feriados", hora: "Fechado" },
  ],
  redes: [{ nome: "Instagram", url: "https://instagram.com/" }],
  heroVideo: "/video/hero.mp4",
  imagens: {
    hero: { src: "/img/academia-salao.jpg", alt: "Salão da academia com máquinas, pista de treino e esteiras" } as Img,
    sobre: { src: "/img/sobre-pista.jpg", alt: "Pista de treino funcional com marcações em laranja" } as Img,
  },
  diferenciais: [
    { titulo: "Acompanhamento de perto", texto: "Professores presentes no salão, corrigindo execução e ajustando a carga junto com você." },
    { titulo: "Treino montado para o seu objetivo", texto: "Avaliação inicial e ficha individual, revisada conforme a sua evolução." },
    { titulo: "Equipamentos em dia", texto: "Máquinas e pesos livres com manutenção regular e espaço para treinar sem espera." },
  ] as Item[],
  sobre: {
    titulo: "Uma academia feita para quem quer manter o ritmo.",
    texto: [
      "Aqui entra quem está começando e quem já treina há anos. O foco é o mesmo: técnica correta, progressão gradual e um ambiente em que dá vontade de voltar.",
      "Substitua este texto pela história real da academia, seus valores e o que a torna diferente na região.",
    ],
  },
  modalidades: [
    { titulo: "Musculação", texto: "Força e hipertrofia com ficha individual." },
    { titulo: "Funcional", texto: "Treino em circuito para condicionamento e mobilidade." },
    { titulo: "Aulas coletivas", texto: "Ritmo, spinning e alongamento em grupo." },
    { titulo: "Treino personalizado", texto: "Atendimento individual com horário marcado." },
  ] as Item[],
  estrutura: [
    { titulo: "Área de musculação", texto: "Máquinas guiadas e estações de força.", img: { src: "/img/estrutura-musculacao.jpg", alt: "Máquinas de musculação junto às janelas" } as Img },
    { titulo: "Funcional", texto: "Racks, saco de pancada e plataforma.", img: { src: "/img/estrutura-funcional.jpg", alt: "Racks de treino funcional e bancos" } as Img },
    { titulo: "Pesos livres", texto: "Halteres, kettlebells e anilhas.", img: { src: "/img/estrutura-pesos.jpg", alt: "Suporte de halteres e kettlebells coloridos" } as Img },
    { titulo: "Cardio", texto: "Esteiras com vista para a rua.", img: { src: "/img/estrutura-cardio.jpg", alt: "Alunos correndo nas esteiras" } as Img },
  ],
  equipe: [
    { nome: "Nome do profissional", funcao: "Coordenação, CREF 000000-G/UF", img: { alt: "Foto do profissional" } as Img },
    { nome: "Nome do profissional", funcao: "Musculação, CREF 000000-G/UF", img: { alt: "Foto do profissional" } as Img },
    { nome: "Nome do profissional", funcao: "Aulas coletivas, CREF 000000-G/UF", img: { alt: "Foto do profissional" } as Img },
  ],
  planos: [
    { nome: "Mensal", preco: "R$ 129", periodo: "por mês", itens: ["Musculação", "Avaliação inicial", "Sem fidelidade"], destaque: false },
    { nome: "Trimestral", preco: "R$ 109", periodo: "por mês", itens: ["Musculação e aulas coletivas", "Avaliação inicial", "Reavaliação a cada 3 meses"], destaque: true },
    { nome: "Anual", preco: "R$ 89", periodo: "por mês", itens: ["Tudo do trimestral", "1 treino personalizado por mês", "Congelamento de 30 dias"], destaque: false },
  ],
  // Use apenas depoimentos reais e autorizados. Os de exemplo são fictícios.
  depoimentos: [
    { texto: "Depoimento de exemplo: aqui entra a avaliação real de um aluno, com autorização.", autor: "Nome do aluno", demo: true },
    { texto: "Segundo depoimento de exemplo, para mostrar a navegação do componente.", autor: "Nome do aluno", demo: true },
  ],
  faq: [
    { titulo: "Preciso ter experiência para começar?", texto: "Não. A avaliação inicial define o treino de acordo com o seu nível." },
    { titulo: "Posso fazer uma aula experimental?", texto: "Sim. Chame no WhatsApp e agende o melhor horário." },
    { titulo: "Existe fidelidade?", texto: "Depende do plano. O mensal não tem fidelidade." },
    { titulo: "Quais formas de pagamento?", texto: "Substitua pelas formas de pagamento reais da academia." },
  ] as Item[],
};

export const wa = (msg: string = academia.mensagemWhatsapp) =>
  `https://wa.me/${academia.whatsapp}?text=${encodeURIComponent(msg)}`;
