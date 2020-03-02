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
import { getAreas, getOpenid } from "@/api/test";
export default {
  name: "index",
  created() {
    this.test();
  },
  methods: {
    goToChangePwd: function() {
      this.$router.push({ name: "changePwd" });
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
    }
  }
};
</script>

<style scoped>
</style>