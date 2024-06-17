<template>
    <div>
        <h1>Google Sign In</h1>
        <button @click="signInWithGoogle">Sign in with Google</button>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { useAuthStore } from '../../stores/auth';

export default defineComponent({
    name: 'GoogleSignIn',
    setup() {
        const authStore = useAuthStore();

        const signInWithGoogle = async () => {
            await authStore.signInWithGoogle();
        };

        return { signInWithGoogle };
    }
});
</script>