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
      <div class="field">
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Search"
            v-model="search"
          />
        </div>
      </div>
      <CondoList
        :condos="mutableCondos"
        :search="search"
        @condo-to-sidebar="sendToDashboard($event)"
      />
    </aside>
  </div>
</template>

<script>
import CondoList from "./CondoList";
import { condosClassificationMixin } from "@/mixins/condosClassificationMixin";
import { BUTTONS } from "@/constants/buttons";

export default {
  name: "Sidebar",
  components: {
    CondoList
  },
  methods: {
    sendToDashboard(condo) {
      this.$emit("send-to-dashboard", condo);
    },
    showAll() {
      this.mutableCondos = this.condos;
    },
    showGood() {
      this.mutableCondos = this.getGoodCondos();
    },
    showAverage() {
      this.mutableCondos = this.getAverageCondos();
    },
    showBad() {
      this.mutableCondos = this.getBadCondos();
    }
  },
  mixins: [condosClassificationMixin],
  props: {
    condos: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      mutableCondos: this.condos,
      activeButton: BUTTONS.ALL,
      buttonList: [
        {
          name: BUTTONS.ALL,
          method: this.showAll
        },
        {
          name: BUTTONS.GOOD,
          method: this.showGood
        },
        {
          name: BUTTONS.AVERAGE,
          method: this.showAverage
        },
        {
          name: BUTTONS.BAD,
          method: this.showBad
        }
      ],
      search: ""
    };
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
