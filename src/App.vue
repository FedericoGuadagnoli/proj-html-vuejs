<script>
import AppHeader from './components/Header/AppHeader.vue';
import AppMain from './components/Main/AppMain.vue';
import { store } from './data/store';
export default {
  components: { AppHeader, AppMain },
  data() {
    return {
      store
    }
  },

}
</script>

<template>
  <app-header></app-header>
  <app-main></app-main>
</template>

<style scoped lang="scss">
@use './assets/scss/style.scss' as *;
</style>
