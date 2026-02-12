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

// Questões da Aula 06 extraídas do PDF
const aula06Questions: Question[] = [
  {
    id: 'a06_q3',
    question: "A máquina deve ser reconhecida contabilmente pelo seu custo de aquisição, cujo cálculo deve contemplar, entre outros gastos, o preço à vista da máquina na data do reconhecimento.",
    options: ["Certo", "Errado"],
    correct: 0,
    explanation: "Questão da Aula 06 - Ativo Imobilizado, Depreciação e Exaustão",
    type: 'true-false'
  },
  {
    id: 'a06_q7',
    question: "A classificação em bens em operação e imobilizado em andamento, apesar de não prevista na legislação societária, é usualmente utilizada para segregar os itens que compõem o ativo imobilizado.",
    options: ["Certo", "Errado"],
    correct: 0,
    explanation: "Questão da Aula 06 - Ativo Imobilizado, Depreciação e Exaustão",
    type: 'true-false'
  },
  {
    id: 'a06_q12',
    question: "Considere os seguintes eventos: uma indústria adquiriu um equipamento produtivo pelo valor de 300 mil reais, incorrendo em mais de 15 mil reais para colocar o bem em condições de utilização; após esses procedimentos, as operações foram iniciadas; a depreciação do equipamento é realizada de acordo co",
    options: ["Certo", "Errado"],
    correct: 1,
    explanation: "Questão da Aula 06 - Ativo Imobilizado, Depreciação e Exaustão",
    type: 'true-false'
  },
  {
    id: 'a06_q14',
    question: "Os custos de manutenção periódica de um ativo imobilizado devem ser reconhecidos no valor contábil desse ativo.",
    options: ["Certo", "Errado"],
    correct: 1,
    explanation: "Questão da Aula 06 - Ativo Imobilizado, Depreciação e Exaustão",
    type: 'true-false'
  },
  {
    id: 'a06_q15',
    question: "Os gastos efetuados com testes destinados a verificar se uma máquina industrial recém-adquirida funciona adequadamente, estando apta a ser inserida no processo de produção, não devem compor o custo dessa máquina industrial.",
    options: ["Certo", "Errado"],
    correct: 1,
    explanation: "Questão da Aula 06 - Ativo Imobilizado, Depreciação e Exaustão",
    type: 'true-false'
  },
  {
    id: 'a06_q20',
    question: "Em se tratando da vida útil de um equipamento, se houver divergência entre o prazo estimado pelo fabricante, o prazo previsto na legislação fiscal e o prazo de uso estimado pelo usuário, deve-se, para fins contábeis e gerenciais, optar por este último.",
    options: ["Certo", "Errado"],
    correct: 0,
    explanation: "Questão da Aula 06 - Ativo Imobilizado, Depreciação e Exaustão",
    type: 'true-false'
  },
  {
    id: 'a06_q25',
    question: "A baixa de um bem que tenha sido totalmente depreciado e para o qual não tenha havido previsão de valor residual não afetará o resultado do exercício, tampouco o saldo do grupo de contas do ativo do qual aquele bem faça parte.",
    options: ["Certo", "Errado"],
    correct: 0,
    explanation: "Questão da Aula 06 - Ativo Imobilizado, Depreciação e Exaustão",
    type: 'true-false'
  },
  {
    id: 'a06_q28',
    question: "No caso de uma empresa que possui um imóvel no qual planeja construir futuramente sua nova sede, para fins de mensuração contábil, esse bem pode ser avaliado ao custo ou a valor justo, por ser uma propriedade para investimento futuro.",
    options: ["Certo", "Errado"],
    correct: 1,
    explanation: "Questão da Aula 06 - Ativo Imobilizado, Depreciação e Exaustão",
    type: 'true-false'
  },
  {
    id: 'a06_q29',
    question: "Havendo divergência entre as definições técnicas de vida útil, a expectativa de tempo de uso do proprietário e a tabela de vida útil definida pelos agentes tributários, a depreciação de um item do imobilizado deve, para fins societários, ser calculada a partir dos dados disponibilizados pelo agente ",
    options: ["Certo", "Errado"],
    correct: 1,
    explanation: "Questão da Aula 06 - Ativo Imobilizado, Depreciação e Exaustão",
    type: 'true-false'
  },
  {
    id: 'a06_q30',
    question: "Assertiva: Nessa situação, a empresa realizou uma perda com baixa de x.",
    options: ["Certo", "Errado"],
    correct: 1,
    explanation: "Questão da Aula 06 - Ativo Imobilizado, Depreciação e Exaustão",
    type: 'true-false'
  },
];

export const aula06Module: Module = {
  id: 'aula06',
  title: 'Aula 06: Ativo Imobilizado, Depreciação e Exaustão',
  description: 'Questões sobre ativo imobilizado, depreciação e exaustão',
  color: 'bg-orange-600',
  questions: aula06Questions
};
