<template>
    <h2 class="text-primary text-5xl mb-5 text-center mt-6">{{ props.title }}</h2>
</template>

<script lang="ts" setup>
const props = defineProps({
    title: String
});
</script>