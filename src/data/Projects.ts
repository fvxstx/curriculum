export interface IProject {
  imgs: string[];
  title: string;
  description: string;
  link: string;
  releaseDate: string;
  repository: string;
}

export const allProjects: IProject[] = [
  {
    imgs: ["/projects/devfinance.png", "/projects/devfinance2.png"],
    title: "Dev.Finance$",
    description:
      "Meu primeiro projeto criado com a ajuda da rocketseat. Uma carteira que apenas armazena as informações localmente. Permite adicionar valores de entrada e valores de saída com descrição e data, e mostrando a listagem de transações feitas",
    link: "https://maratona-discovery-beige.vercel.app/",
    releaseDate: "Agosto/2021",
    repository: "https://github.com/fvxstx/maratona-discovery",
  },
];
