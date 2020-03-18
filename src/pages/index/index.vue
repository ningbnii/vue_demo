<template>
    <div>
        home
        <p>
            <router-link to="/orderDetail/123">go to order-detail</router-link>
        </p>
        <p>
            <router-link to="/user/profile">go to user-profile</router-link>
        </p>
        <p>
            <router-link to="/produce/list">列表</router-link>
        </p>
        <p>
            <router-link to="/lufy">lufy</router-link>
        </p>
        <p>
            <van-button type="danger" @click="goToChangePwd()">go to changePwd</van-button>
        </p>
        <van-button type="default" :loading="false" @click="goToLogin">去登陆</van-button>
    </div>
</template>

<script>
	import {getAreas, getOpenid} from "@/api/test";
	import {getUserInfo} from "../../api/user";

	export default {
		name: "index",
		created() {
			// this.test();
			this.getUserInfo()
		},
		methods: {
			goToChangePwd() {
				this.$router.push({name: "changePwd"});
			},
			goToLogin() {
				this.$router.push({name: "login"});
			},
			test() {
				let params = {
					ws: "333333"
				};
				getAreas(params).then(res => {
					console.log(res);
				});
				getOpenid(params).then(res => {
					console.log(res);
				});
			},
			getUserInfo() {
				// getUserInfo().then(function (res) {
				//   console.log(res)
				// })
				getUserInfo({userId: 123}).then(function (res) {
					console.log(res)
				})

			}
		}
	};
</script>

<style scoped>
</style>
