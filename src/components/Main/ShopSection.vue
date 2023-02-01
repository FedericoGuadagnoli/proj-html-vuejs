<script>
import DiscountSection from './Shop Subsection/DiscountSection.vue';
import TestimonialSection from './Shop Subsection/TestimonialSection.vue';
import CategoriesSection from './Shop Subsection/CategoriesSection.vue';
export default {
    name: 'ShopSection',
    components: { CategoriesSection, TestimonialSection, DiscountSection },
    props: {
        productsCategories: Array,
        productsShop: Object,
        strengths: Object
    }
}
</script>

<template>
    <section id="shop-section">
        <categories-section :productsCategories="this.productsCategories"
            :productsShop="this.productsShop"></categories-section>
        <testimonial-section></testimonial-section>
        <discount-section :strengths="this.strengths"></discount-section>
    </section>

</template>

<style>

</style>