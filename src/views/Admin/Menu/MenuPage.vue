<template>
<div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 20px; margin-top: 80px" >
  <app-router v-for="(item, i) in forLink" :key="i" :to="item.to">
  <app-card img-height="300px" :title="item.title" :icon="item.iconClas" color="white"  bg-color="#2c3e50" :src="item.image"></app-card>
  </app-router>
 <app-router to="/admin/setting">
   <app-card title="Setting" bg-color="#2c3e50" icon="fa-solid fa-gear" color="white"></app-card>
 </app-router>
</div>
</template>

<script>
import AppCard from "@/components/Card/AppCard";
import AppRouter from "@/components/Router/AppRouter";
export default {
  name: "MenuPage",
  components: {AppRouter, AppCard},
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
  },

}
</script>

<style scoped>

</style>