<template>
  <div id="app">
    <Header></Header>
    <NuxtPage />
    <Footer></Footer>
  </div>
</template>
<script lang="ts">
import Footer from "~/components/common/Footer.vue";
import Header from "../components/common/Header.vue";
export default {
  components: { Header, Footer },
};
</script>
<style scoped>
#app {
  background-color: olive;
  height: 100vh;
}
</style>
