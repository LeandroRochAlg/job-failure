import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";

const url = import.meta.env.BASE_URL;

const routes: Array<RouteRecordRaw> = [
    {
        path: "/register",
        name: "Register",
        component: RegisterView,
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView,
    }
];

const router = createRouter({
    history: createWebHistory(url),
    routes,
});

export default router;