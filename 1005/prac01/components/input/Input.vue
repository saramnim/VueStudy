<!-- Input.vue -->
<template>
  <input p-1 border-none rd bg-blue-100 outline-none :type="type" v-model="inputValue" :placeholder="placeholder" @input="handleInput" />
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
