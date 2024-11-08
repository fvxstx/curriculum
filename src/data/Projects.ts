export interface IProject {
  imgs: string[];
  title: string;
  description: string;
  link?: string;
  releaseDate: string;
  repository?: string;
  techs: string[];
}

export const allProjects: IProject[] = [
  {
    imgs: ["/projects/devfinance.png", "/projects/devfinance2.png"],
    title: "Dev.Finance$",
    description:
      "Um dos meus primeiro projeto criado com a ajuda da rocketseat. Uma carteira que apenas armazena as informações localmente. Permite adicionar valores de entrada e valores de saída com descrição e data, e mostrando a listagem de transações feitas",
    link: "https://maratona-discovery-beige.vercel.app/",
    releaseDate: "Março/2021",
    repository: "https://github.com/fvxstx/maratona-discovery",
    techs: ["HTML", "CSS", "Javascript"],
  },
  {
    imgs: ["/projects/alurakut.png", "/projects/alurakut2.png"],
    title: "Alurakut",
    description:
      "Projeto feito em parceira com a alura utilizando o design da antiga rede social Orkut. Com ele é possivel entrar com o seu usuário do Github, ver seus segudores do github e criar comunidades",
    link: "https://alurakut-eight-pi.vercel.app/login",
    releaseDate: "Agosto/2021",
    repository: "https://github.com/fvxstx/alurakut",
    techs: ["HTML", "CSS", "Javascript", "React.JS", "Next.JS", "Node.JS"],
  },
  {
    imgs: ["/projects/aluracord.png"],
    title: "Aluracord",
    description:
      "Projeto feito em parceira com a alura. um chat em tempo real que é permitido entrar com seu usuário do Github.",
    link: "https://aluracord-bay-gamma.vercel.app/",
    releaseDate: "Fevereiro/2022",
    repository: "https://github.com/fvxstx/aluracord",
    techs: [
      "HTML",
      "CSS",
      "Javascript",
      "React.JS",
      "Next.JS",
      "Node.JS",
      "Supabase",
    ],
  },
  {
    imgs: ["/projects/countdown.png", "/projects/countdown2.png"],
    title: "Countdown",
    description:
      "Um dos meus primeiros projeto feito sozinho. Um coundown simples que você pode se increver para receber fotos exclusivas de um grande fotografo baiano.",
    link: "https://countdown-zeta-nine.vercel.app/",
    releaseDate: "Julho/2022",
    repository: "https://github.com/fvxstx/Countdown",
    techs: [
      "HTML",
      "CSS",
      "SASS",
      "Javascript",
      "React.JS",
      "Next.JS",
      "Node.JS",
      "Supabase",
      "Sendgrid",
    ],
  },
  {
    imgs: ["/projects/salesweb.png"],
    title: "Sales Web",
    description:
      "Projeto de um sistema CRUD de vendas, utilizando a data de vendedores e departamento como método de busca, colocando em tabelas os resultados",
    releaseDate: "Setembro/2022",
    repository: "https://github.com/fvxstx/SalesWeb",
    techs: ["C#", ".Net", "SQL Server", "Bootstrap"],
  },
  {
    imgs: [
      "/projects/shortly.png",
      "/projects/shortly2.png",
      "/projects/shortly3.png",
    ],
    title: "Shortly",
    description:
      "Projeto feito para encurtar links de url, para que você consiga tanto ocultar seus links quanto deixa-los menor",
    link: "https://shortly-ashy.vercel.app/",
    releaseDate: "Março/2023",
    repository: "https://github.com/fvxstx/Shortly",
    techs: [
      "HTML",
      "CSS",
      "Typescript",
      "React.JS",
      "Next.JS",
      "Styled-Component",
    ],
  },
  {
    imgs: ["/projects/hspa.png", "/projects/hspa2.png", "/projects/hspa3.png"],
    title: "HSPA",
    description:
      "Projeto de uma loja para alugar e vender propriedades, você pode registar a propriedade e escolher caso deseje a venda ou o alguem do imovel adicionado",
    releaseDate: "Junho/2023",
    repository: "https://github.com/fvxstx/HSPA",
    techs: ["HTML", "CSS", "Typescript", "AngularJS", "Bootstrap"],
  },
  {
    imgs: [
      "/projects/datingapp.png",
      "/projects/datingapp2.png",
      "/projects/datingapp3.png",
      "/projects/datingapp4.png",
    ],
    title: "Dating App",
    description:
      "Projeto de um aplicativo de namoro em que você cria sua conta e consegue ver os usuários filtrados da manéira que desejar, pode curtir o usuário e mandar mensagem por um chat real",
    releaseDate: "Junho/2023",
    repository: "https://github.com/fvxstx/DatingApp",
    techs: [
      "HTML",
      "CSS",
      "Typescript",
      "AngularJS",
      "Bootstrap",
      "C#",
      ".Net",
      "SQL Server",
      "Docker",
    ],
  },
  {
    imgs: [
      "/projects/personalisec.jpeg",
      "/projects/personalisec2.jpeg",
      "/projects/personalisec3.jpeg",
      "/projects/personalisec4.jpeg",
    ],
    title: "Personalisec",
    description:
      "Projeto que gerenciar testes de personalidade corporativa em cibersegurança, com relatórios e dashboards que trazem insights segmentados por região e perfil. Atuei como fullstack com outros devs trabalhando com .Net 8.0 no Back e Next.JS no Front.",
    releaseDate: "Julho/2024",
    techs: [
      "HTML",
      "CSS",
      "Typescript",
      "React.JS",
      "Next.JS",
      "C#",
      ".Net 8.0",
      "Postgres SQL",
      "Azure Devops",
    ],
  },
  {
    imgs: [
      "/projects/prudent.jpeg",
      "/projects/prudent2.jpeg",
      "/projects/prudent3.jpeg",
      "/projects/prudent4.jpeg",
      "/projects/prudent5.jpeg",
    ],
    title: "Prudent Investor",
    description:
      "Um dos primeiros projetos reais que atuei dentro da empresa Projetil. Um site de investimentos com diversas funcinalidades de graficos, buscas, filtros. Atuei como fullstack junto com outros devs trabalhando com .Net 6.0 no Back e Next.JS no Front.",
    link: "https://prudent-investor.com.br/",
    releaseDate: "Agosto/2024",
    techs: [
      "HTML",
      "CSS",
      "Typescript",
      "React.JS",
      "Next.JS",
      "C#",
      ".Net 6.0",
      "Postgres SQL",
      "Azure Devops",
    ],
  },
  {
    imgs: [
      "/projects/paycoin.png",
      "/projects/paycoin2.png",
      "/projects/paycoin3.png",
      "/projects/paycoin4.png",
      "/projects/paycoin5.png",
    ],
    title: "Paycoin",
    description:
      "Projeto que gerencia vendas e compras de produtos, com o paycoin é possivél criar produtos para vende-los criando paginas de checkout para venda de produtos. Atuei como fullstack com outros devs trabalhando com .Net 8.0 no Back e Next.JS no Front.",
    releaseDate: "Setembro/2024",
    techs: [
      "HTML",
      "CSS",
      "Typescript",
      "React.JS",
      "Next.JS",
      "C#",
      ".Net 8.0",
      "Postgres SQL",
      "Azure Devops",
    ],
  },
];
