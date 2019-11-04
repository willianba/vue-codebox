<template>
  <div v-if="condo">
    <MetricsTiles :metrics="condo.metrics" />
  </div>
</template>

<script>
import MetricsTiles from "./MetricsTiles";

export default {
  name: "DashboardItem",
  components: {
    MetricsTiles
  },
  props: {
    condo: {
      type: Object,
      required: false
    }
  }
};
</script>
