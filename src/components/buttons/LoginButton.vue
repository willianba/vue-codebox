<template>
  <a
    class="button is-primary"
    @click.prevent="login"
    v-if="!$auth.isAuthenticated && !$auth.loading"
  >
    Log in
  </a>
</template>

<script>
export default {
  name: "LoginButton",
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    }
  }
};
</script>
