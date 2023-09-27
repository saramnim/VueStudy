<template lang="">
  <button type="submit">{{element}}</button>
</template>
<script lang='ts'>
export default {
  props: {
    element: String
  }
}
</script>
<style>
  button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin: 20px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>