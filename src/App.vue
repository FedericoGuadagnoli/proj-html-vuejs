<script>
import AppHeader from './components/Header/AppHeader.vue';
import { store } from './data/store';
export default {
  components: { AppHeader },
  data() {
    return {
      store
    }
  },

}
</script>

<template>
  <app-header></app-header>
</template>

<style scoped lang="scss">
@use './assets/scss/style.scss' as *;
</style>
