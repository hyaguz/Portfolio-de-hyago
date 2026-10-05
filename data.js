/* =====================================================================
   DADOS DO PORTFÓLIO  —  é AQUI que você edita habilidades e projetos.
   Dica: copie um bloco { ... } existente, cole logo abaixo (com vírgula
   no final) e troque os textos. Salve o arquivo e recarregue o site.
   ===================================================================== */

window.PORTFOLIO = {

  /* ------------------------- GITHUB ------------------------- */
  github: {
    user: "hyaguz",
    profileUrl: "https://github.com/hyaguz",

    // true  = busca seus repositórios públicos na API do GitHub e mostra,
    //         numa área separada, os que NÃO estão na lista manual abaixo.
    // false = usa somente a lista manual (nenhuma requisição externa).
    // Se a API falhar, o site continua funcionando só com a lista manual.
    useApi: true,

    // Repositórios que nunca devem aparecer na área automática
    // (por exemplo, o repositório do seu perfil do GitHub).
    ignore: ["hyaguzzz", "hyaguz.github.io"],

    // Por quantos minutos guardar a resposta do GitHub no navegador
    // (evita fazer requisições demais).
    cacheMinutes: 30
  },

  /* ------------------------- FILTROS ------------------------- */
  // "id" precisa ser igual ao campo "category" dos projetos.
  filters: [
    { id: "all",    label: "Todos" },
    { id: "web",    label: "Web" },
    { id: "mobile", label: "Mobile" },
    { id: "other",  label: "Outros" }
  ],

  /* ------------------------- HABILIDADES ------------------------- */
  // "abbr" = 2 letras que aparecem no ícone do card.
  // Para adicionar: inclua { name: "Nome", abbr: "Nm" } em "items" da categoria.
  skills: [
    {
      category: "Front-End",
      items: [
        { name: "HTML",       abbr: "Ht" },
        { name: "CSS",        abbr: "Cs" },
        { name: "JavaScript", abbr: "Js" }
      ]
    },
    {
      category: "Ferramentas",
      items: [
        { name: "Git",    abbr: "Gt" },
        { name: "GitHub", abbr: "Gh" }
      ]
    },
    {
      category: "Desenvolvimento",
      items: [
        { name: "Flutter", abbr: "Fl" },
        { name: "Dart",    abbr: "Da" }
      ]
    },
    {
      category: "Outros",
      items: [
        { name: "Excel", abbr: "Xl" }
      ]
    }
  ],

  /* ------------------------- PROJETOS -------------------------
     Campos de cada projeto:
       id          identificador único, sem espaços (ex.: "meu-app")
       name        nome exibido
       category    "web" | "mobile" | "other"   (veja "filters" acima)
       status      texto curto (ex.: "Em evolução", "Concluído", "Experimento")
       summary     frase curta que aparece no card
       description texto maior que aparece no modal
       tech        lista de tecnologias (pode ser [])
       image       caminho da capa, dentro de assets/images/
       imageAlt    descrição da imagem (acessibilidade)
       repo        link do repositório no GitHub
       demo        link do site publicado ("" se ainda não existir)
       embed       true  = tenta mostrar uma prévia interativa dentro do modal
                   false = mostra só a imagem e o botão "Ver projeto"
                   (só faz sentido se "demo" estiver preenchido; nem todo
                   site permite ser exibido dentro de outra página)
     ------------------------------------------------------------ */
  projects: [
    {
      id: "dh-store",
      name: "DH-STORE",
      category: "web",
      status: "Em evolução",
      summary: "Projeto pessoal de front-end publicado no GitHub.",
      description:
        "Projeto pessoal que faz parte da minha jornada de aprendizado em desenvolvimento web. " +
        "O código está aberto no GitHub. Em breve, esta descrição será atualizada com mais detalhes sobre o que foi construído e o que aprendi.",
      tech: ["CSS"],
      image: "assets/images/dh-store.svg",
      imageAlt: "Capa provisória do projeto DH-STORE",
      repo: "https://github.com/hyaguz/DH-STORE",
      demo: "",
      embed: false
    },
    {
      id: "portfolio",
      name: "Portfolio",
      category: "web",
      status: "Em evolução",
      summary: "Meu portfólio pessoal, em constante melhoria.",
      description:
        "Repositório do meu portfólio. Ele reúne quem eu sou, minhas habilidades e meus projetos, " +
        "e é um espaço para praticar HTML, CSS e JavaScript, além de publicar meu trabalho na web.",
      tech: ["HTML"],
      image: "assets/images/portfolio.svg",
      imageAlt: "Capa provisória do projeto Portfolio",
      repo: "https://github.com/hyaguz/portfolio",
      demo: "",
      embed: false
    },
    {
      id: "cokiee-rush",
      name: "Cokiee Rush",
      category: "web",
      status: "Em evolução",
      summary: "Projeto pessoal feito para praticar desenvolvimento web.",
      description:
        "Projeto pessoal em HTML, criado como parte dos meus estudos. " +
        "O código está público no GitHub. Em breve, esta descrição será atualizada com mais detalhes.",
      tech: ["HTML"],
      image: "assets/images/cokiee-rush.svg",
      imageAlt: "Capa provisória do projeto Cokiee Rush",
      repo: "https://github.com/hyaguz/cokiee-rush",
      demo: "",
      embed: false
    },
    {
      id: "dh-store-copia",
      name: "DH-STORE (cópia)",
      category: "web",
      status: "Experimento",
      summary: "Variação do DH-STORE usada para praticar JavaScript.",
      description:
        "Repositório de estudo derivado do DH-STORE, em JavaScript. " +
        "Serve como espaço de experimentação, e não como projeto final.",
      tech: ["JavaScript"],
      image: "assets/images/dh-store-copia.svg",
      imageAlt: "Capa provisória do projeto DH-STORE (cópia)",
      repo: "https://github.com/hyaguz/dh-store-copia",
      demo: "",
      embed: false
    },
    {
      id: "dh-store-teste",
      name: "DH-STORE (teste)",
      category: "other",
      status: "Experimento",
      summary: "Repositório de testes do DH-STORE.",
      description:
        "Repositório de testes, usado para experimentar ideias antes de levá-las ao projeto principal. " +
        "Não é um projeto final.",
      tech: [],
      image: "assets/images/dh-store-teste.svg",
      imageAlt: "Capa provisória do projeto DH-STORE (teste)",
      repo: "https://github.com/hyaguz/dh-store-teste",
      demo: "",
      embed: false
    }
  ]
};
