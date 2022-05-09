<template>
  <div id="notfound">
    <h1>Hozrcha hech narsa yo'q</h1>
    <i :class="forIcon"></i>
  </div>
</template>

<script>
export default {
  name: "NotProduct",
  props:{
    forIcon:String
  }
}
</script>

<style lang="scss" scoped>
#notfound{
  width: 100%;
  text-align: center;
  h1{
    font-size: 40px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    cursor: default;
  }
  i{
    font-size: 100px;
  }
}
</style>