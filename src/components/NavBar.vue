<template>
  <nav
    class="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <img src="@/assets/logo.png" />
      </router-link>
    </div>
    <div id="navbar-menu" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link
          to="/dashboard"
          class="navbar-item"
          v-if="$auth.isAuthenticated"
        >
          Dashboard
        </router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <LoginButton />
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default {
  name: "NavBar",
  components: {
    LoginButton,
    LogoutButton
  }
};
</script>
