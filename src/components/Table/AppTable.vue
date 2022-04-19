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
  components: {}
}
</script>

<style scoped lang="scss">
table{
  width: 100%;
  box-shadow:0 1px 3px black;
  border-collapse: collapse;
  thead{
    th{
      text-align: center;
      padding: 10px;
      font-family: sans-serif;
      font-size: 20px;
      border:2px solid #2c3e50;
      background-color: #2c3e50;
      color: white;

    }
  }
  tbody{
    td{
      text-align: center;
      font-family: sans-serif;
      font-size: 20px;
      border:2px solid #2c3e50;
      padding: 10px;
      button{
        border: none;
        background-color: transparent;
        font-size: 14px;
        width: 30px;
        height: 30px;
        border-radius: 50px;
        margin: 0 2px;
        color: white;
        cursor: pointer;
      }
    }
  }
}
</style>