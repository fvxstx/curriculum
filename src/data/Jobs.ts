export interface IJob {
  period: string;
  company: string;
  job: string;
  description: string[];
}

export const jobs: IJob[] = [
  {
    period: "07/2024 - Atual",
    company: "Projetil",
    job: "Desenvolvedor Fullstack - Junior",
    description: [
      "• Desenvolvimento Backend: Implementar e manter APIs e serviços, desenvolver APIs RESTful, serviços web e lógica de negócios utilizando .NET C#",
      "• Desenvolvimento Frontend: Criar e otimizar interfaces de usuário dinâmicas e responsivas, construir componentes reutilizáveis e gerenciar estados em Next.js.",
      "• Banco de Dados: Interagir com bancos de dados, realizar consultas e operações CRUD.",
      "• Integração: Assegurar a integração eficiente entre frontend e backend.",
      "• Colaboração: Trabalhar em conjunto com equipes de design, produto e outros desenvolvedores.",
      "• Qualidade de Código: Participar de revisões de código e seguir melhores práticas de desenvolvimento, identificar e resolver bugs tanto no frontend quanto no backend.",
      "• Deploy: Participar do processo de deploy, garantindo que as novas funcionalidades sejam lançadas sem problemas.",
    ],
  },
  {
    period: "04/2024 - 07/2024",
    company: "Projetil",
    job: "Scrum Master Junior",
    description: [
      "• Gerenciamento de Equipe: Gerenciar a equipe de desenvolvimento, garantindo um trabalho eficiente e colaborativo. ",
      "• Comunicação: Manter comunicação constante com o Product Owner para entender as regras de negócios e as necessidades dos clientes. ",
      "• Clareza dos Requisitos: Garantir que os requisitos sejam claros e compreensíveis para os desenvolvedores.",
      "• Gerenciamento de Projetos: Realizar atividades de gerenciamento de projetos, supervisionando cronogramas e progresso.",
      "• Supervisão de Testes Finais: Supervisionar os testes finais para garantir a implementação correta de todas as solicitações.",
      "• Desenvolvimento de Back-end: Executar tarefas de desenvolvimento de back-end usando a API .NET.",
    ],
  },
  {
    period: "09/2022 - 12/2023",
    company: "Young Plant - IRLANDA",
    job: "Supervisor Chef",
    description: [
      "• Gerenciamento de Operações de Cozinha: Liderar e supervisionar todas as operações da cozinha, garantindo fluxos de trabalho suaves e eficientes.",
      "• Liderança de Equipe: Orientar e supervisionar a equipe da cozinha, promovendo um ambiente de trabalho colaborativo. ",
      "• Gestão de Recursos: Gerenciar efetivamente os recursos da cozinha para otimizar a produtividade e a eficiência. ",
      "• Competência Linguística: Fluente em inglês como segunda língua, possibilitando uma comunicação eficaz com a equipe e os clientes.",
      "• Garantia de Qualidade: Assegurar a entrega de pratos de alta qualidade mantendo padrões rigorosos de preparação.",
    ],
  },
  {
    period: "10/2021 - 04/2022",
    company: "Timac Agro Brasil",
    job: "Suporte TI",
    description: [
      "• Suporte Técnico: Realizar reparos em computadores e atender a chamados de suporte técnico para fábricas em Candeias e Santa Luzia do Norte. ",
      "• Gestão de Inventário: Gerenciar o inventário de equipamentos de tecnologia nas regiões designadas. ",
      "• Reparos em Computadores: Realizar reparos em computadores desktop para garantir funcionalidade ideal. ",
      "• Resolução de Problemas: Oferecer suporte eficiente para resolver questões técnicas nas instalações das fábricas.",
    ],
  },
  {
    period: "09/2020 - 04/2022",
    company: "Siscon Contabilidade",
    job: "Assistente de contabilidade",
    description: [
      "• Lançamentos Contábeis: Controle e realizo lançamentos contábeis no sistema Domínio.",
      "• Conciliação de Estoque: Realizo a conciliação de estoque para assegurar precisão nos registros.",
      "• Administração de Arquivos: Gerencio a organização e manutenção dos arquivos contábeis.",
      "• Conciliação de Balanço: Efetuo a conciliação de balanço para garantir a integridade dos dados financeiros.",
      "• Lançamento de Faturas: Realizo o lançamento de faturas, assegurando a correta contabilização das transações.",
    ],
  },
  {
    period: "04/2019 - 06/2020",
    company: "Autometal S/A",
    job: "Jovem Aprendiz - TI",
    description: [
      "• Reparos e Atualizações de Computadores: Realizar reparos e atualizações em sistemas de computadores para garantir desempenho ótimo. ",
      "• Configuração de Sistemas: Configurar sistemas Ubuntu Linux para funcionalidade aprimorada. ",
      "• Manutenção do Sistema OEE: Manter o sistema de Eficiência Global de Equipamentos (OEE) para monitorar e melhorar a produtividade.",
      "• Suporte Técnico: Atender chamados de suporte técnico na fábrica, fornecendo soluções eficientes e rápidas.",
      "• Eficiência Operacional: Garantir a funcionalidade dos sistemas de TI para contribuir com a eficiência operacional e resolver problemas técnicos prontamente.",
    ],
  },
  {
    period: "02/2018 - 04/2019",
    company: "Siscon Contabilidade",
    job: "Jovem Aprendiz - Contabilidade",
    description: [
      "• Lançamentos Contábeis: Controle e realizo lançamentos contábeis no sistema Domínio.",
      "• Lançamento de Faturas: Realizo o lançamento de faturas, assegurando a correta contabilização das transações.",
    ],
  },
];
