<template>
  <div>
    <div class="menu-list" v-bind:key="condo.name" v-for="condo in condos">
      <Condo v-bind:condo="condo" />
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
