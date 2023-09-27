<!-- Input.vue -->
<template>
  <input :type="type" v-model="inputValue" :placeholder="placeholder" @input="handleInput" />
</template>

<script>
export default {
  props: {
    type: String,
    value: [String, Number],
    id: String,
    required: Boolean,
    placeholder: String,
  },
  data() {
    return {
      inputValue: this.value,
    };
  },
  methods: {
    handleInput() {
      this.$emit("input", this.inputValue);
    },
  },
};
</script>
<style>
input{
  border: none;
  border-radius: 5px;
  background-color:powderblue;
  width: 55%;
  height: 3vh;
}
</style>
