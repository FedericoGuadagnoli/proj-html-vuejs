<script>
import { store } from '../../data/store';
import FooterTop from './FooterTop.vue';
export default {
    name: 'AppFooter',
    components: { FooterTop },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <footer>
        <footer-top :icons="store.brandsIcon" :links="store.Footerlinks" :blogs="store.blogs"
            :gallery="store.gallery"></footer-top>
    </footer>
</template>

<style>

</style>