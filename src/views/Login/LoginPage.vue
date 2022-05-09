<template>
<div id="login">
 <div  id="left">
      <h1 v-if="forDisplay">Sign UP</h1>
      <h1 v-else>Sign IN</h1>
 </div>
  <div  id="right">
    <button class="btn" @click="forDisplay = !forDisplay">{{ forDisplay? "Sing IN" : "Sign Up"}}
    </button>
    <form class="form" v-if="forDisplay" id="SignUp" @submit.prevent="handleSignUp">
      <app-input v-model="signUpEmail" placeholder="Email" type="email"/>
      <app-input v-model="signUpPassword" placeholder="Password" type="password"/>
      <app-input v-model="signUpUsername" placeholder="Username" />
      <app-input v-model="signUpPhone" type="number" placeholder="Phone" />
      <div class="buttons">
        <app-button fs="20px" widht="100%" >Sign Up</app-button>
      </div>
    </form>
    <form class="form"  v-else id="SignIn" @submit.prevent="handleSignIn">
      <app-input v-model="signInUsername" placeholder="Username"/>
      <app-input v-model="signInPassword" type="password" placeholder="Password"/> <br>
      <div class="buttons">
        <app-button fs="20px" widht="100%">Sign In</app-button>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import AppInput from "@/components/Input/AppInput";
import AppButton from "@/components/Button/AppButton";
import {mapActions} from 'vuex'
export default {
  name: "LoginPage",
  components: { AppButton, AppInput},
  data(){
    return {
      id:1,
      forDisplay: false,
        signUpEmail:"",
        signUpPassword:"",
        signUpUsername:"",
        signInUsername:"",
        signInPassword:"",
        signUpPhone:null

    }
  },
  methods:{
    ...mapActions(['registerUsers']),
    ...mapActions(['loginUsers']),
    handleSignUp(){
     if(this.signUpPhone !=null && this.signUpUsername !="" && this.signUpEmail !="" && this.signUpPassword !=""){
       this.registerUsers({
         email:this.signUpEmail,
         password:this.signUpPassword,
         username:this.signUpUsername,
         phone:this.signUpPhone,
         role:"user",
         image:""
       })
     }else{
       alert("Malumotlarni to'liq kiriting")
     }
     this.id++;
    },
    handleSignIn(){
      this.loginUsers({
        password:this.signInPassword,
        username:this.signInUsername
      })
    }
  },
}
</script>

<style scoped lang="scss">
#login{
  height: 100vh;
  display: flex;
  #left{
    width: 50%;
    background-color: #2c3e50;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
      color: white;
      font-family: sans-serif;
      font-size: 60px;
    }
  }
  #right{
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    form{
      width: 50%;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;
    }
    .buttons{
      width: 100%;
    }
    .btn{
      position: absolute;
      top: 40px;
      right: 40px;
      color: black;
      font-size: 20px;
      border: none;
      background-color: transparent;
      cursor: pointer;
      border-bottom: 4px solid transparent;
      font-weight: bold;
      &:hover{
        border-bottom: 4px solid black;
      }
    }
  }
}
</style>