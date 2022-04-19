<template>
  <div>
    <app-header justify-content="flex-end">
      <div style="display: flex">
        <app-router margin-left="0" padding="4px 20px" to="/client/home">Home</app-router>
        <app-router margin-left="0" padding="4px 20px" to="/client/korzinka">Korzinka</app-router>
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
  components: {AppMain, AppFooter, AppRouter, AppHeader}
}
</script>

<style scoped>

</style>