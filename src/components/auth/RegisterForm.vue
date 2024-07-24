<template>
    <div>
        <form @submit.prevent="register">
            <Input type="text" v-model="username" placeHolder="Username" position="top"/>
            <Input type="password" v-model="password" placeHolder="Password" position="center"/>
            <Input type="password" v-model="password" placeHolder="Confirm Password" position="bottom"/>
            <Button :title="'Register'" :loading="loading"/>
            <p v-if="response !== ''" class="text-center text-red">{{ response }}</p>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useAuthStore } from '../../stores/auth';

const authStore = useAuthStore();
const username = ref('');
const password = ref('');
const confirmPassword = ref('');
const loading = ref(false);
const response = ref('');

const register = async () => {
    if (password.value !== confirmPassword.value) {
        response.value = 'Passwords do not match';
        return;
    }

    loading.value = true;
    try {
        response.value = await authStore.register(username.value, password.value);
    } finally {
        loading.value = false;
    }
};
</script>