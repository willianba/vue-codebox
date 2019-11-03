<template>
  <div>
    <aside class="menu app-sidebar">
      <p class="menu-label">Condominiums</p>
      <div class="field has-addons has-addons-centered">
        <p class="control" :key="button.name" v-for="button in buttonList">
          <button
            class="button is-small"
            @click="
              button.method();
              activeButton = button.name;
            "
            :class="{ 'is-active': activeButton === button.name }"
          >
            {{ button.name }}
          </button>
        </p>
      </div>
      <CondoList v-bind:condos="mutableCondos" />
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
  data() {
    return {
      mutableCondos: this.condos,
      activeButton: "All",
      buttonList: [
        {
          name: "All",
          method: this.showAll
        },
        {
          name: "Good",
          method: this.showGood
        },
        {
          name: "Average",
          method: this.showAverage
        },
        {
          name: "Bad",
          method: this.showBad
        }
      ]
    };
  },
  props: {
    condos: {
      type: Array,
      required: true
    }
  },
  methods: {
    showAll() {
      this.mutableCondos = this.condos;
    },
    showGood() {
      this.mutableCondos = this.condos.filter(condo => {
        return condo.score >= 70;
      });
    },
    showAverage() {
      this.mutableCondos = this.condos.filter(condo => {
        return condo.score >= 30 && condo.score < 70;
      });
    },
    showBad() {
      this.mutableCondos = this.condos.filter(condo => {
        return condo.score < 30;
      });
    }
  }
};
</script>

<style lang="scss">
.app-sidebar {
  position: fixed;
  top: 52px;
  padding: 15px 5px 20px;
  width: 250px;
  height: calc(100% - 50px);
  z-index: 1024 - 1;
  background: #fff;
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
