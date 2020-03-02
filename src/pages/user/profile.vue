<template>
    <div>
        profile
        <p>{{name}}</p>
        <p>getters: {{hello}}</p>
        <van-button type="danger" @click="modifyName('NING')">修改名字</van-button>
        <van-button type="primary" @click="modifyNameActionSync()">actions</van-button>
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
                modifyName:"MODIFY_NAME"
            }),
            ...mapActions([
                "getUserInfo"
            ]),
            modifyNameActionSync(){
                this.getUserInfo('abc');
            }
        }
    }
</script>

<style scoped>

</style>