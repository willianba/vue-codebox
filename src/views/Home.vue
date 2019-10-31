<template>
  <div>
    <section class="hero is-fullheight-with-navbar has-bg-img">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Welcome to TownSQ - Health check dashboard
          </h1>
          <div v-if="!$auth.isAuthenticated && !$auth.loading">
            <h2 class="subtitle">
              Please login to access the dashboard.
            </h2>
            <LoginButton />
          </div>
          <div v-if="$auth.isAuthenticated">
            <h2 class="subtitle">
              Go to <router-link to="/dashboard">dashboard</router-link> to
              access the application.
            </h2>
            <LoginButton />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import LoginButton from "@/components/LoginButton";
export default {
  name: "Home",
  components: {
    LoginButton
  }
};
</script>
