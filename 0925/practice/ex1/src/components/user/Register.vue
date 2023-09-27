<template>
  <main class="register">
    <h1>회원가입</h1>
    <form @submit.prevent="register">
      <section>
        <label for="username">사용자명</label>
        <input type="text" id="username" v-model="username" required />
      </section>
      <section>
        <label for="userid">아이디</label>
        <input type="text" id="userid" v-model="userid" required />
      </section>
      <section>
        <label for="password">비밀번호</label>
        <input type="password" id="password" v-model="password" required />
      </section>
      <section>
        <label for="password2">비밀번호 확인</label>
        <input type="password" id="password2" v-model="password2" required />
      </section>
      <button type="submit">회원가입</button>
    </form>
    <div v-if="isRegister">회원가입 성공!</div>
    <div v-if="registerFailed">회원가입 실패!</div>
  </main>
</template>
<script>
export default {
  name: 'register',
  data () {
    return {
      username: '',
      userid: '',
      password: '',
      password2: '',
      isRegister: false,
      registerFailed: false
    }
  },
  methods: {
    register () {
      if (this.username === '김혜지' && this.userid === 'test' && this.password === '0000' && this.password === this.password2) {
        this.isRegister = true
        this.registerFailed = false
      } else {
        this.isRegister = false
        this.registerFailed = true
      }
    }
  }
}
</script>
<style>
.register {
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
