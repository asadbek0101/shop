<template>
<footer>
  <h1>Footer</h1>
  <slot>

  </slot>
</footer>
</template>

<script>
export default {
  name: "AppFooter"
}
</script>

<style scoped lang="scss">
footer{
  height: 18vh;
  background-color: #2c3e50;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
}
</style>