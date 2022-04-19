<template>
<router-link :to="to" :style="{margin: margin, padding: padding}">
  <i v-if="iconClass" :style="{marginLeft: MarginLeft}" :class="iconClass"></i>
  <slot></slot>
</router-link>
</template>

<script>
export default {
  name: "AppRouter",
  props:{
    to:String,
    iconClass:String,
    margin: String,
    MarginLeft: String,
    padding: String
  }
}
</script>

<style scoped lang="scss">
a{
  text-decoration: none;
  color: white;
  font-family: sans-serif;
  font-size: 20px;
  border-radius: 4px;
  display: block;
  cursor: pointer;
  padding: 10px;
  margin: 4px 0;
  i{
    margin-right: 14px;
  }

}
a.router-link-active{
  background-color: white;
  color: #2c3e50;
}
</style>