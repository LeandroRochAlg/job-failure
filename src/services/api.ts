import axios from "axios";
import { User } from "../types/User";

const apiClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api`,
    withCredentials: true,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    }
});

export default {
    register(user: User) {
        return apiClient.post("/auth/register", user);
    },
    login(user: User) {
        return apiClient.post("/auth/login", user);
    },
}