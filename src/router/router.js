import Vue from 'vue'
import Router from "vue-router";
import Pages from '@/pages/index.js'

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
