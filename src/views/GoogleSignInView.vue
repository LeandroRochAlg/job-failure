<template>
    <div>
        <GoogleSignIn />
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import GoogleSignIn from '../components/auth/GoogleSignIn.vue';

export default defineComponent({
    name: 'GoogleSignInView',
    components: {
        GoogleSignIn
    }
});
</script>