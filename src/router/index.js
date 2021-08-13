import Vue from 'vue'
import VueRouter from 'vue-router'
import EditArticle from "@/views/manager/EditArticle";
import MyArticle from "@/views/manager/MyArticle";
import WebSideData from "@/views/manager/WebSideData";
import ReceiveComment from "@/views/manager/ReceiveComment";

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
        path: '/manager',
        component: () => import('@/views/manager'),
        children: [
            {
                path: 'edit',
                component: EditArticle
            },
            {
                path: 'my',
                component: MyArticle
            },
            {
                path: 'website',
                component: WebSideData
            },
            {
                path: 'comment',
                component: ReceiveComment
            }
        ]
    },
    {
        path: '/personal',
        name: 'personal',
        component: () => import('@/views/PersonalCenter')
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
