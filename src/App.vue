<template>
  <div id="app">
    <NavBar />
    <Error />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Error from "@/components/notifications/Error";

export default {
  name: "App",
  components: {
    NavBar,
    Error
  }
};
</script>

<style>
.has-bg-img {
  background: url("assets/bannertownsq.png") center center;
  background-size: cover;
}
</style>
