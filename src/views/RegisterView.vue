<template>
    <div>
        <GoogleSignIn v-if="!isAuthenticated" @auth-success="handleAuthSuccess" />
        <RegisterForm v-else />
    </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue';
import GoogleSignIn from '../components/auth/GoogleSignIn.vue';
import RegisterForm from '../components/auth/RegisterForm.vue';
import { useAuthStore } from '../stores/auth';

export default defineComponent({
    name: 'RegisterView',
    components: {
        GoogleSignIn,
        RegisterForm,
    },
    setup() {
        const authStore = useAuthStore();
        const isAuthenticated = ref(authStore.isAuthenticated);

        const handleAuthSuccess = () => {
            isAuthenticated.value = true;
        };

        return { isAuthenticated, handleAuthSuccess };
    }
});
</script>