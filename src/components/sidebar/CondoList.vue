<template>
  <div>
    <div :key="condo.name" v-for="condo in filteredCondos">
      <ul class="menu-list">
        <Condo
          :condo="condo"
          :activeCondo="activeCondo"
          @condo-to-condolist="sendToSidebar($event)"
          @active-condo="updateActiveCondo($event)"
        />
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
    },
    updateActiveCondo(condoName) {
      this.activeCondo = condoName;
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
  },
  data() {
    return {
      activeCondo: null
    };
  }
};
</script>
