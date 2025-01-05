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
      "Este foi um dos meus primeiros projetos, desenvolvido com o apoio da Rocketseat. Trata-se de uma aplicação simples e eficiente para gestão financeira pessoal. A carteira armazena informações localmente, permitindo que o usuário registre entradas e saídas de valores, com descrição e data. Além disso, exibe uma listagem completa das transações realizadas, proporcionando uma visão clara e organizada das movimentações financeiras.",
    link: "https://maratona-discovery-beige.vercel.app/",
    releaseDate: "Março/2021",
    repository: "https://github.com/fvxstx/maratona-discovery",
    techs: ["HTML", "CSS", "Javascript"],
  },
  {
    imgs: ["/projects/alurakut.png", "/projects/alurakut2.png"],
    title: "Alurakut",
    description:
      "Desenvolvido em parceria com a Alura, este projeto recria o design nostálgico da antiga rede social Orkut, integrando funcionalidades modernas. A aplicação permite que o usuário faça login utilizando seu perfil do GitHub, visualize seus seguidores diretamente da plataforma e crie comunidades personalizadas. Uma combinação de design clássico com tecnologia atual, oferecendo uma experiência social interativa e conectada.",
    link: "https://alurakut-eight-pi.vercel.app/login",
    releaseDate: "Agosto/2021",
    repository: "https://github.com/fvxstx/alurakut",
    techs: ["HTML", "CSS", "Javascript", "React.JS", "Next.JS", "Node.JS"],
  },
  {
    imgs: ["/projects/aluracord.png"],
    title: "Aluracord",
    description:
      "Desenvolvido em parceria com a Alura, este projeto é um chat em tempo real que combina simplicidade e funcionalidade. Os usuários podem acessar a plataforma utilizando suas credenciais do GitHub, proporcionando uma autenticação rápida e segura. O chat permite comunicação instantânea, oferecendo uma experiência interativa e dinâmica para os participantes.",
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
      "Este foi um dos meus primeiros projetos desenvolvidos de forma independente. Trata-se de uma aplicação simples e funcional que permite aos usuários se inscreverem para receber fotos exclusivas de um renomado fotógrafo baiano. O sistema conta com um recurso de contagem regressiva (countdown) para criar expectativa e engajamento, oferecendo uma experiência envolvente e personalizada.",
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
      "Este projeto é um sistema completo de gerenciamento de vendas, desenvolvido com funcionalidades CRUD (Criar, Ler, Atualizar e Excluir). A aplicação permite realizar buscas por dados de vendedores e departamentos, exibindo os resultados de forma organizada em tabelas. É uma ferramenta eficaz para acompanhar e gerenciar informações de vendas, proporcionando uma interface clara e prática para usuários.",
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
      "Este projeto foi desenvolvido para simplificar e otimizar o compartilhamento de links. A aplicação permite encurtar URLs, tornando-as mais compactas e fáceis de compartilhar. Além disso, oferece a funcionalidade de ocultar links originais, agregando uma camada extra de privacidade e profissionalismo. Uma solução prática e eficiente para gerenciar links de forma personalizada.",
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
      "Este projeto é uma aplicação desenvolvida para facilitar a gestão e comercialização de imóveis. A plataforma permite que os usuários registrem propriedades, oferecendo a opção de disponibilizá-las para venda ou aluguel. Com uma interface intuitiva, o sistema organiza e exibe as propriedades cadastradas, proporcionando uma experiência prática e eficiente para proprietários e interessados.",
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
      "Este projeto é um aplicativo de namoro projetado para conectar pessoas de forma prática e personalizada. Os usuários podem criar suas contas, visualizar perfis com filtros ajustáveis para encontrar combinações ideais, e interagir por meio de curtidas. Além disso, a plataforma conta com um sistema de chat em tempo real, permitindo conversas diretas e imediatas, criando uma experiência interativa e envolvente.",
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
      "/projects/plataformaacao.png",
      "/projects/plataformaacao2.png",
      "/projects/plataformaacao3.png",
      "/projects/plataformaacao4.png",
      "/projects/plataformaacao5.png",
    ],
    title: "Plataforma de Ações",
    description:
      "Este foi o primeiro projeto em que atuei dentro de uma empresa, desempenhando um papel significativo no desenvolvimento. A aplicação oferece duas modalidades de acesso: administrador e usuário comum. O administrador pode cadastrar empresas e inserir seus dados, enquanto o usuário comum tem acesso a informações organizadas por ano e mês, apresentadas por meio de gráficos e tabelas interativos. Além disso, a plataforma inclui um fórum para dúvidas e comentários, promovendo a interação entre os usuários. O sistema funciona por assinatura, e minha contribuição incluiu o desenvolvimento do backend, ajustes, e a criação de telas no frontend.",
    releaseDate: "Agosto/2024",
    techs: [
      "HTML",
      "CSS",
      "Typescript",
      "API Assas",
      "React.JS",
      "Next.JS",
      "Tailwind",
      "C#",
      ".Net 8.0",
      "My Sql",
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
      "Este foi um dos primeiros projetos reais em que atuei durante minha experiência na empresa Projetil. Desenvolvemos um site robusto e dinâmico voltado para investidores, com uma ampla gama de funcionalidades. A plataforma inclui gráficos interativos, ferramentas de busca e filtros avançados para explorar opções como criptomoedas, ações, fundos de investimento, entre outros. Além disso, oferece acesso a notícias atualizadas, calendários de dividendos e muito mais, entregando aos usuários uma experiência completa e informativa para a gestão de seus investimentos.",
    link: "https://prudent-investor.com.br/",
    releaseDate: "Agosto/2024",
    techs: [
      "HTML",
      "CSS",
      "Typescript",
      "React.JS",
      "Next.JS",
      "Tailwind",
      "C#",
      ".Net 6.0",
      "Postgres SQL",
      "Azure Devops",
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
      "Este projeto foi desenvolvido para gerenciar testes de personalidade voltados ao ambiente corporativo, com foco em cibersegurança. A aplicação permite a coleta e análise de dados, gerando relatórios detalhados e dashboards interativos. Os insights são apresentados de forma segmentada por região e perfil, oferecendo uma visão estratégica e personalizada para tomada de decisão. Uma ferramenta robusta e inovadora para apoiar a segurança organizacional.",
    releaseDate: "Julho/2024",
    techs: [
      "HTML",
      "CSS",
      "Typescript",
      "React.JS",
      "Next.JS",
      "Tailwind",
      "C#",
      ".Net 8.0",
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
      "Este projeto foi desenvolvido para simplificar a gestão de vendas e compras de produtos. Com a integração do Paycoin, os usuários podem criar produtos e disponibilizá-los para venda por meio de páginas de checkout personalizadas. A plataforma oferece uma solução prática e eficiente para comerciantes gerenciarem suas transações de forma segura e organizada, otimizando o processo de venda online.",
    releaseDate: "Setembro/2024",
    techs: [
      "HTML",
      "CSS",
      "Typescript",
      "React.JS",
      "Next.JS",
      "Tailwind",
      "C#",
      ".Net 8.0",
      "Postgres SQL",
      "Azure Devops",
    ],
  },
  {
    imgs: [
      "/projects/projetil.png",
      "/projects/projetil2.png",
      "/projects/projetil3.png",
      "/projects/projetil4.png",
    ],
    title: "Projetil",
    description:
      "Este projeto foi desenvolvido para apresentar a identidade e os serviços da software house. O site conta com uma seção de notícias para atualizações e novidades do setor, um fórum interativo para troca de ideias entre usuários, uma página de contato para suporte e atendimento, e um portfólio detalhado que exibe os projetos realizados pela empresa. A plataforma oferece uma solução completa para comunicar a expertise da empresa, engajar o público e fortalecer sua presença online.",
    releaseDate: "Outubro/2024",
    link: "https://www.projetil.com/",
    techs: [
      "HTML",
      "CSS",
      "Typescript",
      "React.JS",
      "Next.JS",
      "Tailwind",
      "Azure Devops",
    ],
  },
];
