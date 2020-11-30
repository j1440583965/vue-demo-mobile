<template>
  <div>
    home
  </div>
</template>

<script>
import {test,login} from '../server/api'
export default {
  mounted() {
    
    this.getUserInfo();
  },
  methods: {
    // get请求示例
    async init() {
      try {
        const res = await test({ name: "lisa" });
        console.log(res);
      } catch (error) {
        console.log(error)
      }
    },
    //post请求示例
    async getUserInfo() {
       try {
        const res = await login({ username: "lisa" });
        console.log('token',res);
        sessionStorage.setItem('token',res.token)
        this.init();
      } catch (error) {
        console.log(error)
      }
    }
  }
};
</script>

<style></style>
