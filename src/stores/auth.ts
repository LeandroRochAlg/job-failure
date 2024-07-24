import { defineStore } from "pinia";
import { auth } from "../libs/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import api from '../services/api';
import { UserRegister } from "../types/UserRegister";
import { AxiosError } from "axios";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: localStorage.getItem('user') || null,
        googleUser: null as any | null,
        googleUsername: localStorage.getItem('googleUsername') || '',
        googleProfilePicture: localStorage.getItem('googleProfilePicture') || '',
        idGoogle: localStorage.getItem('idGoogle') || null,
        isAuthenticated: localStorage.getItem('idGoogle') !== null,
    }),
    actions: {
        async signInWithGoogle() {
            const provider = new GoogleAuthProvider();

            try {
                const result = await signInWithPopup(auth, provider);
                this.googleUser = result.user;
                this.googleUsername = result.user.displayName as string;
                this.googleProfilePicture = result.user.photoURL as string;
                this.idGoogle = result.user.uid;
                this.isAuthenticated = true;

                localStorage.setItem('idGoogle', this.idGoogle);
                localStorage.setItem('googleUsername', this.googleUsername);
                localStorage.setItem('googleProfilePicture', this.googleProfilePicture);

                location.reload(); // Refresh the page to update the user state
            } catch (error) {
                console.error('Error during Google sign-in', error);
            }
        },
        async signOutGoogle(){
            try {
                await signOut(auth);
                this.googleUser = null;
                this.googleUsername = '';
                this.googleProfilePicture = '';
                this.idGoogle = null;
                this.isAuthenticated = false;

                localStorage.removeItem('idGoogle');
                localStorage.removeItem('googleUsername');
                localStorage.removeItem('googleProfilePicture');

                location.reload(); // Refresh the page to update the user state
            } catch (error) {
                console.error('Error during Google sign-out', error);
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
                return response.data;
            } catch (error) {
                const axiosError = error as AxiosError;
                console.error(axiosError.response?.data);
                return axiosError.response?.data;
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

                // Redirect to the home page
                location.href = '/home';

                return true;
            } catch (error) {
                const axiosError = error as AxiosError;
                console.error(axiosError.response?.data);
                return false;
            }
        },
        async logout() {
            try {
                await api.logout();

                location.href = '/login'; // Redirect to the login page
            } catch (error) {
                console.error('Error during logout', error);
            }
        }
    }
})