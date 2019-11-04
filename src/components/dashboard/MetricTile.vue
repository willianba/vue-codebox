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

export default {
  name: "MetricTile",
  computed: {
    backgroundColor() {
      return {
        "green-background": this.metric.score >= SCORE.GOOD,
        "yellow-background":
          this.metric.score >= SCORE.BAD && this.metric.score < SCORE.GOOD,
        "red-background": this.metric.score < SCORE.BAD
      };
    }
  },
  filters: {
    capitalizeMetric(name) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
  },
  props: {
    metric: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.disabled-tile {
  background-color: #cccccc;
  color: #666666;
}
</style>
