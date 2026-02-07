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
    id: 'aula04',
    title: 'Aula 04: Ativo Circulante e Não Circulante',
    description: 'Questões sobre classificação de ativos e estrutura do balanço patrimonial',
    color: 'bg-blue-600',
    questions: [
      {
        id: 'a04_q1',
        question: "A entidade deve elaborar o conjunto de suas demonstrações contábeis por meio da utilização do regime de competência, sendo vedada a utilização de outro regime contábil.",
        options: ["Certo", "Errado"],
        correct: 1,
        explanation: "É muito importante que você saiba que as demonstrações contábeis devem ser elaboradas de acordo com o regime de competência! Então, as demonstrações se referirão à data de encerramento do exercício social, e as receitas e despesas consideradas ali são as que incorreram no exercício, independente de pagamento ou recebimento. A exceção fica por conta da demonstração dos fluxos de caixa. Esta é elaborada de acordo com o regime de caixa!",
        type: 'true-false'
      },
      {
        id: 'a04_q2',
        question: "O total do ativo da referida empresa é de R$ 5.500.",
        options: ["Certo", "Errado"],
        correct: 1,
        explanation: "Inicialmente, classifiquemos conforme o grupo patrimonial: SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 75 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardozo Aula 04 ações em tesouraria → Retificadora do PL caixa →Ativo capital social → PL clientes →Ativo contas a pagar em 3 anos → Passivo contas a receber em 1.000 dias → Ativo depreciação acumulada → Retificadora do Ativo estoques → Ativo fornecedores → Passivo impostos a recolher → Passivo máquinas → Ativo provisões cíveis → Passivo reserva legal → PL terrenos→ Ativo Selecionando as contas do ativo, fica assim: contas saldos caixa 100 clientes 600 contas a receber em 1.000 dias 2.500 (-) depreciação acumulada (200) estoques 500 máquinas 700 terrenos 800 Total do ativo 5.000 Portanto, o total do ativo da referida empresa é de R$ 5.000.",
        type: 'true-false'
      },
      {
        id: 'a04_q3',
        question: "As disponibilidades da empresa em questão totalizam R$ 100.",
        options: ["Certo", "Errado"],
        correct: 0,
        explanation: "As disponibilidades são elementos que representam dinheiro ou que nele possam ser convertidos de forma imediata, como a conta caixa, bancos conta movimento. Exemplos de disponibilidades: - Caixa. - Contas bancárias de livre movimentação; - Contas especiais para pagamentos específicos, como dividendos, folha de pagamento, filiais; SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 75 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardozo Aula 04 - Contas especiais de cobrança; - Numerários em trânsito, como por exemplo, remessas para filiais, depósitos, ordem de pagamento; - Aplicações financeiras de curto prazo, de alta liquidez, que são prontamente conversíveis em montante conhecido de caixa e que estão sujeitas a um insignificante risco de mudança de valor. - Título do governo ou do tesouro (pode entender como sinônimos): • • Um título do tesouro comprado três meses antes do vencimento normalmente é considerado equivalente de caixa. Mas, se for comprado, digamos, 2 anos antes do vencimento, não entra como equivalente de caixa. Passa o tempo, o título fica próximo do vencimento (90 dias), mas não é reclassificado para equivalente, pois não houve movimentação efetiva de caixa. Continua sendo considerado com \"não equivalente de caixa\", ainda que esteja próximo ao vencimento. Compra agora um título do governo ou do tesouro (pode entender como sinônimos) que vence em 90 dias, entra como equivalente de caixa. Revisão feita! Filtremos as contas de disponibilidades apresentadas no balancete de verificação: contas saldos caixa 100 Total das disponibilidades 100",
        type: 'true-false'
      },
      {
        id: 'a04_q4',
        question: "Na contratação de um seguro anual por uma entidade, a contabilização correta, pelo montante total da despesa, é a apresentada a seguir. Débito – despesas de seguros Crédito – caixa, bancos ou seguros a pagar",
        options: ["Certo", "Errado"],
        correct: 1,
        explanation: "Na contabilidade utilizamos o regime de competência, no qual as despesas são reconhecidas quando ocorridas e independente do pagamento. Assim, caso a entidade pague antecipado, ela não poderá reconhecer uma despesa, dado que o fato gerador dessa obrigação não ocorreu (Mês segurado). Enquanto não ocorre, a entidade contabilizará um ativo. Contabilização inicial (contratação de um seguro anual): D – Seguros Antecipados (↑Ativo Circulante) C – Caixa/Bancos (↓Ativo Circulante) A cada mês, apropriaremos 1/12 como despesa de seguro: D – Despesas de seguros (↓Resultado = Despesa) C – Seguros Antecipados (↓Ativo) SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 75 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardozo Aula 04",
        type: 'true-false'
      },
      {
        id: 'a04_q5',
        question: "Devem ser classificados no ativo circulante os ativos financeiros que estejam sendo mantidos essencialmente com o propósito de serem negociados, bem como a parcela a realizar no prazo de até doze meses após a data do balanço de ativos financeiros não circulantes.",
        options: ["Certo", "Errado"],
        correct: 0,
        explanation: "Para facilitar a visualização, vamos analisar em duas partes: Parte 1 - Devem ser classificados no ativo circulante os ativos financeiros que estejam sendo mantidos essencialmente com o propósito de serem negociados Certo, pois é um critério previsto no Pronunciamento Técnico CPC 26 (R1) – Apresentação das Demonstrações Contábeis: Ativo circulante 66. O ativo deve ser classificado como circulante quando satisfizer qualquer dos seguintes critérios: (a) espera-se que seja realizado, ou pretende-se que seja vendido ou consumido no decurso normal do ciclo operacional da entidade; (b) está mantido essencialmente com o propósito de ser negociado; (c) espera-se que seja realizado até doze meses após a data do balanço; ou (d) é caixa ou equivalente de caixa (conforme definido no Pronunciamento Técnico CPC 03 – Demonstração dos Fluxos de Caixa), a menos que sua troca ou uso para liquidação de passivo se encontre vedada durante pelo menos doze meses após a data do balanço. Todos os demais ativos devem ser classificados como não circulantes. 67. Este Pronunciamento utiliza a expressão “não circulante” para incluir ativos tangíveis, intangíveis e ativos financeiros de natureza de longo prazo. Não se proíbe o uso de descrições alternativas desde que seu sentido seja claro. Parte 2- bem como a parcela a realizar no prazo de até doze meses após a data do balanço de ativos financeiros não circulantes. Também é um critério previsto na referida norma, especificadamente na alínea c. A ideia é a seguinte: quando ao ativo for de longo prazo deve ser segregada em ativo circulante e não circulante – realizável em longo prazo, pois o prazo de vigência é de superior a 12 meses. Em síntese: SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 75 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardozo Aula 04 • • Ativo Circulante: a parte realizável até doze meses após a data do balanço Ativo Não Circulante: a parte realizável após esse prazo.",
        type: 'true-false'
      },
      {
        id: 'a04_q6',
        question: "O ativo não circulante é composto por ativo realizável a longo prazo, investimentos, imobilizado e intangível.",
        options: ["Certo", "Errado"],
        correct: 0,
        explanation: "O ativo não circulante deve ser subdividido em realizável a longo prazo, investimentos, imobilizado e intangível. Vejamos suas respectivas definições previstas na lei 6.404/76: • ativo realizável a longo prazo: Art. 179. II - No ativo realizável a longo prazo: os direitos realizáveis após o término do exercício seguinte, assim como os derivados de vendas, adiantamentos ou empréstimos a sociedades coligadas ou controladas (artigo 243), diretores, acionistas ou participantes no lucro da companhia, que não constituírem negócios usuais na exploração do objeto da companhia; • investimentos Art. 179. III - em investimentos: as participações permanentes em outras sociedades e os direitos de qualquer natureza, não classificáveis no ativo circulante, e que não se destinem à manutenção da atividade da companhia ou da empresa; • imobilizado Art. 179. IV – no ativo imobilizado: os direitos que tenham por objeto bens corpóreos destinados à manutenção das atividades da companhia ou da empresa ou exercidos com essa finalidade, inclusive os decorrentes de operações que transfiram à companhia os benefícios, riscos e controle desses bens; (Redação dada pela Lei nº 11.638,de 2007) • intangível Art. 179. VI – no intangível: os direitos que tenham por objeto bens incorpóreos destinados à manutenção da companhia ou exercidos com essa finalidade, inclusive o fundo de comércio adquirido. (Incluído pela Lei nº 11.638, de 2007)",
        type: 'true-false'
      },
      {
        id: 'a04_q7',
        question: "De acordo com as disposições da Lei n.º 6.404/1976 em vigor, assinale a opção correta. A O ativo não circulante é composto por ativo realizável a longo prazo, investimentos, imobilizado e permanente. B No ativo, as contas deverão ser dispostas em ordem crescente do grau de liquidez. C As participações permanentes em outras sociedades que não se destinem à manutenção da atividade da companhia ou da empresa devem ser contabilizadas no ativo intangível. D Os bens corpóreos destinados à manutenção das atividades da companhia deverão ser contabilizados no ativo imobilizado. E Quando o ciclo operacional da empresa tiver duração menor que doze meses, a classificação no circulante ou no longo prazo terá por base o prazo desse ciclo.",
        options: ["Certo", "Errado"],
        correct: 0,
        explanation: "A O ativo não circulante é composto por ativo realizável a longo prazo, investimentos, imobilizado e permanente. Na verdade, esta é a composição do ativo não circulante: realizável a longo prazo, investimentos, imobilizado e intangível. Alternativa errada. B No ativo, as contas deverão ser dispostas em ordem crescente do grau de liquidez. Verdade seja dita: ordem DECRESCENTE do grau de liquidez. Alternativa errada. C As participações permanentes em outras sociedades que não se destinem à manutenção da atividade da companhia ou da empresa devem ser contabilizadas no ativo intangível. Na realidade, elas devem ser contabilizadas no subgrupo investimentos, vejam: Art. 179. III - em investimentos: as participações permanentes em outras sociedades e os direitos de qualquer natureza, não classificáveis no ativo circulante, e que não se destinem à manutenção da atividade da companhia ou da empresa; Alternativa errada. D Os bens corpóreos destinados à manutenção das atividades da companhia deverão ser contabilizados no ativo imobilizado. Certo, isso é previsto na lei 6.404/76: Art. 179. IV – no ativo imobilizado: os direitos que tenham por objeto bens corpóreos destinados à manutenção das atividades da companhia ou da empresa ou exercidos com essa finalidade, inclusive os decorrentes de operações que transfiram à companhia os benefícios, riscos e controle desses bens; (Redação dada pela Lei nº 11.638,de 2007) SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 75 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardozo Aula 04 E Quando o ciclo operacional da empresa tiver duração menor que doze meses, a classificação no circulante ou no longo prazo terá por base o prazo desse ciclo. Destaquemos o texto da referida lei: Art. 179. Parágrafo único. Na companhia em que o ciclo operacional da empresa tiver duração maior que o exercício social, a classificação no circulante ou longo prazo terá por base o prazo desse ciclo. Observa-se que essa classificação terá por base o exercício social quando a duração do ciclo operacional for menor que doze meses. Alternativa errada.",
        type: 'multiple-choice'
      },
      {
        id: 'a04_q8',
        question: "Conforme a mais recente estrutura conceitual da contabilidade, o balanço patrimonial A é um retrato estático das informações de eventos passados da entidade. B representa de forma exata a realidade da entidade. C é produzido sem qualquer tipo de estimativa. D representa os fluxos de caixa passados da entidade. E é uma projeção dinâmica das informações futuras da entidade.",
        options: ["Certo", "Errado"],
        correct: 0,
        explanation: "A é um retrato estático das informações de eventos passados da entidade. O Balanço Patrimonial mostra a posição patrimonial e financeira da entidade. Ela evidencia uma situação estática da entidade, como fosse uma foto da entidade naquele dado momento. Alternativa certa. B representa de forma exata a realidade da entidade. Em grande medida, relatórios financeiros baseiam-se em estimativas, julgamentos e modelos e, não, em representações exatas. Alternativa errada. C é produzido sem qualquer tipo de estimativa. O uso de estimativas razoáveis é parte essencial da elaboração de informações financeiras e não prejudica a utilidade das informações se as estimativas são descritas e explicadas de forma clara e precisa. Alternativa errada. D representa os fluxos de caixa passados da entidade. Por meio das demonstrações de fluxo de caixa, podemos obter essas informações. Alternativa errada. E é uma projeção dinâmica das informações futuras da entidade. SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 75 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardozo Aula 04 O Balaço Patrimonial é uma demonstração estática. Alternativa errada.",
        type: 'multiple-choice'
      },
      {
        id: 'a04_q9',
        question: "Caso um título de crédito se torne incobrável, sendo baixado do ativo por constituir uma perda de crédito da entidade, a representação desse evento deve ser feita por meio de um lançamento de primeira fórmula, sem impacto no montante do patrimônio da entidade.",
        options: ["Certo", "Errado"],
        correct: 0,
        explanation: "Quando a PECLD é constituída, nós lançamos: D – Despesa com PCLD C – PCLD (redutora ativo) Posteriormente, se a perda for reconhecida como efetiva, quando o cliente é considerado incobrável, nós fazemos o seguinte: D – PCLD (redutora ativo) C – Duplicatas a receber (ativo) O quesito acabou focando nesse lançamento. Então, vamos julgar as demais partes com base nele. • a representação desse evento deve ser feita por meio de um lançamento de primeira fórmula Lançamento 1a fórmula 2a fórmula 3a fórmula 4a fórmula Débito 1 1 2 2 Crédito 1 2 1 2 Tipo Simples Composto Composto Complexo É só ver a sequência de números e teremos: 11, 12, 21, 22. Em ordem crescente. Observação: onde está escrito 2, deve ser entendido como 2 ou mais. No tocante ao tipo de fórmula, esse lançamento é de 1º fórmula (uma conta debitada e uma conta creditada) • sem impacto no montante do patrimônio da entidade. Os Fatos Permutativos são aqueles que não alteram o valor do patrimônio líquido, constituindo apenas permutações entre elementos patrimoniais. As trocas podem ser entre elementos do ativo, passivo, de ambos, ou entre elementos da situação líquida. Observa-se que o lançamento do crédito considerado SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 75 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardozo Aula 04 incobrável, ocorre apenas uma permuta entre elementos do ativo. Ou melhor, sem impacto no montante do patrimônio da entidade. Essa parte também está certa.",
        type: 'true-false'
      },
      {
        id: 'a04_q10',
        question: "Uma entidade que adiantar recursos às empresas que lhe prestem serviços deverá registrar esses adiantamentos a débito de uma conta de despesa e a crédito de uma conta de ativo.",
        options: ["Certo", "Errado"],
        correct: 1,
        explanation: "Errado, pessoal, considerando a aplicação do Regime de Competência, a concessão de um adiantamento para um prestador de serviços não pode ser contabilizada como despesas, visto que o respectivo fato gerador não ocorreu. A contabilização a ser feita seria: D - Adiantamento a Prestador de Serviço - Despesa Antecipada - Ativo Circulante C - Bancos Quando o serviço for efetivamente prestado, vamos reconhecer a despesa: D - Despesas com serviços C - Adiantamento a Prestador de Serviço - Despesa Antecipada - Ativo Circulante",
        type: 'true-false'
      },
      {
        id: 'a04_q11',
        question: "A despesa antecipada é um direito que pode ser classificado no balanço patrimonial como ativo circulante ou como ativo realizável a longo prazo, conforme o prazo para a conversão desse direito em bens ou serviços.",
        options: ["Certo", "Errado"],
        correct: 0,
        explanation: "As aplicações de recursos em despesas do exercício seguinte (também chamadas despesas antecipadas) são despesas que foram pagas pela empresa com antecedência ou serão pagas no curto prazo e ainda não foram para o resultado pelo regime de competência. Podemos ter despesas antecipadas classificadas no ativo circulante ou no ativo não circulante - realizável a longo prazo, de acordo com o prazo de conversão desse direito em bens ou serviços.",
        type: 'true-false'
      },
      {
        id: 'a04_q12',
        question: "As perdas esperadas em créditos de liquidação duvidosa são estimativas contábeis que devem ser registradas em contas retificadoras de ativo.",
        options: ["Certo", "Errado"],
        correct: 0,
        explanation: "Item correto, pessoal. A conta perdas estimadas com créditos de liquidação duvidosa é retificadora da conta clientes/duplicatas a receber. Expliquemos! Uma empresa vendeu R$ 100.000,00 a prazo, e constitui perdas estimadas com créditos de liquidação duvidosa de 3%. Na venda dos R$ 100.000,00: D – Clientes (ativo) 100.000,00 C – Receita de vendas (resultado) 100.000,00 A constituição da provisão para devedores duvidosos: D – Despesa com perdas estimadas com créditos de liquidação duvidosa (despesa) 3.000,00 C – Perdas estimadas com créditos de liquidação duvidosa (retificadora do ativo) 3.000,00",
        type: 'true-false'
      },
      {
        id: 'a04_q13',
        question: "O lançamento de aluguéis antecipados, no valor de R$ 1.920, referentes a 12 meses, e contratados em 1.º/4/20X1, é mostrado corretamente a seguir. data 2/5/20X1 conta e histórico débito crédito despesa de aluguéis 1.920 aluguéis antecipados 1.920 aluguel antecipado de 12 meses de uma sala comercial",
        options: ["Certo", "Errado"],
        correct: 1,
        explanation: "O lançamento de aluguéis antecipados, no valor de R$ 1.920, referentes a 12 meses, e contratados em 1.º/4/20X1, é mostrado corretamente a seguir. SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 75 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardozo Aula 04 Na contabilidade utilizamos o regime de competência, no qual as despesas são reconhecidas quando ocorridas e independente do pagamento. Assim, caso a entidade pague antecipado, ela não poderá reconhecer uma despesa, dado que o fato gerador dessa obrigação não ocorreu (Mês segurado). Enquanto não ocorre, a entidade contabilizará um ativo. Contabilização inicial (contratação de um seguro anual): D – Seguros Antecipados (↑Ativo Circulante) R$ 1.920 C – Caixa/Bancos (↓Ativo Circulante) R$ 1.920 Ao comparamos com o lançamento descrito no enunciado, percebe-se que houve um erro ao reconhecer uma despesa no momento da contratação. Isso desrespeita o regime de competência. Salientamos que apropriaremos, mês a mês, R$ 160 (1.920/12) como despesa de seguro: D – Despesas de seguro (↓Resultado = Despesa) R$ 160 C – Seguros Antecipados (↓Ativo) R$ 160",
        type: 'true-false'
      },
      {
        id: 'a04_q14',
        question: "Conforme a Lei n.º 6.404/1976, também conhecida como Lei das S/A, as ações de outras companhias, que não são mantidas para venda, devem ser classificadas no grupo do balanço patrimonial denominado A despesas antecipadas (ativo circulante). B investimentos (ativo não circulante). C intangível (ativo não circulante). D reservas de capital (patrimônio líquido). E imobilizado (ativo não circulante).",
        options: ["Certo", "Errado"],
        correct: 0,
        explanation: "A despesas antecipadas (ativo circulante). Errado, apenas as despesas que foram pagas pela empresa com antecedência ou serão pagas no curto prazo e ainda não foram para o resultado pelo regime de competência. B investimentos (ativo não circulante). Certo, com base na lei 6.404/76: Art. 179. III - em investimentos: as participações permanentes em outras sociedades e os direitos de qualquer natureza, não classificáveis no ativo circulante, e que não se destinem à manutenção da atividade da companhia ou da empresa; SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 75 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardozo Aula 04 C intangível (ativo não circulante). Errado, pois classificam-se nesse subgrupo os direitos que tenham por objeto bens incorpóreos destinados à manutenção da companhia ou exercidos com essa finalidade, inclusive o fundo de comércio adquirido. bens (Art. 179. VI da lei 6.404/76). D reservas de capital (patrimônio líquido). As reservas de capital são valores recebidos pela empresa (dos sócios ou de terceiros) que não se configuram como receita, isto é, não transitam pelo resultado do exercício, sendo contabilizadas diretamente à conta de Patrimônio Líquido. Alternativa errada. E imobilizado (ativo não circulante). Errado, nesse subgrupo vamos classificar os direitos que tenham por objeto bens corpóreos destinados à manutenção das atividades da companhia ou da empresa ou exercidos com essa finalidade, inclusive os decorrentes de operações que transfiram à companhia os benefícios, riscos e controle desses bens (Art. 179. IV da lei 6.404/76).",
        type: 'multiple-choice'
      },
      {
        id: 'a04_q15',
        question: "No balanço patrimonial, as contas do ativo são classificadas em circulantes e não circulantes. Assinale a opção que apresenta conta registrada no ativo circulante. A empréstimos a receber no longo prazo B contas a receber de clientes após o exercício seguinte C investimento em controlada não negociável no curto prazo D veículos registrados na contabilidade da empresa como imobilizados E estoques de mercadorias disponíveis para venda",
        options: ["Certo", "Errado"],
        correct: 0,
        explanation: "O ativo se divide em: 1) Ativo circulante; e Segundo a Lei 6.404: Art. 179. As contas serão classificadas do seguinte modo: I - no ativo circulante: as disponibilidades, os direitos realizáveis no curso do exercício social subsequente e as aplicações de recursos em despesas do exercício seguinte; O quesito trouxe o seguinte exemplo: estoques de mercadorias disponíveis para venda 2) Ativo não circulante. SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 75 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardozo Aula 04 2.1 Ativo realizável a longo prazo: Art. 179. II – No ativo realizável a longo prazo: os direitos realizáveis após o término do exercício seguinte, assim como os derivados de vendas, adiantamentos ou empréstimos a sociedades coligadas ou controladas (artigo 243), diretores, acionistas ou participantes no lucro da companhia, que não constituírem negócios usuais na exploração do objeto da companhia; O quesito trouxe os seguintes exemplos: empréstimos a receber no longo prazo e contas a receber de clientes após o exercício seguinte 2.2 investimentos Art. 179. III - em investimentos: as participações permanentes em outras sociedades e os direitos de qualquer natureza, não classificáveis no ativo circulante, e que não se destinem à manutenção da atividade da companhia ou da empresa; O quesito trouxe o seguinte exemplo: investimento em controlada não negociável no curto prazo 2.3 imobilizado Art. 179. IV – no ativo imobilizado: os direitos que tenham por objeto bens corpóreos destinados à manutenção das atividades da companhia ou da empresa ou exercidos com essa finalidade, inclusive os decorrentes de operações que transfiram à companhia os benefícios, riscos e controle desses bens; (Redação dada pela Lei nº 11.638,de 2007) O quesito trouxe o seguinte exemplo: veículos registrados na contabilidade da empresa como imobilizados 2.4 intangível Art. 179. VI – no intangível: os direitos que tenham por objeto bens incorpóreos destinados à manutenção da companhia ou exercidos com essa finalidade, inclusive o fundo de comércio adquirido. (Incluído pela Lei nº 11.638, de 2007) Não temos exemplos entre as alternativas.",
        type: 'multiple-choice'
      },
      {
        id: 'a04_q16',
        question: "Adiantamentos ou empréstimos a sociedades coligadas ou controladas registram-se no ativo circulante quando houver previsão de recebimento no curso dos 12 meses seguintes à elaboração do balanço. SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 75 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardozo Aula 04",
        options: ["Certo", "Errado"],
        correct: 1,
        explanation: "Segundo a Lei 6.404: Art. 179. II - No ativo realizável a longo prazo: os direitos realizáveis após o término do exercício seguinte, assim como os derivados de vendas, adiantamentos ou empréstimos a sociedades coligadas ou controladas (artigo 243), diretores, acionistas ou participantes no lucro da companhia, que não constituírem negócios usuais na exploração do objeto da companhia; Portanto, adiantamentos ou empréstimos a sociedades coligadas ou controladas devem ser classificados como Ativo Não Circulante – Realizável a longo prazo, independente do prazo estabelecido na operação. Exemplo: a empresa efetua um empréstimo a sociedades coligadas ou controladas com o prazo de quitação de 300 dias; mesmo que pelo prazo o direito seja realizável no presente exercício, em virtude na natureza da operação, ele deve ser classificado como Ativo Não Circulante – Realizável a longo prazo.",
        type: 'true-false'
      },
      {
        id: 'a04_q17',
        question: "Os ativos devem ser segregados em circulantes e não circulantes, sendo estes últimos compostos por ativo realizável a longo prazo, investimentos, imobilizado e intangível.",
        options: ["Certo", "Errado"],
        correct: 0,
        explanation: "O ativo se divide em: 1) Ativo circulante; e 2) Ativo não circulante: Ativo realizável a longo prazo, investimentos, imobilizado e intangível Isso é previsto na lei 6.404/76: Art. 178. No balanço, as contas serão classificadas segundo os elementos do patrimônio que registrem, e agrupadas de modo a facilitar o conhecimento e a análise da situação financeira da companhia. § 1º No ativo, as contas serão dispostas em ordem decrescente de grau de liquidez dos elementos nelas registrados, nos seguintes grupos: I – ativo circulante; e (Incluído pela Lei nº 11.941, de 2009) SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 75 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardozo Aula 04 II – ativo não circulante, composto por ativo realizável a longo prazo, investimentos, imobilizado e intangível. (Incluído pela Lei nº 11.941, de 2009)",
        type: 'true-false'
      },
      {
        id: 'a04_q18',
        question: "Aplicações de recursos em despesas do exercício seguinte devem ser classificadas em ativos não circulantes.",
        options: ["Certo", "Errado"],
        correct: 1,
        explanation: "Na verdade, as aplicações de recursos em despesas do exercício seguinte devem ser classificadas no ativo circulante. Isso é previsto na Lei 6.404/76: Art. 179. As contas serão classificadas do seguinte modo: I - no ativo circulante: as disponibilidades, os direitos realizáveis no curso do exercício social subsequente e as aplicações de recursos em despesas do exercício seguinte;",
        type: 'true-false'
      },
      {
        id: 'a04_q19',
        question: "No balanço patrimonial, um imóvel adquirido por uma empresa industrial com o intuito de auferir receitas de aluguel deve ser classificado no ativo não circulante, no subgrupo investimentos.",
        options: ["Certo", "Errado"],
        correct: 0,
        explanation: "Filtremos as palavras chaves: IMÓVEL + COM O INTUITO DE AUFERIR RECEITAS DE ALUGUEL. Essas são características da propriedade para investimento. Sua definição é a seguinte: a propriedade mantida para auferir aluguel ou para valorização (ou ambas), contanto que não sejam utilizadas para finalidades administrativas e nem sejam vendidas como curso ordinário, isto é, no funcionamento normal, do negócio. Ela pode ser composta por terreno ou edifício – ou parte de edifício – ou ambos. A propriedade para investimento é classificada no ativo não circulante investimentos",
        type: 'true-false'
      },
      {
        id: 'a04_q20',
        question: "Ao final de cada exercício civil, deve ser levantado o balanço patrimonial do respectivo período.",
        options: ["Certo", "Errado"],
        correct: 1,
        explanation: "Na verdade, é ao fim de cada exercício social. Vejam o texto da lei 6.404/76: Art. 176. Ao fim de cada exercício social, a diretoria fará elaborar, com base na escrituração mercantil da companhia, as seguintes demonstrações financeiras, que deverão exprimir com clareza a situação do patrimônio da companhia e as mutações ocorridas no exercício: I - balanço patrimonial; II - demonstração dos lucros ou prejuízos acumulados; III - demonstração do resultado do exercício; e IV – demonstração dos fluxos de caixa; e (Redação dada pela Lei nº 11.638,de 2007) V – se companhia aberta, demonstração do valor adicionado. (Incluído pela Lei nº 11.638, de 2007) O intervalo de tempo ao qual as demonstrações contábeis se referem é chamado de exercício social. Para a LSA o exercício social terá duração de 1 (um) ano e a data do término será fixada no estatuto (LSA, art. 175). Na constituição da companhia e nos casos de alteração estatutária o exercício social poderá ter duração diversa (LSA, art. 175, parágrafo único). Assim, se a companhia foi constituída regularmente e a data do término foi fixada em 31 de março, o exercício social terá a duração de 01 de abril a 31 de março. Ressaltamos que não há exigência de que o exercício social se inicie em 01 de janeiro e termine em 31 de dezembro, isto é, ano civil.",
        type: 'true-false'
      },
      {
        id: 'a04_q21',
        question: "De acordo com a legislação societária, as contas representativas de empréstimos concedidos a acionistas por empresas comerciais devem ser classificadas no ativo circulante ou no ativo realizável a longo prazo, a depender dos prazos para que esses empréstimos se tornem realizáveis.",
        options: ["Certo", "Errado"],
        correct: 1,
        explanation: "As contas representativas de empréstimos concedidos a acionistas por empresas comerciais devem ser classificadas como Ativo Não Circulante – Realizável a longo prazo, independente do prazo estabelecido na operação. Isso é previsto na Lei 6.404: SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 75 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardozo Aula 04 Art. 179. II - No ativo realizável a longo prazo: os direitos realizáveis após o término do exercício seguinte, assim como os derivados de vendas, adiantamentos ou empréstimos a sociedades coligadas ou controladas (artigo 243), diretores, acionistas ou participantes no lucro da companhia, que não constituírem negócios usuais na exploração do objeto da companhia; Nesse ponto, deve-se ficar atento para que os três requisitos sejam atendidos, a espécie do direito, a operação ser não usual e pessoa ligada (devedor). Se essas condições não forem atendidas, seguimos a regra geral. Esquematizemos: Ativo não circulante - Realizável a Longo Prazo Direito realizáveis após o término do exercício social subsequente Direito derivado de Venda Coligadas/Controladas Adiantamento Diretores, administradores, sócios Empréstimo Acionistas ou participantes do lucro Não usual",
        type: 'true-false'
      },
      {
        id: 'a04_q22',
        question: "Investimento com risco significativo de mudança de valor, ainda que circulante, não se qualifica como equivalente de caixa.",
        options: ["Certo", "Errado"],
        correct: 0,
        explanation: "As disponibilidades são elementos que representam dinheiro ou que nele possam ser convertidos de forma imediata, como a conta caixa, bancos conta movimento. Entre seus exemplos, temos as aplicações financeiras de curto prazo, de alta liquidez, que são prontamente conversíveis em montante conhecido de caixa e que estão sujeitas a um insignificante risco de mudança de valor. O enunciado avisou que o investimento possui RISCO SIGNIFICATIVO, por conta disso não pode se enquadrar em caixa e equivalentes de caixa.",
        type: 'true-false'
      },
      {
        id: 'a04_q23',
        question: "Assinale a opção em que todas as rubricas contábeis apresentadas representam elementos patrimoniais classificáveis no ativo no balanço patrimonial. A adiantamentos a fornecedores, reservas de capital, aplicações financeiras, ações de outras empresas e estoques B despesas antecipadas, provisões para pagamentos a efetuar, depósitos bancários, ações em tesouraria e direitos de uso SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 75 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardozo Aula 04 C obras em andamento, empréstimos a sócios, ajustes de avaliação patrimonial, marcas e material de consumo D reservas de lucros, adiantamentos de clientes, impostos a recuperar, títulos públicos e patentes E despesas antecipadas, adiantamentos a fornecedores, ações de outras empresas, empréstimos a sócios e aplicações financeiras",
        options: ["Certo", "Errado"],
        correct: 0,
        explanation: "Segundo o CPC 00 (R2) – Estrutura conceitual básica da contabilidade, temos as seguintes definições para os grupos patrimoniais: Ativo é um recurso econômico presente controlado pela entidade como resultado de eventos passados. Recurso econômico é um direito que tem o potencial de produzir benefícios econômicos. O quesito trouxe os seguintes exemplos: • • • • • • • • • • • • • • Adiantamentos a fornecedores Aplicações financeiras, Ações de outras empresas Estoques Despesas antecipadas Depósitos bancários, Direitos de uso Obras em andamento Empréstimos a sócios Marcas Material de consumo Impostos a recuperar Títulos públicos Patentes Passivo é a obrigação presente da entidade de transferir um recurso econômico como resultado de eventos passados. O quesito trouxe os seguintes exemplos: • • Provisões para pagamentos a efetuar Adiantamentos de clientes Patrimônio Líquido é participação residual nos ativos da entidade após a dedução de todos os seus passivos. O quesito trouxe os seguintes exemplos: • • • Reservas de capital, Ações em tesouraria Ajustes de avaliação patrimonial SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 75 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardozo Aula 04 • Reservas de lucros Diante do exposto, a alternativa E apresenta apenas elementos patrimoniais classificáveis no ativo no balanço patrimonial",
        type: 'multiple-choice'
      },
      {
        id: 'a04_q24',
        question: "Ao reavaliar o risco de crédito da sua carteira de duplicatas a receber, determinada companhia constatou que o valor estimado das perdas relacionadas a créditos de liquidação duvidosa apresentava-se superior ao montante que já tinha sido reconhecido contabilmente pela entidade até então. Nessa situação hipotética, para a adequação das demonstrações contábeis da entidade à nova estimação de perdas associadas a créditos de liquidação duvidosa, deve ser feito registro a débito A de uma conta de despesa e a crédito de uma conta retificadora de duplicatas a receber. B de uma conta de despesa e a crédito da conta duplicatas a receber. C da conta ajustes de avaliação patrimonial e a crédito de uma conta retificadora de duplicatas a receber. D de uma conta de despesa e a crédito de uma conta do passivo. E da conta duplicatas a receber e a crédito de uma conta de despesa.",
        options: ["Certo", "Errado"],
        correct: 0,
        explanation: "A conta perdas estimadas com créditos de liquidação duvidosa é retificadora da conta clientes/duplicatas a receber. Expliquemos! Uma empresa vendeu R$ 100.000,00 a prazo, e constitui Perdas estimadas com créditos de liquidação duvidosa de 3%. Na venda dos R$ 100.000,00: D – Clientes (ativo) 100.000,00 C – Receita de vendas (resultado) 100.000,00 Na constituição da Perdas estimadas com créditos de liquidação duvidosa: D – Despesa com Perdas estimadas com créditos de liquidação duvidosa (despesa) 3.000,00 C – Perdas estimadas com créditos de liquidação duvidosa sos (retificadora do ativo) 3.000,00 Ao reavaliar o risco de crédito da sua carteira de duplicatas a receber, determinada companhia constatou que o valor estimado das perdas relacionadas a créditos de liquidação duvidosa é de R$ 5.000,00 e o montante que já tinha sido reconhecido contabilmente pela entidade era de R$ 3.000,00. Neste caso, como já temos R$ 3.000,00 na conta PECLD, constituiremos somente R$ 2.000,00: D – Despesa com perdas estimadas com créditos de liquidação duvidosa (despesa) 2.000,00 C – Perdas estimadas com créditos de liquidação duvidosa (retificadora do ativo) 2.000,00 SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 75 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardozo Aula 04",
        type: 'multiple-choice'
      },
      {
        id: 'a04_q25',
        question: "A Lei das Sociedades por Ações (Lei n.º 6.404/1976) determina que, ao final de cada exercício social, toda empresa elabore suas demonstrações financeiras. De acordo com essa legislação, assinale a opção que indica demonstração financeira estabelecida como obrigatória para todas as entidades. A demonstração do resultado abrangente B demonstração do valor adicionado C demonstração das mutações do patrimônio líquido D demonstração de lucros ou prejuízos acumulados E demonstração dos fluxos de caixa",
        options: ["Certo", "Errado"],
        correct: 0,
        explanation: "As Demonstrações Contábeis obrigatórias estão previstas na Lei das SAs, da seguinte forma: Art. 176. Ao fim de cada exercício social, a diretoria fará elaborar, com base na escrituração mercantil da companhia, as seguintes demonstrações financeiras, que deverão exprimir com clareza a situação do patrimônio da companhia e as mutações ocorridas no exercício: I - balanço patrimonial; II - demonstração dos lucros ou prejuízos acumulados; III - demonstração do resultado do exercício; e IV – demonstração dos fluxos de caixa; e (Redação dada pela Lei nº 11.638,de 2007) V – se companhia aberta, demonstração do valor adicionado. (Incluído pela Lei nº 11.638, de 2007) § 6o A companhia fechada com patrimônio líquido, na data do balanço, inferior a R$ 2.000.000,00 (dois milhões de reais) não será obrigada à elaboração e publicação da demonstração dos fluxos de caixa. As sociedades por ações podem ser do tipo aberta (quando comercializam títulos e valores mobiliários no mercado de valores mobiliários) e fechadas (quando não o fazem). As demonstrações contábeis são diferentes conforme estejamos frente a um ou outro tipo societário. Assim, pela lei das Lei n.º 6.404/1976, apenas o Balanço Patrimonial, a Demonstração do Resultado do Exercício e a Demonstração de Lucros ou Prejuízos Acumulados são obrigatória para todas as entidades. Vejamos nosso esquema: SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 75 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardozo Aula 04 COMPANHIA DEMONSTRAÇÃO CONTÁBIL ABERTA FECHADA Balanço Patrimonial X X Demonstração do Resultado do Exercício X X Demonstração de Lucros ou Prejuízos Acumulados X X Demonstração dos Fluxos de Caixa X PL > 2 MI Demonstração do Valor Adicionado X Agora, vamos analisar cada alternativa: A demonstração do resultado abrangente. Errado, a DRA - Demonstração do Resultado Abrangente não faz parte das demonstrações contábeis obrigatórias pela LSA. B demonstração do valor adicionado. Errado, apenas se companhia for aberta, a demonstração do valor adicionado será obrigatória. C demonstração das mutações do patrimônio líquido. Errado, a DRA - Demonstração do Resultado Abrangente não faz parte das demonstrações contábeis obrigatórias pela LSA. D demonstração de lucros ou prejuízos acumulados. Correto, a DLPA é uma demonstração obrigatória para sociedades por ações de capital fechado ou aberto. E demonstração dos fluxos de caixa. Errado, pois as companhias fechadas com patrimônio líquido, na data do balanço, inferior a R$ 2.000.000,00 (dois milhões de reais) não serão obrigadas à elaboração e publicação da demonstração dos fluxos de caixa.",
        type: 'multiple-choice'
      },
      {
        id: 'a04_q26',
        question: "Com relação ao balanço patrimonial, o ativo deve ser classificado como não circulante quando A for mantido essencialmente com o propósito de ser negociado. B a sua realização for esperada para até doze meses após a data do balanço. C o seu consumo for pretendido no decurso normal do ciclo operacional da entidade. D for mantido, por mais de um período, para uso na produção ou no fornecimento de mercadorias. E for um equivalente de caixa.",
        options: ["Certo", "Errado"],
        correct: 0,
        explanation: "SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 75 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardozo Aula 04 Nesse quesito vamos recorrer ao item 66 do CPC 26 (R1) - Apresentação das Demonstrações Contábeis: 66. O ativo deve ser classificado como circulante quando satisfizer qualquer dos seguintes critérios: (a) espera-se que seja realizado, ou pretende-se que seja vendido ou consumido no decurso normal do ciclo operacional da entidade; (b) está mantido essencialmente com o propósito de ser negociado; (c) espera-se que seja realizado até doze meses após a data do balanço; ou (d) é caixa ou equivalente de caixa (conforme definido no Pronunciamento Técnico CPC 03 – Demonstração dos Fluxos de Caixa), a menos que sua troca ou uso para liquidação de passivo se encontre vedada durante pelo menos doze meses após a data do balanço. Todos os demais ativos devem ser classificados como não circulantes A for mantido essencialmente com o propósito de ser negociado. Errado. Tratar-se de um ativo circulante, consoante o item 66, alínea b. B a sua realização for esperada para até doze meses após a data do balanço. Errado. Tratar-se de um ativo circulante, consoante o item 66, alínea c. C o seu consumo for pretendido no decurso normal do ciclo operacional da entidade. Errado. Tratar-se de um ativo circulante, consoante o item 66, alínea a. D for mantido, por mais de um período, para uso na produção ou no fornecimento de mercadorias. Como não se enquadra no item 66, então temos um ativo não circulante. Lembrando que todos os demais ativos devem ser classificados como não circulantes. E for um equivalente de caixa. Errado. Tratar-se de um ativo circulante, consoante o item 66, alínea e.",
        type: 'multiple-choice'
      },
      {
        id: 'a04_q27',
        question: "Considere que uma indústria, contribuinte do imposto sobre produtos industrializados (IPI) e do imposto sobre circulação de mercadorias e serviços (ICMS), tenha adquirido a prazo R$ 73 mil em matérias-primas para industrialização, incorrendo em R$ 10 mil de IPI e R$ 17 mil de ICMS, com frete por conta do fornecedor. Nessa situação, para espelhar a referida transação na sua contabilidade, a entidade deve contabilizar conforme apresentado a seguir. Diversos Estoque de matérias-primas – R$ 73 mil IPI a recuperar – R$ 10 mil ICMS a recuperar – R$ 17 mil A fornecedores – R$ 100 mil",
        options: ["Certo", "Errado"],
        correct: 0,
        explanation: "Os estoques, de modo geral, compreendem tanto as mercadorias que a empresa possui para revenda quanto a matéria-prima. O estoque de Matérias Primas é registrado pelo valor original, e deve incluir todos os custos de aquisição, bem como outros custos incorridos para trazer os estoques à sua condição e localização atuais. Assim, o custo dos estoques de matéria-prima compreende o preço de compra, os impostos de importação e outros tributos, bem como os custos de transporte, seguro, manuseio e outros diretamente relacionados com a aquisição dos materiais. Nesse caso, por se tratar de matéria-prima, portanto, destinada à produção, o IPI e o ICMS são recuperáveis. Isso significa que eles não entram no valor dos estoques de MP. A pegadinha da questão é que a banca detalhou o valor pago, isto é, já trouxe o valor dos estoques líquido de tributos (incorrendo em R$ 10 mil de IPI e R$ 17 mil de ICMS). • • • • MP = 73.000 IPI = 10.000 ICMS = 17.000 Fornecedores = MP 73.000 + IPI 10.000 + ICMS 17.000 = 100.000 A contabilização é a seguinte: D - Estoque de MP R$ 73.000,00 D - IPI a recuperar R$ 10.000,00 D - ICMS a recuperar R$ 17.000,00 C - Fornecedores R$ 100.000 SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 93 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardozo Aula 05 Outra forma de lançamento, também conhecida como partida de Diário ou Lançamento Manual. A conta precedida da preposição “a” é a conta creditada. Quando no seu concurso aparecer a palavra diversos, saiba que há mais de uma conta creditada ou debitada. Diversos Estoque de matérias-primas – R$ 73 mil IPI a recuperar – R$ 10 mil ICMS a recuperar – R$ 17 mil a fornecedores – R$ 100 mil",
        type: 'true-false'
      },
      {
        id: 'a04_q28',
        question: "Considere que, em uma economia inflacionária, uma entidade tenha realizado vendas de uma quantidade determinada de estoques de mercadorias em um período. Nesse caso, considerando que todas as demais características sejam constantes, a venda de estoques com custos avaliados pelo método do primeiro a entrar, primeiro a sair (PEPS) geraria maior lucro do exercício do que a mesma venda de estoques com custos avaliados pela média ponderada móvel.",
        options: ["Certo", "Errado"],
        correct: 0,
        explanation: "Geralmente, temos economias inflacionárias, ou seja, onde os preços aumentam devido a inflação. Ao adotarmos o método PEPS, daremos baixar ao estoque mais antigo primeiro e esse estoque mais antigo foi mais barato. Consequentemente, o lucro obtido será maior e o montante de tributos sobre o lucro também. Método UEPS PEPS Média ponderada CMV Maior Menor Fica no Meio Estoque Final Menor Maior Fica no Meio Lucro Menor Maior Fica no Meio Permitido Não Sim Sim Mais um bizú: Ambiente Inflacionário Estoque Final (EF) EF (PEPS) > EF (Custo Médio) > EF (UEPS) CMV CMV (PEPS) < CMV (Custo Médio) < CMV (UEPS) Lucro Bruto (LB) LB (PEPS) > LB (Custo Médio) > LB (UEPS)",
        type: 'true-false'
      },
      {
        id: 'a04_q29',
        question: "Assinale a opção em que é indicada a informação relacionada ao próprio estoque a qual deve ser levada em conta por uma companhia quando da mensuração contábil do referido item patrimonial. A valor realizável líquido B custo calculado pelo método do custeio variável C valor justo D depreciação E custo corrente",
        options: ["Certo", "Errado"],
        correct: 0,
        explanation: "No tocante a mensuração contábil do estoque, o CPC 16 informa que os estoques devem ser mensurados pelo valor de custo ou pelo valor realizável líquido, dos dois o menor. Recordamos que o Valor realizável líquido é o preço de venda estimado no curso normal dos negócios deduzido dos custos estimados para sua conclusão e dos gastos estimados necessários para se concretizar a venda. Já o valor justo, é o é o preço que seria recebido pela venda de um ativo ou que seria pago pela transferência de um passivo em uma transação não forçada entre participantes do mercado na data de mensuração. Esse CPC explica que o valor realizável líquido é um valor específico para a entidade e o valor justo não é. Ressaltamos que a referida norma não trouxe definições para os demais termos.",
        type: 'multiple-choice'
      },
      {
        id: 'a04_q30',
        question: "Com base nos custos específicos, a valoração de estoques destinados à venda que possam ser identificados individualmente, distinguindo-se uns dos outros, é recomendada nos casos em que há muitas unidades do produto nesses estoques.",
        options: ["Certo", "Errado"],
        correct: 1,
        explanation: "Os critérios de avaliação de Estoques utilizados no Inventário Permanente são os seguintes: PEPS, UEPS, Média Ponderada (Fixa e Móvel), Custo Específico e Método do Varejo. O custo específico deve ser usado para itens identificados, ou para itens separados para um projeto específico. Podemos exemplificar da seguinte forma: Suponha que uma agência de automóveis possua 10 unidades de um determinado modelo em estoque. Três foram comprados há 6 meses, por R$ 20.000,00. Seis foram comprados na última semana, por R$ 22.000,00. O último é um carro usado, que foi aceito como parte de pagamento de um veículo novo, pelo custo de R$ 12.000,00. SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 93 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardozo Aula 05 A empresa realiza a venda de quatro veículos: um que foi comprado há 6 meses, dois comprados na última semana e o veículo usado. Nesse caso, a empresa pode atribuir o custo específico de cada carro vendido. Ressaltamos que ele NÃO é recomendável quando há grandes quantidades de itens de estoque que sejam geralmente intercambiáveis, a identificação específica de custos não é apropriada. Adendo! Itens intercambiáveis são itens que podem ser trocados por outro plenamente e não haverá problema. Por exemplo, no estoque de fruta podemos trocar laranja por laranja, açaí por açaí, morango por morango, sem problemas. Já os itens não intercambiáveis são itens específicos. Imagine um avião de modelo específico, por exemplo, não podemos trocar um BOEING 737 por um 747.",
        type: 'true-false'
      },
      {
        id: 'a04_q31',
        question: "O ICMS incidente sobre a aquisição de mercadoria para revenda implica o reconhecimento contábil, no ato da compra, de A um passivo. B um item classificado em outros resultados abrangentes. C uma despesa. D um ativo representativo de um estoque. E um ativo representativo de um direito.",
        options: ["Certo", "Errado"],
        correct: 0,
        explanation: "De acordo com o CPC 16 - Estoques, tributos recuperáveis junto ao Fisco não devem ser incluídos no custo dos estoques. A questão fala que uma entidade adquiriu mercadorias para revenda com a incidência de ICMS e, nesse caso, o tributo é recuperável. Em razão disso, no ato da compra, ocorre o reconhecimento contábil de um ativo representativo de um direito.",
        type: 'multiple-choice'
      },
      {
        id: 'a04_q32',
        question: "O montante dos estoques registrados no balanço não pode exceder o valor de realização desses ativos, devendo ser adotado o menor desses dois valores caso o valor do custo seja superior ao valor de mercado.",
        options: ["Certo", "Errado"],
        correct: 1,
        explanation: "Parte 1 - O montante dos estoques registrados no balanço não pode exceder o valor de realização desses ativos SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 93 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardozo Aula 05 O FIPECAFI afirma que essa prática de reduzir o custo dos estoques (write-off) ao valor realizável líquido é coerente com o “conceito geral de impairment”, isto é, não se deve ter registrado valores acima do que se espera realizar quando da ocorrência da venda ou do uso. Parte 1 está certa. Parte 2 - devendo ser adotado o menor desses dois valores caso o valor do custo seja superior ao valor de mercado. No tocante a mensuração contábil do estoque, o CPC 16 informa que os estoques devem ser mensurados pelo valor de custo ou pelo valor realizável líquido, dos dois o menor. Então, professores, posso considerar que Valor de Mercado e Valor Realizável Líquido são sinônimos? A resposta é NÃO!!! O valor realizável líquido, meus queridos, é específico, peculiar de cada entidade, não é padronizado, definido para um grupo de entidades, mesmo que sejam entidades semelhantes, de um mesmo segmento. Imagine que duas empresas adquiram o mesmo modelo de máquina XYZ para utilização na produção e decidam vendê-la, após determinado período. É provável que cada empresa tenha gastos específicos para efetivar a venda, custos de desmontagem, de divulgação da venda, e assim sendo, podemos entender que cada uma terá um valor líquido de venda. Percebe que esse valor é ESPECÍFICO da entidade, pois será fruto de variáveis específicas que cada entidade possui? De outro modo, o Valor Justo não é específico para casa entidade, pois é um valor externo, ou seja, valor de mercado. Esquematizemos: Valor Realizável Líquido Valor de Mercado CPC 16 Lei 6404/76 Valor de Venda - Gastos Necessários Valor Externo Específico para a entidade (considera suas características) É um valor de mercado Parte 2 está errada, pois a banca trocou “valor realizável líquido” por “valor de mercado”.",
        type: 'true-false'
      },
      {
        id: 'a04_q33',
        question: "A equação que sintetiza a lógica do inventário permanente estabelece que o custo da mercadoria vendida é igual ao montante do estoque inicial adicionado às compras e subtraído do montante do estoque final.",
        options: ["Certo", "Errado"],
        correct: 1,
        explanation: "O controle de estoques pode ser feito através do inventário permanente ou do inventário periódico. Inventário permanente: empresa controla o estoque de forma contínua, dando baixa em cada operação de venda. Ele utiliza os seguintes critérios: PEPS, UEPS, Média Ponderada (Fixa e Móvel), Custo Específico e Método do Varejo. Inventário periódico: os estoques são avaliados na data do balanço, através do inventário físico. Vejam. Não há lançamento operação por operação. Apenas na data de encerramento é que apuramos o estoque para ver o saldo. Para calcular o valor do Custo das Mercadorias Vendidas, usamos a fórmula: CMV = Estoque inicial + Compras – Estoque final. Observa-se que o quesito descreveu o inventário periódico, mas atribuiu ao permanente. Corrigindo, fica assim: a equação que sintetiza a lógica do inventário PERÍODICO estabelece que o custo da mercadoria vendida é igual ao montante do estoque inicial adicionado às compras e subtraído do montante do estoque final.",
        type: 'true-false'
      },
      {
        id: 'a04_q34',
        question: "O melhor critério para avaliação de estoques em empresas que comercializem produtos homogêneos é o custo específico.",
        options: ["Certo", "Errado"],
        correct: 1,
        explanation: "Quando há grandes quantidades de itens de estoque que sejam homogêneos (intercambiáveis), a identificação específica de custos não é apropriada. Em tais circunstâncias, podemos utilizar o critério Primeiro a Entrar, Primeiro a Sair (PEPS) ou pelo critério do custo médio ponderado. Ressaltamos que a entidade deve usar o mesmo critério de custeio para todos os estoques que tenham natureza e uso semelhantes para a entidade. Já os tenham outra natureza ou uso, podem justificar-se diferentes critérios de valoração.",
        type: 'true-false'
      },
      {
        id: 'a04_q35',
        question: "Considere que uma indústria tenha adquirido um lote significativo de determinado componente para seu principal produto e que, decorridos alguns meses, um novo componente, com tecnologia mais avançada, tenha chegado ao mercado, tornando mais difícil a venda de produtos fabricados com o componente anterior. Considere, ainda, que, em função disso, a indústria tenha estimado a necessidade de aplicar um desconto para facilitar a venda do produto final com o componente anterior. Nessa situação, o critério do custo ou do valor de mercado, dos dois o menor, deverá ser aplicado, podendo implicar o reconhecimento de uma perda de valor do estoque de produto final.",
        options: ["Certo", "Errado"],
        correct: 1,
        explanation: "No tocante a mensuração contábil do estoque, o CPC 16 informa que os estoques devem ser mensurados pelo valor de custo ou pelo valor realizável líquido, dos dois o menor. O FIPECAFI afirma que essa prática de reduzir o custo dos estoques (write-off) ao valor realizável líquido é coerente com o “conceito geral de impairment”, isto é, não se deve ter registrado valores acima do que se espera realizar quando da ocorrência da venda ou do uso. Assim, vamos reconhecer a perda com impairment no resultado da empresa. O quesito tornou-se errado ao trocar “valor realizável líquido” por “valor de mercado”.",
        type: 'true-false'
      },
      {
        id: 'a04_q36',
        question: "Assinale a opção que corresponde aos ativos que, de acordo com os pronunciamentos técnicos do Comitê de Pronunciamentos Contábeis (CPC), devem ser mensurados escolhendo-se o menor valor entre o seu custo de aquisição e o seu valor realizável líquido. A instrumentos financeiros B propriedades para investimento C itens do ativo imobilizado D itens do ativo intangível E mercadorias para revenda",
        options: ["Certo", "Errado"],
        correct: 0,
        explanation: "O CPC 16 afirma que os estoques devem ser avaliados pelo custo ou pelo valor realizável líquido, dos dois o MENOR, vejam: Mensuração de estoque 9. Os estoques objeto deste Pronunciamento devem ser mensurados pelo valor de custo ou pelo valor realizável líquido, dos dois o menor. Ressaltamos que os demais temas fogem do escopo da aula. SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 93 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardozo Aula 05",
        type: 'multiple-choice'
      },
      {
        id: 'a04_q37',
        question: "No início do mês de março de 2023, uma empresa comercial típica possuía em estoque 10 calças contabilizadas pelo valor total de R$ 1.600,00. Durante o referido mês, a empresa adquiriu um lote com mais 10 unidades. O valor total da nota fiscal foi de R$ 2.090,00, e nela foi informada a aplicação da alíquota de IPI de 10% sobre o preço das mercadorias. O ICMS da operação foi calculado pela alíquota de 18%. Após realização do inventário no final do mês, constatou-se a existência de 8 calças em estoque. Foi utilizada a média ponderada para fins de cálculo do custo da mercadoria vendida. Na situação hipotética em apreço, o valor do estoque, em 31 de março de 2023, e o custo da mercadoria vendida, em março de 2023, foram, respectivamente, A R$ 1.263,20 e R$ 1.894,80. B R$ 1.324,00 e R$ 1.986,00. C R$ 1.339,20 e R$ 2.008,80. D R$ 1.400,00 e R$ 2.100,00. E R$ 1.460,00 e R$ 2.191,20.",
        options: ["Certo", "Errado"],
        correct: 0,
        explanation: "Faremos algumas observações: - A mercadoria foi adquirida pelo preço, mas, por determinação do CPC 16 – Estoques, temos que retirar o ICMS do custo dos estoques, pois trata-se de um tributo recuperável. - O quesito informou que foi adotado o método da média ponderada. Para calcularmos o custo médio temos que somar o valor total dos estoques e dividir pelo número de unidades. Vamos lá: Parte 1 - No início do mês de março de 2023, uma empresa comercial típica possuía em estoque 10 calças contabilizadas pelo valor total de R$ 1.600,00. EI = 10 X R$ 160 = R$ 1.600 Parte 2 - Durante o referido mês, a empresa adquiriu um lote com mais 10 unidades. O valor total da nota fiscal foi de R$ 2.090,00, e nela foi informada a aplicação da alíquota de IPI de 10% sobre o preço das mercadorias. O ICMS da operação foi calculado pela alíquota de 18%. O quesito informou o seguinte: uma empresa comercial, destinada à revenda de calças, adquire do fabricante. Neste caso, o IPI não é recuperável. Vejam. Estamos comprando mercadoria de uma indústria para revender. Como se trata de mercadoria destinada à comercialização, o IPI não entra na base de cálculo do ICMS. Outro detalhe, o quesito informou o valor da nota fiscal. Tal valor já inclui o IPI e o ICMS. Dica: para retirarmos o “Imposto por fora” (IPI) do valor total da nota fiscal basta pegarmos o valor da nota fiscal e dividirmos por (1 + alíquota), vejam: SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 93 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardozo Aula 05 Valor sem IPI = 2.090 = 1.900 1,10 ICMS recuperável = Base Cálculo x Alíquota = R$ 1.900 x 18% = R$ 342 O valor do estoque é: Nota Fiscal - ICMS a recuperar = R$ 2.090 - R$ 342 = R$ 1.748 Compras 1 = 10 unidades x R$ 174,80 = 1.748 Até agora temos o estoque inicial e uma compra. O custo médio será o seguinte: Custo Total = R$ 1.600 + R$ 1.748 = R$ 3.348 Número de Unidades = 10 + 10 = 20 Custo Médio = R$ 3.348/20 = R$ 167,40 Parte 3 - Após realização do inventário no final do mês, constatou-se a existência de 8 calças em estoque. EF = 8 unidades x 167,40 = 1.339,20 CMV = (20 unidades – 8 unidades) x Custo médio = 12 unidades x R$ 167,40 = R$ 2.008,80",
        type: 'multiple-choice'
      },
      {
        id: 'a04_q38',
        question: "Considere que uma entidade comercial adquira uma mercadoria para revenda tributada pelo ICMS e pelo IPI e que o valor do ICMS recuperável seja de R$ 9.000; considere, também, que, dias depois, essa mercadoria seja vendida a um cliente, com ICMS de R$ 12.600, sendo apurado o ICMS a recolher. Nessa hipótese, essas transações geram um débito e um crédito na conta de ICMS a recuperar, no valor de R$ 9.000, e um crédito de R$ 12.600 na conta de ICMS a recolher.",
        options: ["Certo", "Errado"],
        correct: 0,
        explanation: "Vejamos a contabilização completa: No momento da compra: D – Estoques D – ICMS a recuperar 9.000 C – Fornecedores No momento da venda: SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 93 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardozo Aula 05 - Reconhecimento da receita D – Clientes C - Receita de Vendas - Baixa no estoque D – CMV C – Estoques - Tributação D – ICMS s/ vendas 12.600 C – ICMS a recolher 12.600 Apuração do ICMS: devemos confrontar o saldo das duas contas de ICMS (a recuperar x a recolher). ICMS a recuperar = R$ 9.000,00 < ICMS a recolher = R$ 12.600,00 Então, vamos transferir o saldo do passivo (ICMS a recolher) para o ativo (ICMS a recuperar): D – ICMS a recolher (passivo) 9.000,00 C – ICMS a recuperar (Ativo) 9.000,00 Como a entidade possui o direito de R$ 9.000 perante o fisco, então ela não precisará pagar os R$ 12.600, mas sim a diferença: ICMS a recolher = R$ 12.600 – R$ 9.000 = R$ 3.600 Pelo recolhimento: D – ICMS a Recolher 3.600 C – Caixa/bancos 3.600 Enfim, o quesito afirmou que essas transações provocaram um débito e um crédito de R$ 9.000 na conta de ICMS a recuperar. Realmente, houve um débito no momento da aquisição do estoque e um crédito quando da apuração. Também afirmou que essas transações provocaram um crédito de R$ 12.600 na conta ICMS a recolher, isto de fato ocorreu no momento da venda da mercadoria. Ressaltamos que ocorreram também débito de R$9.000 na conta ICMS a recolher e posteriormente, no momento do recolhimento, um débito de R$ 3.600. Todavia, para questões certo/errado do Cebraspe, um item incompleto não é errado.",
        type: 'true-false'
      },
      {
        id: 'a04_q39',
        question: "Se uma empresa adiantou cinquenta mil reais, via transferência bancária, a um de seus fornecedores para acelerar a produção de determinada mercadoria, então, nessas condições, a empresa deverá registrar o valor adiantado como um direito, em conta de adiantamento a fornecedores, ou similar, contra a respectiva conta bancária utilizada.",
        options: ["Certo", "Errado"],
        correct: 0,
        explanation: "Item correto, a concessão de um adiantamento a fornecedores de mercadorias, gera um direito, contabilizado no ativo. Contabilização desse evento? D - Adiantamentos a Fornecedores (ativo circulante) C - Bancos",
        type: 'true-false'
      },
      {
        id: 'a04_q40',
        question: "Estoques de mercadorias para revenda devem ser evidenciados no balanço patrimonial pelo seu valor justo.",
        options: ["Certo", "Errado"],
        correct: 1,
        explanation: "Errado, de acordo com o CPC 16, os estoques devem ser avaliados pelo valor de custo ou valor realizável líquido, dos dois o menor. Portanto, é errada a afirmação que diz esses itens serão avaliados pelo valor justo.",
        type: 'true-false'
      },
      {
        id: 'a04_q41',
        question: "Na apuração do valor realizável líquido de um estoque em elaboração, é levado em conta o preço de venda estimado no curso normal dos negócios deduzido dos gastos necessários para a realização da venda. Além dessas informações, devem ser considerados, para a referida apuração, os custos a) estimados de reinvestimento. b) de oportunidade. c) de gestão da entidade. d) estimados de conclusão. e) de reposição de estoques.",
        options: ["Certo", "Errado"],
        correct: 0,
        explanation: "O CPC 16 - Estoques afirma que valor realizável líquido é o preço de venda estimado no curso normal dos negócios deduzido dos custos estimados para sua conclusão e dos gastos estimados necessários para se concretizar a venda. SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 93 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardozo Aula 05",
        type: 'multiple-choice'
      },
      {
        id: 'a04_q42',
        question: "Valor de custo ou valor de mercado — dos dois, o menor: essa é a regra consagrada para a avaliação do valor dos itens mantidos em estoque.",
        options: ["Certo", "Errado"],
        correct: 1,
        explanation: "No tocante a mensuração contábil do estoque, o CPC 16 informa que os estoques devem ser mensurados pelo valor de custo ou pelo valor realizável líquido, dos dois o menor. O erro da questão foi trocar “valor realizável líquido” por “valor de mercado”.",
        type: 'true-false'
      },
      {
        id: 'a04_q43',
        question: "O ICMS incidente sobre o preço de mercadorias adquiridas para revenda deve ser contemplado no custo de aquisição dessas mercadorias.",
        options: ["Certo", "Errado"],
        correct: 1,
        explanation: "A mercadoria foi adquirida pelo preço, mas, por determinação do CPC 16 – Estoques, temos que retirar o ICMS do custo dos estoques, pois trata-se de um tributo recuperável.",
        type: 'true-false'
      },
      {
        id: 'a04_q44',
        question: "O procedimento contábil de redução do custo dos estoques ao seu valor realizável líquido é um indicativo de que o investimento efetuado nos referidos ativos pode não ser mais recuperável.",
        options: ["Certo", "Errado"],
        correct: 0,
        explanation: "O CPC 16 explica que o custo dos estoques pode não ser recuperável se os custos estimados de acabamento ou os custos estimados a serem incorridos para realizar a venda tiverem aumentado. A prática de reduzir o valor de custo dos estoques (write down) para o valor realizável líquido é consistente com o ponto de vista de que os ativos não devem ser escriturados por quantias superiores àquelas que se espera que sejam realizadas com a sua venda ou uso.",
        type: 'true-false'
      },
      {
        id: 'a04_q45',
        question: "As entidades podem valer-se do valor de custo ou do valor realizável líquido para a avaliação dos seus estoques de mercadorias, devendo escolher, dos dois valores, o menor.",
        options: ["Certo", "Errado"],
        correct: 0,
        explanation: "No tocante a mensuração contábil do estoque, o CPC 16 informa que os estoques devem ser mensurados pelo valor de custo ou pelo valor realizável líquido, dos dois o menor. Esquematizemos: Menor • Valor realizável líquido • Custo",
        type: 'true-false'
      },
      {
        id: 'a04_q46',
        question: "A Cia. ABC adquiriu, à vista, 1.000 unidades de mercadorias para revenda. As informações relacionadas à transação estão elencadas a seguir: ● Preço unitário da mercadoria: R$ 100,00 ● ICMS: R$ 18,00 (o valor está embutido no preço unitário da mercadoria) ● Frete pago pela Cia. ABC para receber, em suas dependências, as mercadorias adquiridas: R$ 100,00 ● Seguro de transporte das mercadorias, pago pelo próprio fornecedor das mercadorias: R$ 10,00 Considerando a situação hipotética apresentada, assinale a opção que apresenta o valor que deverá ser registrado na conta de estoques da Cia. ABC, em decorrência da aquisição das referidas mercadorias. A R$ 82.000,00 B R$ 82.100,00 C R$ 100.100,00 D R$ 100.110,00 E R$ 118.110,00",
        options: ["Certo", "Errado"],
        correct: 0,
        explanation: "Faremos algumas observações: - De acordo com o CPC 16 - Estoques, o custo do estoque compreende. SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 93 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardozo Aula 05 Custo do estoque inclui: •Preço de compra •Impostos de importação e outros tributos (exceto recuperáveis) •Custo de transportes •Seguro •Manuseio •Custos diretamente atribuíveis Não inclui •Tributos recuperáveis (MP: IPI, ICMS, PIS, COFINS não cumulativos. Revenda: ICMS, PIS, COFINS não cumulativos) •Descontos comerciais •Abatimentos - O quesito avisou que o seguro foi pago pelo fornecedor. Fica assim: Preço: 1.000 unidades x R$ 100 = R$ 100.000 (-) ICMS recuperável: : 1.000 unidades x R$ 18 = R$ 18.000 (+) Frete pago pela Cia. ABC para receber, em suas dependências, as mercadorias adquiridas: R$ 100,00 (=) Total R$ 82.100,00",
        type: 'multiple-choice'
      },
      {
        id: 'a04_q47',
        question: "Com base nessas informações, assinale a opção correta. A O valor do estoque no final do mês de abril está entre R$ 100,00 e R$ 120,00. B O valor do custo das mercadorias vendidas no mês de abril está entre R$ 4.000,00 e R$ 4.200,00. C O valor do estoque no final do mês de abril está entre R$ 120,00 e R$ 150,00. D O valor custo das mercadorias vendidas no mês de abril está entre R$ 4.000,00 e R$ 4.250,00. E O valor custo das mercadorias vendidas no mês de abril está entre R$ 4.000,00 e R$ 4.300,00.",
        options: ["Certo", "Errado"],
        correct: 0,
        explanation: "Método = PEPS EI = 100 unidades x R$ 10 = R$ 1.000 SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 93 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardozo Aula 05 Compra 1 = 50 unidades x R$ 12 = R$ 600 Compra 2 = 60 unidades x R$ 15 = R$ 900 Compra 3 = 150 unidades x R$ 13 = R$1.950 O estoque final em 20/4, era de 360 unidades (100 + 50 + 60 + 150). O enunciado informa que existiam 10 unidades no estoque da empresa no final do mês de abril. Isso significa que houve a venda de 350 unidades (360 – 10). Então, vamos dar baixa no estoque inicial, na compra 1, na compra 2 e de 140 unidades da compra 3, vejam: Saídas (Saídas (Vamos baixar as mercadorias mais antigas): EI = 100 unidades x R$ 10 = R$ 1.000 Compra 1 = 50 unidades x R$ 12 = R$ 600 Compra 2 = 60 unidades x R$ 15 = R$ 900 Compra 3 = 140 unidades x R$ 13 = R$ 1.820 CMV = R$ 1.000 + R$ 600 + R$ 900 + R$ 1.820 = R$ 4.320 Estoque final: Compra 3 = 10 unidades x R$ 13 = R$ 130 A O valor do estoque no final do mês de abril está entre R$ 100,00 e R$ 120,00. Errado, pois ele foi de R$ 130,00 B O valor do custo das mercadorias vendidas no mês de abril está entre R$ 4.000,00 e R$ 4.200,00. O CMV foi de R$ 4.320. Alternativa errada. C O valor do estoque no final do mês de abril está entre R$ 120,00 e R$ 150,00. O estoque final foi de R$ 130.00. Alternativa certa. D O valor custo das mercadorias vendidas no mês de abril está entre R$ 4.000,00 e R$ 4.250,00. O CMV foi de R$ 4.320. Alternativa errada. E O valor custo das mercadorias vendidas no mês de abril está entre R$ 4.000,00 e R$ 4.300,00. O CMV foi de R$ 4.320. Alternativa errada.",
        type: 'multiple-choice'
      },
      {
        id: 'a04_q48',
        question: "Conforme o pronunciamento técnico do CPC referente a estoques, as empresas da área de comércio ou da área de indústria precisam utilizar como critério de valoração de estoque o UEPS (último que entra é o primeiro que sai), tendo em vista a desvalorização da moeda no tempo.",
        options: ["Certo", "Errado"],
        correct: 1,
        explanation: "Geralmente, temos economias inflacionárias, ou seja, onde os preços aumentam devido a inflação. Ao adotarmos o método UEPS, daremos baixar ao estoque mais novo primeiro e esse estoque mais novo foi mais custoso. Consequentemente, o lucro obtido será menor e o montante de tributos sobre o lucro também. Ambiente Inflacionário Estoque Final (EF) EF (PEPS) > EF (Custo Médio) > EF (UEPS) CMV CMV (PEPS) < CMV (Custo Médio) < CMV (UEPS) Lucro Bruto (LB) LB (PEPS) > LB (Custo Médio) > LB (UEPS) Em razão disso, o método Último Que Entra Primeiro Que Sai (UEPS) é proibido pela legislação brasileira. Ele só pode ser usado para fins gerenciais. Por último, vejamos o texto do CPC 16: 25. O custo dos estoques, que não sejam os tratados nos itens 23 e 24, deve ser atribuído pelo uso do critério Primeiro a Entrar, Primeiro a Sair (PEPS) ou pelo critério do custo médio ponderado. A entidade deve usar o mesmo critério de custeio para todos os estoques que tenham natureza e uso semelhantes para a entidade. Para os estoques que tenham outra natureza ou uso, podem justificar-se diferentes critérios de valoração. Veja que o próprio pronunciamento não cita o UEPS.",
        type: 'true-false'
      },
      {
        id: 'a04_q49',
        question: "O montante total de custo do estoque deve incluir todos os custos de aquisição e de transformação: preço de compra, descontos comerciais, impostos de importação e outros tributos não recuperáveis bem como custos de transporte, seguro, manuseio e outros diretamente atribuíveis à aquisição de produtos acabados, materiais e serviços.",
        options: ["Certo", "Errado"],
        correct: 1,
        explanation: "O custo de aquisição dos estoques compreende: SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 93 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardozo Aula 05 1) Preço de compra 2) Impostos de importação e outros tributos (exceto os recuperáveis). Atenção! Os tributos recuperáveis são: A) Matéria prima: IPI, ICMS, PIS e Cofins (os dois últimos na modalidade não cumulativa) B) Mercadorias para revenda: ICMS, PIS e Cofins (os dois últimos na modalidade não cumulativa) 3) Custos de transporte, seguro, manuseio e outros diretamente atribuíveis à aquisição. Esquematizemos: Custo do estoque inclui: Não inclui •Preço de compra •Impostos de importação e outros tributos (exceto recuperáveis) •Custo de transportes •Seguro •Manuseio •Custos diretamente atribuíveis •Tributos recuperáveis (MP: IPI, ICMS, PIS, COFINS não cumulativos. Revenda: ICMS, PIS, COFINS não cumulativos) •Descontos comerciais •Abatimentos As devoluções de compras, os DESCONTOS COMERCIAIS e os abatimentos sobre compras devem ser deduzidos do custo de aquisição. Assim, o quesito errar ao inclui os descontos comerciais.",
        type: 'true-false'
      },
      {
        id: 'a04_q50',
        question: "Assinale a opção que apresenta corretamente o registro contábil gerado, quando da venda de mercadoria, pelo pagamento de frete para a entrega da mercadoria ao cliente. A D – Despesa de venda C – Disponibilidade B D – Estoque de mercadorias C – Disponibilidade C D – Frete a pagar C – Disponibilidade D D – Estoque de mercadorias C – Contas a pagar E D – Despesa de venda C – Contas a pagar",
        options: ["Certo", "Errado"],
        correct: 0,
        explanation: "O custo do estoque compreende, além do preço pago, todos os gastos incorridos necessários para que eles fiquem nas condições determinadas pela administração, como por exemplo, frete e seguros. Ressaltamos que apenas o frete sobre compras entra no custo do estoque. O frete sobre vendas é uma despesa de venda. SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 93 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardozo Aula 05 As despesas de vendas são gastos de promoção, colocação e distribuição dos produtos da empresa. Por exemplo: gastos com marketing, gastos com distribuição, gasto com frete sobre vendas, gastos com pessoal da área de vendas, gasto com comissões. Assim, gravemos: • • Frete sobre compras -> entra no custo do estoque Frete sobre vendas-> não entra no custo do estoque, visto que é despesa. Lançamento: D – Despesa de venda (-Resultado) C – Disponibilidade (-Ativo)",
        type: 'multiple-choice'
      },
      {
        id: 'a04_q51',
        question: "A empresa comercial X adquiriu 10.000 unidades de mercadorias para revenda, tendo incorrido nos seguintes gastos. Preço de compra, por unidade: R$ 5,00. ICMS embutido no preço de compra, por unidade: R$ 0,80. Gasto total com o frete das mercadorias adquiridas: R$ 200,00. Gasto total com o armazenamento das mercadorias adquiridas: R$ 1.000,00. Gasto total com a comercialização das mercadorias adquiridas: R$ 800,00. A empresa X revendeu a seus clientes todas as unidades adquiridas. Nessa situação hipotética, o custo das mercadorias vendidas totalizou A R$ 42.000,00. B R$ 42.200,00. C R$ 50.200,00. D R$ 51.200,00. E R$ 52.000,00.",
        options: ["Certo", "Errado"],
        correct: 0,
        explanation: "O custo do estoque compreende, além do preço pago, todos os gastos incorridos necessários para que eles fiquem nas condições determinadas pela administração, como por exemplo, frete e seguros. Ressaltamos que alguns gastos ocorrem após o estoque está nas condições pretendidas pela administração e, por conta disso, são despesas. A seguir, um esquema baseado no item 15 do CPC 16: SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 93 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardozo Aula 05 Perdas anormais ITENS NÃO INCLUÍDOS NOS CUSTOS DOS ESTOQUES Gastos com armazenamento (exceto necessário processo produtivo) Despesas administrativas Despesas de comercialização, de venda, entrega de bens e serviços Assim, o custo das mercadorias vendidas totalizou Preço de compra, por unidade: R$ 5,00 x 10.000 = R$ 50.000,00 (-) ICMS embutido no preço de compra, por unidade: R$ 0,80 x 10.000 = R$ 8.000,00 (+) Gasto total com o frete das mercadorias adquiridas: R$ 200,00. (-) Custo de aquisição = 50.000 - 8.000 + 200 = 42.200 Os seguintes gastos são despesas: • Gasto total com o armazenamento das mercadorias adquiridas: R$ 1.000,00. • Gasto total com a comercialização das mercadorias adquiridas: R$ 800,00.",
        type: 'multiple-choice'
      },
      {
        id: 'a04_q52',
        question: "Desperdício de materiais na transformação de estoques deve ser reconhecido como despesa do período em que foi incorrido.",
        options: ["Certo", "Errado"],
        correct: 1,
        explanation: "No tocante aos desperdícios que ocorrem na produção seguem esta regra: SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 93 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardozo Aula 05 Normais Custo da produção \"Anormais\" ou \"Excepcionais\" Resultado do Exercício (despesa) Perdas na produção Já os desperdícios do produto acabado, não precisamos nos preocupar se a perda foi “normal” ou “excepcional”. Todas as perdas de produto acabado vão diretamente para o resultado do exercício. Não devem impactar o custo do produto. Diante do exposto, desperdício de materiais na transformação de estoques deve PODE ser reconhecido como despesa do período em que foi incorrido. Basta que sejam anormais ou excepcionais. Item errado.",
        type: 'true-false'
      },
      {
        id: 'a04_q53',
        question: "Uma empresa varejista, tributada pelo lucro presumido, adquiriu mercadorias no montante de R$ 100 mil, com incidência de 16% de ICMS e 10% de IPI; a nota fiscal de compra somou R$ 110 mil e a empresa adquirente não é contribuinte do IPI. Se essas são as únicas informações relevantes para fins contábeis, então o valor líquido do estoque contabilizado é de A R$ 84.000. B R$ 94.000. C R$ 126.000. D R$ 100.000. E R$ 110.000.",
        options: ["Certo", "Errado"],
        correct: 0,
        explanation: "Vamos conhecer quais esses tributos incidentes nas operações com mercadorias. Apenas destacamos que focaremos nos aspectos contábeis! Não iremos entrar nos aspectos da legislação tributária. • IPI – Imposto sobre Produtos Industrializados: É um imposto de competência federal incidente sobre operações com produtos industrializados, por esse motivo, é devido por empresas industriais ou equiparadas. É um imposto “por fora”, o que significa que não está incluído no preço do produto. Normalmente, a questão informa qual a alíquota que deve ser considerada ou o valor do IPI. Assim, a questão vai dizer: o preço de venda foi R$ 100,00 e o IPI tem alíquota de 10%. O total será de R$ 110,00, correspondente ao preço da mercadoria + IPI, que é por fora. • ICMS – Imposto sobre Circulação de Mercadorias e Serviços: SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 93 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardozo Aula 05 É um imposto de competência estadual, incidente sobre a circulação de mercadorias e sobre a prestação de serviços de transportes interestadual e intermunicipal, comunicações e fornecimento de energia elétrica. É um imposto “por dentro”, ou seja, já está incluso no preço da mercadoria ou produto. Nesse caso, se a empresa adquire uma mercadoria por R$ 100,00 e o ICMS tem alíquota de 10%, o total da nota fiscal de compra será de R$ 100,00 e não R$ 110,00, como no caso do IPI. Já mencionamos que o preço da mercadoria inclui o ICMS, mas não o IPI. Mas devemos atentar para a seguinte “pegadinha”: se a questão mencionar o “valor da nota fiscal” ou o “valor pago”, este já inclui o IPI. Esquematizemos: Inclui o ICMS e e não inclui o IPI • Preço da mercadoria, preço da compra • Incluiu o ICMS e o IPI • Valor da nota fiscal, valor pago IPI X ICMS Conforme previsão da Constituição Federal, o ICMS não compreenderá, em sua base de cálculo, o montante do imposto sobre produtos industrializados, quando a operação, realizada entre contribuintes e relativa a produto destinado à industrialização ou à comercialização, configure fato gerador dos dois impostos. *Neste caso, como se trata de mercadoria destinada à comercialização, o IPI não será incluído na base de cálculo do ICMS. Cálculo dos impostos: • • • IPI: 100.000 x 10% = 10.000. Valor da Nota Fiscal: 100.000 + IPI 10.000 = 110.000 *ICMS: 100.000 x 16% = 16.000 Vimos que os impostos recuperáveis não entram no custo de aquisição. Apenas os impostos não recuperáveis entram. Como o ICMS é recuperável, iremos deduzi-lo. Dado que o IPI é não recuperável, então ele entrará no custo do estoque. O custo do estoque, nessa situação será: Valor Pago R$ 100.000,00, (+) Tributos não recuperáveis (IPI) R$ 10.000,00 (-) Tributos recuperáveis (ICMS) R$ 16.000,00 (=) Total R$ 94.000,00 Contabilização: SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 93 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardozo Aula 05 D – Estoque 94.000 (110.000 -16.000) D – ICMS a recuperar 16.000 C – Fornecedores 110.000",
        type: 'multiple-choice'
      },
      {
        id: 'a04_q54',
        question: "De acordo com a legislação societária, o investimento efetuado por uma empresa industrial na aquisição de matéria-prima deve ser avaliado, no balanço patrimonial da referida empresa, pelo A custo de aquisição da matéria-prima, deduzido de provisão para ajustá-lo ao valor de mercado, quando esse for inferior. B preço pelo qual a matéria-prima possa ser reposta, mediante aquisição no mercado. C preço líquido de realização da matéria-prima, mediante venda no mercado. D custo de aquisição da matéria-prima, deduzido do saldo da respectiva conta de depreciação. E custo de aquisição da matéria-prima, deduzido de eventuais perdas por redução ao seu valor recuperável.",
        options: ["Certo", "Errado"],
        correct: 0,
        explanation: "Segundo a Lei das S.A.s (lei 6404/76): Art. 183. No balanço, os elementos do ativo serão avaliados segundo os seguintes critérios: II - os direitos que tiverem por objeto mercadorias e produtos do comércio da companhia, assim como matérias-primas, produtos em fabricação e bens em almoxarifado, pelo custo de aquisição ou produção, deduzido de provisão para ajustá-lo ao valor de mercado, quando este for inferior; § 1o Para efeitos do disposto neste artigo, considera-se valor justo: (Redação dada pela Lei nº 11.941, de 2009) a) das matérias-primas e dos bens em almoxarifado, o preço pelo qual possam ser repostos, mediante compra no mercado;",
        type: 'multiple-choice'
      },
      {
        id: 'a04_q55',
        question: "Se, indevidamente, a contabilidade de uma empresa superestimar seu saldo de estoques no inventário final do ano 20X1 e, embora constatado, esse problema não for corrigido, tal situação acarretará uma A superestimação do lucro líquido do ano 20X2. B superestimação do lucro líquido do ano 20X1. C subestimação do lucro líquido do ano 20X1. SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 93 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardozo Aula 05 D subestimação da situação líquida do ano 20X1. E subestimação do custo da mercadoria vendida do ano 20X2.",
        options: ["Certo", "Errado"],
        correct: 0,
        explanation: "A fórmula do CMV é a seguinte: CMV = Estoque Inicial + Compras – Estoque Final. Vejamos as consequências: Se em 20X1 o estoque final estiver SUPERESTIMADO, seu CMV será SUBESTIMADO. C M V = Estoque Inicial+ C om pras – Estoque Final Por sua vez, seu Lucro Líquido estará SUPERESTIMADO. O estoque final de 20x1 é o estoque inicial de 20X2, nesse caso, a análise se alta: Se em 20X2 o estoque inicial estiver SUPERESTIMADO, seu CMV será SUPERESTIMADO CM V = Estoque Inicial+ C om pras – Estoque Final Por sua vez, seu Lucro Líquido estará SUBESTIMADO. Então, podemos marcar como gabarito a letra b, que diz: “superestimação do Lucro Líquido do ano de 20X1.”",
        type: 'multiple-choice'
      },
      {
        id: 'a04_q56',
        question: "De acordo com a legislação vigente, adiantamentos em dinheiro de uma empresa a seus fornecedores nacionais de mercadorias devem ser contabilizados A como despesa, no resultado do exercício. B no grupo de estoques, no ativo. C nas contas a receber, no ativo. D na conta de fornecedores, no passivo. E em resultados de exercícios futuros, no passivo.",
        options: ["Certo", "Errado"],
        correct: 0,
        explanation: "O adiantamento a fornecedores de mercadorias deve ficar registrado junto aos Estoques, pois possuem vinculação específica, ou seja, a compra de mercadorias. Muitos alunos tiveram dúvidas nessa questão e nos perguntaram se não seria possível fazer a classificação como Contas a Receber. Adiantamento a Terceiros é uma conta registrada em Contas a Receber, que engloba SEFAZ-RN (Auditor Fiscal de Receitas Estaduais) Contabilidade Geral e Avançada (Profs. Julio Cardozo, Luciano 93 www.estrategiaconcursos.com.br Luciano Rosa, Júlio Cardozo Aula 05 o numerário entregue a terceiros, mas sem vinculação específica ao fornecimento de bens, produtos ou serviços contratuais predeterminados. Para finalizar, você sabia que Adiantamento a Fornecedores de Imobilizado é classificada no Imobilizado, pela mesma lógica do Adiantamento a Fornecedores de estoques? Resumindo: Estoques Destinação Específica Imobilizado Adiantamentos Sem destinação específica Contas a Receber",
        type: 'multiple-choice'
      },
    ]
  }
];
