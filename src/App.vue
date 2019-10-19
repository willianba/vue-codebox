<template>
  <div id="app">
    <NavBar />
    <div class="container">
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
