<template>
    <div>
        <h2>Register</h2>
        <form @submit.prevent="register">
            <input v-model="username" placeholder="Username" required>
            <input v-model="password" type="password" placeholder="Password" required>
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useAuthStore } from '../../stores/auth';

export default defineComponent({
    name: 'Register',
    setup() {
        const authStore = useAuthStore();
        const username = ref('');
        const password = ref('');

        const register = async () => {
            await authStore.register(username.value, password.value);
        };

        return { username, password, register };
    }
});
</script>