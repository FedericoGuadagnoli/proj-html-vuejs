<script>
import TrendingFood from './Shop Subsection/TrendingFood.vue';
import StrengthsSection from './Shop Subsection/StrengthsSection.vue';
import TestimonialSection from './Shop Subsection/TestimonialSection.vue';
import CategoriesSection from './Shop Subsection/CategoriesSection.vue';
export default {
    name: 'ShopSection',
    components: { CategoriesSection, TestimonialSection, StrengthsSection, TrendingFood },
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
        <strengths-section :strengths="this.strengths"></strengths-section>
        <trending-food :productsShop="this.productsShop"></trending-food>
    </section>

</template>

<style>

</style>