<template>
  <h1>This Chart component</h1>
</template>
<script>
import {Line } from 'vue-chartjs'
export default {
  extends: Line,
  props:{
    label:String,
  }
}
</script>
