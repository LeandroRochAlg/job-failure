import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import RegisterView from "../views/RegisterView.vue";

const url = import.meta.env.BASE_URL;

const routes: Array<RouteRecordRaw> = [
    {
        path: "/register",
        name: "Register",
        component: RegisterView,
    }
];

const router = createRouter({
    history: createWebHistory(url),
    routes,
});

export default router;