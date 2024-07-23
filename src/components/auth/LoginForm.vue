<template>
    <div class="w-[400px] h-[500px] mx-auto font-montserrat flex flex-col align-middle bg-light rounded-tr-xl rounded-bl-xl shadow-xl">
        <form @submit.prevent="login" class="flex flex-col h-full justify-between w-full">
            <Title title="Login"/>
            <div class="w-full flex flex-col">
                <Input type="text" v-model="username" placeHolder="Username" position="top"/>
                <Input type="password" v-model="password" placeHolder="Password" position="bottom"/>
            </div>
            <Button title="Login"/>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useAuthStore } from '../../stores/auth';
import Button from './Button.vue';
import Input from './Input.vue';
import Title from './Title.vue';

const authStore = useAuthStore();
const username = ref('');
const password = ref('');

const login = async () => {
    await authStore.login(username.value, password.value);
};
</script>