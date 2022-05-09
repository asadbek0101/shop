<template>
  <div style="width: 80%; margin: 0 auto">
  <div v-for="(product, index) in products" :key="index">
          <h1 v-if="product.data.length>0" style="font-family: 'Roboto', sans-serif">{{product.category}}</h1>
          <div style="display: flex; justify-content: flex-start; flex-wrap: wrap">
           <app-card img-height="180px"  v-for="(item, i) in product.data" :key="i" title="Name:" :name='item.title' :src="item.image">
             <app-button @click="buy(item.id, product.category)" widht="100%">BUY</app-button>
           </app-card>
       </div>
  </div>
    <div v-if="modal" class="modal">
      <div class="box">
        <img width="100%" height="230px" :src="forKorzinka.image" alt="">
       <div style="display: flex; justify-content: space-between; align-items: center">
         <div>
           <h3 style="margin: 10px 0; font-family: 'Roboto', sans-serif;">Nomi : {{forKorzinka.title}}</h3>
           <h3 style="margin: 10px 0; font-family: 'Roboto', sans-serif">Narxi : {{forKorzinka.price}}</h3>
           <h3 style="margin: 10px 0; font-family: 'Roboto', sans-serif">Soni : {{forKorzinka.soni}}</h3>
         </div>
         <div>
           <button @click="decrement()"><i class="fa-solid fa-minus"></i></button>
           <button @click="increment()"><i class="fa-solid fa-plus"></i></button>
           <button @click="cancelModal()">  <i class="fa-solid fa-xmark"></i></button>
         </div>
       </div>
        <app-button @click="addKorzinka" style="margin-top: 10px" widht="100%">QOSHISH</app-button>
      </div>
    </div>
  <div v-if="korzinka.length>0" class="sendButton">
    <div class="left">
      <h3>Buyurtmalarda <span class="forColor">{{umumiysoni}}</span> ta maxsulot  bor va umumiy narxi <span class="forColor">{{umumiysumma}}</span> </h3>
    </div>
    <div class="right">
      <button><router-link to="/client/korzinka">O'TISH</router-link></button>
    </div>
  </div>
  </div>
</template>

<script>

  import AppCard from "@/components/Card/AppCard";
  import AppButton from "@/components/Button/AppButton";
  import {mapActions} from "vuex";
  export default {
  name: "HomPage",
    components: {AppButton, AppCard},
    data(){
    return{
      modal:false,
      forKorzinka:{},
      umumiysoni:0,
      umumiysumma:0,
    }
    },
    computed:{
    products(){
      return this.$store.state.products
    },
      korzinka(){
      return this.$store.state.korzinka
      }
    },
    mounted() {
      this.$store.dispatch("getData");
      this.$store.dispatch("getProfile");
      this.$store.dispatch("getKorzinka")

    },
    methods:{
    ...mapActions(['createKorzinka']),
    buy(id, category){
      this.modal = true
      this.products.map((e)=>{
        if(e.category == category){
          const index = e.data.findIndex(e=>e.id === id)
          this.forKorzinka = e.data[index]
        }
      })
    },
      decrement(){
      if(this.forKorzinka.soni > 0){
        this.forKorzinka.soni--;
      }
      },
      increment(){
      this.forKorzinka.soni++;
      },
      cancelModal(){
      this.forKorzinka.soni = 0;
      this.modal = false
      },
      addKorzinka(){
      this.createKorzinka(this.forKorzinka)
        this.$store.dispatch('getKorzinka')
        this.modal = false
      }
    }
  }
</script>

<style lang="scss" scoped>
.sendButton{
  background-color: #a6a3a3;
  position: sticky;
  bottom: 20px;
  left: 0;
  right: 0;
  box-sizing: border-box;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 1px 1px #534f4f;
  margin: 20px auto;
  border-radius: 2px;

  .left{
    width: 70%;
    h3{
      margin: 0;
      font-size: 20px;
      padding: 0 40px;
      font-weight: bold;
      font-family: "Roboto", sans-serif;
      .forColor{
        color: green;
      }
    }
  }
  .right{
    width: 30%;
    button{
      width: 100%;
      height: 100%;
      padding: 10px;
      font-size: 20px;
      font-weight: bold;
      background-color: #2c3e50;
      margin: 0;
      border: none;
      cursor: pointer;
      a{
        text-decoration: none;
        color: white;
      }
    }
  }
}
.modal{
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7));
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  .box{
    box-sizing: border-box;
    width: 400px;
    height: 430px;
    background-color: white;
    padding: 20px
  }
}

</style>