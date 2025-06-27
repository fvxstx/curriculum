export interface IProject {
  imgs: string[];
  title: string;
  description: string;
  link?: string;
  releaseDate: string;
  repository?: string;
  techs: string[];
}

export interface IPagedProjects {
  projects: IProject[][];
  totalProjects: number;
}

export const projectsPaged: IPagedProjects = {
  projects: [
    [],
    [
      {
        imgs: [
          "/projects/datingapp/datingapp.png",
          "/projects/datingapp/datingapp2.png",
          "/projects/datingapp/datingapp3.png",
          "/projects/datingapp/datingapp4.png",
        ],
        title: "Dating App",
        description:
          "Desenvolvi um aplicativo de namoro focado em proporcionar conexões práticas e personalizadas. A plataforma permite que usuários criem suas contas, visualizem perfis com filtros ajustáveis para encontrar compatibilidade ideal e interajam através de 'curtidas'. Para fomentar a conexão, o aplicativo integra um sistema de chat em tempo real, facilitando conversas diretas e imediatas e garantindo uma experiência interativa e envolvente.",
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
          "/projects/plataformaacoes/plataformaacao.png",
          "/projects/plataformaacoes/plataformaacao2.png",
          "/projects/plataformaacoes/plataformaacao3.png",
          "/projects/plataformaacoes/plataformaacao4.png",
          "/projects/plataformaacoes/plataformaacao5.png",
        ],
        title: "Plataforma de Ações",
        description:
          "Desenvolvi o Prudent Investor, um site robusto e dinâmico projetado para investidores. A plataforma integra uma ampla gama de funcionalidades, incluindo gráficos interativos, ferramentas de busca e filtros avançados para explorar diversas opções de investimento, como criptomoedas, ações e fundos de investimento. Além disso, o site oferece notícias atualizadas e calendários de dividendos, entregando uma experiência completa e informativa para a gestão de investimentos dos usuários.",
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
          "/projects/prudent/prudent.jpeg",
          "/projects/prudent/prudent2.jpeg",
          "/projects/prudent/prudent3.jpeg",
          "/projects/prudent/prudent4.jpeg",
          "/projects/prudent/prudent5.jpeg",
        ],
        title: "Prudent Investor",
        description:
          "Um site robusto e dinâmico projetado para investidores. A plataforma integra uma ampla gama de funcionalidades, incluindo gráficos interativos, ferramentas de busca e filtros avançados para explorar diversas opções de investimento, como criptomoedas, ações e fundos de investimento. Além disso, o site oferece notícias atualizadas e calendários de dividendos, entregando uma experiência completa e informativa para a gestão de investimentos dos usuários.",
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
          "/projects/personalisec/personalisec.jpeg",
          "/projects/personalisec/personalisec2.jpeg",
          "/projects/personalisec/personalisec3.jpeg",
          "/projects/personalisec/personalisec4.jpeg",
        ],
        title: "Personalisec",
        description:
          "Uma aplicação especializada na gestão de testes de personalidade para o ambiente corporativo, com um foco específico em cibersegurança. A plataforma permite a coleta e análise de dados, gerando relatórios detalhados e dashboards interativos. Os insights são apresentados de forma segmentada por região e perfil, oferecendo uma visão estratégica e personalizada para a tomada de decisões. Esta é uma ferramenta robusta e inovadora que visa fortalecer a segurança organizacional.",
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
          "/projects/paycoin/paycoin.png",
          "/projects/paycoin/paycoin2.png",
          "/projects/paycoin/paycoin3.png",
          "/projects/paycoin/paycoin4.png",
          "/projects/paycoin/paycoin5.png",
        ],
        title: "Paycoin",
        description:
          "Um projeto focado em simplificar a gestão de vendas e compras. Com a integração do Paycoin, a plataforma permite que usuários criem produtos e os disponibilizem para venda através de páginas de checkout personalizadas. Esta solução prática e eficiente capacita comerciantes a gerenciar suas transações de forma segura e organizada, otimizando significativamente o processo de venda online.",
        releaseDate: "Setembro/2024",
        link: "https://www.paycoinbr.com/",
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
          "/projects/projetil/projetil.png",
          "/projects/projetil/projetil2.png",
          "/projects/projetil/projetil3.png",
          "/projects/projetil/projetil4.png",
        ],
        title: "Projetil",
        description:
          "Desenvolvi o site institucional da software house Projetil, com o objetivo de apresentar sua identidade e portfólio de serviços. A plataforma inclui uma seção de notícias para manter os usuários atualizados com as novidades do setor, e uma página de contato dedicada a suporte e atendimento. Adicionalmente, um portfólio detalhado exibe os projetos concluídos pela empresa. Esta solução abrangente comunica eficazmente a expertise da Projetil, engaja seu público e fortalece sua presença digital.",
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
      {
        imgs: [
          "/projects/bloxtrade/bloxtrade.png",
          "/projects/bloxtrade/bloxtrade2.png",
          "/projects/bloxtrade/bloxtrade3.png",
        ],
        title: "Bloxtrade",
        description:
          "Projeto desenvolvido para prover soluções de pagamento em USD com foco em simplicidade e segurança. A aplicação permite a realização de transações utilizando USDT (TRC20), assegurando eficiência e confiabilidade. Adicionalmente, a plataforma inclui um painel administrativo completo para controle e gestão de clientes, carteiras digitais e processamento de pagamentos. É uma ferramenta robusta para transações seguras e gestão financeira eficaz.",
        releaseDate: "Dezembro/2024",
        link: "https://www.bloxtrade.com.br/",
        techs: [
          "HTML",
          "CSS",
          "Typescript",
          "React.JS",
          "Next.JS",
          "Tailwind",
          "Azure Devops",
          "C#",
          ".Net 8.0",
          "Postgres SQL",
          "Integrações Bancárias",
          "Troca de idiómas dinâmica",
        ],
      },
      {
        imgs: [
          "/projects/alpinistas/alpinistas.png",
          "/projects/alpinistas/alpinistas2.png",
          "/projects/alpinistas/alpinistas3.png",
        ],
        title: "Alpinistas",
        description:
          "Este projeto é um software de cibersegurança abrangente, desenvolvido para proteger empresas contra ameaças digitais, acessos indevidos e vazamento de dados. A aplicação oferece monitoramento e identificação de riscos em tempo real, garantindo segurança contínua, conformidade regulatória e controle total sobre a infraestrutura de rede. É uma solução ideal para organizações que gerenciam dados sensíveis e exigem proteção ininterrupta, promovendo maior confiança e reduzindo vulnerabilidades.",
        link: "https://alpinistas.io/",
        releaseDate: "Janeiro/2025",
        techs: [
          "HTML",
          "CSS",
          "Typescript",
          "React.JS",
          "Next.JS",
          "Tailwind",
          "Azure Devops",
          "C#",
          ".Net 8.0",
          "Postgres SQL",
          "Integrações de Email",
          "Integrações de API Externas",
        ],
      },
      {
        imgs: [
          "/projects/lizeloca/lizeloca.png",
          "/projects/lizeloca/lizeloca2.png",
          "/projects/lizeloca/lizeloca3.png",
        ],
        title: "LizeLoca",
        description:
          "Este projeto é uma plataforma de gestão desenvolvida para otimizar o gerenciamento de aluguel de espaços por hora. A aplicação permite o controle simplificado de salas, reservas e pagamentos, além de facilitar a comunicação entre administradores, clientes e usuários finais (como alunos e professores). Com foco na eficiência, a ferramenta oferece funcionalidades robustas para organizar e exibir as disponibilidades de um espaço versátil e equipado, garantindo uma experiência prática e eficaz para a gestão de negócios de locação.",
        link: "https://lizeloca.com.br/",
        releaseDate: "Fevereiro/2025",
        techs: [
          "HTML",
          "CSS",
          "Typescript",
          "React.JS",
          "Next.JS",
          "Tailwind",
          "Azure Devops",
          "C#",
          ".Net 8.0",
          "Postgres SQL",
          "Integrações de Email",
        ],
      },
      {
        imgs: [
          "/projects/modulopro/modulopro.png",
          "/projects/modulopro/modulopro2.png",
          "/projects/modulopro/modulopro3.png",
        ],
        title: "Modulo Pro",
        description:
          "Este projeto é uma aplicação revolucionária para diagnósticos de ECUs (Unidades de Controle Eletrônico), desenvolvida para o mercado de reparo automotivo. O Módulo Pro visa otimizar o trabalho de reparadores de placas eletrônicas, oferecendo diagnósticos rápidos e precisos com uma visualização 3D intuitiva. O software permite a visualização segura de esquemas elétricos, destacando interativamente trilhas e componentes, além de contar com busca avançada por filtros e a geração de relatórios em PDF. A solução garante maior precisão, reduz erros e aumenta a eficiência nos reparos.",
        releaseDate: "Abril/2025",
        techs: [
          "HTML",
          "CSS",
          "Typescript",
          "React.JS",
          "Next.JS",
          "Tailwind",
          "Azure Devops",
          "C#",
          ".Net 8.0",
          "Postgres SQL",
          "Integrações de Email",
          "Integrações Externas",
          "Altium",
          "Aplicação Web",
          "Electron JS",
        ],
      },
    ],
    [
      {
        imgs: [
          "/projects/devFinance/devfinance.png",
          "/projects/devFinance/devfinance2.png",
        ],
        title: "Dev.Finance$",
        description:
          "Desenvolvido como um dos meus primeiros projetos significativos, com o suporte da Rocketseat, o Dev.Finance$ é uma aplicação de gestão financeira pessoal focada na simplicidade e eficiência. A solução permite o registro detalhado de entradas e saídas de valores, incluindo descrição e data da transação, com armazenamento local dos dados para conveniência do usuário. O sistema oferece uma listagem completa e organizada das movimentações financeiras, proporcionando uma visão clara e controlada da saúde financeira.",
        link: "https://maratona-discovery-beige.vercel.app/",
        releaseDate: "Março/2021",
        repository: "https://github.com/fvxstx/maratona-discovery",
        techs: ["HTML", "CSS", "Javascript"],
      },
      {
        imgs: [
          "/projects/alurakut/alurakut.png",
          "/projects/alurakut/alurakut2.png",
        ],
        title: "Alurakut",
        description:
          "Este projeto, desenvolvido em colaboração com a Alura, é uma recriação da icônica rede social Orkut, combinando seu design nostálgico com funcionalidades modernas. A aplicação permite o login direto via perfil do GitHub, facilitando o acesso e a integração com a comunidade de desenvolvedores. Usuários podem visualizar seus seguidores do GitHub na plataforma e criar comunidades personalizadas, proporcionando uma experiência social interativa que une o charme do passado com a tecnologia atual.",
        link: "https://alurakut-eight-pi.vercel.app/login",
        releaseDate: "Agosto/2021",
        repository: "https://github.com/fvxstx/alurakut",
        techs: ["HTML", "CSS", "Javascript", "React.JS", "Next.JS", "Node.JS"],
      },
      {
        imgs: ["/projects/aluracord/aluracord.png"],
        title: "Aluracord",
        description:
          "Em colaboração com a Alura, desenvolvi o Aluracord, uma aplicação de chat em tempo real que prioriza a simplicidade e a eficiência. A plataforma oferece autenticação rápida e segura via credenciais do GitHub, permitindo que os usuários acessem e interajam sem atritos. Este projeto proporciona uma experiência de comunicação instantânea, interativa e dinâmica para todos os participantes.",
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
        imgs: [
          "/projects/countdown/countdown.png",
          "/projects/countdown/countdown2.png",
        ],
        title: "Countdown",
        description:
          "Desenvolvido de forma independente, o Countdown é uma aplicação otimizada para engajamento e funcionalidade, criada para um renomado fotógrafo baiano. O sistema permite aos usuários se inscreverem para receber fotos exclusivas, enquanto um recurso de contagem regressiva gera expectativa. Este projeto entregou uma experiência interativa e personalizada, demonstrando minha capacidade de desenvolver soluções eficazes desde as fases iniciais.",
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
        imgs: ["/projects/salesweb/salesweb.png"],
        title: "Sales Web",
        description:
          "O Sales Web é um sistema de gerenciamento de vendas abrangente, construído com funcionalidades CRUD (Criar, Ler, Atualizar e Excluir). A aplicação facilita a busca por dados de vendedores e departamentos, apresentando os resultados de forma clara e organizada em tabelas. Esta ferramenta se destaca como uma solução eficaz para o acompanhamento e gestão de informações de vendas, oferecendo uma interface intuitiva e prática para os usuários.",
        releaseDate: "Setembro/2022",
        repository: "https://github.com/fvxstx/SalesWeb",
        techs: ["C#", ".Net", "SQL Server", "Bootstrap"],
      },
      {
        imgs: [
          "/projects/shortly/shortly.png",
          "/projects/shortly/shortly2.png",
          "/projects/shortly/shortly3.png",
        ],
        title: "Shortly",
        description:
          "Shortly é um projeto que desenvolvi para otimizar e simplificar o compartilhamento de links. A aplicação oferece a capacidade de encurtar URLs, tornando-as mais concisas e fáceis de usar. Adicionalmente, implementei a funcionalidade de ocultar links originais, agregando privacidade e um aspecto mais profissional à gestão de URLs. É uma solução prática e eficiente para a personalização e gerenciamento de links.",
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
        imgs: [
          "/projects/hspa/hspa.png",
          "/projects/hspa/hspa2.png",
          "/projects/hspa/hspa3.png",
        ],
        title: "HSPA",
        description:
          "HSPA é uma aplicação que desenvolvi para otimizar a gestão e comercialização de imóveis. A plataforma capacita os usuários a cadastrar propriedades, com a flexibilidade de indicá-las para venda ou aluguel. Com uma interface intuitiva, o sistema organiza e exibe as propriedades listadas, oferecendo uma experiência eficiente e prática tanto para proprietários quanto para potenciais interessados.",
        releaseDate: "Junho/2023",
        repository: "https://github.com/fvxstx/HSPA",
        techs: ["HTML", "CSS", "Typescript", "AngularJS", "Bootstrap"],
      },
    ],
  ],
  totalProjects: 14,
};
