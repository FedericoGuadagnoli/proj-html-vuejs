<script>
import TestimonialSection from './Shop Subsection/TestimonialSection.vue';
import CategoriesSection from './Shop Subsection/CategoriesSection.vue';
export default {
    name: 'ShopSection',
    components: { CategoriesSection, TestimonialSection },
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
        <testimonial-section></testimonial-section>
    </section>

</template>

<style>

</style>