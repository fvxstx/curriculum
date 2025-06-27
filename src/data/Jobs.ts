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
    job: "Engenheiro de Software - Junior",
    description: [
      "Engenheiro de Software especializado em desenvolvimento Full-Stack com foco em .NET C# e Next.js. Responsável pela implementação e manutenção de APIs RESTful e serviços web robustos, utilizando arquiteturas modernas e práticas de código limpo. Desenvolvi interfaces de usuário dinâmicas e responsivas, criando componentes reutilizáveis e gerenciando estados eficientemente em Next.js. Realizei operações CRUD e consultas complexas em diversos bancos de dados, garantindo integração eficiente entre frontend e backend. Participei ativamente de revisões de código e aplicação de melhores práticas de desenvolvimento, identificando e resolvendo bugs em ambos os ambientes. Colaborei diretamente com equipes multidisciplinares de design, produto e desenvolvimento em metodologia ágil.",
    ],
  },
  {
    period: "04/2024 - 07/2024",
    company: "Projetil",
    job: "Scrum Master - Junior",
    description: [
      "Atuei como Scrum Master Jr liderando times de desenvolvimento ágil, facilitando cerimônias Scrum e removendo impedimentos para aumentar a produtividade da equipe. Mantive comunicação constante com o Product Owner para alinhar requisitos de negócio com desenvolvimento, traduzindo necessidades dos clientes em histórias de usuário claras e acionáveis. Gerenciei projetos monitorando cronogramas, adaptando prioridades e mantendo transparência sobre o progresso para todos os stakeholders. Supervisionei testes finais garantindo a correta implementação dos requisitos e a qualidade do produto entregue. Implementei práticas ágeis que aumentaram a velocidade das entregas em 30% e melhoraram a qualidade através da padronização de critérios de aceitação.",
    ],
  },
  {
    period: "09/2022 - 12/2023",
    company: "Young Plant - IRLANDA",
    job: "Supervisor Chef",
    description: [
      "Liderei e gerenciei todas as operações da cozinha, supervisionando a equipe para garantir fluxos de trabalho eficientes e manter um ambiente colaborativo. Fui responsável por assegurar a entrega de pratos de alta qualidade, mantendo padrões rigorosos de preparação e otimizando o uso de recursos para maximizar a produtividade. A fluência em inglês foi essencial para uma comunicação eficaz com a equipe multicultural e os clientes.",
    ],
  },
  {
    period: "10/2021 - 04/2022",
    company: "Timac Agro Brasil",
    job: "Assistente de suporte de TI",
    description: [
      "Prestei suporte técnico de 1º nível para duas unidades fabris, solucionando chamados com agilidade e contribuindo para a continuidade das operações. Realizei reparos em computadores de mesa, restaurando equipamentos e reduzindo a necessidade de substituições em até 30%. Gerenciei o estoque de equipamentos de TI, controlando entradas e saídas de forma organizada e garantindo a disponibilidade de recursos para os times locais. Atuei na identificação e resolução de falhas técnicas em sistemas e hardware, mantendo o tempo médio de resposta dentro dos padrões exigidos e apoiando diretamente a estabilidade do ambiente tecnológico nas fábricas.",
    ],
  },
  {
    period: "09/2020 - 04/2022",
    company: "Siscon Contabilidade",
    job: "Assistente administrativo contábil",
    description: [
      "Gerenciei e lancei diariamente transações contábeis no sistema Domínio, garantindo precisão nos registros e conformidade com as normas fiscais. Realizei conciliações de estoque e balanços patrimoniais, contribuindo para a integridade dos dados financeiros e apoiando auditorias internas com informações consistentes. Efetuei o lançamento de faturas com alto índice de acuracidade, assegurando o correto fechamento contábil mensal e auxiliando no controle financeiro da empresa.",
    ],
  },
  {
    period: "04/2019 - 06/2020",
    company: "Autometal S/A",
    job: "Jovem Aprendiz - TI",
    description: [
      "Realizei reparos e atualizações em computadores, garantindo desempenho ideal e reduzindo em 70% os problemas causados por estática e configurações incorretas dentro da fábrica. Configurei sistemas Ubuntu Linux para otimizar a funcionalidade, além de manter o sistema de Eficácia Geral do Equipamento (OEE), contribuindo para o monitoramento e aumento da produtividade operacional. Atendi solicitações de suporte técnico com agilidade, solucionando problemas de TI que impactavam diretamente a eficiência das operações da fábrica. Minha atuação proativa garantiu a estabilidade dos sistemas, reduzindo o tempo de inatividade e aprimorando a eficiência operacional da equipe.",
    ],
  },
  {
    period: "02/2018 - 04/2019",
    company: "Siscon Contabilidade",
    job: "Jovem Aprendiz - Contabilidade",
    description: [
      "Fui responsável pelo controle e pela realização de lançamentos contábeis diários no sistema Domínio, além de efetuar o lançamento de faturas. Assegurei a precisão e a correta contabilização das transações, contribuindo para a organização e a integridade dos registros financeiros da empresa.",
    ],
  },
];
