<template>
 <div id="profile">
   <div v-if="open" class="modal">
     <div class="box">
       <app-input v-model="profile.username"/>
       <app-input v-model="profile.email" style="margin: 14px 0"/>
       <app-input type="number" v-model="profile.phone"/>
       <input ref="fileInput" style="display: block; width: 90px; margin-top: 10px" type="file" @input="changeFile" />
      <div style="text-align: center">
        <app-button @click="updateAccaunt">DONE</app-button>
      </div>
     </div>
   </div>
   <div class="left">
     <img :src="profile.image" height="200px" alt="" style="object-fit: fill">
   </div>
   <div class="right">
     <div style="text-align: right"><button @click="open = true" style="font-family: 'Roboto', sans-serif ;cursor: pointer; background-color: #2c3e50; border: none; color: white; padding: 2px 10px; border-radius: 2px">Edit</button></div>
     <h2>Username : {{profile.username}}</h2>
     <h2>Email : {{profile.email}}</h2>
     <h2>Phone : {{profile.phone}}</h2>
   </div>
 </div>
</template>

<script>
import AppInput from "@/components/Input/AppInput";
import AppButton from "@/components/Button/AppButton";
import {mapActions} from "vuex";
export default {
  name: "ProfilePage",
  components: {AppInput, AppButton},
  data(){
    return{
      open:false,
    }
  },
  computed:{
    profile(){
      return this.$store.state.profile
    }
  },
  mounted() {
    this.$store.dispatch("getData");
    this.$store.dispatch("getProfile");
    this.$store.dispatch("getKorzinka");
  },
  methods:{
    ...mapActions(['upDateProfile']),
    ...mapActions(['updataUser']),
    changeFile(){
      let input = this.$refs.fileInput
      let file = input.files
      if(file && file[0]){
        let reader = new FileReader
        reader.onload = e =>{
          this.profile.image = e.target.result
          console.log(this.profile.image)
        }
        reader.readAsDataURL(file[0])
        this.$emit('input', file[0])
      }
    },
    updateAccaunt(){
      this.upDateProfile({
        id:this.profile.id,
        role:this.profile.role,
        username:this.profile.username,
        email:this.profile.email,
        image:this.profile.image,
        phone:this.profile.phone
      })
      this.updataUser({
        id:this.profile.id,
        role:this.profile.role,
        username:this.profile.username,
        email:this.profile.email,
        image:this.profile.image,
        phone:this.profile.phone
      },
      this.profile.id
      )
      this.open = false
    }
  }
}
</script>



<style lang="scss" scoped>
#profile{
  width: 60%;
  margin: 100px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid #bbb5b5;
  .left{
    width: 30%;
    padding: 30px;
    box-sizing: border-box;
    background-color: #2c3e50;
    img{
      border-radius: 10px;
      width: 100%;
    }
  }
  .right{
    width: 70%;
    padding: 40px;
    h2{
      border-bottom: 1px solid black;
      font-family: 'Roboto', sans-serif;
      margin: 14px 0;
    }
  }

}
.modal{
  width: 100%;
  height: 98vh;
  background-image: linear-gradient(rgba(0,0,0,0.5),rgba(0, 0, 0, 0.5));
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .box{
    width: 600px;
    height: 300px;
    background-color: white;
    box-sizing: border-box;
    padding: 40px;
    border-radius: 4px;

  }
}
</style>