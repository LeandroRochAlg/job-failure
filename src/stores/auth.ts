import { defineStore } from "pinia";
import { auth } from "../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from "axios";

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
                
                const response = await axios.post('http://localhost:5082/api/auth/register', {
                    idGoogle: this.idGoogle,
                    username,
                    password,
                });
                console.log('User registered', response.data);
            } catch (error) {
                console.error('Error during registration', error);
            }
        }
    }
})