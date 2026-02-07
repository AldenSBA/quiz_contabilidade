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
    "id": "aula00",
    "title": "Aula 00: Contabilidade",
    "description": "Questões da Aula 00",
    "color": "bg-blue-600",
    "questions": [
      {
        "id": "a00_q1",
        "question": "Na ciência contábil, o patrimônio líquido de",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nNeste quesito a banca trouxe como “casca de banana” a definição de “Patrimônio” para “Patrimônio líquido”.\nEscorregou? Fique Atento! As seguintes definições:\n•\n•\n•\n\nPatrimônio é definido como sendo os bens, direitos e obrigações de uma empresa\nPatrimônio Bruto é o Ativo (bens e direitos).\nPatrimônio líquido é a participação residual nos ativos da entidade após a dedução de todos os seus\npassivos.\n\nO PL é a participação residual, isto é, o que “sobra” dos ativos, após pagar as dívidas, os passivos. Funciona\nassim: se determinada entidade vender todos os seus bens e direitos, ou sej",
        "type": "true-false"
      },
      {
        "id": "a00_q2",
        "question": "Coletar informações, sintetizá-las e registrá-las são algumas das",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nA Ciência Contábil surge e se aperfeiçoa com a missão de captar, escriturar, interpretar fatos que afetavam\no PATRIMÔNIO de pessoas. O objeto de estudo da contabilidade é o patrimônio.\nNossa querida Contabilidade estuda e cuida do controle, do registro, de todos os eventos que, de alguma\nforma, modificam o patrimônio das entidades. Esse patrimônio de uma pessoa que é gerido de maneira\norganizada é chamado de Azienda. Ele é o campo de aplicação da contabilidade:\nAziendas = patrimônio + gestão\nA seguir, duas importantes definições:\nContabilidade é a ciência que estuda a pratica as f",
        "type": "true-false"
      },
      {
        "id": "a00_q3",
        "question": "O objetivo fundamental da contabilidade, hoje, é fornecer",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nPara facilitar, vamos analisar em duas partes:\nParte 1 - O objetivo fundamental da contabilidade, hoje, é fornecer informações\nA finalidade principal da ciência contábil, que algumas vezes é confundida com o objetivo da contabilidade,\né fornecer a seus usuários informações sobre a situação patrimonial e financeira da entidade. Ocorre que o\nCEBRASPE não trata esses termos como sinônimos.\nPriii! Aqui vamos chamar o \"VAR\":\nEntendimento do CEBRASPE! Apesar de haver divergências doutrinárias, essa banca entende o seguinte:\nOBJETIVO = fornecer a seus usuários informações sobre a situaçã",
        "type": "true-false"
      },
      {
        "id": "a00_q4",
        "question": "A contabilidade estuda o patrimônio em seus aspectos",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nItem correto, o objeto de estudo da Contabilidade é o patrimônio, isto é, os bens, direitos e obrigações de\numa entidade. Dessa forma, estuda os aspectos qualitativos desse patrimônio, como por exemplo, os\nelementos que compõe esse acervo patrimonial, e aspectos também quantitativos, isto é, o valor monetário\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pós-Edital)\n\n35\n\nwww.estrategiaconcursos.com.br\n\n61\n\n\fLuciano Rosa, Júlio Cardozo\nAula 00\n\nesses itens. Além disso, o objetivo da Ciência Contábil é fornecer informações uteis aos seus usuári",
        "type": "true-false"
      },
      {
        "id": "a00_q5",
        "question": "Atualmente, a corrente majoritária de pensadores da área",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nAo longo do seu desenvolvimento, a Contabilidade já foi considerada uma técnica e até mesmo uma forma\nde arte (aqui eu tenho que concordar rsrs). Contudo, o pensamento mais atual é aquele que considera a\nContabilidade como uma Ciência Social.\nDefinição oficial de contabilidade: Contabilidade é a ciência que estuda e pratica as funções de orientação,\nde controle e de registro dos atos e fatos de uma administração econômica (1º Congresso Brasileiro de\nContabilidade/1924).",
        "type": "true-false"
      },
      {
        "id": "a00_q6",
        "question": "A razão de ser da contabilidade é oferecer aos",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nO objetivo da contabilidade (A razão de ser) é fornecer a seus usuários informações sobre a situação\npatrimonial e financeira da entidade. Portanto, correto, pois agentes econômicos, como famílias, firmas e\ngoverno podem ser considerados usuários da Contabilidade e usam as informações produzidas por essa\nciência para tomarem suas decisões.",
        "type": "true-false"
      },
      {
        "id": "a00_q7",
        "question": "Contabilidade geral e contabilidade societária são",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\n\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pós-Edital)\n\n36\n\nwww.estrategiaconcursos.com.br\n\n61\n\n\fLuciano Rosa, Júlio Cardozo\nAula 00\n\nErrado, pessoal, Contabilidade pode ser aplicada em ramos específicos, como a Contabilidade Societária,\nContabilidade Geral, Contabilidade Aplicada ao Setor Público, Contabilidade Gerencial, Contabilidade de\nCustos, Contabilidade Bancária, assim por diante.\nContabilidade Geral e a Contabilidade Societária não são sinônimos de ciência contábil, logo, item errado.",
        "type": "true-false"
      },
      {
        "id": "a00_q8",
        "question": "Se um trabalhador controla rigorosamente, em um",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nA Contabilidade alcança seu objetivo através do registro de todos os fatos relacionados com a formação,\nmovimentação e variações do patrimônio administrado. No caso apresentado na questão, o trabalhador\nregistra todos os eventos que geram alterações no seu patrimônio e com essas informações geradas, toma\nsuas decisões. Logo, está fornecendo informações sobre a situação patrimonial e financeira da entidade,\nmuitas vezes chamada também de objetivo final/fundamental.",
        "type": "true-false"
      },
      {
        "id": "a00_q9",
        "question": "Contabilidade é a ciência social que",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nÉ verdade que a contabilidade é uma ciência social, todavia ela não é a única. Sabendo disto a banca trouxe\ncomo “casca de banana” a definição de “Administração” para “Contabilidade”. Escorregou? Fique Atento!\nAs seguintes definições:\nAdministração:\nAdministração é a tomada de decisão sobre recursos disponíveis, trabalhando com e através de pessoas para\natingir objetivos, é o gerenciamento de uma organização, levando em conta as informações fornecidas por\noutros profissionais e também pensando previamente as consequências de suas decisões. É também a\nciência social que estuda e si",
        "type": "true-false"
      },
      {
        "id": "a00_q10",
        "question": "A ciência",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pós-Edital)\n\n38\n\nwww.estrategiaconcursos.com.br\n\n61\n\n\fLuciano Rosa, Júlio Cardozo\nAula 00\n\nA Ciência Contábil surge e se aperfeiçoa com a missão de captar, escriturar, interpretar fatos que afetavam\no PATRIMÔNIO de pessoas. Para se enquadrar como ciência e se diferenciar de outras ciências ligadas, o\npatrimônio foi definido como seu objeto de estudo.",
        "type": "true-false"
      },
      {
        "id": "a00_q11",
        "question": "A contabilidade é a ciência social",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nParte 1 - A contabilidade é a ciência social que estuda e controla o patrimônio das entidades\nA contabilidade é uma ciência social, a qual vem se desenvolvendo desde que a Humanidade começou a\nsentir a necessidade de acumular e registrar riqueza e a fazer operações mercantis. A Ciência Contábil surge\ne se aperfeiçoa com a missão de captar, escriturar, interpretar fatos que afetavam o patrimônio de pessoas.\nDefinição oficial de contabilidade: Contabilidade é a ciência que estuda e pratica as funções de orientação,\nde controle e de registro dos atos e fatos de uma administração econ",
        "type": "true-false"
      },
      {
        "id": "a00_q12",
        "question": "A ciência contábil tem múltiplas",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nA finalidade principal da ciência contábil, que algumas vezes é confundida com o objetivo da contabilidade,\né fornecer a seus usuários informações sobre a situação patrimonial e financeira da entidade. Ocorre que o\nCEBRASPE não trata esses termos como sinônimos.\nPriii! Aqui vamos chamar o \"VAR\":\nEntendimento do CEBRASPE! Apesar de haver divergências doutrinárias, essa banca entende o seguinte:\nOBJETIVO = fornecer a seus usuários informações sobre a situação patrimonial e financeira da entidade.\nFINALIDADE = controlar o patrimônio das aziendas.\nPodemos utilizar o seguinte Macete na",
        "type": "true-false"
      },
      {
        "id": "a00_q13",
        "question": "Contribuir para a tomada de decisão",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nTraduzindo: Contribuir para a tomada de decisão sobre comprar, vender ou manter instrumento de\npatrimônio e de dívida = Fornecer a seus usuários informações sobre a situação patrimonial e financeira da\nentidade\nEntendimento do CEBRASPE! Apesar de haver divergências doutrinárias, essa banca entende o seguinte:\nOBJETIVO = fornecer a seus usuários informações sobre a situação patrimonial e financeira da entidade.\nFINALIDADE = controlar o patrimônio das aziendas.\nPodemos utilizar o seguinte Macete nas questões Cebraspe:\nNesse quesito a banca utilizou a expressão “um dos fins da contab",
        "type": "true-false"
      },
      {
        "id": "a00_q14",
        "question": "O objetivo das demonstrações",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nA finalidade principal da ciência contábil, que algumas vezes é confundida com o objetivo da contabilidade,\né fornecer a seus usuários informações sobre a situação patrimonial e financeira da entidade. Ocorre que o\nCEBRASPE não trata esses termos como sinônimos.\nPriii! Aqui vamos chamar o \"VAR\":\nEntendimento do CEBRASPE! Apesar de haver divergências doutrinárias, essa banca entende o seguinte:\nOBJETIVO = fornecer a seus usuários informações sobre a situação patrimonial e financeira da entidade.\n\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (P",
        "type": "true-false"
      },
      {
        "id": "a00_q15",
        "question": "Uma finalidade da ciência",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nTraduzindo:\nObservar se a riqueza administrativa está atingindo os fins propostos pelo sujeito contábil = Controlar.\nIsto é, o quesito quer saber, o seguinte: Controlar é a finalidade da contabilidade?\nEntendimento do CEBRASPE! Apesar de haver divergências doutrinárias, essa banca entende o seguinte:\nOBJETIVO = fornecer a seus usuários informações sobre a situação patrimonial e financeira da entidade.\nFINALIDADE = controlar o patrimônio das aziendas.\nPodemos utilizar o seguinte Macete nas questões Cebraspe:\nO objetivo é ficar OFF: Objetivo = Fornecer\nA finalidade é Futebol Clube: ",
        "type": "true-false"
      },
      {
        "id": "a00_q16",
        "question": "O fornecimento de",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nA finalidade principal da ciência contábil, que algumas vezes é confundida com o objetivo da contabilidade,\né fornecer a seus usuários informações sobre a situação patrimonial e financeira da entidade. Ocorre que o\nCEBRASPE não trata esses termos como sinônimos.\nPriii! Aqui vamos chamar o \"VAR\":\nEntendimento do CEBRASPE! Apesar de haver divergências doutrinárias, essa banca entende o seguinte:\nOBJETIVO = fornecer a seus usuários informações sobre a situação patrimonial e financeira da entidade.\nFINALIDADE = controlar o patrimônio das aziendas.\nPodemos utilizar o seguinte Macete na",
        "type": "true-false"
      },
      {
        "id": "a00_q17",
        "question": "O patrimônio de uma entidade é representado, nas",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nO patrimônio, em Contabilidade, é definido como um conjunto de bens, direitos e obrigações da entidade.\nVejamos nosso esquema:\n\nPatrimônio\nBens\n\nDireitos\n\nObrigações\n\nO conjunto de bens e direitos chamamos de ativo, parte positiva do patrimônio. Por seu turno, as obrigações\nserão chamadas de passivo, parte negativa do patrimônio. Assim, gravemos:\n\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pós-Edital)\n\n43\n\nwww.estrategiaconcursos.com.br\n\n61\n\n\fLuciano Rosa, Júlio Cardozo\nAula 00\n\nAtivo: bens e direitos\nPassivo: obrigações",
        "type": "true-false"
      },
      {
        "id": "a00_q18",
        "question": "Na equação patrimonial,",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nA equação fundamental do patrimônio é a seguinte: Ativo = Passivo + PL.\nEm termos matemáticos, o patrimônio líquido e o passivo estão diretamente relacionados com o ativo, isto\né, aumento nesses grupos, refletem positivamente no ativo e vice-versa. E o patrimônio líquido está\ninversamente relacionado com o passivo.",
        "type": "true-false"
      },
      {
        "id": "a00_q19",
        "question": "Segundo a teoria contábil contemporânea, a",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nA Contabilidade é classificada como ciência social aplicada e não como ciência exata, como o senso comum\npode indicar.\nA contabilidade tem uma definição formal, que é a seguinte:\nDefinição formal de contabilidade: Contabilidade é a ciência que estuda a pratica as\nfunções de orientação, de controle e de registro dos atos e fatos de uma administração\neconômica (1º Congresso Brasileiro de Contabilidade/1924).",
        "type": "true-false"
      },
      {
        "id": "a00_q20",
        "question": "A contabilidade tem por objeto",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nPor ser uma ciência, a Contabilidade possui objeto de estudo próprio que é o patrimônio das entidades. Por\npatrimônio, entenda o conjunto de bens, direitos e obrigações da entidade.",
        "type": "true-false"
      },
      {
        "id": "a00_q21",
        "question": "Com relação a conceitos, objetivos e finalidade",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nI. O principal objetivo da contabilidade inclui fornecer informação útil ao usuário, para a tomada de\ndecisão.\nEntendimento do CEBRASPE! Apesar de haver divergências doutrinárias, essa banca entende o seguinte:\nOBJETIVO = fornecer a seus usuários informações sobre a situação patrimonial e financeira da entidade.\nFINALIDADE = controlar o patrimônio das aziendas.\nPodemos utilizar o seguinte Macete nas questões Cebraspe:\n\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pós-Edital)\n\n45\n\nwww.estrategiaconcursos.com.br\n\n61\n\n\fLuciano Rosa, Júlio Cardo",
        "type": "true-false"
      },
      {
        "id": "a00_q22",
        "question": "Fornecer informações úteis que subsidiem o processo",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nApesar de haver divergências doutrinárias, entende-se que é o OBJETIVO da Contabilidade é controlar o\npatrimônio das aziendas. Só que algumas bancas confundem o objetivo com a finalidade da Contabilidade.\nFoi o que aconteceu nessa questão, mas temos que ser “malandros”, no bom sentido, e jogar com as\nalternativas que a banca nos oferece, pois não podemos contar que a banca irá anular as questões.\nEnfim, devemos seguir o entendimento do Cebraspe:\nOBJETIVO = fornecer a seus usuários informações sobre a situação patrimonial e financeira da entidade.\n\nSEFAZ-RN (Auditor Fiscal do Tesou",
        "type": "true-false"
      },
      {
        "id": "a00_q23",
        "question": "Segundo o Comitê de",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nDe acordo com o CPC 00 (R2):\n1.5 Muitos investidores, credores por empréstimos e outros credores, existentes e\npotenciais, não podem exigir que as entidades que reportam forneçam informações\ndiretamente a eles, devendo se basear em relatórios financeiros para fins gerais para\nmuitas das informações financeiras de que necessitam. Consequentemente, eles são os\nprincipais usuários aos quais se destinam relatórios financeiros para fins gerais.\nPortanto, em que pese estarmos dizendo que os usuários podem ser externos ou internos, há também\naqueles que são os usuários PRINCIPAIS, ou sej",
        "type": "true-false"
      },
      {
        "id": "a00_q24",
        "question": "O principal objetivo da contabilidade é fornecer",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nA finalidade principal da ciência contábil, que algumas vezes é confundida com o objetivo da contabilidade,\né fornecer a seus usuários informações sobre a situação patrimonial e financeira da entidade. Ocorre que o\nCEBRASPE não trata esses termos como sinônimos.\nPriii! Aqui vamos chamar o \"VAR\":\nEntendimento do CEBRASPE! Apesar de haver divergências doutrinárias, essa banca entende o seguinte:\nOBJETIVO = fornecer a seus usuários informações sobre a situação patrimonial e financeira da entidade.\nFINALIDADE = controlar o patrimônio das aziendas.\nPodemos utilizar o seguinte Macete na",
        "type": "true-false"
      },
      {
        "id": "a00_q25",
        "question": "O objeto de estudo da contabilidade são as",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nItem errado, pessoal, o objeto de estudo da contabilidade é o PATRIMÔNIO das entidades econômicoadministrativas, isto é, as aziendas.\nA doutrina costuma classificar a azienda, quanto ao fim a que se destina, em três tipos, a saber:\n\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pós-Edital)\n\n48\n\nwww.estrategiaconcursos.com.br\n\n61\n\n\fLuciano Rosa, Júlio Cardozo\nAula 00\n\n1) azienda econômica: Como, por exemplo, as empresas. Objetivo de lucro.\n2) aziendas econômico-sociais: São exemplo as associações, cuja sobra líquida é destinada a outros fins q",
        "type": "true-false"
      },
      {
        "id": "a00_q26",
        "question": "A análise de balanços não é considerada uma",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nErrado, São quatro as técnicas utilizadas na contabilidade: escrituração, elaboração das demonstrações\ncontábeis, auditoria e análise das demonstrações contábeis.\nDepois que as demonstrações foram publicadas e auditadas, os seus usuários têm interesse nas informações\nnelas contidas.\nUm investidor desejará saber, por exemplo, o quanto essa empresa está dando de retorno para cada ação\ndo capital social.\nO credor por empréstimo desejará saber o quanto tem de garantia para poder conceder tranquilamente o\nempréstimo que deseja. E assim por diante. Tudo isso é feito através da técnica c",
        "type": "true-false"
      },
      {
        "id": "a00_q27",
        "question": "A contabilidade teórica consiste no registro das",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\n\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pós-Edital)\n\n49\n\nwww.estrategiaconcursos.com.br\n\n61\n\n\fLuciano Rosa, Júlio Cardozo\nAula 00\n\nA Contabilidade pode ser dividida didaticamente em Contabilidade Teórica e Contabilidade Prática. A\nprimeira se preocupa em apresentar a Contabilidade como ciência, estudando seus princípios, objeto de\nestudo e normas. Por sua vez, a Contabilidade Prática aplica as técnicas e princípios de maneira prática,\ncomo por exemplo, registrar as operações em livros. Item errado, pois confundiu os dois conceitos.",
        "type": "true-false"
      },
      {
        "id": "a00_q28",
        "question": "Sob a ótica citada, o objeto da contabilidade é o",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nItem correto, o objeto de estudo da contabilidade é o patrimônio. Por patrimônio, entenda o conjunto de\nbens, direitos e obrigações da entidade.",
        "type": "true-false"
      },
      {
        "id": "a00_q29",
        "question": "A contabilidade integra o rol das ciências exatas",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nErrado, pessoal, a Contabilidade é classificada como ciência social aplicada e não como ciência exata, como\no senso comum pode indicar. A contabilidade tem uma definição formal, que é a seguinte:\nDefinição formal de contabilidade: Contabilidade é a ciência que estuda a pratica as\nfunções de orientação, de controle e de registro dos atos e fatos de uma administração\neconômica (1º Congresso Brasileiro de Contabilidade/1924).",
        "type": "true-false"
      },
      {
        "id": "a00_q30",
        "question": "Para o estudo da contabilidade, patrimônio é a diferença",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nItem incorreto. Patrimônio bruto, patrimônio total ou simplesmente patrimônio é sinônimo para a expressão\nativo. Patrimônio líquido é a diferença entre ativos e passivos detidos pelas entidades.",
        "type": "true-false"
      },
      {
        "id": "a00_q31",
        "question": "As informações contábeis devem ser mensuradas e",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        "correct": 0,
        "explanation": "Comentários:\nI As instituições financeiras estão interessadas em informações relativas ao endividamento da empresa e\nà existência de liquidez suficiente para que ela honre com o pagamento dos empréstimos adquiridos.\nCorreto, através das informações contidas nas demonstrações contábeis, as instituições financeiras irão\nverificar informações sobre a situação financeira da empresa, como grau de endividamento, estrutura de\ncapital, fluxos de caixa, apuração do resultado, e com isso poderão avaliar a possibilidade de conceder\nempréstimos.\nII Nas suas análises, o investidor busca avaliar a empresa q",
        "type": "multiple-choice"
      },
      {
        "id": "a00_q32",
        "question": "De acordo com Max Weber, a moderna organização racional da",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nO objeto da contabilidade é o patrimônio, assim entendido o conjunto de bens, direitos e obrigações de uma\nentidade. Vicenzo Masi é o principal nome de uma escola doutrinária chamada de Patrimonialista.",
        "type": "true-false"
      },
      {
        "id": "a00_q33",
        "question": "Na ciência contábil, o patrimônio líquido",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "de uma entidade é entendido como o conjunto de seus bens, direitos e obrigações.\nConsiderando os conceitos, objetivos e finalidades da contabilidade, julgue o item a seguir.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a00_q34",
        "question": "Coletar informações, sintetizá-las e registrá-las são algumas",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "das ações que visam ao acompanhamento sistemático do objeto da ciência contábil.\nConsiderando os conceitos, objetivos e finalidades da contabilidade, julgue o item a seguir.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a00_q35",
        "question": "O objetivo fundamental da contabilidade, hoje, é fornecer",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "informações que auxiliem a tomada de decisões econômico-financeiras a todos os interessados\nRelativamente aos conceitos básicos da ciência contábil, julgue o item que se segue.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a00_q36",
        "question": "A contabilidade estuda o patrimônio em seus",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "aspectos quantitativo e qualitativo, fornecendo subsídios ao processo de tomada de decisões\neconômico-financeiras por usuários internos e externos.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a00_q37",
        "question": "Atualmente, a corrente majoritária de pensadores da",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "área de contabilidade a conceitua como\na) uma subdivisão da administração.\nb) uma forma de arte.\nc) uma ciência social.\nd) uma ciência exata.\ne) uma técnica.\n\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pós-Edital)\n",
        "type": "true-false"
      },
      {
        "id": "a00_q38",
        "question": "A razão de ser da contabilidade é oferecer aos",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "agentes econômicos informações úteis para que possam tomar suas decisões.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a00_q39",
        "question": "Contabilidade geral e contabilidade societária",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "são expressões usadas para popularizar o termo ciência contábil.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a00_q40",
        "question": "Se um trabalhador controla rigorosamente, em",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "um caderno, todos os seus gastos e as suas rendas, e, com base nesse controle, decide o que lhe\nconvém e o que não lhe convém fazer com seus recursos, então, agindo assim, ele reafirma o objetivo\nfundamental da contabilidade.\nRelativamente ao conceito, objetivos e finalidades da contabilidade, julgue o item que se segue.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a00_q41",
        "question": "Contabilidade é a ciência social",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "que estuda e sistematiza os princípios de tomada de decisão sobre recursos disponíveis ao\ngerenciamento organizacional.\nConsiderando conceitos, objetivos e finalidades da contabilidade, julgue o item que se segue.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a00_q42",
        "question": "A ciência",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "contábil diferencia-se de outras ciências ligadas direta ou indiretamente à gestão das entidades por\nter o patrimônio da entidade como objeto de estudo.\nRelativamente aos conceitos, objetivos, objeto e finalidades da contabilidade, julgue o item a seguir.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a00_q43",
        "question": "A contabilidade é a ciência",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "social que estuda e controla o patrimônio das entidades com o objetivo de fornecer informações sobre\nsua composição e variação que sejam úteis ao tomador de decisão.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a00_q44",
        "question": "A ciência contábil tem múltiplas",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "finalidades e ramos de atuação, mas, independentemente do enfoque, a contabilidade tem por\nobjetivo fundamental\n\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pós-Edital)\n\n54\n\nwww.estrategiaconcursos.com.br\n",
        "type": "true-false"
      },
      {
        "id": "a00_q45",
        "question": "Contribuir para a tomada de",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "decisão sobre comprar, vender ou manter instrumento de patrimônio e de dívida das entidades é um\ndos fins da contabilidade.\nJulgue o item que se segue, relativo ao conceito, ao objetivo, à periodicidade e à elaboração das principais\ndemonstrações contábeis previstas na legislação societária e nas normas contábeis brasileiras.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a00_q46",
        "question": "O objetivo das demonstrações",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "contábeis é fornecer informações úteis para a tomada de decisão econômica pelos usuários dessas\ninformações.\nRelativamente aos conceitos básicos da ciência contábil, julgue o item que se segue.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a00_q47",
        "question": "Uma finalidade da ciência",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "contábil é observar se a riqueza administrativa está atingindo os fins propostos pelo sujeito contábil.\nRelativamente aos conceitos básicos da ciência contábil, julgue o item que se segue.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a00_q48",
        "question": "O fornecimento de",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "informações úteis para a tomada de decisão pelos agentes econômicos é uma das finalidades da\nciência contábil.\nQuanto aos grupos patrimoniais utilizados na contabilidade, julgue o próximo item.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a00_q49",
        "question": "O patrimônio de uma entidade é representado, nas",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "demonstrações contábeis, apenas pelos grupos do ativo, haja vista os grupos do passivo, que\nrepresentam o patrimônio de terceiros.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a00_q50",
        "question": "Na equação patrimonial,",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "A o ativo está inversamente relacionado ao passivo.\nB o ativo está inversamente relacionado ao patrimônio líquido.\nC o patrimônio líquido está diretamente relacionado ao ativo.\nD o passivo está diretamente relacionado ao patrimônio líquido.\n\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pós-Edital)\n\n55\n",
        "type": "true-false"
      },
      {
        "id": "a00_q51",
        "question": "Segundo a teoria contábil contemporânea, a",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "contabilidade é mais adequadamente classificada como uma\nA metodologia.\nB técnica.\nC arte.\nD prática.\nE ciência.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a00_q52",
        "question": "A contabilidade tem por objeto",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "A o registro dos eventos que afetam o patrimônio.\nB o sistema de contas.\n\n==338b5d==\n\nC a divulgação de informações úteis ao usuário.\nD as entidades contábeis em geral.\nE o patrimônio das entidades.\n",
        "type": "true-false"
      },
      {
        "id": "a00_q53",
        "question": "Com relação a conceitos, objetivos e",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "finalidade da contabilidade, julgue os próximos itens.\nI. O principal objetivo da contabilidade inclui fornecer informação útil ao usuário, para a tomada de decisão.\nII. Não é finalidade da contabilidade controlar o patrimônio da instituição, pois isso cabe aos sistemas de\ninventário.\nIII. A contabilidade tem a responsabilidade de criar o sistema gerencial para apuração de custos.\nIV. A principal função da contabilidade é apurar os tributos federais, estaduais e municipais.\nAssinale a opção correta.\nA Nenhum item está certo.\nB Apenas o item I está certo.",
        "type": "true-false"
      },
      {
        "id": "a00_q54",
        "question": "Fornecer informações úteis que subsidiem o",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "processo de tomada de decisões econômicas é um dos principais objetivos da contabilidade.\n\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pós-Edital)\n\n56\n\nwww.estrategiaconcursos.com.br\n\n61",
        "type": "true-false"
      },
      {
        "id": "a00_q55",
        "question": "Segundo o Comitê de",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Pronunciamentos Contábeis (CPC – Estrutura Conceitual para Elaboração e Divulgação de Relatório\nContábil-Financeiro), os relatórios contábeis-financeiros “objetivam fornecer informações que sejam\núteis na tomada de decisões econômicas e avaliações por parte dos usuários em geral, não tendo o\npropósito de atender finalidade ou necessidade específica de determinados grupos de usuários”.\nAinda que destinados a usuários em geral, esses relatórios destinam-se prioritariamente à tomada de\ndecisão por parte\na) do fisco.\nb) dos governos em geral.\nc) dos órgãos supervisores.",
        "type": "true-false"
      },
      {
        "id": "a00_q56",
        "question": "O principal objetivo da contabilidade é",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "fornecer informações úteis sobre o patrimônio da entidade para finalidades diversas, entre as quais,\nplanejamento, controle e auxílio no processo decisório.\nEm relação aos conceitos, objetivos e finalidades da contabilidade, julgue o item subsequente.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a00_q57",
        "question": "O objeto de estudo da contabilidade são as",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "entidades econômico-administrativas, o que inclui as instituições com fins sociais.\nEm relação aos conceitos, objetivos e finalidades da contabilidade, julgue o item subsequente.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a00_q58",
        "question": "A análise de balanços não é considerada uma",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "técnica contábil, tendo em vista que foi formulada e desenvolvida no âmbito da administração\nfinanceira.\nA respeito da contabilidade geral, julgue o item a seguir.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a00_q59",
        "question": "A contabilidade teórica consiste no registro das",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "operações de determinada entidade em livros mantidos para essa finalidade.\nConsiderando que a contabilidade é a ciência que estuda os fenômenos patrimoniais sob o aspecto da\nfinalidade organizacional, julgue o item a seguir, no que se refere a conceitos, objetivos e finalidades da\ncontabilidade.\n\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pós-Edital)\n\n57\n",
        "type": "true-false"
      },
      {
        "id": "a00_q60",
        "question": "Sob a ótica citada, o objeto da contabilidade é o",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "patrimônio do ente contábil específico.\nConsiderando que a contabilidade é a ciência que estuda os fenômenos patrimoniais sob o aspecto da\nfinalidade organizacional, julgue o item a seguir, no que se refere a conceitos, objetivos e finalidades da\ncontabilidade.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a00_q61",
        "question": "A contabilidade integra o rol das ciências exatas",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "por estar dedicada à mensuração da riqueza do ente contábil.\nConsiderando que a contabilidade é a ciência que estuda os fenômenos patrimoniais sob o aspecto da\nfinalidade organizacional, julgue o item a seguir, no que se refere a conceitos, objetivos e finalidades da\ncontabilidade.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a00_q62",
        "question": "Para o estudo da contabilidade, patrimônio é a diferença",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "entre ativos e passivos detidos pelas entidades.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a00_q63",
        "question": "As informações contábeis devem ser mensuradas e",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "divulgadas a diversos usuários. Considerando as necessidades específicas de cada usuário quanto às\ninformações contábeis, julgue os itens a seguir.\nI As instituições financeiras estão interessadas em informações relativas ao endividamento da empresa e à\nexistência de liquidez suficiente para que ela honre com o pagamento dos empréstimos adquiridos.\nII Nas suas análises, o investidor busca avaliar a empresa que seja mais lucrativa e que pague maiores\ndividendos.\nIII As agências reguladoras, no cumprimento de suas funções, apuram o lucro tributável das concessionárias\nde serviço público com o ob",
        "type": "true-false"
      },
      {
        "id": "a00_q64",
        "question": "De acordo com Max Weber, a moderna organização racional da",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "empresa capitalista foi viabilizada pela contabilidade racional. Esse pensamento foi corroborado, na\nciência contábil, por Vicenzo Masi, que identificou como objeto da contabilidade.\na) as contas.\nb) a azienda.\n\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pós-Edital)\n\n58\n",
        "type": "true-false"
      }
    ]
  },
  {
    "id": "aula01",
    "title": "Aula 01: Contabilidade",
    "description": "Questões da Aula 01",
    "color": "bg-blue-600",
    "questions": [
      {
        "id": "a01_q1",
        "question": "Ativo + patrimônio líquido < passivo exigível é uma expressão que",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nO quesito afirmou que o passivo é maior do que a soma do ativo e do PL. Isso indica que mesmo se nos\ndesfizermos de todos os bens e direitos, não será suficiente para quitar as obrigações. Essa parte do Passivo\npara o qual não temos recursos suficientes para pagar é denominada passivo a descoberto. Essa questão é\nrecorrente em provas! Vejam que a expressão é utilizada pois há um passivo que está descoberto\nNeste tipo de situação, temos:\n•\n•\n\nAtivo < Passivo\nPatrimônio Líquido < 0\n\nO Passivo não fica com valores negativos, o PL é que fica.",
        "type": "true-false"
      },
      {
        "id": "a01_q2",
        "question": "Verifica-se uma situação líquida positiva caso haja, no balanço patrimonial",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nA situação líquida é a diferença entre os Ativo e os Passivo de determinada entidade.\nTipos de situações líquidas existentes:\n•\n•\n•\n\nAtivo maior do que passivo → Situação Líquida Favorável, Ativa, Positiva ou Superavitária\nAtivo menor do que passivo (passivo a descoberto) → Situação líquida Desfavorável, Negativa ou\nDeficitária:\nAtivo igual ao passivo → Situação Líquida Nula ou Inexistente\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pós-Edital)\n\n25\n\nwww.estrategiaconcursos.com.br\n\n48\n\n\fLuciano Rosa, Júlio Cardozo\nAula 01\n\n•\n\nAtivo igual à s",
        "type": "true-false"
      },
      {
        "id": "a01_q3",
        "question": "No cotidiano das entidades contábeis, é impossível ocorrer uma",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nSegundo a equação básica da contabilidade:\nAtivo = Passivo + PL\nFique esperto! Podemos escrevê-la nas seguintes formas:\n•\n\nIsolando o Ativo\nAtivo = Passivo + PL\n\n•\n\nIsolando o PL\nPL = Ativo - Passivo\n\n•\n\nIsolando o Passivo\n\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pós-Edital)\n\n26\n\nwww.estrategiaconcursos.com.br\n\n48\n\n\fLuciano Rosa, Júlio Cardozo\nAula 01\n\nPassivo = Ativo – PL\nVeja que o quesito trouxe a fórmula com o PL isolado. Só que, para dificultar a banca quer que gastemos\nnossa matemática: o módulo de Passivo significa que devemos de",
        "type": "true-false"
      },
      {
        "id": "a01_q4",
        "question": "Em uma entidade em que o total de passivos se",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nA situação líquida é a diferença entre os Ativo e os Passivo de determinada entidade.\nTipos de situações líquidas existentes:\n•\n•\n•\n•\n\nAtivo maior do que passivo → Situação Líquida Favorável, Ativa, Positiva ou Superavitária\nAtivo menor do que passivo (passivo a descoberto) → Situação líquida Desfavorável, Negativa ou\nDeficitária:\nAtivo igual ao passivo → Situação Líquida Nula ou Inexistente\nAtivo igual à situação líquida → Este é o caso típico da constituição da sociedade\n\nConsequências:\n•\n•\n•\n\nAtivo pode ser maior ou igual a zero.\nPassivo pode ser maior ou igual a zero.\nPL pode ",
        "type": "true-false"
      },
      {
        "id": "a01_q5",
        "question": "Passivo a descoberto é a situação na qual os",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nItem correto, pessoal. Passivo a descoberto é a situação líquida em que se “deve mais do que se\ntem”. Imagine uma empresa que tenha tão-somente R$ 1.000 em caixa e um carro velho avaliado em R$\n1.000, mas deve R$ 2.500 a um fornecedor. Esta é a chamada situação líquida negativa, pois os elementos\nnegativos superam os elementos positivos do balanço. A entidade chega nesse estado quando os prejuízos\nacumulados pela empresa superam os capitais investidos pelos sócios e os demais itens que integram o\npatrimônio líquido.",
        "type": "true-false"
      },
      {
        "id": "a01_q6",
        "question": "Se no início de certo exercício, uma empresa",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nItem correto, pessoal. Nesta situação o ativo é igual ao passivo exigível, não havendo que se falar em resíduo\n(sobra) para os proprietários no caso de dissolução da empresa, isto é, não existe capital próprio. Assim\nsendo, se no exercício seguinte as receitas e os ganhos da empresa superaram as despesas e as perdas, ela\nvai apurar lucro. Portanto, a situação patrimonial líquida final da empresa é superavitária.",
        "type": "true-false"
      },
      {
        "id": "a01_q7",
        "question": "No balanço patrimonial, o ativo representa as aplicações",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nItem correto. O balanço patrimonial é dividido em ativo, passivo e patrimônio líquido. e\n\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pós-Edital)\n\n28\n\nwww.estrategiaconcursos.com.br\n\n48\n\n\fLuciano Rosa, Júlio Cardozo\nAula 01\n\n- O lado esquerdo do balanço patrimonial, POR UMA CONVENÇÃO, é chamado de lado positivo do balanço\npatrimonial, apresenta as aplicações de recursos e elenca os bens e direitos que estão sob o controle dessa\nentidade. Também por CONVENÇÃO é chamado de lado DEVEDOR OU LADO DOS DÉBITOS.\n- O lado direito do balanço patrimon",
        "type": "true-false"
      },
      {
        "id": "a01_q8",
        "question": "Na equação patrimonial,",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nA equação fundamental do patrimônio é a seguinte: Ativo = Passivo + PL.\nEm termos matemáticos, o patrimônio líquido e o passivo estão diretamente relacionados com o ativo, isto\né, aumento nesses grupos, refletem positivamente no ativo e vice-versa. E o patrimônio líquido está\ninversamente relacionado com o passivo.",
        "type": "true-false"
      },
      {
        "id": "a01_q9",
        "question": "Quando a situação líquida de uma entidade for negativa,",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\n\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pós-Edital)\n\n29\n\nwww.estrategiaconcursos.com.br\n\n48\n\n\fLuciano Rosa, Júlio Cardozo\nAula 01\n\nA situação líquida negativa é quando o total de bens e direitos (Ativo) é menor que o total das obrigações\n(Passivo). Neste tipo de situação, temos:\n▪\n▪\n\nAtivo < Passivo\nPatrimônio Líquido < 0\n\nEsta é a chamada situação líquida negativa, pois os elementos negativos superam os elementos positivos do\nbalanço. Essa parte do Passivo para o qual não temos recursos suficientes para pagar é denominada passivo\na de",
        "type": "true-false"
      },
      {
        "id": "a01_q10",
        "question": "Em dado exercício social, uma entidade",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nSe o passivo suplantar o ativo, estamos diante de uma situação de passivo a descoberto. Esta é a situação\nlíquida em que se “deve mais do que se tem”.\nImagine uma empresa que tenha tão-somente R$ 1.000 em caixa e um carro velho avaliado em R$ 1.000,\nmas deve R$ 2.500 a um fornecedor. Esta é a chamada situação líquida negativa, pois os elementos\nnegativos superam os elementos positivos do balanço.\nVisto que, numa situação de passivo a descoberto, em vez de representarmos o patrimônio pela equação\npadrão: “Ativo = Passivo + PL”, na verdade, teríamos: Passivo = Ativo + Passivo a Desc",
        "type": "true-false"
      },
      {
        "id": "a01_q11",
        "question": "Considerando que as informações (em reais) acima se",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nClassificando as contas, temos o seguinte:\nAtivo = 65.000\nativo imobilizado\n\n35.000\n\ncaixa e equivalentes de caixa\n\n10.000\n\n(-) depreciação acumulada\nestoques\n\n(4.000)\n24.000\n\n*Depreciação Acumulada é uma conta patrimonial, especificadamente uma retificadora do Ativo. Utilizada\npara registrar o desgaste do imobilizado ao longo de sua vida útil.\nPassivo = 52.000\nfornecedores\n\n22.000\n\nempréstimos a pagar no longo prazo 30.000\nA equação fundamental do patrimônio é a seguinte:\nAtivo = Passivo + PL\n\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pó",
        "type": "true-false"
      },
      {
        "id": "a01_q12",
        "question": "Uma entidade apresentou as seguintes informações",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nClassificando as contas, temos o seguinte:\nAtivo = 71.400\nativo imobilizado\n\n36.000\n\ncaixa e equivalentes de caixa\n\n12.000\n\n(-) depreciação acumulada\n\n(3.600)\n\nestoques\n\n27.000\n\n*Depreciação Acumulada é uma conta patrimonial, especificadamente uma retificadora do Ativo. Utilizada\npara registrar o desgaste do imobilizado ao longo de sua vida útil.\nPassivo = 82.000\nfornecedores\n\n38.000\n\nempréstimos a pagar no longo prazo\n\n44.000\n\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pós-Edital)\n\n32\n\nwww.estrategiaconcursos.com.br\n\n48\n\n\fLuciano Rosa, Jú",
        "type": "true-false"
      },
      {
        "id": "a01_q13",
        "question": "A situação patrimonial de uma entidade em dado",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        "correct": 0,
        "explanation": "Comentários:\nO balanço patrimonial evidencia a situação patrimonial e financeira da entidade, a chamada estática\npatrimonial. Esquematizemos:\nPosição Patrimonial\n\n•Relação de Bens, Direitos e Obrigações da Entidade\n\nPosição Financeira\n\n•Valor Monetário dos itens patrimoniais\n\nÉ como se tirássemos uma fotografia da companhia em determinado ponto. Então, ao final do que\nchamamos de exercício social, pegamos todos os saldos dos elementos patrimoniais e colocamos nas\ndiversas demonstrações contábeis.",
        "type": "multiple-choice"
      },
      {
        "id": "a01_q14",
        "question": "Em 31 de dezembro de 2020, a situação patrimonial líquida",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nA situação líquida representa a quanto os sócios empregam de patrimônio à sociedade, com recursos\npróprios, seja na forma do Capital Social ou dos lucros apurados durante as operações da empresa e que não\nsão distribuídos. Representa o total do Patrimônio Líquido da entidade em determinado momento.\nResolvendo a nossa questão, vamos classificar as contas e montar o balanço.\nElemento Patrimonial\nCaixa\nAplicações Financeira de Liquidez Imediata\nDepósitos em banco\nDuplicatas a Receber\nEstoques\nImóveis de uso próprio\nDepreciação Acumulada\nTotal do Ativo\nEmpréstimo a pagar\nFornecedores\n",
        "type": "true-false"
      },
      {
        "id": "a01_q15",
        "question": "Os saldos dos recursos aplicados no ativo da empresa",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nVamos analisar a nossa questão. Uma dica que sempre damos em questões do Cebraspe é dividir um item e\npartes para julgá-lo. Vejam:\nPrimeira parte: Os saldos dos recursos aplicados no ativo da empresa totalizaram R$ 350.000,00 em\n31.12.2020.\nClassificando as contas corretamente, teríamos:\nElemento Patrimonial\nCaixa\nAplicações Financeira de Liquidez Imediata\nDepósitos em banco\nDuplicatas a Receber\nEstoques\nImóveis de uso próprio\nDepreciação Acumulada\nTotal do Ativo\n\nValor (R$)\nClassificação\nR$20.000,00\nAtivo\nR$30.000,00\nAtivo\nR$10.000,00\nAtivo\nR$50.000,00\nAtivo\nR$40.000,00\nAtivo\nR$2",
        "type": "true-false"
      },
      {
        "id": "a01_q16",
        "question": "Na A contratação do novo funcionário é um ato",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nOs atos administrativos (também conhecido como atos contábeis) são atos relevantes que não alteram o\npatrimônio da entidade, tal como a contratação de empregados, o simples fato de se conceder fiança a um\nterceiro ou avalizar um cheque.\nRessaltamos que o registro de ATOS CONTÁBEIS pela Contabilidade Geral, é raro de acontecer e não\né obrigatório, mas pode ser feita através das contas de compensação. Ou seja, eles são controlados de forma\nextracontábil.",
        "type": "true-false"
      },
      {
        "id": "a01_q17",
        "question": "Situação líquida e patrimônio líquido são expressões",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nVamos dividir o item em três partes:\n“Situação líquida e patrimônio líquido são expressões sinônimas...”\nQuando o sócio vai constituir as atividades empresariais ele emprega somente capitais de terceiros ou\ntambém entrega capitais próprios (pertencentes a ele - sócio) às atividades? Ora, entrega também capital\npróprio. Na contabilidade, este capital próprio é chamado de situação líquida.\nA situação líquida representa o quanto os sócios empregam de patrimônio à sociedade, com recursos\npróprios. Todavia, é praxe que a expressão situação líquida seja entendida também como patrimônio\n",
        "type": "true-false"
      },
      {
        "id": "a01_q18",
        "question": "No que diz respeito aos estados patrimoniais, é",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nA situação líquida representa o quanto os sócios empregam de patrimônio à sociedade, com recursos\npróprios. Vamos supor que dois sócios empreguem, ao todo, R$ 20.000,00 de capital nas atividades (e este\né o único fato contábil existente), teremos:\n\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pós-Edital)\n\n37\n\nwww.estrategiaconcursos.com.br\n\n48\n\n\fLuciano Rosa, Júlio Cardozo\nAula 01\n\nBancos\n\nTotal\n\nBALANÇO PATRIMONIAL\nATIVO\nPASSIVO\n20.000,00\nPATRIMÔNIO LÍQUIDO\nCapital\n20.000,00\n20.000,00\nTotal\n20.000,00\n\nNeste tipo de situação, temos:\n•\n•\n\nAti",
        "type": "true-false"
      },
      {
        "id": "a01_q19",
        "question": "Uma entidade cujos bens e direitos somem R$ 2",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nSabemos que:\n•\n•\n•\n\nAtivo = R$ 2.000.000,00\nPassivo = R$ 5.000.000,00\nPL = ?\n\nComo os bens e direitos não são iguais às obrigações, devemos achar a situação através da equação básica\nda contabilidade.\nAtivo = Passivo + Situação Líquida\n2.000.000,00 = R$ 5.000.000,00 + Situação Líquida\nSituação Líquida = - 3.000.000,00\nEsta é a chamada situação líquida negativa, pois os elementos negativos superam os elementos positivos do\nbalanço. Essa parte do Passivo para o qual não temos recursos suficientes para pagar é denominada passivo\na descoberto. Essa questão é recorrente em concursos! V",
        "type": "true-false"
      },
      {
        "id": "a01_q20",
        "question": "Quando o passivo é igual ao ativo subtraído do",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nA questão evidencia a seguinte situação:\nPassivo = Ativo - Patrimônio Líquido\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pós-Edital)\n\n39\n\nwww.estrategiaconcursos.com.br\n\n48\n\n\fLuciano Rosa, Júlio Cardozo\nAula 01\n\n•\n•\n•\n\nPassivo > 0\nAtivo > 0\nPatrimônio Líquido\n\n>0\n\nVamos supor os seguintes valores para facilitar:\n•\n•\n•\n\nPassivo = R$ 500,00\nAtivo = R$ 2.000,00\nPatrimônio Líquido =?\n\nHá que se observar que o ativo é maior do que o passivo exigível por terceiros (isto é, obrigações). Como os\nbens e direitos não são iguais às obrigações, devemo",
        "type": "true-false"
      },
      {
        "id": "a01_q21",
        "question": "Com relação a patrimônio, julgue o item seguinte. A",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nPassivo a descoberto ocorre quando o passivo exigível é maior que o ativo (P > A). Nesse caso, temos o que\nalguns autores chamam de patrimônio líquido negativo, mas o nome tecnicamente mais correto é passivo\na descoberto. O Passivo não fica com valores negativos, o PL é que fica. Por exemplo, assim:\nBALANÇO PATRIMONIAL\nAtivo\n\nPassivo\nEmpréstimos a pagar\nPatrimônio Líquido\n10.000\nCapital Social\nPrejuízos Acumulados\nSaldo do PL\n10.000 Total (Passivo e PL)\n\nCaixa\n\nTotal (Ativo)\n\n12.000\n3.000\n-5.000\n-2.000\n10.000\n\nTal situação é representava pela seguinte equação:\nPassivo = Ativo - Pa",
        "type": "true-false"
      },
      {
        "id": "a01_q22",
        "question": "Os atos administrativos relevantes, como é o caso",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nO patrimônio societário sofre constante movimento, haja vista que sofrem atos de gestão contínua. Esses\nacontecimentos podem ser divididos basicamente em dois grandes grupos:\na) Atos contábeis.\nb) Fatos contábeis.\nOs atos contábeis são acontecimentos que ocorrem na entidade e não provocam alterações do patrimônio,\ntais como admissão de empregados, assinatura de um contrato de compra, venda, o aval de um título de\ncrédito, uma fiança prestada em favor de terceiros.\nOs atos relevantes que façam parte das atividades da empresa devem ser apresentados em notas\nexplicativas, como ordena",
        "type": "true-false"
      },
      {
        "id": "a01_q23",
        "question": "Ativo + patrimônio líquido < passivo exigível é uma expressão que",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "sintetiza a situação de passivo a descoberto.\nJulgue o item a seguir, em relação ao patrimônio contábil.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a01_q24",
        "question": "Verifica-se uma situação líquida positiva caso haja, no balanço patrimonial",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "de uma entidade, apenas os saldos especificados a seguir.\ncaixa e equivalentes: R$ 10.000\ncontas a receber: R$ 25.000\ncontas a pagar: R$ 15.000\npatrimônio líquido: R$ 20.000\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a01_q25",
        "question": "No cotidiano das entidades contábeis, é impossível ocorrer uma",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "situação patrimonial expressa por ativos + | passivos | = patrimônio líquido, em que a simbologia | x|\nrepresenta o valor absoluto de x.\nRelativamente aos conceitos, objetivos, objeto e finalidades da contabilidade, julgue o item a seguir.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a01_q26",
        "question": "Em uma entidade em que o total de passivos se",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "iguala ao total de seus ativos, ocorre o chamado passivo a descoberto.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a01_q27",
        "question": "Passivo a descoberto é a situação na qual os",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "prejuízos acumulados pela empresa superam os capitais investidos pelos sócios e os demais itens que\nintegram o patrimônio líquido.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a01_q28",
        "question": "Se no início de certo exercício, uma empresa",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "possuía situação patrimonial líquida zerada, e se, ao longo do exercício, as receitas e os ganhos\nsuperaram as despesas e as perdas, então, nesse contexto, a situação patrimonial líquida final da\nempresa é superavitária.\nAcerca das demonstrações contábeis, julgue o item a seguir.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a01_q29",
        "question": "No balanço patrimonial, o ativo representa as aplicações",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "de recursos, enquanto o passivo e o patrimônio líquido revelam as fontes que financiam as referidas\naplicações.\n\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pós-Edital)\n\n42\n\nwww.estrategiaconcursos.com.br\n",
        "type": "true-false"
      },
      {
        "id": "a01_q30",
        "question": "Na equação patrimonial,",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "A o ativo está inversamente relacionado ao passivo.\nB o ativo está inversamente relacionado ao patrimônio líquido.\nC o patrimônio líquido está diretamente relacionado ao ativo.\nD o passivo está diretamente relacionado ao patrimônio líquido.\nE o patrimônio líquido está diretamente relacionado ao passivo.\nQuanto aos grupos patrimoniais utilizados na contabilidade, julgue o próximo item.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a01_q31",
        "question": "Quando a situação líquida de uma entidade for negativa,",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "isso significa que o somatório dos saldos das contas de passivo é menor que o somatório dos saldos\ndas contas de ativo.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a01_q32",
        "question": "Em dado exercício social, uma entidade",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "apresentou passivo a descoberto.\nNessa situação,\nA o passivo é insuficiente para financiar todo o ativo.\nB a soma modular do ativo com o patrimônio líquido é igual ao passivo.\nC o montante do patrimônio líquido supera o do passivo.\nD a diferença entre o total do ativo e o total do passivo é igual a zero.\nfornecedores\n\n22.000",
        "type": "true-false"
      },
      {
        "id": "a01_q33",
        "question": "Considerando que as informações (em reais) acima se",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "refiram ao primeiro exercício financeiro de determinada entidade, assinale a opção em que é\napresentado corretamente o valor da situação líquida patrimonial desse período.\nA negativa em R$ 11.000,00\nB negativa em R$ 7.000,00\nC positiva em R$ 7.000,00\nD positiva em R$ 13.000,00\nE positiva em R$ 17.000,00\n\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pós-Edital)",
        "type": "true-false"
      },
      {
        "id": "a01_q34",
        "question": "Uma entidade apresentou as seguintes informações",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "(em reais) durante seu primeiro exercício financeiro:\nfornecedores\n\n38.000\n\nativo imobilizado\n\n36.000\n",
        "type": "true-false"
      },
      {
        "id": "a01_q35",
        "question": "A situação patrimonial de uma entidade em dado",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "momento é relatada\na) pelo balanço patrimonial.\nb) pela demonstração de resultado do exercício.\nc) pela demonstração dos fluxos de caixa.\nd) pelo ativo.\ne) pelo patrimônio líquido.\nDeterminada empresa apresentou, em 31 de dezembro de 2020, um patrimônio composto pelos seguintes\nelementos, cujo registro e cuja avaliação contábeis estão de acordo com as regras estabelecidas na legislação\nsocietária (Lei n.º 6.404/1976 e suas alterações).",
        "type": "true-false"
      },
      {
        "id": "a01_q36",
        "question": "Em 31 de dezembro de 2020, a situação patrimonial líquida",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "da empresa alcançou o montante de R$ 230.000,00.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a01_q37",
        "question": "Os saldos dos recursos aplicados no ativo da empresa",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "totalizaram R$ 350.000,00 em 31 de dezembro de 2020; desse total R$ 120.000 foram provenientes de\ncapital de terceiros.\nUma empresa com fins lucrativos prestadora de serviços ao governo do estado do Ceará contratou, no dia\n1.º do último mês findo, um novo funcionário de relações públicas, com salário de R$ 10.000, mais encargos\nlegais, a ser pago no 5.º dia útil após o mês de prestação dos serviços.\nCom relação à situação hipotética anterior, julgue os itens seguintes.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a01_q38",
        "question": "Na A contratação do novo funcionário é um ato",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "administrativo que impacta positivamente o patrimônio líquido da entidade contratante.\nJulgue o item a seguir, relativo ao patrimônio das entidades.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a01_q39",
        "question": "Situação líquida e patrimônio líquido são expressões",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "sinônimas, mas a primeira é mais adequada para expressar o estado patrimonial da entidade,\nenquanto a segunda é de utilização obrigatória no balanço patrimonial.\n\nJulgue o item a seguir, relativo ao patrimônio das entidades.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a01_q40",
        "question": "No que diz respeito aos estados patrimoniais, é",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "possível que ativo e passivo tenham valor igual a zero, respectivamente, na constituição e no\nencerramento das atividades da empresa.\n\nJulgue o item a seguir, relativo ao patrimônio das entidades.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a01_q41",
        "question": "Uma entidade cujos bens e direitos somem R$ 2",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "milhões e que possua obrigações que totalizem R$ 5 milhões estará em uma situação líquida que pode\nser definida como ativo a descoberto ou deficitária\n\nJulgue o item a seguir, relativo ao patrimônio das entidades.\n\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pós-Edital)\n\n45\n",
        "type": "true-false"
      },
      {
        "id": "a01_q42",
        "question": "Quando o passivo é igual ao ativo subtraído do",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "patrimônio líquido, sendo todos maiores que zero, tem-se a situação patrimonial conhecida como\npositiva, ativa ou superavitária.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a01_q43",
        "question": "Com relação a patrimônio, julgue o item seguinte. A",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "situação patrimonial líquida em que o total de passivos supera o montante do patrimônio líquido é\ndenominada passivo a descoberto.\n\nEm relação aos atos e fatos administrativos, julgue o próximo item.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a01_q44",
        "question": "Os atos administrativos relevantes, como é o caso",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "de fianças para terceiros, podem, futuramente, modificar o patrimônio da entidade.\n==338b5d==\n\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pós-Edital)\n\n46\n\nwww.estrategiaconcursos.com.br\n",
        "type": "true-false"
      }
    ]
  },
  {
    "id": "aula01II",
    "title": "Aula 01-II: Contabilidade",
    "description": "Questões da Aula 01-II",
    "color": "bg-blue-600",
    "questions": [
      {
        "id": "a01II_q1",
        "question": "No rol de contas apresentado, há duas contas credoras que não",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nAs contas CREDORAS representam a ORIGEM dos recursos, assim, contas de Passivo, Patrimônio Líquido e\nas contas de Receitas possuem natureza CREDORA, isto é, GOSTAM de CRÉDITO. Uma dívida com fornecedor,\nou seja, um passivo, é a origem de recursos para poder adquirir uma mercadoria a prazo. O Capital Social é\na origem de recursos, oriundas dos sócios, para que a empresa inicie as suas atividades. Ainda temos as\nretificadoras do Ativo. Pessoal, retificar traz a ideia de corrigir, ajustar, não é mesmo? Assim sendo, esse tipo\nespecial de conta possui natureza contrária ao grupo no qua",
        "type": "true-false"
      },
      {
        "id": "a01II_q2",
        "question": "No rol de contas apresentado, existem sete contas de natureza",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nQuanto à natureza, as contas podem ser classificadas em CONTAS DEVEDORAS OU CREDORAS.\nQuanto à natureza, as Contas Devedoras representam APLICAÇÕES DE RECURSOS, por isso que as contas de\nAtivo e as contas de Despesas possuem natureza DEVEDORA, isto é, GOSTAM de DÉBITO. Estamos\nAPLICANDO RECURSOS em Bens e Direitos, como dinheiro em caixa, estoques, máquinas e despesas com\nsalários, por exemplo. Ainda temos as retificadoras do Passivo e do PL. Pessoal, retificar traz a ideia de\ncorrigir, ajustar, não é mesmo? Assim sendo, esse tipo especial de conta possui natureza contrária ao gru",
        "type": "true-false"
      },
      {
        "id": "a01II_q3",
        "question": "Os saldos devedores somam R$ 89 mil.",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nQuanto à natureza, as Contas Devedoras representam APLICAÇÕES DE RECURSOS, por isso que as contas de\nAtivo e as contas de Despesas possuem natureza DEVEDORA, isto é, GOSTAM de DÉBITO. Estamos\n\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pós-Edital)\n\n28\n\nwww.estrategiaconcursos.com.br\n\n60\n\n\fLuciano Rosa, Júlio Cardozo\nAula 01 - Parte II\n\nAPLICANDO RECURSOS em Bens e Direitos, como dinheiro em caixa, estoques, máquinas e despesas com\nsalários, por exemplo. Ainda temos as retificadoras do Passivo e do PL. Pessoal, retificar traz a ideia de\ncor",
        "type": "true-false"
      },
      {
        "id": "a01II_q4",
        "question": "Os saldos credores somam R$ 82 mil.",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nAs contas CREDORAS representam a ORIGEM dos recursos, assim, contas de Passivo, Patrimônio Líquido e\nas contas de Receitas possuem natureza CREDORA, isto é, GOSTAM de CRÉDITO. Uma dívida com fornecedor,\nou seja, um passivo, é a origem de recursos para poder adquirir uma mercadoria a prazo. O Capital Social é\na origem de recursos, oriundas dos sócios, para que a empresa inicie as suas atividades. Ainda temos as\nretificadoras do Ativo. Pessoal, retificar traz a ideia de corrigir, ajustar, não é mesmo? Assim sendo, esse tipo\nespecial de conta possui natureza contrária ao grupo no qua",
        "type": "true-false"
      },
      {
        "id": "a01II_q5",
        "question": "Contas de débito são contas típicas do ativo e das",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nPara facilitar vamos analisar em duas partes:\nParte 1 - Contas de débito são contas típicas do ativo e das despesas\nTraduzindo: Contas de débito = Natureza devedora\nQuanto à natureza, as Contas Devedoras representam APLICAÇÕES DE RECURSOS, por isso que as contas de\nAtivo e as contas de Despesas possuem natureza DEVEDORA, isto é, GOSTAM de DÉBITO. Parte 1 está certa.\nParte 2 - contas de crédito são tipicamente usadas para expressar itens do passivo e das receitas.\nTraduzindo: Contas de crédito = Natureza credora\nAs contas CREDORAS representam a ORIGEM dos recursos, assim, contas de",
        "type": "true-false"
      },
      {
        "id": "a01II_q6",
        "question": "Assinale a opção que indica apenas contas",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nQuanto à natureza, as contas podem ser classificadas em CONTAS DEVEDORAS OU CREDORAS.\nAs contas CREDORAS representam a ORIGEM dos recursos, assim, contas de Passivo, Patrimônio Líquido e\nas contas de Receitas possuem natureza CREDORA, isto é, GOSTAM de CRÉDITO. Uma dívida com fornecedor,\nou seja, um passivo, é a origem de recursos para poder adquirir uma mercadoria a prazo. O Capital Social é\na origem de recursos, oriundas dos sócios, para que a empresa inicie as suas atividades.\nAinda temos as retificadoras do Ativo. Pessoal, retificar traz a ideia de corrigir, ajustar, não é mes",
        "type": "true-false"
      },
      {
        "id": "a01II_q7",
        "question": "As contas consideradas retificadoras no balanço",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nPessoal, retificar traz a ideia de corrigir, ajustar, não é mesmo? Assim sendo, esse tipo especial de conta\npossui natureza contrária ao grupo no qual está inserida.\nComo assim, professores? Já explicamos!\n\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pós-Edital)\n\n31\n\nwww.estrategiaconcursos.com.br\n\n60\n\n\fLuciano Rosa, Júlio Cardozo\nAula 01 - Parte II\n\nUma conta retificadora do PL, não possui a natureza desse grupo, isto é, credora; possui natureza devedora.\nLogo, ela ao invés de aumentar o saldo do grupo, irá diminuí-lo. Se eu tenho uma cont",
        "type": "true-false"
      },
      {
        "id": "a01II_q8",
        "question": "O saldo credor em uma conta de estoques de",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nA conta estoques pertence ao ativo da entidade. Vimos que o ativo possui saldo devedor, por conta disso\nessa conta só poderá ter saldo devedor ou nulo. Dessa forma, um saldo credor nessa conta indica que houve\num erro na escrituração.",
        "type": "true-false"
      },
      {
        "id": "a01II_q9",
        "question": "O saldo final encontrado em uma conta não altera a",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nQuanto à natureza, as contas podem ser classificadas em CONTAS DEVEDORAS OU CREDORAS. Algumas\ncontas aumentam por meio de débito (contas de natureza devedora), outras por meio de crédito (contas de\nnatureza credora). Assim, gravemos:\n- Contas de natureza devedora: contas de ativo (bens e direitos), contas de despesa, retificadoras do Passivo\ne retificadoras do PL.\n- Contas de natureza credora: contas do passivo (obrigações), contas do patrimônio líquido, contas de receita\ne retificadoras do Ativo.\n\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025",
        "type": "true-false"
      },
      {
        "id": "a01II_q10",
        "question": "Considere o conjunto de contas a seguir,",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nQuanto à natureza, as contas podem ser classificadas em CONTAS DEVEDORAS OU CREDORAS.\nContas Devedoras representam APLICAÇÕES DE RECURSOS, por isso que as contas de Ativo e as contas de\nDespesas possuem natureza DEVEDORA, isto é, GOSTAM de DÉBITO.\n\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pós-Edital)\n\n33\n\nwww.estrategiaconcursos.com.br\n\n60\n\n\fLuciano Rosa, Júlio Cardozo\nAula 01 - Parte II\n\nEstamos APLICANDO RECURSOS em Bens e Direitos, como dinheiro em caixa, estoques, máquinas e despesas\ncom salários, por exemplo.\nAinda temos as retifica",
        "type": "true-false"
      },
      {
        "id": "a01II_q11",
        "question": "Considerando os conceitos de débitos e créditos das",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nQuanto à natureza, as contas podem ser classificadas em CONTAS DEVEDORAS OU CREDORAS.\nAs contas CREDORAS representam a ORIGEM dos recursos, assim, contas de Passivo, Patrimônio Líquido e\nas contas de Receitas possuem natureza CREDORA, isto é, GOSTAM de CRÉDITO. Uma dívida com fornecedor,\nou seja, um passivo, é a origem de recursos para poder adquirir uma mercadoria a prazo. O Capital Social é\na origem de recursos, oriundas dos sócios, para que a empresa inicie as suas atividades.\nAinda temos as retificadoras do Ativo. Pessoal, retificar traz a ideia de corrigir, ajustar, não é mes",
        "type": "true-false"
      },
      {
        "id": "a01II_q12",
        "question": "As contas sintéticas são as que agregam os valores",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nQuanto à possibilidade de agregarmos saldos de outras rubricas, podemos classificas as contas em analíticas\ne sintéticas.\nPor exemplo: a conta Estoque de Mercadorias. A empresa pode usar uma conta para agregar tudo o que ela\ntiver de estoques: Produto A Produto B, produtos semiacabados, itens de almoxarifado etc. Nesse caso, a\nconta Estoque de Mercadorias é classificada como SINTÉTICA porque resume tudo que a empresa possui de\nestoques.\nAgora, a empresa pode registrar separadamente cada um desses itens, em contas ANALÍTICAS, ou seja,\ndetalhadas.\nAlgo que precisamos destacar é que ",
        "type": "true-false"
      },
      {
        "id": "a01II_q13",
        "question": "Os lançamentos em escrituração contábil podem",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nAlgo que precisamos destacar é que os lançamentos contábeis sempre serão feitos nas contas ANALÍTICAS,\ntudo bem? Não fazemos lançamentos contábeis em contas sintéticas.",
        "type": "true-false"
      },
      {
        "id": "a01II_q14",
        "question": "As contas de compensação não podem ser",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\n\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pós-Edital)\n\n37\n\nwww.estrategiaconcursos.com.br\n\n60\n\n\fLuciano Rosa, Júlio Cardozo\nAula 01 - Parte II\n\nSobre o registro de ATOS CONTÁBEIS pela Contabilidade Geral, é raro de acontecer e não é obrigatório, mas\npode ser feita através das contas de compensação. Isso é mais comum de ser visto no setor público.\nDe acordo com a ITG 2000, item 29, as Contas de compensação constituem sistema próprio para controle e\nregistro dos fatos relevantes que resultam em assunção de direitos e obrigações da entidade",
        "type": "true-false"
      },
      {
        "id": "a01II_q15",
        "question": "Entre as contas do ativo, são de natureza",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nQuanto à natureza, as contas podem ser classificadas em CONTAS DEVEDORAS OU CREDORAS.\n\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pós-Edital)\n\n38\n\nwww.estrategiaconcursos.com.br\n\n60\n\n\fLuciano Rosa, Júlio Cardozo\nAula 01 - Parte II\n\nAs contas CREDORAS representam a ORIGEM dos recursos, assim, contas de Passivo, Patrimônio Líquido e\nas contas de Receitas possuem natureza CREDORA, isto é, GOSTAM de CRÉDITO. Uma dívida com fornecedor,\nou seja, um passivo, é a origem de recursos para poder adquirir uma mercadoria a prazo. O Capital Social é\na o",
        "type": "true-false"
      },
      {
        "id": "a01II_q16",
        "question": "Os eventos cujo efeito uma sociedade",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nAo analisarmos todas as rubricas de uma entidade, o total dos débitos sempre terá que ser igual ao total\ndos créditos. Essa regra, em uma contabilidade regular, não comporta exceções e é consequência da\naplicação do Método das Partidas Dobradas.\nAs palavras débito e crédito, para a Contabilidade, representam APLICAÇÕES e ORIGENS de recursos,\nrespectivamente, e não representam algo negativo ou positivo.\nAs contas possuem basicamente duas naturezas: devedoras ou credoras. As contas de ativo e despesa\npossuem natureza devedora, por esse motivo, aumentam a débito e diminuem a crédito.",
        "type": "true-false"
      },
      {
        "id": "a01II_q17",
        "question": "Na contabilidade da empresa Beta, o",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nItem correto, na contabilidade, o método utilizado para se escriturar é o método das partidas dobradas.\nEsse método consiste em considerar que para todo e qualquer item que ingressa no patrimônio, há um\nlugar de onde ele é proveniente. Ou seja, não há geração espontânea de patrimônio, mas sim uma origem\npara todo elemento que se aplica no patrimônio, passando a integrá-lo.\nA origem dos recursos será representada por um lançamento a crédito e a respectiva aplicação será\ncontabilizada por um lançamento a débito. Como consequência desse método, não haverá débito sem o\nrespectivo créd",
        "type": "true-false"
      },
      {
        "id": "a01II_q18",
        "question": "Conforme o que estabelece a teoria",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nItem correto, pessoal e questão muito interessante. Segundo a teoria personalista, as contas são fictamente\ncomo pessoas. Temos três tipos de pessoas: proprietários, correspondentes e agentes consignatários.\nRepresenta a contabilidade sob uma visão mais jurídica.\nA) Proprietários: Os proprietários são os responsáveis pelas contas do patrimônio líquido e pelas receitas e\ndespesas da sociedade. Portanto, são contas dos proprietários: capital social, receita de vendas, custo da\nmercadoria vendida, ICMS sobre vendas, devoluções de vendas, receitas financeiras, reserva legal.\nB) Corres",
        "type": "true-false"
      },
      {
        "id": "a01II_q19",
        "question": "A respeito das contas de receitas e despesas, assinale",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        "correct": 0,
        "explanation": "Comentários:\na) As contas de receitas e despesas são contas de resultado, também denominadas de contas temporárias,\npois seus saldos são encerrados para a apuração do resultado da entidade.\nPela teoria patrimonialista, que é a utilizada na contabilidade hodierna, as contas podem ser divididas em\ndois grandes grupos, a saber:\nA) Contas patrimoniais: Representam as contas de ativo, passivo e patrimônio líquido.\nB) Contas de resultado: Representam as receitas e despesas.\nCerto, as contas de receitas e despesas são contas de resultado e são temporárias já que embora sejam\napuradas na demonstração ",
        "type": "multiple-choice"
      },
      {
        "id": "a01II_q20",
        "question": "Um registro de débito na contabilidade de uma",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        "correct": 0,
        "explanation": "Comentários:\nOs lançamentos a débito representam as aplicações dos recursos e geram aumento do saldo de contas\ndevedoras, ativos e despesas, e diminuem o saldo de contas credoras, passivo e receita.\nPor seu turno, os lançamentos a crédito representam as origens dos recursos e geram aumento do saldo de\ncontas credoras, passivo e receita, e diminuem o saldo de contas devedoras, ativos e despesas.",
        "type": "multiple-choice"
      },
      {
        "id": "a01II_q21",
        "question": "Contas caixa, ações em tesouraria e depreciação têm",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nClassifiquemos as contas....\nConta\nCaixa\nAções em tesouraria\nDepreciação\n\nO que são\nAumenta Diminui\nAtivo\nDébito Crédito\nPatrimônio Líquido (Retificadora) Débito Crédito\nDespesas\nDébito Crédito\n\nAtenção! Adotaremos a seguinte classificação:\n- Depreciação: Despesas (Resultado)\n- Depreciação acumulada: Retificadora Ativo\nAs três contas possuem natureza devedora, ou seja, aumentam quando são debitadas.",
        "type": "true-false"
      },
      {
        "id": "a01II_q22",
        "question": "Nessa situação hipotética, separando-se as contas",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nClassifiquemos conta a conta...\nContas\n\nR$\ncaixa\n25.300\naplicação financeira 5.700\nestoques\n4.000\nmóveis e utensílios 10.000\ndespesa de aluguel 3.000\n\nClassificação\ncontas patrimoniais\ncontas patrimoniais\ncontas patrimoniais\ncontas patrimoniais\ncontas de resultado\n\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pós-Edital)\n\n48\n\nwww.estrategiaconcursos.com.br\n\n60\n\n\fLuciano Rosa, Júlio Cardozo\nAula 01 - Parte II\n\nContas\nduplicadas a pagar\naluguel a pagar\ncapital social\nreceita de serviços\n\nR$\n8.200\n3.000\n30.000\n6.800\n\nClassificação\ncontas patrim",
        "type": "true-false"
      },
      {
        "id": "a01II_q23",
        "question": "As receitas e as despesas provocam variações",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nPela teoria patrimonialista, que é a utilizada na contabilidade hodierna, as contas podem ser divididas em\ndois grandes grupos, a saber:\nA) Contas patrimoniais: Representam as contas de ativo, passivo e patrimônio líquido.\nB) Contas de resultado: Representam as receitas e despesas.\nO Item erra ao afirmar que as contas de receitas e despesas são contas patrimoniais, já que elas, são contas\nde resultado conforme a teoria patrimonialista.\nAtenção! Na contabilidade, hoje, utilizamos essencialmente a teoria patrimonialista.",
        "type": "true-false"
      },
      {
        "id": "a01II_q24",
        "question": "As contas permitem o registro dos fatos",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nNa contabilidade, conta é o “nome dado aos componentes patrimoniais (bens, direitos e obrigações) e de\nresultado (despesas e receitas)”.\nDe agora em diante, quando falarmos em caixa de uma empresa, falaremos em conta caixa. Quando falarmos\nem bancos, entenda-se conta bancos. Os registros contábeis são feitos através das contas. Todos os\nacontecimentos que ocorrem na empresa, como compra, venda, pagamento, recebimento, são registrados\npor meio de contas.\nAs contas, a partir de agora, serão apresentadas no chamado razonete. Como funciona? A título de exemplo,\nmostremos o razonete da",
        "type": "true-false"
      },
      {
        "id": "a01II_q25",
        "question": "As contas de ativo e de despesas serão debitadas",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nVamos rever o nosso esquema:\nConta\nO que são\nExemplo\nAumenta Diminui\nAtivo\nBens e direitos\nCaixa, estoques Débito Crédito\nPassivo\nObrigações\nFornecedores\nCrédito Débito\nPatrimônio Líquido\nCapital próprio\nCapital social\nCrédito Débito\nReceitas\n\"Vendas, Serviços\"*\nVenda de merc. Crédito Débito\nDespesas\n\"Consumo de Bens e Serviços\"* Desp. de salár.\nDébito Crédito\n“As contas de ativo e de despesas serão debitadas sempre que for necessário aumentar os seus saldos, e\nserão creditadas quando a intenção for diminuí-los.”\nCerto, as contas de ativo e de despesas são de natureza devedora. Ou",
        "type": "true-false"
      },
      {
        "id": "a01II_q26",
        "question": "As contas retificadoras acompanham as respectivas",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\n\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pós-Edital)\n\n51\n\nwww.estrategiaconcursos.com.br\n\n60\n\n\fLuciano Rosa, Júlio Cardozo\nAula 01 - Parte II\n\nAs contas retificadoras possuem natureza contrária ao grupo no qual estão inseridas. Como assim, professor?\nJá explicamos!\nUma conta retificadora do Ativo, não possui a natureza desse grupo, isto é, devedora; possui natureza\ncredora. Logo, ela ao invés de aumentar o saldo do grupo, irá diminuí-lo.\nDe maneira similar, uma conta retificadora do Passivo ou Patrimônio, não possui natureza credora; po",
        "type": "true-false"
      },
      {
        "id": "a01II_q27",
        "question": "Pelo sistema de partidas dobradas, a conta caixa e",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nA conta Caixa é uma das mais importantes rubricas da Contabilidade. Está classificada no Ativo Circulante,\nmais especificamente no grupo Disponibilidades, portanto, possui natureza devedora, isto é, quando há\nentrada de recursos, seu saldo aumenta com lançamento a débito e quando há saída, seu saldo diminui\ncom lançamentos a crédito. Item, portanto, está correto.",
        "type": "true-false"
      },
      {
        "id": "a01II_q28",
        "question": "Uma conta de natureza devedora que não seja",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nTome nota! Resumindo:\n•\n•\n\nDespesas e Ativos representam APLICAÇÕES de recursos, por isso, possuem natureza devedora.\nPassivo, PL e Receitas representam ORIGENS de recurso, possuem natureza credora.\n\nPortanto, uma conta de natureza devedora que não seja retificadora, isto é, ativos e despesas, representam\naplicações de recursos.",
        "type": "true-false"
      },
      {
        "id": "a01II_q29",
        "question": "No rol de contas apresentado, há duas contas credoras que não",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "pertencem ao passivo exigível.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a01II_q30",
        "question": "No rol de contas apresentado, existem sete contas de natureza",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "devedora e cinco contas de natureza credora.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a01II_q31",
        "question": "Os saldos devedores somam R$ 89 mil.",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a01II_q32",
        "question": "Os saldos credores somam R$ 82 mil.",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "\nAcerca do plano de contas contábil e das contas que o integram, julgue o próximo item.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a01II_q33",
        "question": "Contas de débito são contas típicas do ativo e das",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "despesas; contas de crédito são tipicamente usadas para expressar itens do passivo e das receitas.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a01II_q34",
        "question": "Assinale a opção que indica apenas contas",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "credoras.\nA bancos, terrenos e patentes\nB promissórias a pagar, lucros acumulados e capital\nC duplicatas a receber, patentes e edificações\nD despesa de salários, empréstimos e capital\nE bancos, equipamentos e caixa\n\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pós-Edital)\n",
        "type": "true-false"
      },
      {
        "id": "a01II_q35",
        "question": "As contas consideradas retificadoras no balanço",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "patrimonial têm a mesma natureza dos grupos em que são apresentadas.\nJulgue o item a seguir, em relação aos tipos de registros que devem ser feitos nas respectivas contas e à\nnatureza dos saldos.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a01II_q36",
        "question": "O saldo credor em uma conta de estoques de",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "matérias-primas indica que a contabilização efetuada no período foi realizada sem erros.\nEm relação a contas e sua natureza e escrituração de fatos administrativos, julgue o item subsecutivo.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a01II_q37",
        "question": "O saldo final encontrado em uma conta não altera a",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "sua natureza, ainda que esteja errado.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a01II_q38",
        "question": "Considere o conjunto de contas a seguir,",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "extraído do plano de contas de determinada entidade.\ncaixa\ncontas a receber\nestoques\najuste de ativo a valor presente\nimobilizado\ndepreciação acumulada\nduplicatas descontadas\ncontas a pagar",
        "type": "true-false"
      },
      {
        "id": "a01II_q39",
        "question": "Considerando os conceitos de débitos e créditos das",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "contas contábeis, assinale a opção em que todas as contas contábeis relacionadas são de natureza credora.\n\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pós-Edital)\n\n54\n\nwww.estrategiaconcursos.com.br\n\n60",
        "type": "true-false"
      },
      {
        "id": "a01II_q40",
        "question": "As contas sintéticas são as que agregam os valores",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "dos grupos e subgrupos no plano de contas.\nJulgue o item subsequente, a respeito dos processos e procedimentos de escrituração.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a01II_q41",
        "question": "Os lançamentos em escrituração contábil podem",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "ser realizados em contas sintéticas que compõem um plano de contas.\nCom relação ao uso de planos de contas, julgue o item seguinte.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a01II_q42",
        "question": "As contas de compensação não podem ser",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "consideradas como contas analíticas.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a01II_q43",
        "question": "Entre as contas do ativo, são de natureza",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "credora as contas\nA cheques a compensar e investimento em coligadas.\nB depreciação acumulada e investimentos em coligadas.\nC cheques a compensar e clientes.\nD depreciação acumulada e provisão para devedores duvidosos.\nE títulos e valores mobiliários e reserva de capital.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a01II_q44",
        "question": "Os eventos cujo efeito uma sociedade",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "anônima terá de apresentar por meio de uma conta retificadora no seu balanço patrimonial incluem a\nI constituição de provisão para créditos de liquidação duvidosa.\nII aquisição de ações de emissão própria.\nIII constituição de provisão para ajustes por perdas no valor recuperável de ativos.\nIV constituição de provisão para riscos fiscais.\nV constituição de provisão para perda por redução no valor realizável líquido de ativos.\nEstão certos apenas os itens\nA I e II.\nB III e IV.",
        "type": "true-false"
      },
      {
        "id": "a01II_q45",
        "question": "Na contabilidade da empresa Beta, o",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "adiantamento efetuado pelo cliente representa, ao mesmo tempo, uma origem de recursos, com registro\na crédito de uma conta do passivo circulante, e uma aplicação de recursos, com registro a débito de uma\nconta do ativo circulante.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a01II_q46",
        "question": "Conforme o que estabelece a teoria",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "personalista, por ocasião do recebimento do adiantamento feito pelo cliente, a empresa Beta deve tratar\na conta caixa como se ela representasse uma pessoa com quem mantém um relacionamento, de modo\nque a conta caixa passa a ser devedora da empresa, no momento em que o adiantamento for recebido.\n\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pós-Edital)\n\n56\n\nwww.estrategiaconcursos.com.br",
        "type": "true-false"
      },
      {
        "id": "a01II_q47",
        "question": "A respeito das contas de receitas e despesas, assinale",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "a opção correta.\na) As contas de receitas e despesas são contas de resultado, também denominadas de contas temporárias,\npois seus saldos são encerrados para a apuração do resultado da entidade.\nb) As contas de receitas e despesas, denominadas contas patrimoniais, são encerradas no final do período\npara a apuração do resultado.\nc) Despesa corresponde à entrada de elementos para o ativo, sob a forma de dinheiro ou de direitos a\nreceber.\nd) Receitas representam o reconhecimento de um passivo, com o aumento de obrigações a serem cumpridas\npara com clientes.",
        "type": "true-false"
      },
      {
        "id": "a01II_q48",
        "question": "Um registro de débito na contabilidade de uma",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "empresa tem o efeito de\na) aumentar os ativos e reduzir os passivos.\nb) aumentar tanto os ativos como os passivos.\nc) reduzir tanto os ativos como os passivos.\nd) neutralidade: não altera nem os ativos nem os passivos.\ne) reduzir os ativos e aumentar os passivos.\n\nJulgue o próximo item, a respeito do mecanismo de contas utilizado na contabilidade.\n",
        "type": "true-false"
      },
      {
        "id": "a01II_q49",
        "question": "Contas caixa, ações em tesouraria e depreciação têm",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "em comum o fato de serem todas de natureza devedora.\nA tabela a seguir representa, em reais, o balancete de verificação de uma sociedade anônima em 31/12/20x0.\nsaldo\ndevedor credor\ncaixa\n25.300\naplicação financeira 5.700\nestoques\n4.000",
        "type": "true-false"
      },
      {
        "id": "a01II_q50",
        "question": "Nessa situação hipotética, separando-se as contas",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "patrimoniais das contas de resultado, será identificado um lucro no período.\n\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pós-Edital)\n\n57\n\nwww.estrategiaconcursos.com.br\n\n60",
        "type": "true-false"
      },
      {
        "id": "a01II_q51",
        "question": "As receitas e as despesas provocam variações",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "patrimoniais, aumentando ou diminuindo o patrimônio líquido; por essa razão, segundo a teoria\npatrimonialista, elas são classificadas como contas patrimoniais.\nA respeito de contas, julgue o item seguinte.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a01II_q52",
        "question": "As contas permitem o registro dos fatos",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "administrativos do dia a dia da entidade, os quais, por sua vez, são fundamentais para a elaboração das\ndemonstrações contábeis e para o cumprimento dos objetivos da contabilidade.\n==338b5d==\n\nA respeito de contas, julgue o item seguinte.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a01II_q53",
        "question": "As contas de ativo e de despesas serão debitadas",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "sempre que for necessário aumentar os seus saldos, e serão creditadas quando a intenção for diminuí-los.\nJá as contas de passivo e de receitas seguem mecanismo inverso.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a01II_q54",
        "question": "As contas retificadoras acompanham as respectivas",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "contas principais no balanço patrimonial, sendo lançadas sempre com sinal oposto ao do lançamento das\ncontas que retificam.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a01II_q55",
        "question": "Pelo sistema de partidas dobradas, a conta caixa e",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "equivalentes é debitada pelo ingresso de recursos financeiros na entidade, e creditada por ocasião dos\npagamentos em caixa.\nConsiderando os princípios, teorias e normas contábeis aplicáveis no Brasil, julgue o item subsequente.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a01II_q56",
        "question": "Uma conta de natureza devedora que não seja",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "retificadora expressa uma aplicação de recurso.\n\nSEFAZ-RN (Auditor Fiscal do Tesouro Estadual) Contabilidade Geral e Avançada - 2025 (Pós-Edital)\n\n58\n\nwww.estrategiaconcursos.com.br\n\n60",
        "type": "true-false"
      }
    ]
  },
  {
    "id": "aula02",
    "title": "Aula 02: Contabilidade",
    "description": "Questões da Aula 02",
    "color": "bg-blue-600",
    "questions": [
      {
        "id": "a02_q1",
        "question": "O lançamento a seguir constitui um fato contábil modificativo",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nAções em tesouraria → As ações em tesouraria são ações da empresa adquiridas pela própria empresa e\nmantidas na tesouraria. Ela é redutora do Patrimônio Líquido (PL). Assim, possui saldo devedor (aumenta\npelo débito e diminui pelo crédito) O CPC 00 (R2) afirma que uma entidade não pode ter direitos contra ela\nmesma. Por isso que as ações que a empresa adquire de si própria, como as ações em tesouraria, não\nrepresentam ativos para a entidade e são classificadas como redução do Patrimônio Líquido.\nBancos → essa conta representa o dinheiro da empresa depositado no Banco. Ela é uma co",
        "type": "true-false"
      },
      {
        "id": "a02_q2",
        "question": "Um fato que simultaneamente modifique o patrimônio de forma",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nRessaltamos que fatos compostos é sinônimo de fatos mistos. Isto é certo: é um fato que simultaneamente\nmodifique o patrimônio de forma qualitativa e de forma quantitativa é um fato composto.\nO erro do quesito está no exemplo citado. Vejam a contabilização:\nD - Lucros Acumulados (- PL)\nC - Dividendos a pagar (+ P)\nAqui temos um fato modificativo diminutivo e não um fato misto, dado que provoca uma redução do ativo\ne, como contrapartida, modificação na situação líquida.",
        "type": "true-false"
      },
      {
        "id": "a02_q3",
        "question": "A expressão contábil a seguir, que é utilizada no sistema clássico de",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nOutra forma de lançamento, também conhecida como partida de Diário ou Lançamento Manual. A conta\nprecedida da preposição “a” é a conta creditada. Quando no seu concurso aparecer a palavra diversos, saiba\nque há mais de uma conta creditada ou debitada.\nComo o quesito quer qual é tipo de fórmula desse lançamento, vejamos nosso esquema:\nLançamento Débito Crédito\n1a fórmula\n1\n1\n2a fórmula\n1\n2\n3a fórmula\n2\n1\n4a fórmula\n2\n2\n\nDenominação\nLançamento Simples\nLançamento Composto\nLançamento Composto\nLançamento Complexo\n\nÉ só ver a sequência de números e teremos: 11, 12, 21, 22. Em ordem cres",
        "type": "true-false"
      },
      {
        "id": "a02_q4",
        "question": "O lançamento de 3.ª fórmula pode ser utilizado para o registro no",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nImagine a aquisição de mercadorias, com pagamento de 50% do valor à vista e o restante a prazo\nLançamento:\nD - Estoque de Mercadorias (+Ativo)\nC - Caixa (- Ativo)\nC – Fornecedores (+ Passivo)\nObserve que tal lançamento é de 2ª Fórmula: uma conta debitada e mais de uma conta creditada.",
        "type": "true-false"
      },
      {
        "id": "a02_q5",
        "question": "O pagamento de uma conta sem juros, metade em cheque e",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nAdendo! Assunto que é cobrado como pegadinha em provas é o tema recebimento e\npagamento em cheque.\nO recebimento em cheque é realizado através da tesouraria, ou seja, da conta caixa.\nTodavia, o pagamento em cheque é feito através de crédito na conta bancos conta\nmovimento. Resumindo:\nPagamento por meio de cheque: sai da conta bancos.\nRecebimento por meio de cheque: entra na conta caixa.\nA contabilização é a seguinte:\nD – Contas a pagar (- Passivo)\nC – Bancos (- Ativo)\nC – Caixa (- Ativo)\n\n48 Rosa e S\nSEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (P",
        "type": "true-false"
      },
      {
        "id": "a02_q6",
        "question": "Entre os vários componentes de um plano de",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nItem correto, pessoal. De acordo com o professor Osni Moura Ribeiro, o elenco de contas é a relação de\ncontas utilizadas pela empresa e envolve a titulação (nome) e o código da conta.",
        "type": "true-false"
      },
      {
        "id": "a02_q7",
        "question": "A identificação de quando uma conta deve ser",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nItem correto, pois apresentou corretamente o que vem a ser o funcionamento de uma conta: quando será\ndebitada e quando será creditada. Exemplo:\n1.1.1.01 Caixa\nFunção: representa o valor dos Bens Numerários em poder da empresa, normalmente\ncompostos por dinheiro e cheques.\nFuncionamento: debitada pelas entradas de dinheiro ou cheques de terceiros e creditada\npelas saídas de dinheiro ou cheques de terceiros recebidos pela empresa.\nNatureza do saldo: devedora.",
        "type": "true-false"
      },
      {
        "id": "a02_q8",
        "question": "A construção de um bom plano de contas somente",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nPessoal, item considerado errado, pois a construção de um bom Plano de Contas passa pelo atendimento\ndas necessidades da empresa, da entidade em questão e não do pessoal da Contabilidade.\nSe a empresa for uma indústria, o Plano de Contas deverá se adequar a essas necessidades. Se for uma\nempresa comercial, a mesma coisa.",
        "type": "true-false"
      },
      {
        "id": "a02_q9",
        "question": "Considere que uma entidade comercial tenha recebido de um",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nNo tocante ao fato misto, ele envolve, ao mesmo tempo, um fato permutativo e um fato modificativo.\nA contabilização é a seguinte:\nD – Disponibilidades 380,00 (+ Ativo)\nC – Duplicatas a receber 350,00 (- Ativo)\nC – Juros Ativos 50,00 (+ Resultado = Receita)\nAqui temos um fato misto aumentativo, visto que ele envolve, ao mesmo tempo, um fato permutativo e um\nfato modificativo. Para facilitar a visualização, vamos dividi-lo em dois lançamentos:\nFato permutativo:\nD – Disponibilidades 350,00 (+ Ativo)\nC – Duplicatas a receber 350,00 (- Ativo)\nFato modificativo aumentativo:\nD – Disponib",
        "type": "true-false"
      },
      {
        "id": "a02_q10",
        "question": "Um depósito bancário com recursos oriundos do caixa da entidade",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nA contabilização é a seguinte:\nD – Bancos (+ Ativo)\nC – Caixa (- Ativo)\nAqui houve apenas alteração entre contas patrimoniais, ou seja, alteração qualitativa. Por conta disso temos\num fato permutativo.",
        "type": "true-false"
      },
      {
        "id": "a02_q11",
        "question": "O aumento do caixa e do capital de uma entidade, por meio de um",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nA contabilização é a seguinte:\nD – Caixa (+ Ativo)\nC – Capital Social (+PL)\nNão há unanimidade entre os autores sobre este assunto. Alguns entendem que qualquer alteração no PL\n(como integralização de capital ou compra de ações em tesouraria) é fato modificativo. Outros, entendem\nque, para ser fato modificativo ou misto, tem que obrigatoriamente envolver uma conta de resultado.\nPriii! Aqui vamos chamar o \"VAR\":\nEntendimento do CEBRASPE! O aumento do caixa e do capital de uma entidade, por meio",
        "type": "true-false"
      },
      {
        "id": "a02_q12",
        "question": "Assinale a opção correspondente a um evento que deve ser",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nFato misto é o que envolve, ao mesmo tempo, um fato permutativo e um fato modificativo. Acarreta,\nportanto, alterações no ativo e PL, no passivo e no PL ou no ativo, passivo e PL Revisão feita! Julguemos as\nalternativas:\na) aquisição de mercadorias, com pagamento de 50% do valor à vista e o restante a prazo\nLançamento:\nD - Estoque de Mercadorias (+Ativo)\nC - Caixa (- Ativo)\nC – Fornecedores (+ Passivo)\nAqui houve apenas alteração entre contas patrimoniais, ou seja, alteração qualitativa. Por conta disso temos\num fato permutativo. Alternativa errada.\nb) recebimento do pagamento de ",
        "type": "true-false"
      },
      {
        "id": "a02_q13",
        "question": "A expressão contábil de um fato permutativo necessariamente",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nOs Fatos Permutativos são aqueles que não alteram o valor do patrimônio líquido, constituindo apenas\npermutações entre elementos patrimoniais. As trocas podem ser entre elementos do ativo, passivo, de\nambos, ou entre elementos da situação líquida:\n•\n\nPermuta entre elementos do ativo\n\n•\n\nPermuta entre elementos do passivo\n\n•\n\nPermuta entre elementos do passivo e do ativo\n\n•\n\nPermuta entre elementos do PL\n\n53 Rosa e S\nSEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano\n71\nwww.estrategiaconcursos.com.br\n\n\fLuciano Rosa, Júlio C",
        "type": "true-false"
      },
      {
        "id": "a02_q14",
        "question": "Um procedimento usual na escrituração contábil é",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nItem correto, pessoal. O estorno consiste em lançamento inverso àquele feito erroneamente, anulando-o\ntotalmente. Nesse sentido, não há o que se falar na possibilidade de um estorno parcial de lançamento. Item\ncorreto.",
        "type": "true-false"
      },
      {
        "id": "a02_q15",
        "question": "A aquisição de mercadorias a prazo é um exemplo de",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nPodemos contabilizar a aquisição de mercadorias a prazo da seguinte forma:\nD - Estoques (Ativo)\nC - Fornecedores (Passivo)\nPercebam que tivemos um aumento do ativo e do passivo, mas sem efeitos no resultado, portanto, estamos\ndiante de um fato permutativo.",
        "type": "true-false"
      },
      {
        "id": "a02_q16",
        "question": "Julgue os itens a seguir, relativos a atos e fatos",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        "correct": 0,
        "explanation": "Comentários:\nI A compra, à vista, de mercadorias para revenda constitui um fato administrativo permutativo.\nContabilização:\nD - Estoques (Ativo)\nC - Bancos (Ativo)\nFato permutativo.\nII A compra de um veículo, com 50% do pagamento em dinheiro e 50% financiado, é um exemplo de fato\nadministrativo misto.\nContabilização:\nD - Veículos (Ativo)\nC - Bancos (Ativo)\nC - Contas a Pagar (Passivo)\nPercebam que temos um fato contábil permutativo e não misto.\nIII O pagamento de um título vencido e acrescido de juros moratórios e multa é um fato administrativo\nmodificativo.\nErrado, temos um fato contábil mist",
        "type": "multiple-choice"
      },
      {
        "id": "a02_q17",
        "question": "Considere que uma empresa tenha chegado a um",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nPara entendermos melhor a situação, vamos imaginar que a dívida da empresa com os fornecedores era de\nR$ 1.000 e foi quitada em dinheiro por essa mesma quantia, isto é, sem desconto ou encargo adicional.\nA contabilização que deve ser feita é:\nD - Fornecedores\n\nR$ 1.000\n\nC - Bancos\n\nR$ 1.000\n\nPercebam que estamos diante de um fato permutativo, visto que variação no patrimônio dos envolvidos foi\nqualitativa e não quantitativa, não se tratando de um fato contábil modificativo. Item corretíssimo.",
        "type": "true-false"
      },
      {
        "id": "a02_q18",
        "question": "Considere que um empréstimo tenha sido",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nO pagamento mensal da parcela do empréstimo mais ou juros do período pode ser contabilizada assim:\nD - Empréstimo a Pagar (Passivo)\nD - Despesa Financeira (resultado)\nC - Bancos (Ativo)\nPercebam que temos permutações de elementos patrimoniais e uma conta de resultado (despesa). Logo,\ntrata-se de um fato contábil misto diminutivo.",
        "type": "true-false"
      },
      {
        "id": "a02_q19",
        "question": "Se determinada obrigação foi quitada em atraso,",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nO pagamento de uma obrigação em atraso com juros pode ser contabilizado da seguinte forma:\nD - Contas a Pagar (Passivo)\nD - Despesa Financeira (resultado)\nC - Bancos (Ativo)\nPercebam que é necessário, pelo menos, duas contas DEVEDORAS e uma credora. Portanto, item errado.",
        "type": "true-false"
      },
      {
        "id": "a02_q20",
        "question": "A retificação de",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nRetificação de lançamento é o processo técnico de correção de registro realizado com erro na escrituração\ncontábil da entidade e pode ser feito por meio de:\na) estorno: lançamento inverso, anulando totalmente.\nb) transferência: transposição para a conta correta.\nc) complementação: aumentando ou diminuindo o saldo da conta;\nd) Ressalva: A correção se dá com a utilização de palavras tais como “digo”, “ou melhor”, “em tempo”. Por\nque a ressalva não consta da ITG 2000 como modalidade de retificação? Isso se deve ao fato de a ressalva\nser mais utilizada quando da escrituração manual do",
        "type": "true-false"
      },
      {
        "id": "a02_q21",
        "question": "Como exemplo de escrituração de um fato misto, temse a ocorrência de lançamentos em contas de ativo circulante e de passivo não circulante como",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nClassificação dos Fatos Contábeis:\n1. Fatos Permutativos: São aqueles que não alteram o valor do patrimônio líquido, constituindo apenas\npermutações entre elementos patrimoniais.\n•\n\nPermuta entre elementos do ativo\n\n•\n\nPermuta entre elementos do passivo\n\n•\n\nPermuta entre elementos do passivo e do ativo\n\n•\n\nPermuta entre elementos do PL\n\n2. Fatos Modificativos: São os que alteram o valor do patrimônio líquido. Dividem-se em:\n2.1. Fatos Modificativos Aumentativos: Aumentam o valor do PL\n2.1. Fatos Modificativos Diminutivos: Diminuem o valor do PL\nPosicionamento Importante: há fatos ",
        "type": "true-false"
      },
      {
        "id": "a02_q22",
        "question": "Um evento foi escriturado corretamente",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nNo tocante ao fato misto, ele envolve, ao mesmo tempo, um fato permutativo e um fato modificativo. Um\nexemplo seria o Pagamento de uma duplicata no valor de R$ 1.000,00, com desconto de R$ 200,00:\nD – Duplicatas a pagar 1.000,00 (- Passivo)\nC – Bancos 800,00 (- Ativo)\nC – Descontos Obtidos 200,00 (+ Resultado = Receita)\nPara facilitar a visualização, vamos dividi-lo em dois lançamentos:\nFato permutativo:\nD – Duplicatas a pagar (Passivo) 800,00\nC – Bancos (Ativo) 800,00\nFato modificativo aumentativo:\nD – Duplicatas a pagar (Passivo) 200,00\nC – Descontos Obtidos (Receita) 200,00",
        "type": "true-false"
      },
      {
        "id": "a02_q23",
        "question": "Constitui fato administrativo modificativo",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nFatos Modificativos: São os que alteram o valor do patrimônio líquido. Dividem-se em:\n•\n•\n\nFatos Modificativos Aumentativos: Aumentam o valor do PL\nFatos Modificativos Diminutivos: Diminuem o valor do PL\nPosicionamento Importante: há fatos contábeis que NÃO envolvem receitas nem\ndespesas, mas geram alterações no patrimônio líquido. Exemplo: a integralização de capital\nem dinheiro, distribuição de dividendos, aquisição de ações em tesouraria e ajuste de\navaliação patrimonial. Esse tipo de fato deve ser considerado MODIFICATIVO.\nPosicionamento recente da banca Cebraspe\n\nVejamos as a",
        "type": "true-false"
      },
      {
        "id": "a02_q24",
        "question": "A aquisição de um bem mediante uma parte a vista e outra a prazo",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nInicialmente, vamos rever o nosso esquema:\nLançamento\n1a fórmula\n2a fórmula\n3a fórmula\n4a fórmula\n\nDébito\n1\n1\n2\n2\n\nCrédito\n1\n2\n1\n2\n\nÉ só ver a sequência de números e teremos: 11, 12, 21, 22. Em ordem crescente.\nObservação: onde está escrito 2, deve ser entendido como 2 ou mais.\nA contabilização é a seguinte:\nD - Imobilizado (+Ativo)\nC - Caixa (-Ativo)\nC - Duplicatas a pagar (+passivo)\n\n61 Rosa e S\nSEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano\n71\nwww.estrategiaconcursos.com.br\n\n\fLuciano Rosa, Júlio Cardozo\nAula 02\n\nNot",
        "type": "true-false"
      },
      {
        "id": "a02_q25",
        "question": "A contratação do novo funcionário é um ato administrativo que",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\n\n==338b5d==\n\nOs atos administrativos (também conhecido como atos contábeis) são atos relevantes que não alteram o\npatrimônio da entidade, tal como a contratação de empregados, o simples fato de se conceder fiança a um\nterceiro ou avalizar um cheque.\nRessaltamos que o registro de ATOS CONTÁBEIS pela Contabilidade Geral, é raro de acontecer e não\né obrigatório, mas pode ser feita através das contas de compensação. Ou seja, eles são controlados de forma\nextracontábil.",
        "type": "true-false"
      },
      {
        "id": "a02_q26",
        "question": "A aquisição de um bem mediante uma parte a vista e outra a prazo",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nInicialmente, vamos rever o nosso esquema:\nLançamento\n1a fórmula\n2a fórmula\n3a fórmula\n4a fórmula\n\nDébito\n1\n1\n2\n2\n\nCrédito\n1\n2\n1\n2\n\nÉ só ver a sequência de números e teremos: 11, 12, 21, 22. Em ordem crescente.\nObservação: onde está escrito 2, deve ser entendido como 2 ou mais.\n\n62 Rosa e S\nSEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano\n71\nwww.estrategiaconcursos.com.br\n\n\fLuciano Rosa, Júlio Cardozo\nAula 02\n\nA contabilização é a seguinte:\nD - Imobilizado (+Ativo)\nC - Caixa (-Ativo)\nC - Duplicatas a pagar (+passivo)\nNot",
        "type": "true-false"
      },
      {
        "id": "a02_q27",
        "question": "O pagamento antecipado da dívida representa um fato contábil misto",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "Comentários:\nVamos imaginar o valor da dívida da empresa seja de R$ 10.000,00, contudo, pelo pagamento efetuado\nantecipadamente, a empresa obteve um desconto de 10%. Qual seria essa modalidade de desconto?\nFinanceiro ou Comercial?\nTrata-se de desconto condicional ou desconto financeiro é aquele que depende de determinada condição\na ser cumprida pelo cliente, como, por exemplo, a quitação antecipada de título de crédito, recebendo um\ndesconto de 10%. Esse desconto é concedido em MOMENTO POSTERIOR À NEGOCIAÇÃO.\nNa nossa questão, a empresa XYZ obteve um desconto financeiro, portanto, irá reconhec",
        "type": "true-false"
      },
      {
        "id": "a02_q28",
        "question": "A terceira fórmula de lançamento, também denominada fórmula",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\n\n63 Rosa e S\nSEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano\n71\nwww.estrategiaconcursos.com.br\n\n\fLuciano Rosa, Júlio Cardozo\nAula 02\n\nAo registro de um fato contábil chamamos lançamento. Este é efetuado em livros contábeis próprios como\no diário, razão, caixa, duplicatas a receber etc.\nOs lançamentos podem ter fórmulas de acordo com a quantidade de contas debitadas ou creditadas, a saber:\nFórmulas de lançamento:\nLançamento Débito Crédito Denominação\n1a fórmula\n1\n1\nLançamento Simples\n2a fórmula\n1\n2\nLançamento Composto\n3a",
        "type": "true-false"
      },
      {
        "id": "a02_q29",
        "question": "Os adiantamentos pagos aos funcionários no dia 15 do referido",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 1,
        "explanation": "Comentários:\nOs adiantamentos pagos aos funcionários podem ser contabilizados da seguinte maneira:\nD – Adiantamentos a funcionários (Ativo)\nC – Caixa (Ativo)\nTrata-se de um fato permutativo e não fato modificativo, pois configura apenas trocas, permutas, entre bens\ndo ativo, sem que haja alteração no valor total do patrimônio líquido e contas de resultado.",
        "type": "true-false"
      },
      {
        "id": "a02_q30",
        "question": "O lançamento a seguir constitui um fato contábil modificativo",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "diminutivo.\ndebite — ações em tesouraria\ncredite — bancos\nNo que diz respeito aos atos e fatos administrativos, julgue o item a seguir.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a02_q31",
        "question": "Um fato que simultaneamente modifique o patrimônio de forma",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "qualitativa e de forma quantitativa é um fato composto, estando bem representado pelo\nprovisionamento para distribuição de dividendos.\nEm relação a plano de contas e escrituração contábil, julgue o item a seguir.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a02_q32",
        "question": "A expressão contábil a seguir, que é utilizada no sistema clássico de",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "escrituração, indica uma partida de segunda ou terceira fórmula.\nDiversos\na Diversos\nCom relação à escrituração contábil, julgue o item a seguir.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a02_q33",
        "question": "O lançamento de 3.ª fórmula pode ser utilizado para o registro no",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "livro diário da aquisição de mercadorias em que apenas uma parcela do valor da transação esteja sendo\npaga à vista.\nCom relação aos atos e fatos administrativos, julgue o item subsequente.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a02_q34",
        "question": "O pagamento de uma conta sem juros, metade em cheque e",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "metade em dinheiro, é um fato misto.\nEm relação ao plano de contas contábil, julgue os itens subsequentes.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a02_q35",
        "question": "Entre os vários componentes de um plano de",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "contas completo, um dos mais conhecidos é o elenco de contas, composto pela disposição organizada\ndas contas de uso da instituição, com seus códigos, em geral, numéricos, e o literal que qualifica tal\nconta.\n\n65 Rosa e S\nSEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano\n71\nwww.estrategiaconcursos.com.br\n",
        "type": "true-false"
      },
      {
        "id": "a02_q36",
        "question": "A identificação de quando uma conta deve ser",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "debitada e quando ela deve ser creditada é informação que consta da parte do plano de contas\nconhecida como funcionamento.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a02_q37",
        "question": "A construção de um bom plano de contas somente",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "é possível caso se tenha como pressuposto o foco nas necessidades de informação na equipe\nresponsável pelo desenvolvimento das atividades contábeis da empresa. Um plano de contas é bom\nquando atende as necessidades de trabalho, organização e informação do pessoal da contabilidade.\nCom relação aos atos e fatos administrativos e aos fatos contábeis, julgue o item seguinte.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a02_q38",
        "question": "Considere que uma entidade comercial tenha recebido de um",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "cliente o valor de R$ 380,00, sendo R$ 350,00 referentes ao valor da venda e R$ 30,00 relativos aos juros\ndecorrentes do pagamento em atraso por parte do cliente. Nesse caso, verifica-se, no referido\nrecebimento, um fato contábil misto.\n==338b5d==\n\nCom relação aos atos e fatos administrativos, julgue o item subsequente.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a02_q39",
        "question": "Um depósito bancário com recursos oriundos do caixa da entidade",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "constitui um fato permutativo.\nCom relação aos atos e fatos administrativos, julgue o item subsequente.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a02_q40",
        "question": "O aumento do caixa e do capital de uma entidade, por meio de um",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "aporte de recursos dos sócios, é um fato permutativo, pois não gera nem receita nem despesa.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a02_q41",
        "question": "Assinale a opção correspondente a um evento que deve ser",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "classificado como um fato contábil misto.\na) aquisição de mercadorias, com pagamento de 50% do valor à vista e o restante a prazo\nb) recebimento do pagamento de duplicatas decorrentes de vendas a prazo\nc) obtenção de financiamento para a aquisição de veículo\nd) depreciação do imóvel da fábrica\ne) amortização de empréstimos com juros de mora\nQuanto a contas contábeis, julgue o item que se segue.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a02_q42",
        "question": "A expressão contábil de um fato permutativo necessariamente",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "envolve ao menos uma conta de natureza devedora e uma conta de natureza credora.\nJulgue os próximos itens, a respeito de escrituração contábil.\n\n66 Rosa e S\nSEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano\n71\nwww.estrategiaconcursos.com.br\n\n\fLuciano Rosa, Júlio Cardozo",
        "type": "true-false"
      },
      {
        "id": "a02_q43",
        "question": "Um procedimento usual na escrituração contábil é",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "o estorno, que ocorre quando um erro de lançamento foi cometido; o estorno, necessariamente, deve\nreverter integralmente o lançamento errado, não sendo admitido estorno parcial de lançamento.\nCom relação aos objetivos e princípios da contabilidade, aos elementos que compõem o patrimônio das\nentidades e aos eventos que podem vir a impactar esse patrimônio, julgue o item seguinte.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a02_q44",
        "question": "A aquisição de mercadorias a prazo é um exemplo de",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "fato administrativo modificativo.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a02_q45",
        "question": "Julgue os itens a seguir, relativos a atos e fatos",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "administrativos.\nI A compra, à vista, de mercadorias para revenda constitui um fato administrativo permutativo.\nII A compra de um veículo, com 50% do pagamento em dinheiro e 50% financiado, é um exemplo de fato\nadministrativo misto.\nIII O pagamento de um título vencido e acrescido de juros moratórios e multa é um fato administrativo\nmodificativo.\nAssinale a opção correta.\na) Apenas o item I está certo.\nb) Apenas o item II está certo.",
        "type": "true-false"
      },
      {
        "id": "a02_q46",
        "question": "Considere que uma empresa tenha chegado a um",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "acordo com um de seus fornecedores para saldar determinado débito com a entrega de um ativo da\ncompanhia. Considere, ainda, que nenhum desconto tenha sido concedido pelo credor e nenhum\nencargo adicional tenha sido pago pela devedora. Nessa situação, a variação no patrimônio dos\nenvolvidos foi qualitativa e não quantitativa, não se tratando de um fato contábil modificativo.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a02_q47",
        "question": "Considere que um empréstimo tenha sido",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "contratado pelo prazo de 12 meses, com juros prefixados mensais, e que, ao final de cada período\nmensal, será debitada na conta-corrente da financiada uma parcela de capital e uma parcela de juros,\nconforme metodologia definida entre as partes. Nessas condições, a cada mês ocorre um fato misto\nque modifica a situação patrimonial líquida negativamente.\nJulgue os itens seguintes, a respeito de contas, devedoras ou credoras e seus saldos.\n\n67 Rosa e S\nSEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano\n71",
        "type": "true-false"
      },
      {
        "id": "a02_q48",
        "question": "Se determinada obrigação foi quitada em atraso,",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "gerando o pagamento de encargos financeiros, então, nessas condições, ao menos duas contas credoras\ne uma conta devedora serão necessárias para espelhar contabilmente o evento.\nAcerca dos lançamentos contábeis, julgue o item que se segue.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a02_q49",
        "question": "A retificação de",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "lançamento denominada transferência consiste em lançamento inverso àquele feito erroneamente\ncom anulação total do valor registrado.\nEm relação a contas e sua natureza e escrituração de fatos administrativos, julgue o item subsecutivo.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a02_q50",
        "question": "Como exemplo de escrituração de um fato misto, temse a ocorrência de lançamentos em contas de ativo circulante e de passivo não circulante como",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "contrapartidas uns dos outros.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a02_q51",
        "question": "Um evento foi escriturado corretamente",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "conforme se segue.\ndebite – contas a pagar\ncredite – caixa\ncredite – desconto obtido\nEssa contabilização expressa um fato patrimonial\nA modificativo aumentativo.\nB misto.\nC permutativo.\nD modificativo diminutivo.",
        "type": "true-false"
      },
      {
        "id": "a02_q52",
        "question": "Constitui fato administrativo modificativo",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "A o pagamento de fornecedores.\nB a compra de material de expediente para estoque.\nC a compra de imóvel a prazo.\nD o recebimento de bem em doação.\nE o financiamento com entrada imediata do recurso para pagamento em 10 anos.\nCom relação aos conceitos fundamentais da contabilidade e seu mecanismo de registro de fatos\nadministrativos, julgue os itens que seguem.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a02_q53",
        "question": "A aquisição de um bem mediante uma parte a vista e outra a prazo",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "exige, no mínimo, uma partida de terceira fórmula para ser registrada contabilmente.\n\n68 Rosa e S\nSEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano\n71\nwww.estrategiaconcursos.com.br\n\n\fLuciano Rosa, Júlio Cardozo\nAula 02",
        "type": "true-false"
      },
      {
        "id": "a02_q54",
        "question": "A contratação do novo funcionário é um ato administrativo que",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "impacta positivamente o patrimônio líquido da entidade contratante.\nCom relação aos conceitos fundamentais da contabilidade e seu mecanismo de registro de fatos\nadministrativos, julgue os itens que seguem.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a02_q55",
        "question": "A aquisição de um bem mediante uma parte a vista e outra a prazo",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "exige, no mínimo, uma partida de terceira fórmula para ser registrada contabilmente.\nConsidere que a empresa XYZ tenha quitado antecipadamente uma dívida, tendo obtido, no ato da quitação\num desconto pela antecipação dos valores até então pendentes de pagamento. Com base nessa situação\nhipotética, julgue os itens seguintes.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a02_q56",
        "question": "O pagamento antecipado da dívida representa um fato contábil misto",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "para a empresa XYZ.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a02_q57",
        "question": "A terceira fórmula de lançamento, também denominada fórmula",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "complexa, requer a utilização de uma conta devedora e duas ou mais contas credoras para o registro\nde um evento contábil.\nDeterminada entidade contratou dois funcionários para a área de vendas no primeiro dia do mês. No dia 15\ndo referido mês, esses dois funcionários receberam adiantamentos correspondentes a 30% dos salários a\nque tinham direito no mês. O restante foi pago no quinto dia útil do mês subsequente. A respeito da situação\nhipotética apresentada, julgue o item a seguir.\n\n--------------------------------------------------------------------------------",
        "type": "true-false"
      },
      {
        "id": "a02_q58",
        "question": "Os adiantamentos pagos aos funcionários no dia 15 do referido",
        "options": [
          "Certo",
          "Errado"
        ],
        "correct": 0,
        "explanation": "mês são considerados fatos modificativos porque reduzem o ativo (saída de caixa) e reduzem o\npatrimônio (reconhecimento de despesa).\n\n69 Rosa e S\nSEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano\n71\nwww.estrategiaconcursos.com.br\n\n\fLuciano Rosa, Júlio Cardozo",
        "type": "true-false"
      }
    ]
  }
];