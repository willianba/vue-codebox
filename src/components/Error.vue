<template>
  <div class="notification is-danger" v-if="show">
    {{ msg() }}
  </div>
</template>

<script>
export default {
  name: "Error",
  methods: {
    msg() {
      return this.$auth.error;
    }
  },
  computed: {
    show() {
      return this.$auth.error !== null;
    }
  }
};
</script>
