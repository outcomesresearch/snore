import keys from './keys.js';
import { es } from 'vuetify/lib/locale/';

export default {
  ...es, // existing vuetify translation entries
  [keys.FOOTER_COPYRIGHT]:
    'Copyright © 1996 by Jay F. Piccirillo, M. D., Washington University School of Medicine, St. Louis, Missouri',
  [keys.INTERPRETATION_MILD]: 'Leve',
  [keys.INTERPRETATION_MODERATE]: 'Moderata',
  [keys.INTERPRETATION_SEVERE]: 'Grave',
  [keys.SCORE_ONLY_IN_ENGLISH]:
    'Score interpretation is temporarily only available in English',
  [keys.HEADER_TITLE]:
    'Síntomas de Obstrucción Nocturna y Acontecimientos Relacionados (RONQUIDOS)',
  [keys.HEADER_BODY_1]:
    'A continuación, aparece una lista de los síntomas y las consecuencias sociales/emocionales relacionadas con su enfermedad. Nos gustaría saber más sobre estos problemas y, para ello, le agradeceríamos que respondiese a las siguientes preguntas lo mejor que pueda. No existen respuestas correctas o incorrectas, y esta información solo nos la puede facilitar usted. Por favor, evalúe los problemas que haya tenido en ',
  [keys.HEADER_BODY_2]: 'las últimas dos semanas.',
  [keys.HEADER_BODY_3]: '',
  [keys.HEADER_BODY_4]: 'Le agradecemos su participación.',
  [keys.SECTION1_INSTRUCTIONS_1]:
    'Teniendo en cuenta la intensidad de su problema cuando lo experimenta y su frecuencia, evalúe las siguientes afirmaciones según su grado de intensidad rodeando con un círculo el número que se corresponda con lo que siente, de acuerdo con la siguiente escala:',
  [keys.TOP_5_INSTRUCTIONS]:
    'Por favor, seleccione los elementos que más afectan su salud (máximo de 5 elementos).',
  [keys.SECTION1_OPTION_1]: 'Ningún problema',
  [keys.SECTION1_OPTION_2]: 'Un problema muy ligero',
  [keys.SECTION1_OPTION_3]: 'Un problema leve o menor',
  [keys.SECTION1_OPTION_4]: 'Un problema moderado',
  [keys.SECTION1_OPTION_5]: 'Un problema grave',
  [keys.SECTION1_OPTION_6]: 'El peor problema posible',

  [keys.SECTION1_PROMPT_1]:
    'Despertarse durante la noche; incapacidad para dormir bien de un tirón',
  [keys.SECTION1_PROMPT_2]: 'Ronquido muy fuerte/con mucho volumen',
  [keys.SECTION1_PROMPT_3]: 'Agitación durante el sueño',
  [keys.SECTION1_PROMPT_4]: 'Levantarse cansado/a',
  [keys.SECTION1_PROMPT_5]:
    'Agotamiento o fatiga (por ejemplo, quedarse dormido/a leyendo un libro)',
  [keys.SECTION1_PROMPT_6]: 'Bostezos frecuentes',
  [keys.SECTION1_PROMPT_7]: 'Cansancio al conducir',
  [keys.SECTION1_PROMPT_8]: 'Problemas de memoria y/o concentración',
  [keys.SECTION1_PROMPT_9]:
    'Limitación en la productividad en determinados momentos del día (por ejemplo: por la tarde, después de trabajar)',
  [keys.SECTION1_PROMPT_10]:
    'Limitación en la participación en actividades comunitarias, de voluntariado, religiosas o espirituales',
  [keys.SECTION1_PROMPT_11]:
    'Cantidad de atención médica requerida relacionada con las alteraciones del sueño (por ejemplo: visitas frecuentes al médico, necesidad de usar una mascarilla de presión positiva, limpieza de la cánula de traqueotomía, etc.)',
  [keys.SECTION1_PROMPT_12]:
    'Efecto combinado de las alteraciones del sueño obstructivas y de otros problemas médicos',
  [keys.SECTION1_PROMPT_13]:
    'Miedo a que los desplazamientos en coche a otras regiones o partes del país se vean limitados por causa de los problemas médicos',
  [keys.SECTION1_PROMPT_14]: 'Interferencia con las relaciones sexuales',
  [keys.SECTION1_PROMPT_15]:
    'Carga económica relacionada con la enfermedad (por ejemplo: coste de los medicamentos, consultas médicas, análisis, etc.)',
  [keys.SECTION1_PROMPT_16]: 'Estar crispado/a o tenso/a; irritable',
  [keys.SECTION1_PROMPT_17]:
    'Incapacidad para relajarse; preocupación constante',
  [keys.SECTION1_PROMPT_18]: 'Tirantez, estrés y tensión en la pareja',
  [keys.SECTION1_PROMPT_19]: 'Mal humor',
  [keys.SECTION1_PROMPT_20]:
    'Incapacidad para mantener una relación cercana con la pareja y/o los seres queridos',
  [keys.SECTION1_PROMPT_21]: 'Pérdida del deseo de tener relaciones sexuales',
  [keys.SECTION1_PROMPT_22]: 'Sentir que no hay esperanzas de cara al futuro',
  [keys.SECTION1_PROMPT_23]: 'Otros dudan de que usted sea competente',
  [keys.SECTION1_PROMPT_24]: 'Otros dudan de que se pueda confiar en usted',
  [keys.SECTION1_PROMPT_25]:
    'Cambios en el trabajo por causa de su enfermedad (por ejemplo: otra persona conduce en lugar de usted o incapacidad para participar en reuniones por un exceso de sensación de sueño)',

  [keys.AVERAGE]: 'Media',
  [keys.SUM]: 'Total',
  [keys.SCORE]: 'Puntuación',
  [keys.SCORE_WHEN_FORM_COMPLETE]:
    'La puntuación se mostrará aquí cuando el formulario esté completo.',

  [keys.INTERPRETATION_1]:
    'Cuando se toma varias veces, las puntuaciones de SNORE se pueden utilizar para medir el cambio en los problemas físicos y funcionales, las limitaciones funcionales y las consecuencias emocionales de las cargas de salud relacionadas con trastornos del sueño con el tiempo, y como resultado del tratamiento.',
  [keys.INTERPRETATION_2]:
    'Una puntuación del cambio de la SNORE de 0,5 se considerará la diferencia de importancia clínica mínima y las puntuaciones del cambio superiores a esta se considerarán clínicamente significativas.',

  [keys.INTERPRETATION_TITLE]: 'Interpretación de la puntuación SNORE',

  [keys.BASED_ON_AVERAGE]: 'En base a la puntuación media',
  [keys.BASED_ON_SUM]: 'En base a la puntuación total',

  // Shortened versions of prompts to use in grid
  [keys.SECTION1_PROMPT_1_SHORT]:
    'Despertarse durante la noche; incapacidad para dormir bien de un tirón',
  [keys.SECTION1_PROMPT_2_SHORT]: 'Ronquido muy fuerte/con mucho volumen',
  [keys.SECTION1_PROMPT_3_SHORT]: 'Agitación durante el sueño',
  [keys.SECTION1_PROMPT_4_SHORT]: 'Levantarse cansado/a',
  [keys.SECTION1_PROMPT_5_SHORT]: 'Agotamiento o fatiga',
  [keys.SECTION1_PROMPT_6_SHORT]: 'Bostezos frecuentes',
  [keys.SECTION1_PROMPT_7_SHORT]: 'Cansancio al conducir',
  [keys.SECTION1_PROMPT_8_SHORT]: 'Problemas de memoria y/o concentración',
  [keys.SECTION1_PROMPT_9_SHORT]:
    'Limitación en la productividad en determinados momentos del día',
  [keys.SECTION1_PROMPT_10_SHORT]:
    'Limitación en la participación en actividades comunitarias, de voluntariado, religiosas o espirituales',
  [keys.SECTION1_PROMPT_11_SHORT]:
    'Cantidad de atención médica requerida relacionada con las alteraciones del sueño',
  [keys.SECTION1_PROMPT_12_SHORT]:
    'Efecto combinado de las alteraciones del sueño obstructivas y de otros problemas médicos',
  [keys.SECTION1_PROMPT_13_SHORT]:
    'Miedo a que los desplazamientos en coche a otras regiones o partes del país se vean limitados por causa de los problemas médicos',
  [keys.SECTION1_PROMPT_14_SHORT]: 'Interferencia con las relaciones sexuales',
  [keys.SECTION1_PROMPT_15_SHORT]:
    'Carga económica relacionada con la enfermedad',
  [keys.SECTION1_PROMPT_16_SHORT]: 'Estar crispado/a o tenso/a; irritable',
  [keys.SECTION1_PROMPT_17_SHORT]:
    'Incapacidad para relajarse; preocupación constante',
  [keys.SECTION1_PROMPT_18_SHORT]: 'Tirantez, estrés y tensión en la pareja',
  [keys.SECTION1_PROMPT_19_SHORT]: 'Mal humor',
  [keys.SECTION1_PROMPT_20_SHORT]:
    'Incapacidad para mantener una relación cercana con la pareja y/o los seres queridos',
  [keys.SECTION1_PROMPT_21_SHORT]:
    'Pérdida del deseo de tener relaciones sexuales',
  [keys.SECTION1_PROMPT_22_SHORT]:
    'Sentir que no hay esperanzas de cara al futuro',
  [keys.SECTION1_PROMPT_23_SHORT]: 'Otros dudan de que usted sea competente',
  [keys.SECTION1_PROMPT_24_SHORT]:
    'Otros dudan de que se pueda confiar en usted',
  [keys.SECTION1_PROMPT_25_SHORT]:
    'Cambios en el trabajo por causa de su enfermedad',

  [keys.ONLY_INCLUDE_TOP_5]:
    'Solo incluya en la puntuación los elementos que más afectan su salud',
};
