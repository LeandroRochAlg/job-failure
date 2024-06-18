import axios from "axios";
import { UserRegister } from "../types/UserRegister";

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
}