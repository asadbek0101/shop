import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from "@/views/Login/LoginPage";
import ClientPage from "@/views/Client/ClientPage";
import AdminPage from "@/views/Admin/AdminPage";
import HomPage from "@/views/Client/Home/HomPage";
import KorzinkaPage from "@/views/Client/Korzinka/KorzinkaPage";
import ShowPage from "@/views/Client/Show/ShowPage";
import MenuPage from "@/views/Admin/Menu/MenuPage";
import UserPage from "@/views/Admin/Users/UserPage";
import AddPage from "@/views/Admin/Add/AddPage";
import CurierPage from "@/views/Admin/Curier/CurierPage";
import InfoPage from "@/views/Admin/Info/InfoPage";
import SettingPage from "@/views/Admin/Settings/SettingPage";


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Login",
    component: LoginPage

  },
  {
    path:"/client",
    name:"Client",
    component: ClientPage,
    children:[
      {
        path:"/client/home",
        name:"Home",
        component: HomPage
      },
      {
        path:"/client/korzinka",
        name:"Korzinka",
        component: KorzinkaPage
      },
      {
        path:"/client/show",
        name:"Show",
        component: ShowPage
      },

    ]
  },
  {
    path: "/admin",
    name:"Admin",
    component: AdminPage,
    children: [
      {
        path:"/admin/menu",
        name:"Menu",
        component: MenuPage
      },
      {
        path:"/admin/users",
        name:"Users",
        component: UserPage
      },
      {
        path:"/admin/add",
        name:"Add",
        component: AddPage
      },
      {
        path:"/admin/curier",
        name:"Curier",
        component: CurierPage
      },
      {
        path:"/admin/info",
        name:"Info",
        component: InfoPage
      },{
        path:"/admin/setting",
        name:"Setting",
        component: SettingPage
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
