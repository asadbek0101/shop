<template>
<div style=" box-sizing: border-box; width: 90%; padding:20px; margin: 0 auto">
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
    <tr v-for="(item, index) in users" :key="index">
      <td>{{index+1}}</td>
      <td>{{item.username}}</td>
      <td>{{item.email}}</td>
      <td>{{item.phone}}</td>
      <td >
        <button style="background-color: green" @click="editUser(item.id)" >
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button style="background-color: red" @click="deleteUser(item.id)">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </td>
    </tr>

    </tbody>
  </table>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "UserPage",
  components: {},
  computed:{
    users(){
      return this.$store.state.users
    }
  },
  mounted(){
    this.$store.dispatch("getUsers")
  },
  methods:{
    ...mapActions(["delUser"]),
    deleteUser(id){
      this.delUser(id)
    },
    editUser(id){
      alert(id)
    }
  }
}
</script>

<style scoped lang="scss" >
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