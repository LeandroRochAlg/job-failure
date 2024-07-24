<template>
    <div>
        <button @click="signInWithGoogle" class="w-[275px] sm:w-[350px] mx-auto bg-darkLight dark:bg-lightDark flex flex-row p-5 rounded-tl-xl rounded-br-xl hover:filter hover:brightness-90 dark:hover:brightness-110">
            <img :src="googleLogo" alt="Google Logo" class="w-[30px]">
            <p class="text-center mx-auto align-middle text-lightDark dark:text-darkLight text-md sm:text-xl h-full">Sign in with Google</p>
        </button>
        <p class="text-center md:w-3/4 sm:mx-auto dark:text-light text-dark sm:font-thin text-xs xl:text-sm mt-2 font-light"><a class="hover:underline" href="https://github.com/LeandroRochAlg/job-failure" target="_blank">why do we ask you to connect with Google?</a></p>
    </div>
</template>

<script lang='ts' setup>
import { useAuthStore } from '../../stores/auth';
import googleLogo from '../../assets/Google.png';

const authStore = useAuthStore();

const signInWithGoogle = async () => {
    await authStore.signInWithGoogle();
};
</script>