export interface IProject {
  imgs: string[];
  title: string;
  description: string;
  link?: string;
  releaseDate: string;
  repository: string;
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
  },
  {
    imgs: ["/projects/alurakut.png", "/projects/alurakut2.png"],
    title: "Alurakut",
    description:
      "Projeto feito em parceira com a alura utilizando o design da antiga rede social Orkut. Com ele é possivel entrar com o seu usuário do Github, ver seus segudores do github e criar comunidades",
    link: "https://alurakut-eight-pi.vercel.app/login",
    releaseDate: "Agosto/2021",
    repository: "https://github.com/fvxstx/alurakut",
  },
  {
    imgs: ["/projects/aluracord.png"],
    title: "Aluracord",
    description:
      "Projeto feito em parceira com a alura. um chat em tempo real que é permitido entrar com seu usuário do Github.",
    link: "https://aluracord-bay-gamma.vercel.app/",
    releaseDate: "Fevereiro/2022",
    repository: "https://github.com/fvxstx/aluracord",
  },
  {
    imgs: ["/projects/countdown.png", "/projects/countdown2.png"],
    title: "Countdown",
    description:
      "Um dos meus primeiros projeto feito sozinho. Um coundown simples que você pode se increver para receber fotos exclusivas de um grande fotografo baiano.",
    link: "https://countdown-zeta-nine.vercel.app/",
    releaseDate: "Julho/2022",
    repository: "https://github.com/fvxstx/alurakut",
  },
  {
    imgs: [
      "/projects/shortly.png",
      "/projects/shortly2.png",
      "/projects/shortly3.png",
    ],
    title: "Sales Web",
    description:
      "Projeto de um sistema CRUD de vendas, utilizando a data de vendedores e departamento como método de busca, colocando em tabelas os resultados",
    releaseDate: "Setembro/2022",
    repository: "https://github.com/fvxstx/SalesWeb",
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
  },
];
