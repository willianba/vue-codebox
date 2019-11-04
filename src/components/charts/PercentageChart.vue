<template>
  <div class="tile is-ancestor is-3">
    <div class="tile is-parent">
      <article class="tile is-child light-blue-background box">
        <h4 class="title is-4">Condominiums percentage</h4>
        <canvas :id="chartId"></canvas>
      </article>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js";
import { percentageChartData } from "@/charts/percentageChart";
import { condosClassificationMixin } from "@/mixins/condosClassificationMixin";

export default {
  name: "PercentageChart",
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      });
    }
  },
  mixins: [condosClassificationMixin],
  props: {
    condos: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      chartId: "percentage-chart",
      percentageChartData: percentageChartData
    };
  },
  created() {
    this.percentageChartData.data.datasets[0].data = [
      this.getGoodCondos().length,
      this.getAverageCondos().length,
      this.getBadCondos().length
    ];
  },
  mounted() {
    this.createChart(this.chartId, this.percentageChartData);
  }
};
</script>
