<template>
  <v-card-text class="pa-6">
    <div class="results-table-title">
      <div>
        <h4 v-if="!allFieldsHaveValues" class="font-italic mb-4">
          {{ t(k.SCORE_WHEN_FORM_COMPLETE) }}
        </h4>
        <div v-else class="results mb-4">
          <h3 class="black--text mb-2">{{ t(k.SCORE) }}:</h3>
          <pre>{{ t(k.AVERAGE) }}: {{ average.toFixed(3) }}</pre>
          <pre :class="scoreOnlyTop5 ? 'onlyTop5' : ''"
            >{{ t(k.SUM) }}: {{ sum }}</pre
          >
        </div>
      </div>
      <div class="toggle">
        <v-switch
          class="v-input--reverse"
          inset
          v-model="top5ToggleChoice"
          :disabled="!allFieldsHaveValues || top5ItemKeys.length < 1"
        >
          <template #label>{{ t(k.ONLY_INCLUDE_TOP_5) }}</template>
        </v-switch>
      </div>
    </div>

    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left score-interp-title">
              <div>
                {{ t(k.INTERPRETATION_TITLE) }}
              </div>
            </th>
            <th class="text-center">
              <div v-show="!scoreOnlyTop5">
                {{ t(k.BASED_ON_SUM) }}
              </div>
            </th>
            <th class="text-center">
              <div>{{ t(k.BASED_ON_AVERAGE) }}</div>
            </th>
          </tr>
        </thead>
        <tbody
          class="text-center"
          :class="allFieldsHaveValues ? `showOutlines` : ''"
        >
          <tr class="mild">
            <td class="text-left">{{ t(k.INTERPRETATION_MILD) }}</td>
            <td>
              <div
                :class="isMild({ sum }).sum && `outline`"
                v-show="!scoreOnlyTop5"
              >
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
              <div
                :class="isModerate({ sum }).sum && `outline`"
                v-show="!scoreOnlyTop5"
              >
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
              <div
                :class="isSevere({ sum }).sum && `outline`"
                v-show="!scoreOnlyTop5"
              >
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
  return sections && sections.length
    ? sections
        .map(({ values }) => Object.entries(values).map(([, value]) => value))
        .flat()
    : [];
};

export default {
  props: ['allSections', 'top5ItemKeys'],
  computed: {
    allFieldsHaveValues() {
      return fetchAllValues(this.allSections).every((e) => e !== null);
    },
    scoreOnlyTop5() {
      // Only score top 5 if toggle deliberately switched, and user has chosen >0 items
      return this.top5ItemKeys.length > 0 && this.top5ToggleChoice;
    },
    sectionsToScore() {
      // If only scoring most important items, filter on those keys, get their values to pass that to the ResultsTable component
      return this.scoreOnlyTop5
        ? [
            {
              values: this.allSections[0].prompts
                .filter((p) => this.top5ItemKeys.includes(p))
                .map((k) => this.allSections[0].values[k]),
            },
          ]
        : this.allSections;
    },
  },
  methods: {
    calculateSum() {
      // for each section, add its values
      return fetchAllValues(this.sectionsToScore).reduce((a, i) => a + i, 0);
    },
    calculateAverage() {
      // Get sum, then divide it out by number of questions
      let { length } = fetchAllValues(this.sectionsToScore);
      return this.sum / length;
    },
    handleFormChange() {
      // If all fields have values, calculate results
      if (this.allFieldsHaveValues) {
        this.sum = this.calculateSum();
        this.average = this.calculateAverage();
      }
    },
  },
  watch: {
    allSections: {
      handler() {
        this.handleFormChange();
      },
      deep: true,
    },
    top5ItemKeys() {
      this.handleFormChange();
    },
    top5ToggleChoice() {
      this.handleFormChange();
    },
  },
  data() {
    return {
      sum: undefined,
      average: undefined,
      top5ToggleChoice: false,
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

.results-table-title {
  display: flex;
  & > *:first-child {
    flex-grow: 1;
  }
}

.onlyTop5 {
  color: white;
  user-select: none;
}

@media only screen and (max-width: $SMALL) {
  .score-interp-title {
    width: 100px;
  }
  .results-table-title {
    flex-direction: column;
  }
}
</style>
