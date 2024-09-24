<template>
    <div class="text-center text-sm italic my-6 text-dark dark:text-light">
        <p class="font-light">{{ props.route === '/register' ? $t('dontHaveAnAccount') : $t('alreadyHaveAnAccount') }}</p>
        <p class="font-bold hover:underline"><a :href="props.route">{{ props.route === '/register' ? $t('createAccount') : $t('loginNow') }}</a></p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    route: String
});
</script>