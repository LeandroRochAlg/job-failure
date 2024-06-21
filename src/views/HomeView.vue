<template>
    <div>
        <h1>Private Page</h1>
        <p>Welcome, you are logged in!</p>
        <button @click="logout">Logout</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAuthStore } from '../stores/auth';

export default defineComponent({
    name: 'HomeView',
    setup() {
        const authStore = useAuthStore();

        const logout = async () => {
            await authStore.logout();
        };

        return { logout };
    }
});
</script>