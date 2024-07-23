<template>
    <button class="h-10 bg-primary rounded-full w-1/2 text-light uppercase font-bold mx-auto m-6 hover:shadow-primary transition-shadow duration-300">{{ props.title }}</button>
</template>

<script lang="ts" setup>
const props = defineProps({
    title: String
});
</script>