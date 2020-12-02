<template>
  <div>
    home
    <my-button bkcolor='blue' color='#fff'/>
    <my-button/>
    <van-uploader :after-read="afterRead" />
    <img v-if="imgSrc" width="200px" :src="imgSrc" alt="图片不存在" srcset="">
  </div>
</template>

<script>
import Vue from 'vue';
import { Uploader } from 'vant';
import url from '../server/ipConfig'
Vue.use(Uploader);
import {test,login,upload} from '../server/api'
export default {
  data(){
    return{
      imgSrc:''
    }
  },
  mounted() {
    
    this.getUserInfo();
  },
  methods: {
    //文件上传
    async afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      try {
        const res = await upload({file:file.file})
        this.imgSrc = url.baseUrl+res.file[0].path
        console.log(this.imgSrc)
      } catch (error) {
        console.log(error)
      }
    },
    async init() {
      try {
        const res = await test({ name: "lisa" });
        console.log(res);
      } catch (error) {
        console.log(error)
      }
    },
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
