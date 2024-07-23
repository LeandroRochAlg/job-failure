<template>
    <input :type="props.type" required v-model="localValue" :placeHolder="props.placeHolder" :class="inputStyle">
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
    type: String,
    modelValue: String,
    placeHolder: String,
    position: String
});

const emit = defineEmits(['update:modelValue']);
const localValue = ref(props.modelValue);

watch(localValue, (newValue) => {
    emit('update:modelValue', newValue);
});

let border = 'rounded-none';

if (props.position === 'top') {
    border = 'rounded-t-xl';
} else if (props.position === 'bottom') {
    border = 'rounded-b-xl';
}

const inputStyle = `w-[350px] focus:outline-none focus:underline hover:underline mx-auto border-none bg-darkLight mt-1 ${border}`;
</script>