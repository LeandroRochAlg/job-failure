<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="login">
            <input v-model="username" placeholder="Username" required>
            <input v-model="password" type="password" placeholder="Password" required>
            <button type="submit">Login</button>
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