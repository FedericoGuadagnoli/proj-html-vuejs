<script>
import { store } from '../../data/store';
import FooterBottom from './FooterBottom.vue';
import FooterTop from './FooterTop.vue';
export default {
    name: 'AppFooter',
    components: { FooterTop, FooterBottom },
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
        <footer-bottom :info="store.info" :links="store.links"></footer-bottom>
    </footer>
</template>

<style>

</style>