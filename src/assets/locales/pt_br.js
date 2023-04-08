import keys from './keys.js';
import { pt } from 'vuetify/lib/locale/';

export default {
  ...pt, // existing vuetify translation entries
  [keys.FOOTER_COPYRIGHT]:
    'Copyright © 1996 by Jay F. Piccirillo, M. D., Washington University School of Medicine, St. Louis, Missouri',
  [keys.INTERPRETATION_MILD]: 'Leve',
  [keys.INTERPRETATION_MODERATE]: 'Moderata',
  [keys.INTERPRETATION_SEVERE]: 'Grave',
  [keys.SCORE_ONLY_IN_ENGLISH]:
    'Score interpretation is temporarily only available in English',
  [keys.HEADER_TITLE]:
    'Sintomas de Obstrução Nasal Nortuna e Eventos Associados (RONCO)',
  [keys.HEADER_BODY_1]:
    'A seguir é fornecida uma lista dos sintomas e das consequências sociais/emocionais relacionadas à sua doença. Queremos saber mais sobre esses problemas e gostaríamos que você respondesse às perguntas a seguir da melhor maneira que puder.  Não existem respostas certas ou erradas, e só você pode nos dar essas informações. Avalie os problemas que você teve nas ',
  [keys.HEADER_BODY_2]: 'últimas duas semanas.',
  [keys.HEADER_BODY_4]: 'Agradecemos a sua participação.',
  [keys.SECTION1_INSTRUCTIONS_1]:
    'Considerando a intensidade do seu problema quando ele ocorre e com que frequência ele ocorre, avalie cada frase abaixo com base no grau de intensidade, fazendo um círculo em volta do número que corresponde ao que você sente, usando esta escala:',
  [keys.TOP_5_INSTRUCTIONS]:
    'Marque os itens que mais afetam a sua saúde (máximo de 5 itens).',
  [keys.SECTION1_OPTION_1]: 'Sem problema',
  [keys.SECTION1_OPTION_2]: 'Problema muito leve',
  [keys.SECTION1_OPTION_3]: 'Problema leve ou pequeno',
  [keys.SECTION1_OPTION_4]: 'Problema moderado',
  [keys.SECTION1_OPTION_5]: 'Problema grave',
  [keys.SECTION1_OPTION_6]: 'Pior problema possível',

  [keys.SECTION1_PROMPT_1]:
    'Acordar durante a noite; incapacidade de ter uma boa noite de sono',
  [keys.SECTION1_PROMPT_2]: 'Ronco alto/excessivo ',
  [keys.SECTION1_PROMPT_3]: 'Agitação durante o sono',
  [keys.SECTION1_PROMPT_4]: 'Acordar cansado(a)',
  [keys.SECTION1_PROMPT_5]:
    'Exaustão, fadiga (por exemplo, adormecer lendo um livro)',
  [keys.SECTION1_PROMPT_6]: 'Bocejar com frequência',
  [keys.SECTION1_PROMPT_7]: 'Cansaço ao dirigir carro',
  [keys.SECTION1_PROMPT_8]: 'Problemas de memória e/ou concentração',
  [keys.SECTION1_PROMPT_9]:
    'Produtividade limitada em determinados momentos do dia (por exemplo: à noite depois do trabalho)',
  [keys.SECTION1_PROMPT_10]:
    'Participação limitada na comunidade, voluntariado, atividades religiosas ou espirituais',
  [keys.SECTION1_PROMPT_11]:
    'A quantidade de atendimento médico relacionado a distúrbios do sono (por exemplo: consultas médicas frequentes, necessidade de usar máscara de pressão positiva, limpeza do tubo de traqueostomia, etc.)',
  [keys.SECTION1_PROMPT_12]:
    'Interação entre distúrbios obstrutivos do sono e outros problemas médicos',
  [keys.SECTION1_PROMPT_13]:
    'Medo de que os problemas de saúde limitem viagens de carro para outras regiões ou partes do país',
  [keys.SECTION1_PROMPT_14]: 'Interferência nas relações sexuais',
  [keys.SECTION1_PROMPT_15]:
    'Impacto financeiro relacionado com a doença (por exemplo: custo de medicamentos, consultas médicas, exames laboratoriais, etc.)',
  [keys.SECTION1_PROMPT_16]: 'Nervos “em frangalhos”; ter “pavio curto”',
  [keys.SECTION1_PROMPT_17]: 'Incapacidade de relaxar; constante preocupação',
  [keys.SECTION1_PROMPT_18]: 'Tensões conjugais, estresse e tensão',
  [keys.SECTION1_PROMPT_19]: 'Mau humor',
  [keys.SECTION1_PROMPT_20]:
    'Incapacidade de manter um relacionamento íntimo com parceiros e/ou entes queridos',
  [keys.SECTION1_PROMPT_21]: 'Perda de desejo sexual',
  [keys.SECTION1_PROMPT_22]: 'Sentimento de desesperança com o futuro',
  [keys.SECTION1_PROMPT_23]: 'As capacidades são colocadas em dúvida',
  [keys.SECTION1_PROMPT_24]: 'A credibilidade é colocada em dúvida',
  [keys.SECTION1_PROMPT_25]:
    'Mudanças no trabalho em virtude da doença (por exemplo: outra pessoa dirige o carro em seu lugar), incapacidade de participar de reuniões devido a sonolência excessiva)',

  [keys.AVERAGE]: 'Média',
  [keys.SUM]: 'Total',
  [keys.SCORE]: 'Pontuação',
  [keys.SCORE_WHEN_FORM_COMPLETE]:
    'A pontuação será exibida aqui quando o formulário estiver completo.',

  [keys.INTERPRETATION_1]: 'Quando aplicados várias vezes, os escores do SNORE podem ser usados para medir a mudança nos problemas físicos e funcionais, limitações funcionais e consequências emocionais das cargas de saúde relacionadas aos distúrbios do sono ao longo do tempo e em decorrência do tratamento.',
  [keys.INTERPRETATION_2]:
    'Uma Pontuação de alteração do SNORE-25 de 0,5 será considerada a diferença mínima clinicamente importante e pontuações de alteração mais altas que esta serão consideradas clinicamente significativas.',

  [keys.INTERPRETATION_TITLE]: '',

  [keys.BASED_ON_AVERAGE]: 'Com base na pontuação média',
  [keys.BASED_ON_SUM]: 'Com base na pontuação total',

  // Shortened versions of prompts to use in grid
  [keys.SECTION1_INSTRUCTIONS_1]:
    'Considerando a intensidade do seu problema quando ele ocorre e com que frequência ele ocorre, avalie cada frase abaixo com base no grau de intensidade, fazendo um círculo em volta do número que corresponde ao que você sente, usando esta escala:',
  [keys.TOP_5_INSTRUCTIONS]:
    'Marque os itens que mais afetam a sua saúde (máximo de 5 itens).',
  [keys.SECTION1_OPTION_1]: 'Sem problema',
  [keys.SECTION1_OPTION_2]: 'Problema muito leve',
  [keys.SECTION1_OPTION_3]: 'Problema leve ou pequeno',
  [keys.SECTION1_OPTION_4]: 'Problema moderado',
  [keys.SECTION1_OPTION_5]: 'Problema grave',
  [keys.SECTION1_OPTION_6]: 'Pior problema possível',

  [keys.SECTION1_PROMPT_1_SHORT]:
    'Acordar durante a noite; incapacidade de ter uma boa noite de sono',
  [keys.SECTION1_PROMPT_2_SHORT]: 'Ronco alto / excessivo ',
  [keys.SECTION1_PROMPT_3_SHORT]: 'Agitação durante o sono',
  [keys.SECTION1_PROMPT_4_SHORT]: 'Acordar cansado(a)',
  [keys.SECTION1_PROMPT_5_SHORT]: 'Exaustão, fadiga',
  [keys.SECTION1_PROMPT_6_SHORT]: 'Bocejar com frequência',
  [keys.SECTION1_PROMPT_7_SHORT]: 'Cansaço ao dirigir carro',
  [keys.SECTION1_PROMPT_8_SHORT]: 'Problemas de memória e/ou concentração',
  [keys.SECTION1_PROMPT_9_SHORT]:
    'Produtividade limitada em determinados momentos do dia',
  [keys.SECTION1_PROMPT_10_SHORT]:
    'Participação limitada na comunidade, voluntariado, atividades religiosas / espirituais',
  [keys.SECTION1_PROMPT_11_SHORT]:
    'A quantidade de atendimento médico relacionado a distúrbios do sono',
  [keys.SECTION1_PROMPT_12_SHORT]:
    'Interação entre distúrbios obstrutivos do sono e outros problemas médicos',
  [keys.SECTION1_PROMPT_13_SHORT]:
    'Medo de que os problemas de saúde limitem viagens de carro para outras regiões ou partes do país',
  [keys.SECTION1_PROMPT_14_SHORT]: 'Interferência nas relações sexuais',
  [keys.SECTION1_PROMPT_15_SHORT]:
    'Impacto financeiro relacionado com a doença',
  [keys.SECTION1_PROMPT_16_SHORT]: 'Nervos “em frangalhos”; ter “pavio curto”',
  [keys.SECTION1_PROMPT_17_SHORT]:
    'Incapacidade de relaxar; constante preocupação',
  [keys.SECTION1_PROMPT_18_SHORT]: 'Tensões conjugais, estresse e tensão',
  [keys.SECTION1_PROMPT_19_SHORT]: 'Mau humor',
  [keys.SECTION1_PROMPT_20_SHORT]:
    'Incapacidade de manter um relacionamento íntimo com parceiros e/ou entes queridos',
  [keys.SECTION1_PROMPT_21_SHORT]: 'Perda de desejo sexual',
  [keys.SECTION1_PROMPT_22_SHORT]: 'Sentimento de desesperança com o futuro',
  [keys.SECTION1_PROMPT_23_SHORT]: 'As capacidades são colocadas em dúvida',
  [keys.SECTION1_PROMPT_24_SHORT]: 'A credibilidade é colocada em dúvida',
  [keys.SECTION1_PROMPT_25_SHORT]: 'Mudanças no trabalho em virtude da doença',

  [keys.ONLY_INCLUDE_TOP_5]:
    'Inclua na pontuação apenas os itens que mais afetam sua saúde',
};
