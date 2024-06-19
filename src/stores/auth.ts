import { defineStore } from "pinia";
import { auth } from "../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import api from '../services/api';
import { UserRegister } from "../types/UserRegister";
import { AxiosError } from "axios";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null as any | null,
        idGoogle: localStorage.getItem('idGoogle') || null,
        isAuthenticated: localStorage.getItem('idGoogle') !== null,
    }),
    actions: {
        async signInWithGoogle() {
            const provider = new GoogleAuthProvider();

            try {
                const result = await signInWithPopup(auth, provider);
                this.user = result.user;
                this.idGoogle = result.user.uid;
                this.isAuthenticated = true;

                localStorage.setItem('idGoogle', this.idGoogle);

                location.reload(); // Refresh the page to update the user state
            } catch (error) {
                console.error('Error during Google sign-in', error);
            }
        },
        async register(username: string, password: string) {
            try {
                console.log(this.idGoogle);

                const user: UserRegister = {
                    username,
                    password,
                    idGoogle: this.idGoogle as string,
                };
                
                const response = await api.register(user);
                console.log('User registered', response.data);
            } catch (error) {
                const axiosError = error as AxiosError;
                console.error(axiosError.response?.data);
            }
        },
        async login(username: string, password: string) {
            try {
                const user: UserRegister = {
                    username,
                    password,
                };

                const response = await api.login(user);
                console.log('User logged in', response.data);
            } catch (error) {
                const axiosError = error as AxiosError;
                console.error(axiosError.response?.data);
            }
        },
    }
})