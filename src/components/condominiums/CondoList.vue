<template>
  <div>
    <div :key="condo.name" v-for="condo in filteredCondos">
      <ul class="menu-list">
        <Condo :condo="condo" />
      </ul>
    </div>
  </div>
</template>

<script>
import Condo from "./Condo";

export default {
  name: "CondoList",
  props: {
    condos: {
      type: Array,
      required: true
    },
    search: {
      type: String,
      required: false
    }
  },
  components: {
    Condo
  },
  computed: {
    filteredCondos() {
      return this.condos.filter(condo => {
        return condo.name.toLowerCase().match(this.search.toLowerCase());
      });
    }
  }
};
</script>

<style scoped></style>
