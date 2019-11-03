<template>
  <a
    class="button is-primary"
    @click.prevent="logout"
    v-if="$auth.isAuthenticated"
  >
    Log out
  </a>
</template>

<script>
export default {
  name: "LogoutButton",
  methods: {
    logout() {
      this.$auth.logout();
      this.$router.push({ path: "/" });
    }
  }
};
</script>
