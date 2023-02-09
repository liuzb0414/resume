import { createRouter, createWebHashHistory } from "vue-router"

// import Main from '@/view/Main.vue'
// import Home from '@/view/Home.vue'
// import Admin from '@/view/Admin.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import("@/view/index.vue")
            //redirect: '/home/chat'
        },
        {
            path: '/main',
            component: () => import("@/view/main.vue")
        },
        {
            path: '/home/chat',
            component: () => import("@/view/chat.vue")
        },
        {
            path: '/home/robot',
            component: () => import("@/view/robot.vue")
        },
        {
            path: '/home/user',
            component: () => import("@/view/user.vue")
        }
    ]
})

export default router