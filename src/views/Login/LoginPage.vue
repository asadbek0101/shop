<template>
<div id="login">
 <div  id="left">
      <h1 v-if="forDisplay">Sign UP</h1>
      <h1 v-else>Sign IN</h1>
 </div>
  <div  id="right">
    <form class="form" v-if="forDisplay" id="SignUp" @submit.prevent="handeSignUp">
      <app-input placeholder="Email" type="email"/>
      <app-input placeholder="Password" type="password"/>
      <app-input placeholder="Username" />
      <div class="buttons">
        <app-button widht="100%" @click="forDisplay = !forDisplay">Sign In</app-button>
      </div>
    </form>
    <form class="form"  v-else id="SignIn" @submit.prevent="handeSignIn">
      <app-input placeholder="Username"/>
      <app-input type="password" placeholder="Password"/> <br>
      <div class="buttons">
        <app-button widht="100%" @click="forDisplay = !forDisplay" >Sign Up</app-button>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import AppInput from "@/components/Input/AppInput";
import AppButton from "@/components/Button/AppButton";
export default {
  name: "LoginPage",
  components: { AppButton, AppInput},
  data(){
    return {
      forDisplay: true,
    }
  },
  methods:{

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
  }
}
</style>