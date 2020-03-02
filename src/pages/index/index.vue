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
            <van-button type="danger" @click="goToChangePwd()">go to changePwd</van-button>
        </p>

    </div>
</template>

<script>
    export default {
        name: "index",
        methods:{
            goToChangePwd:function () {
                this.$router.push({name:'changePwd'})
            }
        }
    }
</script>

<style scoped>

</style>