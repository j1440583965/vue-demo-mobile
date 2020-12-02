<template>
  <div id="my-button">
      <button :style="{background:bkcolor,color:color}">公共组件示例</button>
  </div>
</template>

<script>
export default {
    name:'my-button',
    props:{
      bkcolor:{
        type:String,
        default:'#fff'
      },
      color:{
         type:String,
        default:'#000'
      }
    }
}
</script>

<style scoped lang='scss'>
#my-button{
  button{
    border: 1px solid #eee;
    padding: 10px;
  }
}
</style>