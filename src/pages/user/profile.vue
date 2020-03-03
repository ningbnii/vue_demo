<template>
    <div>
        profile
        <p>{{name}}</p>
        <p>getters: {{hello}}</p>
        <van-button type="danger" @click="modifyName('NING')">修改名字</van-button>
        <van-button type="primary" @click="modifyNameActionSync()">actions</van-button>
        <van-button type="default" :loading="false" @click="handleLoginOut()">
            退出
        </van-button>
    </div>
</template>

<script>
    import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
    export default {
        name: "profile",
        computed:{
            ...mapState(['name']),
            ...mapGetters({
                'hello':'handleName'
            })
        },
        methods:{
            ...mapMutations({
                modifyName:"MODIFY_NAME",
                loginOut:'LOGIN_OUT',
            }),
            ...mapActions([
                "getUserInfo"
            ]),
            modifyNameActionSync(){
                this.getUserInfo('abc');
            },
            handleLoginOut(){
                this.loginOut();
                this.$router.push({name:'home'})
            }
        }
    }
</script>

<style scoped>

</style>
