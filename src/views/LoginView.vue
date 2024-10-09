<template>
    <Card>
        <Title :title="$t('login')"/>
        <LoginForm/>
        <div class="w-full flex items-center justify-center my-6">
            <div class="flex-grow border-t border-dark dark:border-light"></div>
            <span class="mx-2 text-dark text-sm dark:text-light">{{ $t('orLoginWith') }}</span>
            <div class="flex-grow border-t border-dark dark:border-light"></div>
        </div>
        <button class="flex mx-auto hover:bg-darkLight dark:hover:bg-lightDark p-2 rounded-xl" @click="handleGoogleLogin">
            <img :src="googleLogo" alt="Google Logo" class="w-[30px]">
        </button>
        <Alternative route='Register'/>
    </Card>
</template>

<script lang="ts" setup>
import LoginForm from '../components/auth/LoginForm.vue';
import Card from '../components/auth/Card.vue';
import Alternative from '../components/auth/Alternative.vue';
import Title from '../components/auth/Title.vue';
import googleLogo from '../assets/Google.png';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();

// Login with Google
const handleGoogleLogin = async () => {
    try {
        await authStore.signInWithGoogle();
    } catch (error) {
        console.error(error);
    } finally {
        try {
            await authStore.loginWithGoogle();
        } catch (error) {
            console.error(error);
        }
    }
};
</script>