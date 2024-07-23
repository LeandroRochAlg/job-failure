import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import AuthLayout from "../layouts/AuthLayout.vue";
import api from "../services/api";

const url = import.meta.env.BASE_URL;

const routes: Array<RouteRecordRaw> = [
    {
        path: "/auth",
        component: AuthLayout,
        children: [
            {
                path: "/register",
                name: "Register",
                component: RegisterView,
            },
            {
                path: '/login',
                name: 'Login',
                component: LoginView,
            },
        ]
    },
    {
        path: "/home",
        name: "Home",
        component: HomeView,
        meta: { requiresAuth: true },
    }
];

const router = createRouter({
    history: createWebHistory(url),
    routes,
});

router.beforeEach(async (to, _from, next) => {
    if (to.meta.requiresAuth){
        try{            
            const response = await api.check();

            if (response.status === 200){
                next();
            }
            
            next({ name: 'Login' });
        }catch(error){
            console.error('Error during authentication check', error);
            next({ name: 'Login' });
        }
    }

    next();
});

export default router;