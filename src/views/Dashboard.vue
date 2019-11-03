<template>
  <div>
    <Sidebar :condos="condos" />
    <div class="fixed-sidebar">
      <PercentageChart :condos="condos" />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import PercentageChart from "@/components/charts/PercentageChart";
import condominiums from "@/condominiums.json";
import { SCORE } from "@/constants/score";

export default {
  name: "Dashboard",
  components: {
    Sidebar,
    PercentageChart
  },
  data() {
    return {
      condos: condominiums
    };
  },
  mounted() {
    this.condos.sort((c1, c2) => {
      return c2.score - c1.score;
    });
  },
  methods: {
    getGoodCondos() {
      return this.condos.filter(condo => {
        return condo.score >= SCORE.GOOD;
      });
    },
    getAverageCondos() {
      return this.condos.filter(condo => {
        return condo.score >= SCORE.BAD && condo.score < SCORE.GOOD;
      });
    },
    getBadCondos() {
      return this.condos.filter(condo => {
        return condo.score < SCORE.BAD;
      });
    }
  }
};
</script>

<style scoped>
.fixed-sidebar {
  padding-left: 260px;
  padding-right: 10px;
}
</style>
