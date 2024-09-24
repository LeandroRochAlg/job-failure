import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import i18n from './i18n';

const app = createApp(App);
const pinia = createPinia()

app.use(router);
app.use(pinia);
app.use(i18n).mount('#app');