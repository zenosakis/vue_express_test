import { createWebHistory, createRouter } from "vue-router";
import Index from '@/components/MovieIndexPage'
import Show from '@/components/MovieShowPage'

const routes = [
    {
            path: '/',
            name: 'index',
            component: Index
    },
    {
            path: '/:id',
            name: 'show',
            component: Show
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;