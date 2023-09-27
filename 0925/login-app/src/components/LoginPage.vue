<template>
  <main class="login">
    <h1>로그인</h1>
    <form @submit.prevent="login">
      <section>
        <label for="username">사용자명 : </label>
        <input type="text" id="username" v-model="username" required />
      </section>
      <section>
        <label for="password">사용자명 : </label>
        <input type="password" id="password" v-model="password" required />
      </section>
      <button type="submit">로그인</button>
    </form>
    <div v-if="isLoggedIn">로그인 성공!</div>
    <div v-if="loginFailed">로그인 실패. 다시 시도하세요!</div>
  </main>
</template>
<script>
export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
      isLoggedIn: false,
      loginFailed: false,
    };
  },
  methods: {
    login() {
      if (this.username === "사용자명" && this.password === "비밀번호") {
        this.isLoggedIn = true;
        this.loginFailed = false;
      } else {
        this.isLoggedIn = false;
        this.loginFailed = true;
      }
    },
  },
};
</script>
<style scoped>
.login {
  text-align: center;
  margin-top: 100px;
}
section {
  margin-bottom: 10px;
}
input[type="text"],
input[type="password"] {
  padding: 5px;
}
button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
