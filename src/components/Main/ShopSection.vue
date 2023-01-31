<script>
import CategoriesSection from './Shop Subsection/CategoriesSection.vue';
export default {
    name: 'ShopSection',
    components: { CategoriesSection },
    props: {
        productsCategories: Array,
        productsShop: Object
    }
}
</script>

<template>
    <section id="shop-section">
        <categories-section :productsCategories="this.productsCategories"
            :productsShop="this.productsShop"></categories-section>
    </section>

</template>

<style>

</style>