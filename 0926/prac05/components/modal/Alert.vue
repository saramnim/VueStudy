<template>
  <div class="modal" @click="closeModal">
    <div id="carbon-box"></div>
    <div class="modal-content" @click.stop>
      {{ message }}
      <button @click.stop="closeModal">확인</button>
    </div>
  </div>
</template>
<script lang='ts'>
export default {
  props: {
    message: String,
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>
<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 배경을 어둡게 함 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;  
  display: flex;
  flex-direction: column;
}
button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>