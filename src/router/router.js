import Vue from 'vue'
import Router from "vue-router";
import Pages from '@/pages/index.js'

// 解决重复点击导航路由报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
}

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes:[
        {
            path: '/',
            name: 'home',
            component: Pages.index
        },
        {
            path: '/login',
            name: 'login',
            component: Pages.login
        },
        {
            path: '/lufy',
            name: 'lufy',
            component: Pages.lufy
        },
        {
            path: '/produce/list',
            name: 'produceList',
            component: Pages.produceList
        },
        {
            path: '/produce/detail/:id',
            name: 'produceDetail',
            component: Pages.produceDetail
        },
        {
            path: '/orderDetail/:orderNo',
            name: 'orderDetail',
            component: Pages.orderDetail
        },
        // 嵌套路由
        {
            path: '/user',
            component: Pages.userHome,
            meta:{
                requiresAuth:true,
            },
            children: [
                {
                    path:'/user/profile',
                    name:'userProfile',
                    component: Pages.profile
                },
                {
                    path:'/user/changePwd',
                    name:'changePwd',
                    component: Pages.changePwd
                }
            ]
        }
    ]
})
