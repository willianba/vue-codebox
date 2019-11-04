<template>
  <div class="tile is-ancestor">
    <div
      class="tile is-parent is-vertical"
      :key="metric.name"
      v-for="metric in metrics"
    >
      <MetricTile :metric="metric" />
    </div>
  </div>
</template>

<script>
import MetricTile from "./MetricTile";

export default {
  name: "MetricsTiles",
  components: {
    MetricTile
  },
  props: {
    metrics: {
      type: Array,
      required: true
    }
  }
};
</script>
