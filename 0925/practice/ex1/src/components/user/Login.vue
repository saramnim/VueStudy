<template>
  <main class="login">
    <h1>로그인</h1>
    <form @submit.prevent="login">
      <section>
        <label for="userid">아이디</label>
        <input type="text" id="userid" v-model="userid" required />
      </section>
      <section>
        <label for="password">비밀번호</label>
        <input type="password" id="password" v-model="password" required />
      </section>
      <button type="submit">로그인</button>
    </form>
    <div v-if="isLoggedIn">로그인 성공!</div>
    <div v-if="loginFailed">로그인 실패!</div>
  </main>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      userid: '',
      password: '',
      isLoggedIn: false,
      loginFailed: false
    }
  },
  methods: {
    login () {
      if (this.userid === 'test' && this.password === '0000') {
        this.isLoggedIn = true
        this.loginFailed = false
      } else {
        this.isLoggedIn = false
        this.loginFailed = true
      }
    }
  }
}
</script>
<style>
.login {
  text-align: center;
}
form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
section {
  display: flex;
  width: 20%;
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
