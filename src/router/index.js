import Vue from 'vue'
import VueRouter from 'vue-router'
import EditArticle from "@/views/manager/EditArticle";
import MyArticle from "@/views/manager/MyArticle";
import WebSideData from "@/views/manager/WebSideData";
import ReceiveComment from "@/views/manager/ReceiveComment";
import store from '../store'

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
                path: 'editor',
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
    mode: 'history', // ServeLess 支持，配置Nginx需要正向代理
    routes
})

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
    // 设置白名
    if (to.path === '/' || to.path === '/classify' || to.path ==='/article') {
        next();
    } else {
        let userInfo = store.state.userInfo;
        if (userInfo == null || userInfo === '') {
            next('/');
        } else {
            if (userInfo.role !== 1) {
                next('/');
            } else {
                next();
            }
        }
    }
});

export default router
