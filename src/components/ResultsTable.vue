<template>
  <v-card-text class="pa-6">
    <div>
      <h4 v-if="!allFieldsHaveValues" class="font-italic mb-4">
        {{ t(k.SCORE_WHEN_FORM_COMPLETE) }}
      </h4>
    </div>
    <div v-if="allFieldsHaveValues" class="results mb-4">
      <h3 class="black--text mb-2">{{ t(k.SCORE) }}:</h3>
      <pre>{{ t(k.SUM) }}: {{ sum }}</pre>
      <pre>{{ t(k.AVERAGE) }}: {{ average.toFixed(3) }}</pre>
    </div>

    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left score-interp-title">
              {{ t(k.INTERPRETATION_TITLE) }}
            </th>
            <th class="text-center">{{ t(k.BASED_ON_SUM) }}</th>
            <th class="text-center">{{ t(k.BASED_ON_AVERAGE) }}</th>
          </tr>
        </thead>
        <tbody
          class="text-center"
          :class="allFieldsHaveValues ? `showOutlines` : ''"
        >
          <tr class="mild">
            <td class="text-left">{{ t(k.INTERPRETATION_MILD) }}</td>
            <td>
              <div :class="isMild({ sum }).sum && `outline`">
                {{ isMild({}).phrase.sum }}
              </div>
            </td>
            <td>
              <div :class="isMild({ average }).average && `outline`">
                {{ isMild({}).phrase.average }}
              </div>
            </td>
          </tr>
          <tr class="moderate">
            <td class="text-left">{{ t(k.INTERPRETATION_MODERATE) }}</td>
            <td>
              <div :class="isModerate({ sum }).sum && `outline`">
                {{ isModerate({}).phrase.sum }}
              </div>
            </td>
            <td>
              <div :class="isModerate({ average }).average && `outline`">
                {{ isModerate({}).phrase.average }}
              </div>
            </td>
          </tr>
          <tr class="severe">
            <td class="text-left">{{ t(k.INTERPRETATION_SEVERE) }}</td>
            <td>
              <div :class="isSevere({ sum }).sum && `outline`">
                {{ isSevere({}).phrase.sum }}
              </div>
            </td>
            <td>
              <div :class="isSevere({ average }).average && `outline`">
                {{ isSevere({}).phrase.average }}
              </div>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card-text>
</template>

<script>
const fetchAllValues = (sections) => {
  return sections
    .map(({ values }) => Object.entries(values).map(([, value]) => value))
    .flat();
};

export default {
  props: ['allSections', 'top5ItemKeys'],
  computed: {
    allFieldsHaveValues() {
      return fetchAllValues(this.allSections).every((e) => e !== null);
    },
  },
  methods: {
    calculateSum() {
      // for each section, add its values
      return fetchAllValues(this.allSections).reduce((a, i) => a + i, 0);
    },
    calculateAverage() {
      // Get sum, then divide it out by number of questions
      let { length } = fetchAllValues(this.allSections);
      return this.sum / length;
    },
  },
  watch: {
    allSections: {
      handler() {
        // If all fields have values, calculate results
        if (this.allFieldsHaveValues) {
          this.sum = this.calculateSum();
          this.average = this.calculateAverage();
        }
      },
      deep: true,
    },
  },
  data() {
    return {
      sum: undefined,
      average: undefined,
    };
  },
};
</script>

<style scoped lang="scss">
@import '../assets/scss/breakpoints.scss';

/* Table styles  */
.showOutlines .outline {
  border-radius: 10px;
  border-width: 3px !important;
  border-style: solid;
  margin: 2px;
  padding: 4px;
}

.mild .outline {
  border-color: #ffec19 !important;
  -webkit-box-shadow: 0px 0px 2px #ffec19, inset 0px 0px 2px #ffec19;
  box-shadow: 0px 0px 2px #ffec19, inset 0px 0px 2px #ffec19;
}

.moderate .outline {
  border-color: orange !important;
  -webkit-box-shadow: 0px 0px 2px orange, inset 0px 0px 2px orange;
  box-shadow: 0px 0px 2px orange, inset 0px 0px 2px orange;
}

.severe .outline {
  border-color: #f6412d !important;
  -webkit-box-shadow: 0px 0px 2px #f6412d, inset 0px 0px 2px #f6412d;
  box-shadow: 0px 0px 2px #f6412d, inset 0px 0px 2px #f6412d;
}

@media only screen and (max-width: $SMALL) {
  .score-interp-title {
    width: 100px;
  }
}
</style>