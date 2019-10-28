<template>
  <div>
    <div>
      <Sidebar v-bind:condos="condos" />
    </div>
    <div>
      <p>test</p>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";

export default {
  name: "Dashboard",
  components: {
    Sidebar
  },
  data() {
    return {
      condos: [
        {
          name: "Schaefer, McLaughlin and Ullrich",
          score: 88,
          metrics: {
            alert: 64,
            discussion: 45,
            document: 65,
            event: 100,
            package: 42,
            facility: 36,
            forum: 22
          }
        },
        {
          name: "Bosco-Donnelly",
          score: 30,
          metrics: {
            alert: 21,
            discussion: 39,
            document: 97,
            event: 50,
            package: 43,
            facility: 83,
            forum: 83
          }
        }
      ]
    };
  }
};
</script>
