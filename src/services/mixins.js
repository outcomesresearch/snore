import locale_keys from '../assets/locales/keys';

export const getShortID = (key) => {
  return `${key}_SHORT`;
};

export default [
  {
    data: function () {
      return { k: locale_keys };
    },
    methods: {
      t(key) {
        return this.$vuetify.lang.t(`$vuetify.${key}`);
      },
      getShortID,
      isMild({ sum, average }) {
        return {
          sum: sum <= 25,
          average: average <= 1,
          phrase: { sum: '≤ 25 ', average: '≤ 1' },
        };
      },
      isModerate({ sum, average }) {
        return {
          sum: sum > 25 && sum <= 50,
          average: average > 1.01 && average <= 2,
          phrase: { sum: '26 -> 50', average: '1.01 -> 2' },
        };
      },
      isSevere({ sum, average }) {
        return {
          sum: sum > 50,
          average: average > 2,
          phrase: { sum: '> 50 ', average: '> 2' },
        };
      },
    },
  },
];
