<template>
<div style="width: 80%; padding: 20px; box-sizing: border-box; margin: 0 auto">
  <h1 style="font-size: 40px; font-family: sans-serif;color: #2c3e50">Add Student Info</h1>
  <div style="display: flex; margin: 40px 0; gap: 40px; margin-top: 40px">
    <app-input placeholder="Student name"/>
    <app-input placeholder="Student surname"/>
  </div>
  <div style="display: flex; margin: 40px 0; gap: 40px">
    <app-input placeholder="Student phone number"/>
    <app-input placeholder="Student email pochta "/>
  </div>
  <div class="buttons" style="text-align: center">
    <app-button style="margin-top: 20px" widht="30%">ADD</app-button>
  </div>
</div>
</template>

<script>
import AppInput from "@/components/Input/AppInput";
import AppButton from "@/components/Button/AppButton";
export default {
  name: "AddPage",
  components: {AppButton, AppInput}
}
</script>

<style scoped>

</style>