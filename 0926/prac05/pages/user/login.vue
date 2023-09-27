<template>
  <main class="login">
    <h1>로그인</h1>
    <form @submit.prevent="login">
      <section>
        <label for="userid">아이디</label>
        <Input type="text" id="userid" v-model="userid" required />
      </section>
      <section>
        <label for="password">비밀번호</label>
        <Input type="password" id="password" v-model="password" required />
      </section>
      <Submit type="submit" element="로그인" />
    </form>
    <div v-if="isLoggedIn">로그인 성공!</div>
    <div v-if="loginFailed">로그인 실패!</div>
      <Alert v-if="showAlert" :message="alertMessage" @close="closeAlert" />
  </main>
</template>
<script lang='ts'>
import { ref } from "vue";
import Input from "~/components/input/Input.vue";
import Submit from "~/components/button/Submit.vue";
import Alert from "~/components/modal/Alert.vue";

export default {
  name: "login",
  setup() {
    const userid = ref('');
    const password = ref('');
    const isLoggedIn = ref(false);
    const loginFailed = ref(false);
    const showAlert = ref(false);
    const alertMessage = ref("");
    const login = () => {
      if (
        userid.value === 'test' &&
        password.value === '0000'
      ) {
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
<style>
.login {
  margin-top: 10%;
  text-align: center;
}
h1 {
  margin: 5%;
}
form {
  display: flex;
  flex-direction: column;
}
section {
  display: flex;
  width: 30%;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
}
input {
  padding: 5px;
  width: 60%;
  border-radius: 5px;
  border: none;
  background-color: azure;
  outline: none;
}
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
