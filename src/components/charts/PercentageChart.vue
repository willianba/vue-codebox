<template>
  <div class="tile is-ancestor is-3">
    <div class="tile is-vertical">
      <div class="tile">
        <div class="tile is-parent">
          <article class="tile is-child notification is-light-blue box">
            <h4 class="title is-4">Condominiums percentage</h4>
            <canvas :id="chartId"></canvas>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js";
import { percentageChartData } from "@/charts/percentageChart";

export default {
  name: "PercentageChart",
  data() {
    return {
      chartId: "percentage-chart",
      percentageChartData: percentageChartData
    };
  },
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
  mounted() {
    this.createChart(this.chartId, this.percentageChartData);
  }
};
</script>

<style scoped>
.is-light-blue {
  background-color: rgba(105, 180, 255, 0.45);
}
</style>
