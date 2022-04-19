import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[
    ],
    product:{},
  },
  getters: {
  },
  mutations: {
    SET_PRODUCTS(state, data){
      state.products = data
    }
  },
  actions: {
    getProducts({commit}){
      axios.get("https://fakestoreapi.com/products").then((response)=>
          commit("SET_PRODUCTS", response.data)
      )
    },
    getProduct({commit},id){
      axios.get(`https://fakestoreapi.com/products/${id}`).then((response)=>
          commit("SET_PRODUCT", response.data)
      )
    },
  },
  modules: {
  }
})
