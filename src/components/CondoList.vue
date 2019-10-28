<template>
  <div>
    <div v-bind:key="condo.name" v-for="condo in condos">
      <ui class="menu-list">
        <Condo v-bind:condo="condo" />
      </ui>
    </div>
  </div>
</template>

<script>
import Condo from "@/components/Condo";

export default {
  name: "CondoList",
  props: {
    condos: {
      type: Array,
      required: true
    }
  },
  components: {
    Condo
  }
};
</script>

<style scoped></style>
