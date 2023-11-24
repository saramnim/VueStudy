<template>
  <main text-center>
    <h1 m-10>회원가입</h1>
    <form
      @submit.prevent="handleRegister"
      flex
      flex-col
      justify-center
      items-center
      gap-2
    >
      <UFormGroup
        label="Email"
        :error="!useremail && 'You must enter an email'"
        help="This is a nice email!"
      >
        <template #default="{ error }">
          <UInput
            v-model="useremail"
            type="email"
            placeholder="Enter email"
            :trailing-icon="
              error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined
            "
          />
        </template>
        <template #error="{ error }">
          <UAlert
            v-if="error"
            icon="i-heroicons-exclamation-triangle-20-solid"
            :title="error"
            color="red"
          />
          <UAlert
            v-else
            icon="i-heroicons-check-circle-20-solid"
            title="Your email is valid"
            color="green"
          />
        </template>
      </UFormGroup>

      <section flex w-xs justify-between items-center>
        <label for="username">사용자명</label>
        <Input v-model="username" type="text" id="username" required />
      </section>
      <!-- <section flex w-xs justify-between items-center>
        <label for="useremail">아이디</label>
        <Input v-model="useremail" type="text" id="useremail" required />
      </section> -->
      <section flex w-xs justify-between items-center>
        <label for="password">비밀번호</label>
        <Input v-model="password" type="password" id="password" required />
      </section>
      <section flex w-xs justify-between items-center>
        <label for="password2">비밀번호 확인</label>
        <Input v-model="password2" type="password" id="password2" required />
      </section>
      <Submit m-10 element="회원가입" />
    </form>
    <div v-if="isRegister">회원가입 성공!</div>
    <div v-if="registerFailed">회원가입 실패!</div>
  </main>
</template>
<script lang='ts'>
import { defineComponent, ref } from "vue";
import Submit from "../../components/button/Submit.vue";
import Input from "../../components/input/Input.vue";
import { register } from "../../services/user";

export default defineComponent({
  name: "Register",
  components: {
    Submit,
    Input,
  },
  setup() {
    const username = ref("");
    const useremail = ref("");
    const password = ref("");
    const password2 = ref("");
    const isRegister = ref(false);
    const registerFailed = ref(false);

    const handleRegister = async () => {
      try {
        const response = await register(useremail.value, password.value);
        isRegister.value = true;
        registerFailed.value = false;
        console.log("회원가입 성공:", response);
      } catch (error) {
        isRegister.value = false;
        registerFailed.value = true;
        console.error("회원가입 실패:", error);
      }
    };
    // const register = () => {
    //   if (
    //     username.value === '김혜지' &&
    //     useremail.value === 'test' &&
    //     password.value === '0000' &&
    //     password.value === password2.value
    //   ) {
    //     isRegister.value = true;
    //     registerFailed.value = false;
    //   } else {
    //     isRegister.value = false;
    //     registerFailed.value = true;
    //   }
    // };

    return {
      username,
      useremail,
      password,
      password2,
      isRegister,
      registerFailed,
      // register,
      handleRegister,
    };
  },
});
</script>