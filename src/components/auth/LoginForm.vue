<template>
    <form @submit.prevent="login" class="flex flex-col h-full justify-between w-full">
        <Title title="Login"/>
        <div class="w-full flex flex-col">
            <Input type="text" v-model="username" placeHolder="Username" position="top"/>
            <Input type="password" v-model="password" placeHolder="Password" position="bottom"/>
        </div>
        <Button :title="'Login'" :loading="loading"/>
        <p v-if="!response" class="text-center text-red">Ops... You can't go there 👉</p>
    </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useAuthStore } from '../../stores/auth';
import Button from './Button.vue';
import Input from './Input.vue';
import Title from './Title.vue';

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