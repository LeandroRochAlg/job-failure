<template>
    <button :class="['h-10 bg-primary rounded-full w-1/2 text-light uppercase font-bold mx-auto m-6 hover:shadow-primary transition-shadow duration-200', { 'animate-pulse-fast': loading }]" :disabled="loading">
        <span v-if="!loading">{{ props.title }}</span>
        <span v-else>Loading...</span>
    </button>
</template>
  
<script lang="ts" setup>
const props = defineProps({
    title: String,
    loading: {
        type: Boolean,
        default: false
    }
});
</script>  