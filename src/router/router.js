import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active-link',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../pages/Home')
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('../pages/About')
        }
    ]
})

export default router