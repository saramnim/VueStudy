<template>
  <main class="register">
    <h1>회원가입</h1>
    <form @submit.prevent="register">
      <section>
        <label for="username">사용자명</label>
        <Input v-model="username" type="text" id="username" required />
      </section>
      <section>
        <label for="userid">아이디</label>
        <Input v-model="userid" type="text" id="userid" required />
      </section>
      <section>
        <label for="password">비밀번호</label>
        <Input v-model="password" type="password" id="password" required />
      </section>
      <section>
        <label for="password2">비밀번호 확인</label>
        <Input v-model="password2" type="password" id="password2" required />
      </section>
      <Submit element="회원가입" />
    </form>
    <div v-if="isRegister">회원가입 성공!</div>
    <div v-if="registerFailed">회원가입 실패!</div>
  </main>
</template>
<script lang='ts'>
import { defineComponent, ref } from 'vue';
import Submit from '~/components/button/Submit.vue';
import Input from '~/components/input/Input.vue';

export default defineComponent({
  name: 'Register',
  components: {
    Submit,
    Input,
  },
  setup() {
    const username = ref('');
    const userid = ref('');
    const password = ref('');
    const password2 = ref('');
    const isRegister = ref(false);
    const registerFailed = ref(false);

    const register = () => {
      if (
        username.value === '김혜지' &&
        userid.value === 'test' &&
        password.value === '0000' &&
        password.value === password2.value
      ) {
        isRegister.value = true;
        registerFailed.value = false;
      } else {
        isRegister.value = false;
        registerFailed.value = true;
      }
    };

    return {
      username,
      userid,
      password,
      password2,
      isRegister,
      registerFailed,
      register,
    };
  },
});
</script>
<style>
.register {
  text-align: center;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
section {
  display: flex;
  width: 40%;
  justify-content: space-between;
  /* gap: 10px; */
  align-items: center;
}
</style>
