<template>
<div class="card"
:style="{backgroundColor: bgColor, color: color, width: width}"
>
  <i v-if="icon" :class="icon"></i>
  <img v-if="src" :src="src" alt="" :style="{height: imgHeight}" >
  <h1 v-if="title" >{{title}} <span style="font-weight: normal"> {{name}}</span></h1>
  <p v-if="text" style="font-family: 'Roboto', sans-serif"> <strong>{{textTitle}}</strong> {{text}}</p>
<slot></slot>
</div>
</template>

<script>
export default {
  name: "AppCard",
  props:{
    name:String,
    title:String,
    text:String,
    src:String,
    color: String,
    bgColor: String,
    width: String,
    imgHeight:String,
    icon:String,
    textTitle:String
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
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
  }
  img{
    width: 100%;
  }
}
</style>