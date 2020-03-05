import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
import {Button, Toast, List,Cell} from 'vant';
import VuePageStack from 'vue-page-stack'

Vue.config.productionTip = false;
Vue.use(Button, Toast);
Vue.use(List);
Vue.use(Cell);
Vue.use(VuePageStack,{router})

router.beforeEach((to, from, next) => {
	if (to.meta.title) {
		document.title = to.meta.title;    //在路由里面写入的meta里面的title字段
	}
	if (to.matched.length > 0 && to.matched.some(record => record.meta.requiresAuth)) {
		if (store.state.userToken) {
			// next()
			if (Object.keys(from.query).length === 0) {
				next()
			} else {
				let redirect = from.query.redirect
				if (redirect === to.path) {
					next()
				} else {
					next({
						path: redirect
					})
				}
			}
		} else {
			next({
				path: '/login',
				query: {redirect: to.fullPath}
			})
		}
	} else {
		next()
	}
})

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
