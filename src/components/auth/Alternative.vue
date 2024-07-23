<template>
    <div class="text-center text-sm italic my-6 text-dark dark:text-light">
        <p class="font-light">{{ text1 }}</p>
        <p class="font-bold hover:underline"><a :href="props.route">{{ text2 }}</a></p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    route: String
});

const text1 = props.route === '/register' ? 'don\'t have an account yet?' : 'already have an account?';
const text2 = props.route === '/register' ? 'create one now' : 'login now';
</script>