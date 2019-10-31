<template>
  <div>
    <article class="panel app-sidebar">
      <p class="panel-heading">
        Condominiums
      </p>
      <p class="panel-tabs">
        <a>All</a>
        <a>Good</a>
        <a>Average</a>
        <a>Bad</a>
      </p>
      <div class="panel-block">
        <p class="control">
          <input class="input is-primary" type="text" placeholder="Search" />
        </p>
      </div>
      <CondoList v-bind:condos="condos" />
    </article>
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
  top: 52px;
  padding: 5px 5px 5px;
  width: 250px;
  height: calc(100% - 50px);
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
