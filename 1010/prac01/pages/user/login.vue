<template>
  <main mt-10 text-center justify-center>
    <h1 ma-20>로그인</h1>
    <form flex flex-col items-center @submit.prevent="handlelogin">
      <section flex w-xs ma-2 justify-between align-center>
        <label for="useremail">아이디</label>
        <Input type="text" id="useremail" v-model="useremail" required />
      </section>
      <section flex w-xs ma-2 justify-between align-center>
        <label for="password">비밀번호</label>
        <Input type="password" id="password" v-model="password" required />
      </section>
      <Submit ma-10 type="submit" element="로그인" />
    </form>
    <div v-if="isLoggedIn">로그인 성공!</div>
    <div v-if="loginFailed">로그인 실패!</div>
    <Alert v-if="showAlert" :message="alertMessage" @close="closeAlert" />
  </main>
</template>
<script lang='ts'>
import { ref } from "vue";
import Input from "../../components/input/Input.vue";
import Submit from "../../components/button/Submit.vue";
import Alert from "../../components/modal/Alert.vue";
import {login} from '../../services/user'

export default {
  name: "Login",
  setup() {
    const useremail = ref("");
    const password = ref("");
    const isLoggedIn = ref(false);
    const loginFailed = ref(false);
    const showAlert = ref(false);
    const alertMessage = ref("");
    const handlelogin = async () => {
      try {
        const response = await login(useremail.value, password.value);
        isLoggedIn.value = true;
        loginFailed.value = false;
        showAlert.value = true;
        alertMessage.value = "로그인 성공!";
      } catch (error) {
        isLoggedIn.value = false;
        loginFailed.value = true;
        showAlert.value = true;
        alertMessage.value = "로그인 실패!";
        console.error('Failed to login:', error);
      }
      // if (useremail.value === "test" && password.value === "0000") {
      //   isLoggedIn.value = true;
      //   loginFailed.value = false;
      //   showAlert.value = true;
      //   alertMessage.value = "로그인 성공!";
      // } else {
      //   isLoggedIn.value = false;
      //   loginFailed.value = true;
      //   showAlert.value = true;
      //   alertMessage.value = "로그인 실패!";
      // }
    };
    const closeAlert = () => {
      showAlert.value = false;
    };
    return {
      useremail,
      password,
      isLoggedIn,
      loginFailed,
      showAlert,
      alertMessage,
      handlelogin,
      closeAlert,
    };
  },
  components: { Input, Submit, Alert },
};
</script>
