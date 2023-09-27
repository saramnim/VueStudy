<template>
  <header>
    <router-link to="/" class="link">Home</router-link>
    <router-link to="/login" class="link">Login</router-link>
    <router-link to="/register" class="link">Register</router-link>
  </header>
</template>
<script>
export default {}
</script>
<style>
header {
  height: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background-color: blanchedalmond;
}
.link {
  /* background-color:blanchedalmond; */
  border: none;
  border-radius: 5px;
  text-decoration: none;
  color: black;
  margin-right: 20px;
  font-size: 17px;
}
</style>
