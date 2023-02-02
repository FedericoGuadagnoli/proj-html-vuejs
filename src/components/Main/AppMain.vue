<script>
import MailForm from '../MailForm.vue';
import NewsSection from './NewsSection.vue';
import ShopSection from './ShopSection.vue';
import JumbotronSection from './JumbotronSection.vue';
import NaturalProducts from './NaturalProducts.vue';
import { store } from '../../data/store';
export default {
    name: 'AppMain',
    components: { JumbotronSection, NaturalProducts, ShopSection, NewsSection, MailForm },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <main>
        <jumbotron-section></jumbotron-section>
        <natural-products :products="store.naturalProducts"></natural-products>
        <shop-section :productsCategories="store.categoriesProducts" :productsShop="store.shopProducts"
            :strengths="store.strengths" :discounts="store.discounts"></shop-section>
        <news-section :news="store.news" :logos="store.logos"></news-section>
        <mail-form class="mail-form"></mail-form>
    </main>
</template>

<style scoped lang="scss">
main {
    position: relative;
    margin-bottom: 5rem;

    .mail-form {
        position: absolute;
        width: 100%;
        bottom: -3.5%;
    }
}
</style>