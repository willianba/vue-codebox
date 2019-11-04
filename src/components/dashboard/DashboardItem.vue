<template>
  <div v-if="condo">
    <CondoOverview :condo="condo" />
    <MetricsTiles :metrics="condo.metrics" />
  </div>
</template>

<script>
import MetricsTiles from "./MetricsTiles";
import CondoOverview from "./CondoOverview";

export default {
  name: "DashboardItem",
  components: {
    MetricsTiles,
    CondoOverview
  },
  props: {
    condo: {
      type: Object,
      required: false
    }
  }
};
</script>
