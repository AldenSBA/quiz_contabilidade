export interface Question {
  id: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  type: 'true-false' | 'multiple-choice';
}

export interface Module {
  id: string;
  title: string;
  description: string;
  color: string;
  questions: Question[];
}

// Questões de todas as aulas - Versão Corrigida
export const questionsData: Module[] = [
  {
    id: 'aula00',
    title: 'Aula 00: Contabilidade',
    description: 'Questões da Aula 00',
    color: 'bg-blue-600',
    questions: [
      {
        id: 'a00_q1',
        question: 'Na ciência contábil, o patrimônio líquido de uma entidade é definido como a participação residual nos ativos após a dedução de todos os passivos.',
        options: ['Certo', 'Errado'],
        correct: 0,
        explanation: 'Patrimônio líquido é a participação residual nos ativos da entidade após a dedução de todos os seus passivos.',
        type: 'true-false',
      },
      {
        id: 'a00_q2',
        question: 'Coletar informações, sintetizá-las e registrá-las são algumas das funções da contabilidade.',
        options: ['Certo', 'Errado'],
        correct: 0,
        explanation: 'A Contabilidade estuda e cuida do controle, do registro, de todos os eventos que modificam o patrimônio das entidades.',
        type: 'true-false',
      },
    ],
  },
  {
    id: 'aula01',
    title: 'Aula 01: Patrimônio e Atos Administrativos',
    description: 'Questões da Aula 01',
    color: 'bg-indigo-600',
    questions: [
      {
        id: 'a01_q1',
        question: 'O patrimônio de uma entidade é composto por bens, direitos e obrigações.',
        options: ['Certo', 'Errado'],
        correct: 0,
        explanation: 'O patrimônio é definido como sendo os bens, direitos e obrigações de uma empresa.',
        type: 'true-false',
      },
    ],
  },
  {
    id: 'aula01p2',
    title: 'Aula 01 - Parte II: Fatos Contábeis',
    description: 'Questões da Aula 01 Parte II',
    color: 'bg-indigo-500',
    questions: [
      {
        id: 'a01p2_q1',
        question: 'Os fatos contábeis podem ser classificados em permutativos, modificativos e mistos.',
        options: ['Certo', 'Errado'],
        correct: 0,
        explanation: 'Os fatos contábeis são eventos que afetam o patrimônio e podem ser classificados em três tipos.',
        type: 'true-false',
      },
    ],
  },
  {
    id: 'aula02',
    title: 'Aula 02: Livros Contábeis e Escrituração',
    description: 'Questões da Aula 02',
    color: 'bg-green-600',
    questions: [
      {
        id: 'a02_q1',
        question: 'O livro diário é um livro contábil obrigatório que contém o registro de todos os lançamentos em ordem cronológica.',
        options: ['Certo', 'Errado'],
        correct: 0,
        explanation: 'O livro diário registra todos os lançamentos contábeis em ordem cronológica, sendo um livro obrigatório.',
        type: 'true-false',
      },
    ],
  },
  {
    id: 'aula02p2',
    title: 'Aula 02 - Parte II: Demonstrações Contábeis',
    description: 'Questões da Aula 02 Parte II',
    color: 'bg-green-500',
    questions: [
      {
        id: 'a02p2_q1',
        question: 'O Balanço Patrimonial apresenta a posição financeira da entidade em uma data específica.',
        options: ['Certo', 'Errado'],
        correct: 0,
        explanation: 'O Balanço Patrimonial é uma demonstração contábil que mostra a situação patrimonial em um momento específico.',
        type: 'true-false',
      },
    ],
  },
  {
    id: 'aula06',
    title: 'Aula 06: Ativo Imobilizado',
    description: 'Questões da Aula 06',
    color: 'bg-orange-600',
    questions: [
      {
        id: 'a06_q1',
        question: 'A máquina deve ser reconhecida contabilmente pelo seu custo de aquisição.',
        options: ['Certo', 'Errado'],
        correct: 0,
        explanation: 'O ativo imobilizado é reconhecido pelo seu custo de aquisição, incluindo todos os gastos necessários para colocá-lo em condições de uso.',
        type: 'true-false',
      },
    ],
  },
  {
    id: 'aula07',
    title: 'Aula 07: Provisões e Passivos Contingentes',
    description: 'Questões da Aula 07',
    color: 'bg-purple-600',
    questions: [
      {
        id: 'a07_q1',
        question: 'Uma provisão deve ser reconhecida quando há uma obrigação presente resultante de um evento passado.',
        options: ['Certo', 'Errado'],
        correct: 0,
        explanation: 'Provisão é uma obrigação presente resultante de um evento passado, cuja liquidação é provável e pode ser estimada com confiabilidade.',
        type: 'true-false',
      },
    ],
  },
  {
    id: 'aula08',
    title: 'Aula 08: Ativo Intangível',
    description: 'Questões da Aula 08',
    color: 'bg-pink-600',
    questions: [
      {
        id: 'a08_q1',
        question: 'O ativo intangível é um ativo não monetário identificável sem substância física.',
        options: ['Certo', 'Errado'],
        correct: 0,
        explanation: 'Ativo intangível é um ativo não monetário identificável sem substância física, controlado pela entidade e gerador de benefícios econômicos futuros.',
        type: 'true-false',
      },
    ],
  },
  {
    id: 'aula09',
    title: 'Aula 09: Receitas e Despesas',
    description: 'Questões da Aula 09',
    color: 'bg-cyan-600',
    questions: [
      {
        id: 'a09_q1',
        question: 'Receita é o aumento no ativo ou redução no passivo que resulta em aumento no patrimônio líquido.',
        options: ['Certo', 'Errado'],
        correct: 0,
        explanation: 'Receita é o aumento no ativo ou redução no passivo que resulta em aumento no patrimônio líquido, excluindo contribuições dos proprietários.',
        type: 'true-false',
      },
    ],
  },
  {
    id: 'aula10',
    title: 'Aula 10: Demonstração do Resultado do Exercício',
    description: 'Questões da Aula 10',
    color: 'bg-red-600',
    questions: [
      {
        id: 'a10_q1',
        question: 'A Demonstração do Resultado do Exercício (DRE) apresenta o resultado econômico da entidade em um período.',
        options: ['Certo', 'Errado'],
        correct: 0,
        explanation: 'A DRE é uma demonstração contábil que apresenta o resultado econômico (lucro ou prejuízo) da entidade em um período específico.',
        type: 'true-false',
      },
    ],
  },
];
