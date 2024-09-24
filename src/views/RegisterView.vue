<template>
    <Card>
        <Title :title="$t('register')" />
        <GoogleSignIn v-if="!isAuthenticated && isGoogleUser" @auth-success="handleAuthSuccess" />
        <RegisterForm v-else />
        <button v-if="!isAuthenticated" class="text-dark dark:text-light hover:font-semibold text-sm tracking-wider hover:tracking-wide" @click="handleContinueWithoutGoogle">
            {{ isGoogleUser ? $t('continueWithoutGoogle') : $t('signInWithGoogle') }}
        </button>
        <GoogleUser v-if="isAuthenticated" :profile-pic="googleProfilePicture" :username="googleUsername"/>
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
import GoogleUser from '../components/auth/GoogleUser.vue';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();
const isAuthenticated = ref(authStore.isAuthenticated);
const isGoogleUser = ref(authStore.isGoogleUser as boolean); // Get isGoogleUser from local storage
const googleUsername = ref(authStore.googleUsername); // Get google username from local storage
const googleProfilePicture = ref(authStore.googleProfilePicture); // Get google profile picture from local storage

const handleAuthSuccess = () => {
    isAuthenticated.value = true;
};

const handleContinueWithoutGoogle = () => {
    isGoogleUser.value = !isGoogleUser.value;

    authStore.isGoogleUser = isGoogleUser.value;
};
</script>