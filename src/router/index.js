import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    meta: {
        title: '首页'
    },
    component: Home
        // () =>
        //     import ('@/views/Preview.vue')
}, ]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    to.meta.title && (document.title = to.meta.title);
    next()
});
export default router