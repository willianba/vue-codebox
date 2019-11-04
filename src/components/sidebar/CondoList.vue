<template>
  <div>
    <div :key="condo.name" v-for="condo in filteredCondos">
      <ul class="menu-list">
        <Condo :condo="condo" @condo-to-condolist="sendToSidebar($event)" />
      </ul>
    </div>
  </div>
</template>

<script>
import Condo from "./Condo";

export default {
  name: "CondoList",
  components: {
    Condo
  },
  computed: {
    filteredCondos() {
      return this.condos.filter(condo => {
        return condo.name.toLowerCase().match(this.search.toLowerCase());
      });
    }
  },
  methods: {
    sendToSidebar(condo) {
      this.$emit("condo-to-sidebar", condo);
    }
  },
  props: {
    condos: {
      type: Array,
      required: true
    },
    search: {
      type: String,
      required: false
    }
  }
};
</script>
