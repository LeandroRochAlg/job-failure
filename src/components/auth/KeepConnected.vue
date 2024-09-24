<template>
    <label class="inline-flex items-center cursor-pointer py-1 sm:ml-6 ml-3">
        <input type="checkbox" value="" class="sr-only peer" @change="toggleKeepConnected">
        <div class="relative w-9 h-5 bg-darkLight rounded-full peer dark:bg-lightDark peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-light after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-light after:border-light  dark:after:border-dark after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-light peer-checked:bg-primary"></div>
        <span class="text-sm font-light text-dark dark:text-light ml-2">{{ $t('rememberMe') }}</span>
    </label>
</template>

<script lang="ts" setup>
const props = defineProps<{
    onKeepConnectedChange: (value: boolean) => void;
}>();

const toggleKeepConnected = (event: Event) => {
    const checked = (event.target as HTMLInputElement).checked;
    props.onKeepConnectedChange(checked);
};
</script>