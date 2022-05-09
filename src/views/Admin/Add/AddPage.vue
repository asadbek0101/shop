<template>
<div style="width: 80%; padding: 20px; box-sizing: border-box; margin: 0 auto">
  <h1 style="font-size: 40px; font-family: sans-serif;color: #2c3e50">Add Product Info</h1>
  <button class="add-button" :style="{ boxShadow: productAndCategory? '1px 2px 3px #2c3e50' : 'none'}" @click="productAndCategory = true">Category</button>
  <button class="add-button" :style="{ boxShadow: productAndCategory? 'none' : '1px 2px 3px #2c3e50'}" @click="productAndCategory = false">Product</button>
  <div v-if="productAndCategory" style="margin: 40px 0;">
    <app-input placeholder="Category add" v-model="category" />
    <div style="text-align: center">
      <app-button style="margin-top: 40px" widht="30%" @click="addCategory()">ADD</app-button>
    </div>
  </div>
  <div v-else>
    <div style="display: flex; margin: 40px 0; gap: 40px; margin-top: 40px">
      <app-input placeholder="Product name" v-model="data.title"/>
      <app-input placeholder="Product image url" v-model="data.image"/>
    </div>
    <div style="display: flex; margin: 40px 0; gap: 40px">
      <app-input type="number" placeholder="Product price" v-model="data.price"/>
      <select  class="selected" v-model="categoryValue">
        <option value="" selected>Category</option>
        <option v-for="(option, index) in categorys" :key="index" :value="option.category">{{option.category}}</option>
      </select>
    </div>
    <div class="buttons" style="text-align: center">
      <app-button style="margin-top: 20px" widht="30%" @click="addProduct()">ADD</app-button>
    </div>
  </div>

</div>
</template>

<script>
import AppInput from "@/components/Input/AppInput";
import AppButton from "@/components/Button/AppButton";
import {mapActions} from "vuex";
export default {
  name: "AddPage",
  components: {AppButton, AppInput},
  data(){
    return{
      categoryValue:"",
      productAndCategory:true,
      category:"",
      array:[],
      data:{
        title:"",
        image:"",
        price:null,
        soni:1,
      }
    }
  },
  computed:{
    categorys(){
      return this.$store.state.products
    },
  },
  mounted() {
    this.$store.dispatch("getData");
  },
  methods:{
    ...mapActions(['createCategory']),
    ...mapActions(['createProduct']),
    addCategory(){
     if(this.category != ""){
       this.createCategory({
         category: this.category,
         data:this.array
       })
       this.category = ""
     }
    },
    addProduct(){
          if(this.categoryValue !=""){
            this.categorys.map((e)=>{
              if(e.category == this.categoryValue){
                this.createProduct({
                  category:e.category,
                  data:this.data
                })
                this.data.title = ""
                this.data.price = ""
                this.data.image = ""
              }
            })
          }else{
            alert("Please input category")
          }
    }
  }
}
</script>

<style scoped>
.selected{
  width: 100%;
  font-size: 20px;
  font-family: sans-serif;
  font-weight: 200;
}
.add-button{
  border:none;
  font-size: 20px;
  cursor: pointer;
  background-color: transparent;
  margin-right: 20px;
  border-radius: 4px;
  padding: 10px 20px;
}
.selected{
  border: 2px solid #2c3e50;
  border-radius: 4px;
}
</style>