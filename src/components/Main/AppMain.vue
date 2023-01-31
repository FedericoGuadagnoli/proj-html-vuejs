<script>
import ShopSection from './ShopSection.vue';
import JumbotronSection from './JumbotronSection.vue';
import NaturalProducts from './NaturalProducts.vue';
import { store } from '../../data/store';
export default {
    name: 'AppMain',
    components: { JumbotronSection, NaturalProducts, ShopSection },
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
        <shop-section :productsCategories="store.categoriesProducts" :productsShop="store.shopProducts"></shop-section>
    </main>
</template>

<style>

</style>