<script>
import HeaderTop from './HeaderTop.vue';
import HeaderBottom from './HeaderBottom.vue';
import { store } from '../../data/store';
export default {
    name: 'AppHeader',
    components: { HeaderTop, HeaderBottom },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <header>

        <header-top :brands="store.brandsIcon"></header-top>
        <header-bottom :links="store.Headerlinks"></header-bottom>
    </header>
</template>

<style>

</style>