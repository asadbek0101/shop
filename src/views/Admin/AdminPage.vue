<template>
    <div id="button">
      <app-saidbar v-if="forSaidbar" :forDisplay = forSaidbar width="20%" >
        <h1>Saidbar</h1>
      </app-saidbar>
      <app-main :forDisplay = forSaidbar >
        <app-header width="98%">
          <button @click="forSaidbar = !forSaidbar" style="border: none; background-color: transparent; color: white; cursor: pointer; font-size: 24px; margin-left: 20px">
            <i class="fa-solid fa-bars"></i>
          </button>
        </app-header>
        <router-view/>
      </app-main>
    </div>
</template>

<script>
// import AppButton from "@/components/Button/AppButton";
import AppSaidbar from "@/components/Saidbar/AppSaidbar";
import AppMain from "@/components/Main/AppMain";
import AppHeader from "@/components/Header/AppHeader";
export default {
  name: "AdminPage",
  components: {AppHeader, AppMain, AppSaidbar},
  data(){
    return {
      forSaidbar: false
    }
  }
}
</script>

<style lang="scss" scoped>
#button{
  display: flex;
  position: relative;
}
</style>