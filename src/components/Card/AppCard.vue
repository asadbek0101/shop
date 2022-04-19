<template>
<div class="card"
:style="{backgroundColor: bgColor, color: color, width: width}"
>
  <i v-if="icon" :class="icon"></i>
  <img v-if="src" :src="src" alt="" :style="{height: imgHeight}" >
  <h1 v-if="title" >{{title}}</h1>
  <p v-if="text">{{text}}</p>
<slot></slot>
</div>
</template>

<script>
export default {
  name: "AppCard",
  props:{
    title:String,
    text:String,
    src:String,
    color: String,
    bgColor: String,
    width: String,
    imgHeight:String,
    icon:String
  }
}
</script>

<style scoped lang="scss">
.card{
  width: 300px;
  box-shadow: 0 1px 3px black;
  margin: 10px;
  border-radius: 2px;
  overflow: hidden;
  padding: 10px;
  box-sizing: border-box;
  i{
    color: white;
    font-size: 40px;
  }
  h1{
    font-family: sans-serif;
    text-align: center;
    font-size: 30px;
  }
  img{
    width: 100%;
  }
}
</style>