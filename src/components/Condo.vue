<template>
  <div>
    <a v-if="condo.score >= good_score" class="green-background">{{
      condo.name
    }}</a>
    <a v-else-if="condo.score >= 30" class="yellow-background">{{
      condo.name
    }}</a>
    <a v-else class="red-background">{{ condo.name }}</a>
  </div>
</template>

<script>
export default {
  name: "Condo",
  props: {
    condo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      good_score: 70,
      bad_score: 30
    };
  }
};
</script>

<style scoped>
.green-background {
  background-color: rgba(170, 255, 153, 0.26);
}

.yellow-background {
  background-color: rgba(255, 253, 153, 0.26);
}

.red-background {
  background-color: rgba(255, 153, 153, 0.26);
}
</style>
