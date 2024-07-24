<template>
    <Card>
        <Title title="Register" />
        <GoogleSignIn v-if="!isAuthenticated" @auth-success="handleAuthSuccess" />
        <RegisterForm v-else />
        <p class="text-light">{{ googleUsername }}</p>
        <Alternative route="/login" />
    </Card>
</template>

<script lang='ts' setup>
import { ref } from 'vue';
import Card from '../components/auth/Card.vue';
import GoogleSignIn from '../components/auth/GoogleSignIn.vue';
import RegisterForm from '../components/auth/RegisterForm.vue';
import Title from '../components/auth/Title.vue';
import Alternative from '../components/auth/Alternative.vue';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();
const isAuthenticated = ref(authStore.isAuthenticated);
const googleUsername = ref(authStore.googleUsername); // Get google username from local storage

const handleAuthSuccess = () => {
    isAuthenticated.value = true;
};
</script>