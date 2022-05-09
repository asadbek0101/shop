<template>
  <div style="width: 100%">
    <table>
      <thead>
      <tr>
        <th>#</th>
        <th>Username</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Role</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <td>{{index+1}})</td>
        <td>{{item.username}}</td>
        <td>{{item.email}}</td>
        <td>{{item.phone}}</td>
        <td>{{item.role}}</td>
        <td>
          <button style="background-color: green;">edit</button>
          <button style="background-color: red">delete</button>
        </td>
      </tr>
      </tbody>
    </table>
    <table class="table">
      <thead>
      <tr>
        <th>#</th>
        <th>Username</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Role</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <td>{{index+1}})</td>
        <td>{{item.username}}</td>
        <td>{{item.email}}</td>
        <td>{{item.phone}}</td>
        <td>{{item.role}}</td>
        <td>
          <button style="background-color: green;">done</button>
          <button style="background-color: red">cancel</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "SettingPage",
  components: {},
  computed:{
    data(){
      return this.$store.state.users
    }
  },
  mounted() {
    this.$store.dispatch('getUsers')
  }
}
</script>

<style lang="scss" scoped>
table{
  border-collapse: collapse;
  width: 80%;
  margin: 20px auto;
  box-shadow: 0 0 2px 1px #2c3e50;
  padding: 10px;
  thead{
    background-color: #2c3e50;
    th{
      font-family: 'Roboto', sans-serif;
      color: white;
      font-size: 18px;
      padding: 10px 0;
    }
  }
  tbody{
    td{
      text-align: center;
      font-family: 'Roboto', sans-serif;
      font-size: 18px;
      padding: 10px 0;
      border-bottom: 2px solid #2c3e50;
      button{
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        cursor: pointer;
        margin: 0 2px;
        border: none;
        color: white;
        padding: 4px 10px;
        border-radius: 2px;
        &:hover{
          box-shadow: 0 0 1px 1px #2c3e50;
          transition: all .3s;
        }
      }
    }
  }
}
.table{
  display: none;
}
</style>