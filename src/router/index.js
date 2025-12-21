import {createRouter, createHistory} from 'vue-router';
import Dashboard from '../views/Dashboard.vue';

const router = createRouter({
    history: createHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard
        }
    ],
});

export default router;