<template>
  <table>
    <thead>
    <tr>
      <th>#</th>
      <th>Userame</th>
      <th>Email</th>
      <th>Phone Number</th>
      <th>Action</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>1</td>
      <td>Asadbek</td>
      <td>asadbekrejabboyev0101@gmail.com</td>
      <td>+998996906901</td>
      <td >
        <button style="background-color: green" >
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button style="background-color: red">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </td>
    </tr>

    </tbody>
  </table>
</template>

<script>
export default {
  name: "AppTable",
  components: {},
  props:{
    users:Array
  }
}
</script>

<style scoped lang="scss">

</style>