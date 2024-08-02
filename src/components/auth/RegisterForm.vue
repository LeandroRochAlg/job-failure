<template>
    <form @submit.prevent="register" class="flex flex-col h-full justify-evenly w-full">
        <div class="w-full flex flex-col">
            <Input type="text" v-model="username" placeHolder="Username" position="top" @blur="validateUsername"/>
            <Error v-if="errors.username" class="my-0">
                <span>{{ errors.username }}</span>
            </Error>
            <Input type="password" v-model="password" placeHolder="Password" position="center" @blur="validatePassword"/>
            <Error v-if="errors.password" class="my-0">
                <span>{{ errors.password }}</span>
            </Error>
            <Input type="password" v-model="confirmPassword" placeHolder="Confirm Password" position="bottom" @blur="validateConfirmPassword"/>
            <Error v-if="errors.confirmPassword" class="my-0">
                <span>{{ errors.confirmPassword }}</span>
            </Error>
        </div>
        <Button :title="'Register'" :loading="loading"/>
        <Error v-if="response !== ''" class="text-center text-red">
            <span>{{ response }}</span>
        </Error>
    </form>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
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
const errors = ref({ username: '', password: '', confirmPassword: '' });

const validateUsername = () => {
    if (!username.value) {
        errors.value.username = 'Username is required';
    } else if (username.value.length < 3) {
        errors.value.username = 'Username must be at least 3 characters long';
    } else {
        errors.value.username = '';
    }
};

const validatePassword = () => {
    const passwordValue = password.value;
    if (!passwordValue) {
        errors.value.password = 'Password is required';
    } else if (passwordValue.length < 6) {
        errors.value.password = 'Password must be at least 6 characters long';
    } else if (!/[0-9]/.test(passwordValue)) {
        errors.value.password = 'Password must contain at least one digit';
    } else if (!/[a-z]/.test(passwordValue)) {
        errors.value.password = 'Password must contain at least one lowercase letter';
    } else if (!/[A-Z]/.test(passwordValue)) {
        errors.value.password = 'Password must contain at least one uppercase letter';
    } else if (!/[^a-zA-Z0-9]/.test(passwordValue)) {
        errors.value.password = 'Password must contain at least one non-alphanumeric character';
    } else {
        errors.value.password = '';
    }
};

const validateConfirmPassword = () => {
    if (confirmPassword.value !== password.value) {
        errors.value.confirmPassword = 'Passwords do not match';
    } else {
        errors.value.confirmPassword = '';
    }
};

const hasErrors = computed(() => {
    return !!errors.value.username || !!errors.value.password || !!errors.value.confirmPassword;
});

const register = async () => {
    validateUsername();
    validatePassword();
    validateConfirmPassword();

    if (hasErrors.value) {
        return;
    }

    loading.value = true;

    try {
        response.value = await authStore.register(username.value, password.value);
    } catch (error: any) {
        response.value = error.message;
    } finally {
        loading.value = false;
    }
};
</script>