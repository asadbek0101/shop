<template>
  <div>
    <app-header justify-content="flex-end">
      <div style="display: flex;">
        <app-router margin-left="0" padding="4px 20px" v-for="(link, index) in links" :key="index" :to="link.path">{{link.title}}</app-router>
      </div>
    </app-header>
    <app-main>
      <router-view/>
    </app-main>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from "@/components/Header/AppHeader";
import AppRouter from "@/components/Router/AppRouter";
import AppFooter from "@/components/Footer/AppFooter";
import AppMain from "@/components/Main/AppMain";

export default {
  name: "ClientPage",
  components: {AppMain, AppFooter, AppRouter, AppHeader},
  computed:{
    links(){
      return this.$store.state.links
    }
  }
}
</script>

<style scoped>

</style>