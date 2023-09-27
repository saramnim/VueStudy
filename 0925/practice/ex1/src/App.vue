<template>
  <div id="app">
    <Header></Header>
    <img src="./assets/logo.png" />
    <router-view class="wrapper"/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/common/Header.vue'
import Footer from './components/common/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  min-height: 100%;
  padding-bottom: 15vh;
  position:relative;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.wrapper {
  height : auto;
}
</style>
