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

export const questionsData: Module[] = [
  {
    id: 'aula03',
    title: 'Aula 03: Regime de Competência e Regime de Caixa',
    description: 'Questões sobre regime de competência, regime de caixa e apuração de resultados',
    color: 'bg-blue-500',
    questions: [
      {
        id: 'a03_q1',
        question: 'A emissão da nota fiscal de venda de uma mercadoria marca o exato momento em que um valor a receber deve ser registrado na conta adequada que expressa essa venda.',
        options: ['Certo', 'Errado'],
        correct: 1,
        explanation: 'Errado. Como regra na Contabilidade, o Regime de Competência irá reconhecer as receitas de acordo com os respectivos fatos geradores, mesmo que não haja efeito no caixa. Assim sendo, a receita será reconhecida no resultado quando a empresa cumprir a sua obrigação de desempenho, que é entregar o bem.',
        type: 'true-false'
      },
      {
        id: 'a03_q2',
        question: 'Se usadas as contas do rol apresentado, a escrituração de uma aquisição de mercadorias a prazo pode ser expressa corretamente no livro-razão diário da entidade por meio da partida estoques de mercadorias a contas a pagar.',
        options: ['Certo', 'Errado'],
        correct: 1,
        explanation: 'Errado. Nas operações de compra a prazo de mercadorias devemos utilizar a conta fornecedores, não "contas a pagar".',
        type: 'true-false'
      },
      {
        id: 'a03_q3',
        question: 'Para que da DRE seja possível concluir se houve lucro ou prejuízo em determinado período de tempo, bem como analisar detalhadamente a parte econômica do negócio, deve-se adotar o regime de caixa.',
        options: ['Certo', 'Errado'],
        correct: 1,
        explanation: 'Errado. Como regra na Contabilidade, o Regime de Competência irá reconhecer as receitas e despesas de acordo com os respectivos fatos geradores, mesmo que não haja efeito no caixa.',
        type: 'true-false'
      },
      {
        id: 'a03_q4',
        question: 'Determinada empresa realizou os seguintes tratamentos contábeis quanto ao reconhecimento de suas receitas e despesas. I Os recursos recebidos em abril de 2024 pelos serviços prestados aos clientes em maio de 2024 foram reconhecidos como receitas em abril de 2024. II Os juros embutidos no preço dos estoques adquiridos a prazo foram reconhecidos como despesas financeiras no momento da aquisição dos estoques. III As despesas com férias foram reconhecidas quando os empregados receberam o pagamento do benefício. IV As receitas de vendas foram reconhecidas no momento em que se deu a entrega das mercadorias aos clientes. V Os juros dos empréstimos devidos a bancos foram reconhecidos como despesas por ocasião da amortização dos empréstimos. Considerando essa situação hipotética, é correto afirmar, com base no regime de competência, que foi adequado apenas o tratamento contábil descrito em',
        options: ['A) I', 'B) II', 'C) III', 'D) IV', 'E) V'],
        correct: 3,
        explanation: 'D) IV. Como regra na Contabilidade, o Regime de Competência irá reconhecer as receitas quando a empresa cumprir a sua obrigação de desempenho, que é entregar o bem. Os demais itens estão incorretos por não seguirem o regime de competência.',
        type: 'multiple-choice'
      },
      {
        id: 'a03_q5',
        question: 'No final do período, para garantir que todas as receitas e todas as despesas sejam registradas no momento adequado, as empresas realizam quatro tipos de ajustes em lançamentos contábeis específicos: despesas diferidas, receitas diferidas, receitas a receber e despesas a pagar. O lançamento de prestação de serviço a prazo, no valor de R$ 450, cujo recebimento ocorrerá em junho/20X1, é mostrado corretamente a seguir: D – Duplicatas a receber 450 / C – Receita de serviços 450',
        options: ['Certo', 'Errado'],
        correct: 0,
        explanation: 'Certo. Uma vez que a venda se deu a prazo, estamos criando um direito (ativo), o qual deverá ser debitado. A contrapartida será uma conta de receita. Esse lançamento é feito quando da prestação do serviço, em homenagem ao princípio da competência.',
        type: 'true-false'
      },
      {
        id: 'a03_q6',
        question: 'A entidade que utiliza recursos do caixa para efetuar o pagamento antecipado de uma dívida, beneficiando-se de um desconto concedido pelo credor, deve contabilizar a operação a débito de uma conta de passivo, a crédito de uma conta de ativo e a crédito de uma conta de receita.',
        options: ['Certo', 'Errado'],
        correct: 0,
        explanation: 'Certo. O desconto financeiro OBTIDO representa uma receita FINANCEIRA. O lançamento é: D – Contas a pagar (passivo) / C – Caixa (ativo) / C – Descontos Financeiro obtido (resultado).',
        type: 'true-false'
      },
      {
        id: 'a03_q7',
        question: 'No regime de competência, os materiais de escritório adquiridos por uma entidade serão registrados inicialmente como ativos, devendo ser reconhecidos como despesa quando do seu efetivo consumo.',
        options: ['Certo', 'Errado'],
        correct: 0,
        explanation: 'Certo. Os estoques de materiais de escritório devem ser classificados no ativo circulante. Quando ocorrer o efetivo consumo do material, pelo regime da Competência, reconheceremos a despesa no resultado.',
        type: 'true-false'
      },
      {
        id: 'a03_q8',
        question: 'Suponha que, na última hora do último dia de certo mês, uma sexta-feira, uma venda tenha sido realizada por uma empresa e que a nota fiscal correspondente tenha sido emitida, porém o produto tenha sido entregue somente na semana seguinte. Nessa situação hipotética, a receita relativa à venda e o custo da mercadoria que foi vendida devem compor os relatórios contábeis do mês em que a venda foi realizada.',
        options: ['Certo', 'Errado'],
        correct: 1,
        explanation: 'Errado. A receita será reconhecida no resultado quando a empresa cumprir a sua obrigação de desempenho, que é entregar o bem, não quando emitir a nota fiscal.',
        type: 'true-false'
      }
    ]
  },
  {
    id: 'aula04',
    title: 'Aula 04: Ativo Circulante e Não Circulante',
    description: 'Questões sobre classificação de ativos e estrutura do balanço patrimonial',
    color: 'bg-emerald-500',
    questions: [
      {
        id: 'a04_q1',
        question: 'A entidade deve elaborar o conjunto de suas demonstrações contábeis por meio da utilização do regime de competência, sendo vedada a utilização de outro regime contábil.',
        options: ['Certo', 'Errado'],
        correct: 1,
        explanation: 'Errado. As demonstrações contábeis devem ser elaboradas de acordo com o regime de competência, mas a exceção fica por conta da demonstração dos fluxos de caixa, que é elaborada de acordo com o regime de caixa.',
        type: 'true-false'
      },
      {
        id: 'a04_q2',
        question: 'Devem ser classificados no ativo circulante os ativos financeiros que estejam sendo mantidos essencialmente com o propósito de serem negociados, bem como a parcela a realizar no prazo de até doze meses após a data do balanço de ativos financeiros não circulantes.',
        options: ['Certo', 'Errado'],
        correct: 0,
        explanation: 'Certo. É um critério previsto no Pronunciamento Técnico CPC 26 (R1) – Apresentação das Demonstrações Contábeis.',
        type: 'true-false'
      },
      {
        id: 'a04_q3',
        question: 'O ativo não circulante é composto por ativo realizável a longo prazo, investimentos, imobilizado e intangível.',
        options: ['Certo', 'Errado'],
        correct: 0,
        explanation: 'Certo. O ativo não circulante deve ser subdividido em realizável a longo prazo, investimentos, imobilizado e intangível, conforme previsto na Lei 6.404/76.',
        type: 'true-false'
      },
      {
        id: 'a04_q4',
        question: 'De acordo com as disposições da Lei n.º 6.404/1976 em vigor, assinale a opção correta.',
        options: [
          'A) O ativo não circulante é composto por ativo realizável a longo prazo, investimentos, imobilizado e permanente.',
          'B) No ativo, as contas deverão ser dispostas em ordem crescente do grau de liquidez.',
          'C) As participações permanentes em outras sociedades que não se destinem à manutenção da atividade da companhia ou da empresa devem ser contabilizadas no ativo intangível.',
          'D) Os bens corpóreos destinados à manutenção das atividades da companhia deverão ser contabilizados no ativo imobilizado.',
          'E) Quando o ciclo operacional da empresa tiver duração menor que doze meses, a classificação no circulante ou no longo prazo terá por base o prazo desse ciclo.'
        ],
        correct: 3,
        explanation: 'D) Os bens corpóreos destinados à manutenção das atividades da companhia deverão ser contabilizados no ativo imobilizado, conforme previsto na Lei 6.404/76.',
        type: 'multiple-choice'
      }
    ]
  },
  {
    id: 'aula05',
    title: 'Aula 05: Estoques e Avaliação',
    description: 'Questões sobre avaliação de estoques e métodos de custeio',
    color: 'bg-purple-500',
    questions: [
      {
        id: 'a05_q1',
        question: 'Considere que uma indústria, contribuinte do imposto sobre produtos industrializados (IPI) e do imposto sobre circulação de mercadorias e serviços (ICMS), tenha adquirido a prazo R$ 73 mil em matérias-primas para industrialização, incorrendo em R$ 10 mil de IPI e R$ 17 mil de ICMS, com frete por conta do fornecedor. Nessa situação, para espelhar a referida transação na sua contabilidade, a entidade deve contabilizar: D - Estoque de MP R$ 73.000 / D - IPI a recuperar R$ 10.000 / D - ICMS a recuperar R$ 17.000 / C - Fornecedores R$ 100.000',
        options: ['Certo', 'Errado'],
        correct: 0,
        explanation: 'Certo. Os estoques de matéria-prima devem ser registrados pelo valor original. Como se trata de matéria-prima destinada à produção, o IPI e o ICMS são recuperáveis e não entram no valor dos estoques.',
        type: 'true-false'
      },
      {
        id: 'a05_q2',
        question: 'Considere que, em uma economia inflacionária, uma entidade tenha realizado vendas de uma quantidade determinada de estoques de mercadorias em um período. Nesse caso, considerando que todas as demais características sejam constantes, a venda de estoques com custos avaliados pelo método do primeiro a entrar, primeiro a sair (PEPS) geraria maior lucro do exercício do que a mesma venda de estoques com custos avaliados pela média ponderada móvel.',
        options: ['Certo', 'Errado'],
        correct: 0,
        explanation: 'Certo. Em ambiente inflacionário, o método PEPS resulta em maior lucro porque o custo das mercadorias vendidas é menor (usa custos mais antigos e baratos).',
        type: 'true-false'
      },
      {
        id: 'a05_q3',
        question: 'Assinale a opção em que é indicada a informação relacionada ao próprio estoque a qual deve ser levada em conta por uma companhia quando da mensuração contábil do referido item patrimonial.',
        options: [
          'A) valor realizável líquido',
          'B) custo calculado pelo método do custeio variável',
          'C) valor justo',
          'D) depreciação',
          'E) custo corrente'
        ],
        correct: 0,
        explanation: 'A) Os estoques devem ser mensurados pelo valor de custo ou pelo valor realizável líquido, dos dois o menor, conforme previsto no CPC 16.',
        type: 'multiple-choice'
      },
      {
        id: 'a05_q4',
        question: 'Com base nos custos específicos, a valoração de estoques destinados à venda que possam ser identificados individualmente, distinguindo-se uns dos outros, é recomendada nos casos em que há muitas unidades do produto nesses estoques.',
        options: ['Certo', 'Errado'],
        correct: 1,
        explanation: 'Errado. O custo específico NÃO é recomendável quando há grandes quantidades de itens de estoque que sejam geralmente intercambiáveis. Ele é recomendado apenas para itens específicos e identificáveis.',
        type: 'true-false'
      }
    ]
  }
];
