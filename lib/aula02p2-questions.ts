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

// Questões da Aula 02 Parte II extraídas do PDF
const aula02p2Questions: Question[] = [
  {
    id: 'a02p2_q1',
    question: "O balancete de verificação permite que sejam identificadas as inversões, de débito por crédito e de crédito por débito, ocorridas de forma simultânea em um lançamento contábil. Comentários: O Balancete de verificação é um demonstrativo de caráter auxiliar em que são relacionadas todas as contas, sej",
    options: ["Certo", "Errado"],
    correct: 1,
    explanation: "Questão da Aula 02 Parte II - Livros Contábeis e Escrituração",
    type: 'true-false'
  },
  {
    id: 'a02p2_q2',
    question: "No livro-razão, lançam-se todas as operações ocorridas, e quaisquer outros fatos que provoquem variações patrimoniais. Comentários: Como o nome indica, o livro diário é um livro que contém o registro de todo e cada lançamento em ordem cronológica, fato que nos permite compreender a sequência de acon",
    options: ["Certo", "Errado"],
    correct: 1,
    explanation: "Questão da Aula 02 Parte II - Livros Contábeis e Escrituração",
    type: 'true-false'
  },
  {
    id: 'a02p2_q3',
    question: "O livro razão é um livro contábil utilizado para o registro das movimentações ocorridas em cada rubrica que compõe o plano de contas de uma entidade. Comentários: O livro Razão serve para controlar os saldos de todas as contas registradas no Livro Diário de forma individualizada. Por registrar todos",
    options: ["Certo", "Errado"],
    correct: 0,
    explanation: "Questão da Aula 02 Parte II - Livros Contábeis e Escrituração",
    type: 'true-false'
  },
  {
    id: 'a02p2_q4',
    question: "Um balancete de verificação deve ter, no mínimo, duas colunas e, no máximo, oito colunas. Comentários: O Balancete de verificação é um demonstrativo de caráter auxiliar em que são relacionadas todas as contas, sejam ela patrimoniais ou de resultado. O objetivo desse demonstrativo é verificarmos se f",
    options: ["Certo", "Errado"],
    correct: 1,
    explanation: "Questão da Aula 02 Parte II - Livros Contábeis e Escrituração",
    type: 'true-false'
  },
  {
    id: 'a02p2_q5',
    question: "O balancete de verificação baseia-se no método das partidas dobradas, podendo valer-se tanto do método analítico como do método sintético (ou simplificado) para a elaboração do balanço patrimonial e da demonstração do resultado do exercício. Comentários: O Balancete de verificação é um demonstrativo",
    options: ["Certo", "Errado"],
    correct: 0,
    explanation: "Questão da Aula 02 Parte II - Livros Contábeis e Escrituração",
    type: 'true-false'
  },
  {
    id: 'a02p2_q6',
    question: "O efeito líquido da movimentação do período sobre o saldo de uma conta é explicitado por meio de a) apenas balancetes de duas colunas. b) balancetes de duas ou quatro colunas. c) apenas balancetes de seis colunas. d) balancetes de seis ou oito colunas. e) apenas balancetes de oito colunas. Comentári",
    options: ["A", "B", "C", "D", "E"],
    correct: 4,
    explanation: "Questão da Aula 02 Parte II - Livros Contábeis e Escrituração",
    type: 'multiple-choice'
  },
  {
    id: 'a02p2_q7',
    question: "O balancete de verificação está associado ao livrorazão, expressando de forma sintética todas as contas da razão e seus saldos, podendo apresentar ou não as suas movimentações. Comentários: Item correto, pessoal. As informações necessárias para a elaboração do balancete de verificação são extraídas ",
    options: ["Certo", "Errado"],
    correct: 0,
    explanation: "Questão da Aula 02 Parte II - Livros Contábeis e Escrituração",
    type: 'true-false'
  },
  {
    id: 'a02p2_q8',
    question: "Balancete de verificação é aquele que é extraído após o encerramento de todas as contas retificadoras e de resultado de um período, visando à confirmação de saldos. Comentários: O balancete de verificação é elaborado com o saldo de todas as contas, sejam elas patrimoniais ou de resultado, e não apen",
    options: ["Certo", "Errado"],
    correct: 1,
    explanation: "Questão da Aula 02 Parte II - Livros Contábeis e Escrituração",
    type: 'true-false'
  },
  {
    id: 'a02p2_q9',
    question: "O balancete é utilizado para fins de verificação, encerramento de exercício social ou avaliação de ajustes necessários, sendo muito utilizado para fins de levantamento do balanço patrimonial, mas, diferentemente do balanço, não contempla a forma comparativa. Comentários: Esse trecho da assertiva est",
    options: ["Certo", "Errado"],
    correct: 1,
    explanation: "Questão da Aula 02 Parte II - Livros Contábeis e Escrituração",
    type: 'true-false'
  },
  {
    id: 'a02p2_q10',
    question: "O balancete de verificação 22 Rosa e S SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 40 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardozo Aula 02 - Parte II A é elaborado a partir dos saldos do livro diário e visa à conferência",
    options: ["A", "B", "C", "D", "E"],
    correct: 4,
    explanation: "Questão da Aula 02 Parte II - Livros Contábeis e Escrituração",
    type: 'multiple-choice'
  },
  {
    id: 'a02p2_q11',
    question: "Ao efetuar a escrituração contábil no livro diário, o contador deve informar, entre outros itens, a data em que o fato contábil ocorreu, A a conta devedora, a conta credora, o histórico que represente a essência econômica da transação e o saldo das contas debitadas e creditadas. B os valores debitad",
    options: ["A", "B", "C", "D", "E"],
    correct: 3,
    explanation: "Questão da Aula 02 Parte II - Livros Contábeis e Escrituração",
    type: 'multiple-choice'
  },
  {
    id: 'a02p2_q12',
    question: "O movimento do período, seguido dos respectivos saldos, devedores ou credores, é informação disponível A apenas nos balancetes de oito colunas. B apenas no balancete de duas colunas. C nos balancetes de duas e de quatro colunas. D nos balancetes de quatro e de seis colunas. E nos balancetes de seis ",
    options: ["A", "B", "C", "D", "E"],
    correct: 0,
    explanation: "Questão da Aula 02 Parte II - Livros Contábeis e Escrituração",
    type: 'multiple-choice'
  },
  {
    id: 'a02p2_q13',
    question: "Para saber se os saldos iniciais e finais de determinadas contas são devedores ou credores, é necessário recorrer a um balancete de oito colunas. Comentários: O balancete de 8 colunas evidencia as contas com os saldos iniciais (saldo devedor ou credor), o movimento ocorrido no período (devedor ou cr",
    options: ["Certo", "Errado"],
    correct: 1,
    explanation: "Questão da Aula 02 Parte II - Livros Contábeis e Escrituração",
    type: 'true-false'
  },
  {
    id: 'a02p2_q14',
    question: "Para saber se os saldos iniciais e finais de determinadas contas são devedores ou credores, é necessário recorrer a um balancete de oito colunas. Comentários: O balancete de 8 colunas evidencia as contas com os saldos iniciais (saldo devedor ou credor), o movimento ocorrido no período (devedor ou cr",
    options: ["Certo", "Errado"],
    correct: 1,
    explanation: "Questão da Aula 02 Parte II - Livros Contábeis e Escrituração",
    type: 'true-false'
  },
  {
    id: 'a02p2_q15',
    question: "No Livro Razão devem ser apresentados os saldos das contas representativas dos elementos patrimoniais de uma entidade. 27 Rosa e S SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 40 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardo",
    options: ["A", "B", "C", "D", "E"],
    correct: 2,
    explanation: "Questão da Aula 02 Parte II - Livros Contábeis e Escrituração",
    type: 'multiple-choice'
  },
  {
    id: 'a02p2_q16',
    question: "No Livro Razão devem ser apresentados os saldos das contas representativas dos elementos patrimoniais de uma entidade. Comentários: A escrituração é encontrada nos livros contábeis e fiscais. Atualmente, esses registros são feitos, quase que totalmente, de forma digital. Mas para fins de prova, em a",
    options: ["Certo", "Errado"],
    correct: 0,
    explanation: "Questão da Aula 02 Parte II - Livros Contábeis e Escrituração",
    type: 'true-false'
  },
  {
    id: 'a02p2_q17',
    question: "O lançamento é a técnica utilizada para se processar a escrituração. No caso dos livros caixa e de contas a pagar, os eventos são registrados por meio de lançamentos contábeis que seguem o método das partidas simples. Comentários: Errado, como regra, os diversos livros contábeis, tais como, livro ca",
    options: ["Certo", "Errado"],
    correct: 1,
    explanation: "Questão da Aula 02 Parte II - Livros Contábeis e Escrituração",
    type: 'true-false'
  },
  {
    id: 'a02p2_q18',
    question: "Considerando o disposto no Código Civil sobre o livro diário, assinale a opção correta. a) A prescrição ou decadência dos atos consignados no diário não eximem o empresário e a entidade empresária da sua guarda por um prazo adicional de cinco anos. b) Antes de ser colocado em uso, o livro diário dev",
    options: ["A", "B", "C", "D", "E"],
    correct: 1,
    explanation: "Questão da Aula 02 Parte II - Livros Contábeis e Escrituração",
    type: 'multiple-choice'
  },
  {
    id: 'a02p2_q19',
    question: "O livro caixa é, ao mesmo tempo, facultativo e obrigatório; neste último caso, para alguns tipos de entidades, como as microempresas e empresas de pequeno porte optantes pelo SIMPLES Nacional. Comentários: O item está correto. É exatamente o que dissemos. O livro caixa, pela legislação comercial, é ",
    options: ["Certo", "Errado"],
    correct: 0,
    explanation: "Questão da Aula 02 Parte II - Livros Contábeis e Escrituração",
    type: 'true-false'
  },
  {
    id: 'a02p2_q20',
    question: "No caso de operações que sejam realizadas fora da sede do estabelecimento, é admitida a escrituração resumida no livro diário, por totais relativos ao período máximo de 60 dias, desde que sejam conservados os documentos que permitam verificação posterior. Comentários: 30 Rosa e S SEFAZ-RN (Auditor F",
    options: ["Certo", "Errado"],
    correct: 1,
    explanation: "Questão da Aula 02 Parte II - Livros Contábeis e Escrituração",
    type: 'true-false'
  },
  {
    id: 'a02p2_q21',
    question: "A diferença entre os modelos de balancete de 6 e de 8 colunas corresponde aos saldos devedores e credores que dizem respeito ao movimento do período, constantes no segundo modelo e ausentes no primeiro. Comentários: Balancete de Verificação – 6 colunas: O balancete de 6 colunas evidencia as contas c",
    options: ["Certo", "Errado"],
    correct: 0,
    explanation: "Questão da Aula 02 Parte II - Livros Contábeis e Escrituração",
    type: 'true-false'
  },
  {
    id: 'a02p2_q22',
    question: "O balancete de verificação deve ser obrigatoriamente elaborado a cada mês. Comentários: Embora seja recomendada sua elaboração mensal, o balancete de verificação é um demonstrativo de caráter auxiliar, ou seja, não é obrigatório.",
    options: ["Certo", "Errado"],
    correct: 1,
    explanation: "Questão da Aula 02 Parte II - Livros Contábeis e Escrituração",
    type: 'true-false'
  },
  {
    id: 'a02p2_q23',
    question: "Na elaboração do balancete, o livro diário é a fonte de informações do contabilista para a realização dos trabalhos relacionados à referida demonstração contábil. Comentários: O balancete de verificação NÃO é elaborado a partir do livro Diário, mas sim pelo livro Razão. Amigos, todas as informações ",
    options: ["Certo", "Errado"],
    correct: 1,
    explanation: "Questão da Aula 02 Parte II - Livros Contábeis e Escrituração",
    type: 'true-false'
  },
  {
    id: 'a02p2_q24',
    question: "O balancete de verificação é uma demonstração financeira obrigatória pela legislação societária, e sua finalidade restringe-se a fornecer aos usuários internos da entidade informações sobre a evolução dos saldos das contas devedoras e credoras em determinado período. Comentários: O balancete de veri",
    options: ["Certo", "Errado"],
    correct: 1,
    explanation: "Questão da Aula 02 Parte II - Livros Contábeis e Escrituração",
    type: 'true-false'
  },
  {
    id: 'a02p2_q25',
    question: "O balancete de verificação inclui as contas patrimoniais e as contas de resultado. Comentários: O balancete de verificação é um demonstrativo de caráter auxiliar em que são relacionadas todas as contas, sejam ela patrimoniais ou de resultado.",
    options: ["Certo", "Errado"],
    correct: 0,
    explanation: "Questão da Aula 02 Parte II - Livros Contábeis e Escrituração",
    type: 'true-false'
  },
  {
    id: 'a02p2_q26',
    question: "O balancete de verificação é um resumo ordenado de todas as contas utilizadas pela contabilidade da entidade que o apresenta, destinando-se a detectar todos os possíveis erros de contabilização eventualmente ocorridos. Comentários: O balancete só serve para saber de houve a aplicação correta das par",
    options: ["Certo", "Errado"],
    correct: 1,
    explanation: "Questão da Aula 02 Parte II - Livros Contábeis e Escrituração",
    type: 'true-false'
  },
  {
    id: 'a02p2_q27',
    question: "O balancete de verificação pode ser levantado em modelos que vão de um mínimo de duas colunas a um máximo de seis colunas. Comentários: O balancete de verificação mais comum é o de duas colunas, mas encontramos na doutrina modelos com 4, 6 e 8 colunas. Cada um deles apresenta mais informações sobre ",
    options: ["Certo", "Errado"],
    correct: 1,
    explanation: "Questão da Aula 02 Parte II - Livros Contábeis e Escrituração",
    type: 'true-false'
  },
];

export const aula02p2Module: Module = {
  id: 'aula02p2',
  title: 'Aula 02 - Parte II: Livros Contábeis e Escrituração',
  description: 'Questões sobre livros contábeis, diário, razão e balancete',
  color: 'bg-green-600',
  questions: aula02p2Questions
};
