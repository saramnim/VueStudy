<template>
  <div
    fixed
    top-50
    w-full
    h-full
    flex
    justify-center
    align-center
    z-index-999
    @click="closeModal"
  >
    <div
      class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy"
    >
      ss
    </div>
    <div class="iconify text-red" data-icon="mdi:heart">ff</div>
    <div i-carbon-logo-github text-inherit></div>
    <div
      pa-20
      h-10
      shadow-gray
      flex
      flex-col
      bg-white
      rd
      justify-center
      @click.stop
    >
      {{ message }}
      <Submit @click.stop="closeModal" element="확인" />
    </div>
  </div>
</template>
<script lang='ts'>
import Submit from "../button/Submit.vue";
// import { i-carbon-logo-github } from 'unocss'

export default {
  props: {
    message: String,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
  components: { Submit },
};
</script>
<style>
</style>