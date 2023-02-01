<script>
import AppFooter from './components/Footer/AppFooter.vue';
import AppHeader from './components/Header/AppHeader.vue';
import AppMain from './components/Main/AppMain.vue';
import { store } from './data/store';
export default {
  components: { AppHeader, AppMain, AppFooter },
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
  <app-footer></app-footer>
</template>

<style scoped lang="scss">
@use './assets/scss/style.scss' as *;
</style>
