import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
import {Button} from 'vant';

Vue.config.productionTip = false;
Vue.use(Button);

router.beforeEach((to, from, next) => {
    if (!store.state.UserToken) {
        if (to.matched.length > 0 && !to.matched.some(record => record.meta.requiresAuth)) {
            next()
        } else {
            next({name: 'login'})
        }
    }
})

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
