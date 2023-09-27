<template>
  <header h-5vh flex flex-row justify-end items-center bg-amber>
    <!-- 바보
    <Link to="/" element='Home'/>
    <Link to="/user/login" element='Login'/>
    <Link to="/user/register" element='Register'/> -->
    
    <NuxtLink to="/" border-none decoration-none color-black mr-5 font-size-17px>Home</NuxtLink>
    <NuxtLink to="/user/login" border-none decoration-none color-black mr-5 font-size-17px>Login</NuxtLink>
    <NuxtLink to="/user/register" border-none decoration-none color-black mr-5 font-size-17px>Register</NuxtLink>
    <NuxtLink to="/post/postlist" border-none decoration-none color-black mr-5 font-size-17px>PostList</NuxtLink>

  </header>
</template>
<script>
import Link from "../link/Link.vue"
export default {
  components:{Link}
}
</script>