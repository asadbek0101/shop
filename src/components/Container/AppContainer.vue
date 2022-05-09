<template>
<div class="container">
<slot></slot>
</div>
</template>

<script>
export default {
  name: "AppContainer"
}
</script>

<style scoped lang="scss">
.container{
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
}
</style>