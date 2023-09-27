<template>
  <header>
    <NuxtLink to="/" class="link">Home</NuxtLink>
    <NuxtLink to="/user/login" class="link">Login</NuxtLink>
    <NuxtLink to="/user/register" class="link">Register</NuxtLink>
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
