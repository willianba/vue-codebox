<template>
  <div class="notification is-danger no-margin-bottom" v-if="show">
    <button class="delete" @click="closeError"></button>
    {{ msg() }}
  </div>
</template>

<script>
export default {
  name: "Error",
  computed: {
    show() {
      return this.$auth.error !== null;
    }
  },
  methods: {
    msg() {
      return this.$auth.error;
    },
    closeError() {
      this.$auth.error = null;
    }
  }
};
</script>

<style scoped>
.no-margin-bottom {
  margin-bottom: 0px !important;
}
</style>
