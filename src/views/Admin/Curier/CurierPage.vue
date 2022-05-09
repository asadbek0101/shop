<template>
  <div v-if="data.length > 0" style="display: flex;flex-wrap: wrap; align-items: flex-start; margin-left: 40px">
    <app-card v-for="(item, index) in data" :key="index" :name="item.username" title="Username: " textTitle="Phone: " :text="item.phone">
      <h4 style="font-family: 'Roboto', sans-serif"> Habar : {{item.comment}}</h4>
      <div v-for="(product, i) in item.data" :key="i">
        <p style="font-family: 'Roboto', sans-serif; font-size: 16px">{{product.title}} : {{product.soni}} ta  narxi {{product.price * product.soni }} so'm </p>
      </div>
      <p style="font-family: 'Roboto', sans-serif; font-weight: bold">Umumiy summa : </p>
      <div class="buttons">
        <button @click="getUser(item.id)" style="background-color: green"><i class="fa-solid fa-check"></i></button>
        <button @click="delCurier(item.id)" style="background-color: red"><i class="fa-solid fa-xmark"></i></button>
      </div>
    </app-card>
  </div>
<not-product v-else for-icon="fa-solid fa-hourglass-empty"/>
</template>

<script>
  import AppCard from "@/components/Card/AppCard";
  import {mapActions} from "vuex";
  import NotProduct from "@/components/NotProduct/NotProduct";
  export default {
  name: "CurierPage",
  components: {NotProduct, AppCard},
    data(){
    return{
    }
    },
    computed:{
    data(){
      return this.$store.state.curier
    }
    },
    mounted() {
    this.$store.dispatch('getCurier')
    },
    methods:{
    ...mapActions(['deleteCurier']),
      delCurier(id){
      this.deleteCurier(id)
      },
      getUser(id) {
        alert("This product will go to")
        this.deleteCurier(id)
      }
    }
  }
</script>

<style lang="scss" scoped>
.buttons{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  button{
    color: black;
    border: none;
    padding: 6px 14px;
    border-radius: 4px;
    cursor: pointer;
    &:hover{
      box-shadow: 0 0 1px 1px #948f8f;
    }
    i{
      font-size: 18px;
    }
  }
}
</style>