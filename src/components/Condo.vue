<template>
  <div>
    <a>{{ condo.name }}</a>
  </div>
</template>

<script>
export default {
  name: "Condo",
  props: ["condo"]
};
</script>

<style scoped></style>
