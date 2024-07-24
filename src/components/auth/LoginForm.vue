<template>
    <div class="w-[300px] sm:w-[400px] h-[500px] mx-auto font-montserrat flex flex-col align-middle bg-light dark:bg-dark rounded-tr-xl rounded-bl-xl shadow-xl justify-between">
        <form @submit.prevent="login" class="flex flex-col h-full justify-between w-full">
            <Title title="Login"/>
            <div class="w-full flex flex-col">
                <Input type="text" v-model="username" placeHolder="Username" position="top"/>
                <Input type="password" v-model="password" placeHolder="Password" position="bottom"/>
            </div>
            <Button :title="'Login'" :loading="loading"/>
            <p v-if="!response" class="text-center text-red">Ops... You can't go there 👉</p>
        </form>
        <div class="w-full flex items-center justify-center my-6">
            <div class="flex-grow border-t border-dark dark:border-light"></div>
            <span class="mx-2 text-dark text-sm dark:text-light">or login with</span>
            <div class="flex-grow border-t border-dark dark:border-light"></div>
        </div>
        <button class="flex mx-auto hover:bg-darkLight dark:hover:bg-lightDark p-2 rounded-xl">
            <img :src="googleLogo" alt="Google Logo" class="w-[30px]">
        </button>
        <Alternative route='/register'/>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useAuthStore } from '../../stores/auth';
import Button from './Button.vue';
import Input from './Input.vue';
import Title from './Title.vue';
import Alternative from './Alternative.vue';
import googleLogo from '../../assets/Google.png';

const authStore = useAuthStore();
const username = ref('');
const password = ref('');
const loading = ref(false);
const response = ref(true);

const login = async () => {
  loading.value = true;
  try {
    response.value = await authStore.login(username.value, password.value) as boolean;
  } finally {
    loading.value = false;
  }
};
</script>