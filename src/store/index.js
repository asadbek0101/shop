import Vue from 'vue'
import Vuex from 'vuex'
import router from "@/router";
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({

  //STATE

  state: {
    korzinka:[
    ],
    links:[
      {
        path:"/client/home",
        title:"Menu"
      },
      {
        path:"/client/korzinka",
        title:"Savat"
      },
      {
        path:"/client/profile",
        title:"Profile"
      }
    ],
    users:[],
    products:[],
    profile:{},
    order:[],
    curier:[]
  },
  getters: {},

  //MUTATIONS

  mutations: {
    GET_PRODUCTS(state, data){
      state.products = data
    },
    ADD_CATEAGORY(state, data){
      state.products.push(data)
    },
    ADD_PRODUCT(state, data){
      state.products.map((e)=>{
        if(e.category == data.category){
          e.data.push(data.data)
        }
      })
    },

    REGISTER(state, data){
      if(data != "ERROR") {
        state.users.push(data)
        state.profile = data
        router.push('/client')
      }
      else{
        alert("Malumotlar to'liq emas")
      }
    },
    LOGIN(state, user){
       if(user == "user"){
         router.push('/client')
       }else if(user == "admin"){

         router.push('/admin/menu')
       }
       else {
         alert("Hali ro'yxatdan o'tilmagan")
       }
    },
    GET_USERS(state, data){
      state.users = data
    },
    DELET_USER(state, id){
      const index = state.users.findIndex(e=>e.id === id)
      state.users.splice(index, 1)
    },

    GET_PROFILE(state,data){
      state.profile = data
    },
    EDIT_USER(state, data){
      console.log(data)
     const index = state.users.findIndex(e=>e.id == data.id)
      state.users[index] = data
    },
    GET_KORZINKA(state, data){
      state.korzinka = data
    },
    ADD_KORZINKA(state, data){
      state.korzinka.push(data)
    },
    DELET_KORZINKA(state, data){
      const index = state.korzinka.findIndex(e=>e.id === data.id)
      state.korzinka.splice(index, 1)
    },

    ADD_ORDER(state, data){
      state.order.push(data)
    },
    GET_ORDER(state, data){
      state.order = data
    },
    DELETE_ORDER(state, id){
      const index = state.order.findIndex(e=>e.id === id)
      state.order.splice(index, 1)
    },

    GET_CURIER(state, data){
      state.curier = data
    },
    ADD_CURIER(state, data){
      state.curier.push(data)
    },
    DELETE_CURIER(state, id){
      const index = state.curier.findIndex(e=>e.id === id)
      state.curier.splice(index, 1)
    }
  },


  actions: {

    //PRODUCTS

    getData({commit}){
      axios.get('http://localhost:5000/products').then((response)=>{
        commit("GET_PRODUCTS", response.data)
      })
    },
    createCategory({commit}, newData){
      axios.post('http://localhost:5000/products/category',{
        category:newData.category,
        data:newData.data
      }).then()
      commit("ADD_CATEAGORY", newData)
    },
    createProduct({commit}, newData){
      axios.post('http://localhost:5000/products',{
        category:newData.category,
        data:newData.data
      }).then((response)=>{
        commit("ADD_PRODUCT", response.data)
        console.log(newData.category)
        console.log(newData.data)
      })

    },

    //USERS

    registerUsers({commit}, user){
      axios.post('http://localhost:5000/users/register',{
        username:user.username,
        email:user.email,
        phone:user.phone,
        password:user.password,
        role:user.role,
        image:user.image
      }).then((response)=>{
      commit("REGISTER",response.data)
      })
    },
    loginUsers({commit}, user){
      axios.post('http://localhost:5000/users/login',{
        username:user.username,
        password:user.password
      }).then((response)=>{
        commit("LOGIN", response.data)
      })
    },
    getUsers({commit}){
      axios.get('http://localhost:5000/users').then((response)=>{
        commit("GET_USERS", response.data)
      })
    },
    updataUser({commit},data, id){
      axios.put(`http://localhost:5000/users/${id}`,{
        username:data.username,
        email:data.email,
        image:data.image,
        phone:data.phone,
        id:data.id,
        role:data.role
      }).then((response)=>{
        commit("EDIT_USER", response.data)
      })
    },
    delUser({commit}, id){
      axios.delete(`http://localhost:5000/users/${id}`).then((response)=>{
        commit("DELET_USER", response.data)
      })
    },

    //PROFILE

    getProfile({commit}){
      axios.get('http://localhost:5000/profile').then((response)=>{
        commit("GET_PROFILE", response.data)
      })
    },
    upDateProfile({commit}, data){
      axios.post('http://localhost:5000/profile',{
        username:data.username,
        email:data.email,
        image:data.image,
        phone:data.phone,
        id:data.id,
        role:data.role
      }).then((response)=>{
        commit("GET_PROFILE", response.data)
      })
    },

    //KORZINKA

    getKorzinka({commit}){
      axios.get('http://localhost:5000/korzinka').then((response)=>{
        commit("GET_KORZINKA", response.data)
      })
    },
    createKorzinka({commit}, product){
      axios.post('http://localhost:5000/korzinka',{
        id:product.id,
        title:product.title,
        image:product.image,
        price:product.price,
        soni:product.soni
      }).then((response)=>{
        commit("ADD_KORZINKA", response.data)
      })
    },
    deleteKorzinka({commit}, id){
      axios.delete(`http://localhost:5000/korzinka/${id}`).then((response)=>{
        commit("DELET_KORZINKA",response.data)
      })
    },
    clearKorzinka({commit}){
      axios.get('http://localhost:5000/korzinka/clear').then((response)=>{
        commit("GET_KORZINKA", response.data)
        console.log(response.data)
      })
    },

    //ORDER

    getOrder({commit}){
      axios.get('http://localhost:5000/order').then((response)=>{
        commit("GET_ORDER", response.data)
      })
    },
    createOrder({commit}, order){
      axios.post('http://localhost:5000/order',{
        id:order.id,
        username:order.username,
        comment:order.comment,
        phone:order.phone,
        data:order.data
      }).then((response)=>{
        commit("ADD_ORDER", response.data)
      })
    },

    deleteOrder({commit}, id){
      axios.delete(`http://localhost:5000/order/${id}`).then((response)=>{
        commit("DELETE_ORDER", response.data)
      })
    },

    //CURIER

    getCurier({commit}){
      axios.get('http://localhost:5000/curier').then((response)=>{
        commit("GET_CURIER", response.data)
      })
    },
    createCurier({commit}, curier){
      axios.post('http://localhost:5000/curier',{
        id:curier.id,
        username:curier.username,
        phone:curier.phone,
        data:curier.data,
        comment:curier.comment
      }).then((response)=>{
        commit("ADD_CURIER", response.data)
      })
    },
    deleteCurier({commit}, id){
      axios.delete(`http://localhost:5000/curier/${id}`).then((response)=>{
        commit("DELETE_CURIER", response.data)
      })
    }
  },

  // GET_CURIER(state, data){
  //   state.curier = data
  // },
  // ADD_CURIER(state, data){
  //   state.curier.push(data)
  // },
  // DELETE_CURIER(state, id){
  //   const index = state.curier.findIndex(e=>e.id === id)
  //   state.curier.splice(index, 1)
  // }


  modules: {}
})
