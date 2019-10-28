<template>
  <div>
    <aside class="menu app-sidebar animated">
      <p class="menu-label">
        Condominiums
      </p>
      <CondoList v-bind:condos="condos" />
    </aside>
  </div>
</template>

<script>
import CondoList from "@/components/CondoList";

export default {
  name: "Sidebar",
  components: {
    CondoList
  },
  props: {
    condos: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss">
.app-sidebar {
  position: fixed;
  padding: 20px 5px 50px;
  width: 200px;
  height: calc(100% - 50px);
  z-index: 1024 - 1;
  background: #fff;
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
