<template>
    <form @submit.prevent="login" class="flex flex-col h-full justify-evenly w-full">
        <div class="w-full flex flex-col">
            <Input type="text" v-model="username" placeHolder="Username" position="top"/>
            <Input type="password" v-model="password" placeHolder="Password" position="bottom"/>
        </div>
        <KeepConnected :onKeepConnectedChange="handleKeepConnectedChange"/>
        <Button :title="'Login'" :loading="loading"/>
        <Error v-if="!response">
            <span>{{ "Ops... You can't go there 👉" }}</span>
        </Error>
    </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useAuthStore } from '../../stores/auth';
import Button from './Button.vue';
import Input from './Input.vue';
import Error from './Error.vue';
import KeepConnected from './KeepConnected.vue';

const authStore = useAuthStore();
const username = ref('');
const password = ref('');
const loading = ref(false);
const response = ref(true);
const keep = ref(false);

const login = async () => {
  loading.value = true;
  try {
    response.value = await authStore.login(username.value, password.value, keep.value) as boolean;
  } finally {
    loading.value = false;
  }
};

const handleKeepConnectedChange = (value: boolean) => {
  keep.value = value;
};
</script>