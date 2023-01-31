<script>
import HeaderTop from './HeaderTop.vue';
import { store } from '../../data/store';
export default {
    name: 'AppHeader',
    components: { HeaderTop },
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

    </header>
</template>

<style>

</style>