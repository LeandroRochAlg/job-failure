<template>
    <form @submit.prevent="register" class="flex flex-col h-full justify-evenly w-full">
        <div class="w-full flex flex-col">
            <Input type="text" v-model="username" placeHolder="Username" position="top"/>
            <Input type="password" v-model="password" placeHolder="Password" position="center"/>
            <Input type="password" v-model="password" placeHolder="Confirm Password" position="bottom"/>
        </div>
        <Button :title="'Register'" :loading="loading"/>
        <Error v-if="response !== ''" class="text-center text-red">
            <span>{{ response }}</span>
        </Error>
    </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useAuthStore } from '../../stores/auth';
import Button from './Button.vue';
import Input from './Input.vue';
import Error from './Error.vue';

const authStore = useAuthStore();
const username = ref('');
const password = ref('');
const confirmPassword = ref('');
const loading = ref(false);
const response = ref('');

const register = async () => {
    loading.value = true;

    try {
        response.value = await authStore.register(username.value, password.value);
    } finally {
        loading.value = false;
    }
};
</script>