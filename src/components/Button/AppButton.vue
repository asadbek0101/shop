<template>
<button
    @click="$emit('click')"
  :style="{ width: widht,backgroundColor: bgColor, color: color,}"
  >
  <slot>
  </slot>
</button>
</template>

<script>
export default {
  name: "AppButton",
  props:{
    bgColor : String,
    color: String,
    widht: String
  },

}
</script>

<style scoped lang="scss">
  button{
    padding: 10px 24px;
    font-size: 20px;
    background: #2c3e50;
    font-family: sans-serif;
    border-radius: 4px;
    color: white;
    cursor: pointer;
  }
</style>