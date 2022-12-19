<template>
  <div class="card-stepper mx-auto pa-3 pa-sm-12 text-left">
    <header-card />
    <v-card class="mb-12">
      <div>
        <v-form ref="form1" v-model="section1.valid" lazy-validation>
          <v-card-subtitle class="step-label">
            {{ t(k.SECTION1_INSTRUCTIONS_1) }}
          </v-card-subtitle>
          <v-card-text class="question-group pb-5">
            <div
              class="question-row"
              v-for="(prompt, i) in section1.prompts"
              :key="prompt"
            >
              <div class="question-group-header">{{ t(k[prompt]) }}</div>
              <v-radio-group
                :column="isSmallWidth"
                v-model="section1.values[prompt]"
                @change="(value) => handleStepChange(i, 1)"
                :rules="rules"
                class="mt-0"
              >
                <v-radio
                  v-for="option in section1.options"
                  :key="option.text + option.value"
                  :label="t(k[option.text])"
                  :value="option.value"
                ></v-radio>
              </v-radio-group>
            </div>
          </v-card-text>
        </v-form>
      </div>
      <v-divider class="my-2" />
      <ResultsTable :allSections="[section1]" />
    </v-card>
    <v-card>
      <v-card-text>
        <p class="grey--text text--darken-3">
          {{ t(k.INTERPRETATION_1) }}
        </p>
        <p class="mb-0 grey--text text--darken-3">
          {{ t(k.INTERPRETATION_2) }}
        </p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import keys from '../assets/locales/keys';
import HeaderCard from './HeaderCard';
import ResultsTable from './ResultsTable';

const BREAKPOINT = 700;

const initValues = (arr) => arr.reduce((a, i) => ({ ...a, [i]: null }), {});

const initOptions = (arr) => arr.map((o, i) => ({ text: o, value: i }));

const getMatchingKeys = (stub) =>
  Object.keys(keys).filter((k) => k.includes(stub));

const SECTION1_PROMPTS = getMatchingKeys('SECTION1_PROMPT');
const SECTION1_OPTIONS = getMatchingKeys('SECTION1_OPTION');

export default {
  components: { HeaderCard, ResultsTable },
  methods: {
    handleStepChange(indexInSection, section) {
      // On first questions of steps 2 and 3, validate previous section's answers
      if (parseInt(section) > 1 && indexInSection === 0) {
        this.$refs[`form${parseInt(section) - 1}`].validate();
      }
    },
    onResize() {
      this.isSmallWidth = window.innerWidth < BREAKPOINT;
    },
  },
  data() {
    return {
      e6: 1,
      isSmallWidth: window.innerWidth < BREAKPOINT,
      rules: [(v) => v !== null],
      section1: {
        valid: false,
        prompts: SECTION1_PROMPTS,
        values: initValues(SECTION1_PROMPTS),
        options: initOptions(SECTION1_OPTIONS),
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
};
</script>

<style scoped lang="scss">
.v-radio:not(:last-child) {
  margin-right: 16px;
}

.card-stepper {
  max-width: 800px;
}

.step-label {
  font-size: 18px;
}

/* inline error messages under each radio section */
.v-messages {
  display: none;
}

.question-group-header {
  word-wrap: break-word; /* old name */
  overflow-wrap: break-word;
  white-space: wrap;
  font-size: 16px;
}

.question-group {
  display: grid;
  grid-gap: 20px;
}

.question-row {
  display: grid;
  grid-gap: 10px;
  grid-template-rows: min-content min-content;
  align-items: center;
}
</style>
