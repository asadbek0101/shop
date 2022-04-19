<template>
<div id="korzinka">
<app-container>
  <app-main>

  </app-main>
</app-container>
</div>
</template>

<script>
import AppMain from "@/components/Main/AppMain";
import AppContainer from "@/components/Container/AppContainer";
export default {
  name: "KorzinkaPage",
  components: {AppContainer, AppMain}
}
</script>
