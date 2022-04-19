<template>
<input
    :value="value"
    @input="sendValue"
    :placeholder="placeholder"
    :type="type" />
</template>

<script>
export default {
  name: "AppInput",
  props:{
    placeholder: String,
    type:String,
    value:String
  },
  methods:{
    sendValue(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style scoped>
input{
  width: 100%;
  border: none;
  padding: 10px 0;
  border: 2px solid #2c3e50;
  border-radius: 4px;;
  font-size: 20px;
}
</style>