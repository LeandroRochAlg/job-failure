import axios from "axios";
import { UserRegister } from "../types/UserRegister";
import { UserGoogleLogin } from "../types/UserGoogleLogin";

const apiClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api`,
    withCredentials: true,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    }
});

export default {
    register(user: UserRegister) {
        return apiClient.post("/auth/register", user);
    },
    login(user: UserRegister) {
        return apiClient.post("/auth/login", user);
    },
    logout() {
        return apiClient.post("/auth/logout");
    },
    loginWithGoogle(user: UserGoogleLogin) {
        return apiClient.post("/auth/google", user);
    },
    check() {
        return apiClient.get("/secure/check");
    }
}