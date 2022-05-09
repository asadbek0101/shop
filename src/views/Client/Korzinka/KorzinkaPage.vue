<template>
  <div v-if="data.length>0" class="korzinka">
      <div class="listItem" v-for="(item, index) in data" :key="index">
        <div class="img">
          <img :src="item.image" width="100%" height="100%" style="object-fit: fill">
        </div>
        <div class="info">
         <div>
           <h2>Soni : {{item.soni}}</h2>
           <h2>Nomi : {{item.title}}</h2>
           <h2>Narxi : {{item.price}}</h2>
           <h2>Umumiy summa : {{item.soni*item.price}}</h2>
         </div>
          <div class="buttons">
            <button @click="decrement(item.id)"><i class="fa-solid fa-minus"></i></button>
            <button @click="increment(item.id)"><i class="fa-solid fa-plus"></i></button>
          <button @click="deleteProduct(item.id)">  <i class="fa-solid fa-xmark"></i></button>
          </div>
        </div>
      </div>
    <div class="sendDiv">
      <textarea v-model="comment" placeholder="Izoh yozish uchun" />
      <div style="width: 60%; display: flex; justify-content: space-between; margin: 20px auto; border-bottom: 1px solid #a6a2a2">
        <h1 style="margin: 0">Umumiy summa : </h1>
        <h1 style="margin: 0">3000000 so'm</h1>
      </div>
      <button @click="addOrder">JO'NATISH</button>
    </div>
  </div>
 <not-product v-else for-icon="fa-solid fa-basket-shopping"/>
</template>

<script>
import {mapActions} from "vuex";
import NotProduct from "@/components/NotProduct/NotProduct";

export default {
  name: "KorzinkaPage",
  components: {NotProduct},
  data(){
    return{
      comment:"",
    }
  },
  computed:{
    data(){
     return this.$store.state.korzinka
    },
    profile(){
      return this.$store.state.profile
    }
  },
  methods:{
    ...mapActions(['deleteKorzinka']),
    ...mapActions(['createOrder']),
    ...mapActions(['clearKorzinka']),
    decrement(id){
      const index = this.data.findIndex(e=>e.id === id)
      if(this.data[index].soni>1){
        this.data[index].soni--;
      }else if(this.data[index].soni <2){
        this.deleteKorzinka(id)
      }
    },
    increment(id){
      const index = this.data.findIndex(e=>e.id === id)
      this.data[index].soni++;
    },
    deleteProduct(id){
      this.deleteKorzinka(id)
    },
    addOrder(){
      this.createOrder({
        comment:this.comment,
        id:this.profile.id,
        username:this.profile.username,
        phone:this.profile.phone,
        data:this.data
      })
      this.clearKorzinka();
      this.$store.dispatch('getKorzinka')
    }
  },
  mounted() {
    this.$store.dispatch("getData");
    this.$store.dispatch("getProfile");
    this.$store.dispatch("getKorzinka")
  }
}
</script>


<style lang="scss" scoped>
.korzinka{
  width: 70%;
  margin: 0 auto;
  .listItem{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 180px;
    margin: 20px 0;
    padding: 20px;
    box-shadow: 0 0 1px 1px #534f4f;
    border-radius: 2px;
    box-sizing: border-box;
    .img{
      width: 30%;
    }
    .info{
      padding: 0 50px;
      width: 70%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h2{
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
      }
    }
  }
}
.buttons{
  button{
    font-size: 12px;
    cursor:pointer;
    padding: 4px 20px;
    color: white;
    background-color: #2c3e50;
    border: none;
    border-radius: 2px;
    margin: 0 1px;
    &:hover{
      background-color: green;
    }
  }
}
.sendDiv{
  box-sizing: border-box;
  text-align: center;
  margin: 50px 0;
  textarea{
    background-color: #a6a3a3;
    border: none;
    outline: none;
    font-size: 18px;
    width: 60%;
    height: 100px;
    margin: 20px auto;
    resize: none;
    border-radius: 2px;
    padding: 10px;
    box-sizing: border-box;
  }
  h1{
    margin: 10px 0;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
  }
  button{
    width: 40%;
    padding: 10px 0;
      background-color: #2c3e50;
      font-size: 16px;
    border:none;
    color: white;
    font-weight: bold;
      cursor: pointer;
    border-radius: 2px;
    &:hover{
    background-color: green;
  }
  }
}
.not_product{
  width: 100%;
  h1{
    margin: 0;
    width: 100%;
    font-size: 60px;
    font-family: 'Roboto', sans-serif;
  }
}

</style>
