<template>
<header :style="{justifyContent: justifyContent, width:width}">
  <slot></slot>
</header>
</template>

<script>
export default {
  name: "AppHeader",
  props:{
    justifyContent: String,
    width: String
  }
}
</script>

<style scoped lang="scss">
header{
  height: 8vh;
  background-color: #2c3e50;
  border-bottom: 1px solid white;
  border-left: 1px solid white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  h1{
    margin: 0;
    color: white;
  }
}
</style>