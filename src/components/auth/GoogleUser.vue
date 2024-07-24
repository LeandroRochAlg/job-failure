<template>
    <button class="w-[275px] sm:w-[350px] mx-auto flex flex-row text-dark dark:text-light h-fit rounded-lg hover:bg-darkLight dark:hover:bg-lightDark p-2" @click="handleGoogleLogout">
        <img :src="profilePic" alt="User's Google Account profile picture" class="w-[50px]">
        <div class="text-dark dark:text-light text-xs flex flex-col justify-center align-middle text-left ml-2 my-auto">
            <p><span class="font-bold">{{ props.username }}</span> connected!</p>
            <p>Connect with another account?</p>
        </div>
    </button>
</template>

<script setup lang="ts">
import { useAuthStore } from '../../stores/auth';

const props = defineProps({
    profilePic: String,
    username: String
});

const authStore = useAuthStore();

const handleGoogleLogout = () => {
    try {
        authStore.signOutGoogle();
    } catch (error) {
        console.error(error);
    }
};
</script>