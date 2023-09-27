<template>
  <div bg-indigo-3 h-screen>
    <Header></Header>
    <NuxtPage />
    <Footer></Footer>
  </div>
</template>
<script lang="ts">
import Footer from "./components/common/Footer.vue";
import Header from "./components/common/Header.vue";
export default {
  components: { Header, Footer },
};
</script>
