<template>
  <a
    class="button is-primary"
    :class="{ 'is-loading': $auth.loading }"
    @click.prevent="login"
    v-if="!$auth.isAuthenticated"
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
