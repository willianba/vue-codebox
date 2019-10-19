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
.hero-background {
  position: absolute;
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: auto;
}
</style>
