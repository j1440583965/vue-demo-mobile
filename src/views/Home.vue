<template>
  <div>
    home
  </div>
</template>

<script>
export default {
  mounted() {
    this.init();
    this.getUserInfo();
  },
  methods: {
    // get请求示例
    async init() {
      try {
        const params = { url: "test", method: "get", data: { name: "lisa" } };
        const res = await this.$http(params);
        console.log(res);
      } catch (error) {
        console.log(error)
      }
    },
    //post请求示例
    async getUserInfo() {
       try {
         //默认post
        const params = { url: "login", data: { username: "lisa" } };
        const res = await this.$http(params);
        console.log('token',res);
      } catch (error) {
        console.log(error)
      }
    }
  }
};
</script>

<style></style>
