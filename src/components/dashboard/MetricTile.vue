<template>
  <a @click="metric.isActive = !metric.isActive">
    <article
      class="tile is-child notification box"
      :class="[backgroundColor, { 'disabled-tile': !metric.isActive }]"
    >
      <div class="content">
        <p class="title is-4">
          {{ metric.name | capitalizeMetric }}
        </p>
        <p class="subtitle">Score: {{ metric.score }}</p>
      </div>
    </article>
  </a>
</template>

<script>
import { SCORE } from "@/constants/score";
import { backgroundColorMixin } from "@/mixins/backgroundColorMixin";

export default {
  name: "MetricTile",
  filters: {
    capitalizeMetric(name) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
  },
  mixins: [backgroundColorMixin],
  props: {
    metric: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isGood: this.metric.score >= SCORE.GOOD,
      isAverage:
        this.metric.score >= SCORE.BAD && this.metric.score < SCORE.GOOD,
      isBad: this.metric.score < SCORE.BAD
    };
  }
};
</script>

<style scoped>
.disabled-tile {
  background-color: #cccccc;
  color: #666666;
}
</style>
