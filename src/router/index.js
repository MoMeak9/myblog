import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue')
    },
    {
        path: '/article',
        name: 'article',
        component: () => import('@/views/Article')
    },
    {
        path: '/editor',
        name: 'editor',
        component: () => import('@/views/manager/EditArticle')
    },
    {
        path: '/manager',
        name: 'manager',
        component: () => import('@/views/manager/MyArticle')
    },
    {
        path: '/personal',
        name: 'personal',
        component: () => import('@/views/PersonalCenter')
    },
    {
        path: '/comment',
        name: 'comment',
        component: () => import('@/views/manager/ReceiveComment')
    },
    {
        path: '/classify',
        name: 'classify',
        component: () => import('@/views/Classify')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
