<template>
    <div class="w-1/4 h-full mx-auto font-montserrat flex flex-col align-middle justify-center">
        <h2 class="text-primary text-6xl mb-5">Login</h2>
        <form @submit.prevent="login" class="flex flex-col">
            <input v-model="username" placeholder="Username" required class="focus:outline-none focus:underline hover:underline mt-2 border-none bg-darkLight rounded-t-xl">
            <input v-model="password" type="password" placeholder="Password" required class="focus:outline-none focus:underline hover:underline mt-1 border-none bg-darkLight rounded-b-xl">
            <button type="submit" class="h-10 bg-primary rounded-full w-1/2 text-light uppercase font-bold mx-auto mt-5">Login</button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useAuthStore } from '../../stores/auth';

export default defineComponent({
    name: 'Login',
    setup() {
        const authStore = useAuthStore();
        const username = ref('');
        const password = ref('');

        const login = async () => {
            await authStore.login(username.value, password.value);
        };

        return { username, password, login };
    }
});
</script>