<template>
  <div id="saidbar" :style="{width: width, backgroundColor: bgColor}">
    <h1>Dashboard</h1>
    <ul>
      <li v-for="(item, i) in forLink" :key="i">
        <app-router :to="item.to" :icon-class="item.iconClas">{{item.title}}</app-router>
      </li>
    </ul>
    <hr>
    <ul>
      <li>
        <app-router to="/admin/setting" icon-class="fa-solid fa-gear">
      Setting
        </app-router>
      </li>
    </ul>

  </div>
</template>

<script>
import AppRouter from "@/components/Router/AppRouter";
export default {
  name: "AppSaidbar",
  components: {AppRouter},
  props:{
    width: String,
    bgColor: String,
  },
  data(){
      return {
        forLink:[
          {
            to:"/admin/menu",
            title:"Menu",
            iconClas:"fa-solid fa-landmark"
          },
          {
            to:"/admin/users",
            title:"Users",
            iconClas:"fa-solid fa-users"
          },
          {
            to:"/admin/curier",
            title:"Currier",
            iconClas:"fa-solid fa-cart-flatbed-suitcase"
          },
          {
            to:"/admin/info",
            title:"Order",
            iconClas:"fa-solid fa-receipt"
          },
          {
            to:"/admin/add",
            title:"Add",
            iconClas:"fa-solid fa-square-plus"
          },
        ]
      }
  }
}
</script>

<style scoped lang="scss">
#saidbar{
  position: sticky;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #2c3e50;
  height: 98vh;
  color: white;
  h1{
    margin-left: 20px;
    margin-top: 40px;
    font-family: sans-serif;
  }
  ul{
    width: 100%;
    padding: 0;
    padding: 0 16px;
    box-sizing: border-box;
    li{
      width: 100%;
      list-style-type: none;
    }
  }
}
a.router-link-active{
  background-color: white;
  color: #2c3e50 !important;
}
</style>