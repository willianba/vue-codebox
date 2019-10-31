<template>
  <div id="app">
    <NavBar />
    <div>
      <Error />
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Error from "@/components/Error";

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
