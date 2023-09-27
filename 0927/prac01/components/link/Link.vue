<template>
  <NuxtLink :to="to" border-none decoration-none color-black mr-20 font-size-17px>{{element}}</NuxtLink>
</template>
<script>
export default {
  name: 'Link'
,  props: {
    to: String,
    element: String,
  },
};
</script>