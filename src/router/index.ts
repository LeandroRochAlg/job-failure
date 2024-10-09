import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import AuthLayout from "../layouts/AuthLayout.vue";
import api from "../services/api";
import i18n from "../i18n";

const url = import.meta.env.BASE_URL;

const routes: Array<RouteRecordRaw> = [
    {
        path: "/auth",
        component: AuthLayout,
        children: [
            {
                path: "/auth/register",
                name: "Register",
                component: RegisterView,
                meta: { title: 'register' },
            },
            {
                path: '/auth/login',
                name: 'Login',
                component: LoginView,
                meta: { title: 'login' },
            },
        ]
    },
    {
        path: "/home",
        name: "Home",
        component: HomeView,
        meta: { requiresAuth: true, title: 'home' },
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

// Use i18n to translate the title outside of Vue components
router.afterEach((to) => {
    const defaultTitle = 'Failure'; // Set a default title
    const pageTitleKey = to.meta.title ? `${to.meta.title}` : '';

    // Access the translation using the i18n global instance
    const translatedTitle = i18n.global.t(`${pageTitleKey}`);
    
    document.title = pageTitleKey ? `${translatedTitle} • ${defaultTitle}` : defaultTitle;
});

export default router;