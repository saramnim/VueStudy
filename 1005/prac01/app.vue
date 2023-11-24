<template>
  <div bg-indigo-3 h-screen>
    <Header></Header>
    <NavBar absolute top-0  />
    <NuxtPage />
    <Footer></Footer>
  </div>
</template>
<script lang="ts">
import Footer from "./components/common/Footer.vue";
import Header from "./components/common/Header.vue";
import NavBar from './components/common/NavBar.vue';
export default {
  components: { Header, Footer, NavBar },
};
</script>
