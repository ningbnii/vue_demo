<template>
    <div>

        <van-button type="danger" @click="login()">登陆</van-button>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'

    export default {
        name: "login",
        methods: {
            ...mapMutations({
                loginIn: "LOGIN_IN"
            }),
            login: function () {
                this.loginIn('ning');
                this.$router.push({name: 'userProfile'})
            }
        }
    }
</script>

<style scoped>

</style>
