<template>
  <div>
    <v-card-subtitle class="step-label">
      {{ t(k.TOP_5_INSTRUCTIONS) }}
    </v-card-subtitle>
    <v-card-text class="">
      <div class="_container">
        <div
          v-for="(p, index) in prompts"
          :key="index"
          :class="getClass(p)"
          @click="choseOption(p)"
        >
          {{ t(k[getShortID(p)]) }}
        </div>
      </div>
    </v-card-text>
  </div>
</template>

<script>
export default {
  props: ['prompts'],
  methods: {
    getClass(id) {
      let classString = 'item pa-2 ';
      if (this.chosenOptions.length > 4) classString += 'reachedMax ';
      if (this.chosenOptions.includes(id)) classString += 'primary clicked ';
      return classString;
    },
    choseOption(id) {
      if (this.chosenOptions.includes(id)) {
        // remove it
        this.chosenOptions = this.chosenOptions.filter((item) => item !== id);
      } else if (this.chosenOptions.length > 4) {
        return;
      } else {
        this.chosenOptions.push(id);
      }

      this.$emit('top-five-changed', this.chosenOptions);
    },
  },
  data() {
    return {
      chosenOptions: [],
    };
  },
};
</script>

<style scoped lang="scss">
@import '../assets/scss/breakpoints.scss';

._container {
  column-count: 5;
  width: 100%;
}

.item {
  display: inline-block;
  border: 2px solid grey;
  background-color: ghostwhite;
  margin: 1px 0;
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;
  word-break: break-word;
  hyphens: auto;

  &.reachedMax {
    color: grey;
    cursor: not-allowed;
  }

  &.clicked {
    color: white;
    cursor: pointer;
  }
}

@media only screen and (max-width: $MEDIUM) {
  ._container {
    column-count: 3;
  }
}

@media only screen and (max-width: $SMALL) {
  ._container {
    column-count: 2;
  }
}
</style>
