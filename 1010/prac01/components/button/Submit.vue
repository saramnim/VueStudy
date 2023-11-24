<template lang="">
  <button btn-red border-none cursor-pointer hover:bg-red-3 active:bg-red-2>{{element}}</button>
</template>
<script lang='ts'>
export default {
  name: 'Submit',
  props: {
    element: String
  }
}
</script>