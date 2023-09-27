<template>
  <main mt-10 text-center justify-center>
    <h1 ma-20>로그인</h1>
    <form flex flex-col items-center @submit.prevent="login">
      <section flex w-xs ma-2 justify-between align-center>
        <label for="userid">아이디</label>
        <Input type="text" id="userid" v-model="userid" required />
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

export default {
  name: "login",
  setup() {
    const userid = ref("");
    const password = ref("");
    const isLoggedIn = ref(false);
    const loginFailed = ref(false);
    const showAlert = ref(false);
    const alertMessage = ref("");
    const login = () => {
      if (userid.value === "test" && password.value === "0000") {
        isLoggedIn.value = true;
        loginFailed.value = false;
        showAlert.value = true;
        alertMessage.value = "로그인 성공!";
      } else {
        isLoggedIn.value = false;
        loginFailed.value = true;
        showAlert.value = true;
        alertMessage.value = "로그인 실패!";
      }
    };
    const closeAlert = () => {
      showAlert.value = false;
    };
    return {
      userid,
      password,
      isLoggedIn,
      loginFailed,
      showAlert,
      alertMessage,
      login,
      closeAlert,
    };
  },
  components: { Input, Submit, Alert },
};
</script>
