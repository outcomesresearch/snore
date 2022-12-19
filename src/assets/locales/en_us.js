import keys from './keys.js';
import { en } from 'vuetify/lib/locale/';

export default {
  ...en, // existing vuetify translation entries
  [keys.FOOTER_COPYWRIGHT]:
    'Copyright 1996 by Jay F. Piccirillo, M. D., Washington University School of Medicine, St. Louis, Missouri',
  [keys.INTERPRETATION_MILD]: 'Mild',
  [keys.INTERPRETATION_MODERATE]: 'Moderate',
  [keys.INTERPRETATION_SEVERE]: 'Severe',
  [keys.SCORE_ONLY_IN_ENGLISH]:
    'Score interpretation is temporarily only available in English',
  [keys.HEADER_TITLE]:
    'Symptoms of Nocturnal Obstruction and Related Events (SNORE)',
  [keys.HEADER_BODY_1]:
    'Below is a list of symptoms and the social/emotional consequences related to your illness. We want to know more about these problems and appreciate you answering the following questions to the best of your ability. There are no good or bad questions, and only you can give us this information. Please assess your problems that occurred within',
  [keys.HEADER_BODY_2]: 'the past two weeks.',
  [keys.HEADER_BODY_4]: 'We thank you for your participation.',
  [keys.SECTION1_INSTRUCTIONS_1]:
    'Taking into consideration the severity of your problem when you experience it and its frequency, please assess each statement below and select its degree of severity.',

  [keys.SECTION1_OPTION_1]: 'No problem',
  [keys.SECTION1_OPTION_2]: 'Very mild problem',
  [keys.SECTION1_OPTION_3]: 'Mild or minor problem',
  [keys.SECTION1_OPTION_4]: 'Moderate problem',
  [keys.SECTION1_OPTION_5]: 'Severe problem',
  [keys.SECTION1_OPTION_6]: 'Worst possible problem',

  [keys.SECTION1_PROMPT_1]:
    'Waking up during the night; inability to have a good night’s sleep',
  [keys.SECTION1_PROMPT_2]: 'Loud/excessive snoring',
  [keys.SECTION1_PROMPT_3]: 'Restless during sleep',
  [keys.SECTION1_PROMPT_4]: 'Waking up tired',
  [keys.SECTION1_PROMPT_5]:
    'Exhaustion, fatigue (e.g. falling asleep while reading a book)',
  [keys.SECTION1_PROMPT_6]: 'Frequent yawning',
  [keys.SECTION1_PROMPT_7]: 'Tiredness behind the wheel',
  [keys.SECTION1_PROMPT_8]: 'Problems with memory and/or concentration',
  [keys.SECTION1_PROMPT_9]:
    'Limits productivity at certain moments during the day (e.g. in the evening after work)',
  [keys.SECTION1_PROMPT_10]:
    'Limits participation in community, volunteer, religious or spiritual activities',
  [keys.SECTION1_PROMPT_11]:
    'Amount of medical care related to sleeping disturbances (e.g. frequent visits to doctors, need to wear a positive pressure mask, cleaning the tracheotomy tube, etc.)',
  [keys.SECTION1_PROMPT_12]:
    'Interaction between obstructive sleep disturbances and other medical problems',
  [keys.SECTION1_PROMPT_13]:
    'Fear of medical problems limits car trips to other regions or parts of the country',
  [keys.SECTION1_PROMPT_14]: 'Interference with sexual relations',
  [keys.SECTION1_PROMPT_15]:
    'Financial burden related to the illness (e.g. cost of medication, doctor visits, laboratory tests, etc.)',
  [keys.SECTION1_PROMPT_16]: '“Frayed” nerves; “short tempered”',
  [keys.SECTION1_PROMPT_17]: 'Inability to relax; always worried',
  [keys.SECTION1_PROMPT_18]: 'Marital tensions, stress and tension',
  [keys.SECTION1_PROMPT_19]: '“Foul” temper',
  [keys.SECTION1_PROMPT_20]:
    'Inability to maintain a close relationship with partner and/or loved ones',
  [keys.SECTION1_PROMPT_21]: 'Loss of desire for sexual relations',
  [keys.SECTION1_PROMPT_22]: 'Feeling like there is no hope for the future',
  [keys.SECTION1_PROMPT_23]: 'Competencies are questioned',
  [keys.SECTION1_PROMPT_24]: 'Credibility is questioned',
  [keys.SECTION1_PROMPT_25]:
    'Changes in your work due to the illness (e.g. a person drives the car instead of you; inability to participate in meetings due to excessive drowsiness)',

  [keys.AVERAGE]: 'Average',
  [keys.SUM]: 'Sum',
  [keys.SCORE]: 'Score',
  [keys.SCORE_WHEN_FORM_COMPLETE]:
    'Result will display here when form is complete.',

  [keys.INTERPRETATION_1]:
    'When taken multiple times, SNORE scores can be used to measure the change in physical and functional problems, functional limitations, and emotional consequences of sleep disorder-related health burdens over time, and as a result of treatment.',
  [keys.INTERPRETATION_2]:
    'Impact of treatment is assessed with the SNORE Change Score: The difference between SNORE pre-treatment and SNORE post-Treatment average scores. A SNORE Change Score of 0.5 should be considered the minimal clinically important difference, and change scores greater than this should be considered clinically meaningful.',

  [keys.INTERPRETATION_TITLE]: 'SNORE Score Interpretation',

  [keys.BASED_ON_AVERAGE]: 'Based on average',
  [keys.BASED_ON_SUM]: 'Based on sum',
};
