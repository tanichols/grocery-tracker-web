import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import('../views/Profile.vue')
        }
    ]
})

export default router
