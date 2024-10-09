<template>
    <div class="text-center text-sm italic my-6 text-dark dark:text-light">
        <p class="font-light">{{ props.route === 'Register' ? $t('dontHaveAnAccount') : $t('alreadyHaveAnAccount') }}</p>
        <p class="font-bold hover:underline">
            <router-link :to="{ name: props.route }">
            {{ props.route === 'Register' ? $t('createAccount') : $t('loginNow') }}
            </router-link>
        </p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    route: String
});
</script>