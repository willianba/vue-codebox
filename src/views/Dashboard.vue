<template>
  <div class="fade">
    <Sidebar
      :condos="condos"
      @send-to-dashboard="bindCondoToDashboard($event)"
    />
    <div class="fixed-sidebar one-pixel-padding-top">
      <DashboardItem :condo="dashboardCondo" class="fade" />
      <PercentageChart :condos="condos" />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/sidebar/Sidebar";
import PercentageChart from "@/components/charts/PercentageChart";
import DashboardItem from "@/components/dashboard/DashboardItem";
import condominiums from "@/condominiums.json";

export default {
  name: "Dashboard",
  components: {
    Sidebar,
    PercentageChart,
    DashboardItem
  },
  methods: {
    bindCondoToDashboard(condo) {
      this.dashboardCondo = condo;
    }
  },
  data() {
    return {
      condos: condominiums,
      dashboardCondo: null
    };
  },
  mounted() {
    this.condos.sort((c1, c2) => {
      return c2.score - c1.score;
    });
  }
};
</script>

<style>
.fixed-sidebar {
  padding-left: 260px;
  padding-right: 10px;
}

.one-pixel-padding-top {
  padding-top: 1px;
}

.green-background {
  background-color: rgba(170, 255, 153, 0.26);
}

.yellow-background {
  background-color: rgba(255, 253, 153, 0.26);
}

.red-background {
  background-color: rgba(255, 153, 153, 0.26);
}

.light-blue-background {
  background-color: rgba(105, 180, 255, 0.45);
}
</style>
