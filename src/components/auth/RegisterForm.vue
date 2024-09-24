<template>
    <form @submit.prevent="register" class="flex flex-col h-full justify-evenly w-full">
        <div class="w-full flex flex-col">
            <Input type="text" v-model="username" :placeHolder="$t('username')" position="top" @blur="validateUsername"/>
            <Error v-if="errors.username" class="my-0">
                <span>{{ $t(`validation.${errors.username}`) }}</span>
            </Error>
            <Input v-if="!isAuthenticated" type="email" v-model="email" :placeHolder="$t('email')" position="center" @blur="validateEmail"/>
            <Error v-if="errors.email && !isAuthenticated" class="my-0">
                <span>{{ $t(`validation.${errors.email}`) }}</span>
            </Error>
            <Input type="password" v-model="password" :placeHolder="$t('password')" position="center" @blur="validatePassword"/>
            <Error v-if="errors.password" class="my-0">
                <span>{{ $t(`validation.${errors.password}`) }}</span>
            </Error>
            <Input type="password" v-model="confirmPassword" :placeHolder="$t('confirmPassword')" position="bottom" @blur="validateConfirmPassword"/>
            <Error v-if="errors.confirmPassword" class="my-0">
                <span>{{ $t(`validation.${errors.confirmPassword}`) }}</span>
            </Error>
        </div>
        <Button :title="$t('register')" :loading="loading"/>
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
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const loading = ref(false);
const isAuthenticated = ref(authStore.isAuthenticated);
const response = ref('');
const errors = ref({ username: '', email: '', password: '', confirmPassword: '' });

const validateUsername = () => {
    if (!username.value) {
        errors.value.username = 'usernameRequired';
    } else if (username.value.length < 3) {
        errors.value.username = 'usernameLength';
    } else {
        errors.value.username = '';
    }
};

const validateEmail = () => {
    const emailValue = email.value;
    if (!emailValue) {
        errors.value.email = 'emailRequired';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
        errors.value.email = 'emailInvalid';
    } else {
        errors.value.email = '';
    }
};

const validatePassword = () => {
    const passwordValue = password.value;
    if (!passwordValue) {
        errors.value.password = 'passwordRequired';
    } else if (passwordValue.length < 6) {
        errors.value.password = 'passwordLength';
    } else if (!/[0-9]/.test(passwordValue)) {
        errors.value.password = 'passwordDigit';
    } else if (!/[a-z]/.test(passwordValue)) {
        errors.value.password = 'passwordLowercase';
    } else if (!/[A-Z]/.test(passwordValue)) {
        errors.value.password = 'passwordUppercase';
    } else if (!/[^a-zA-Z0-9]/.test(passwordValue)) {
        errors.value.password = 'passwordNonAlphanumeric';
    } else {
        errors.value.password = '';
    }
};

const validateConfirmPassword = () => {
    if (confirmPassword.value !== password.value) {
        errors.value.confirmPassword = 'passwordsDontMatch';
    } else {
        errors.value.confirmPassword = '';
    }
};

const hasErrors = computed(() => {
    return !!errors.value.username || !!errors.value.email || !!errors.value.password || !!errors.value.confirmPassword;
});

const register = async () => {
    validateUsername();
    validateEmail();
    validatePassword();
    validateConfirmPassword();

    if (hasErrors.value) {
        return;
    }

    loading.value = true;

    try {
        response.value = await authStore.register(username.value, email.value, password.value);
    } catch (error: any) {
        response.value = error.message;
    } finally {
        loading.value = false;
    }
};
</script>