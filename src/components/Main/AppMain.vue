<template>
<div id="main" :style="{width: forDisplay? '80%': '100%', backgroundColor: bgColor}">
  <slot>
</slot>
</div>
</template>
<script>
export default {
  name: "AppMain",
  components: {},
  props:{
      bgColor: String,
      forDisplay: Boolean
  }
}
</script>

<style scoped lang="scss">
#main{
  min-height: 72vh;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
}
</style>