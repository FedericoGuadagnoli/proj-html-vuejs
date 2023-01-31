<script>
import JumbotronSection from './JumbotronSection.vue';
import NaturalProducts from './NaturalProducts.vue';
import { store } from '../../data/store';
export default {
    name: 'AppMain',
    components: { JumbotronSection, NaturalProducts },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <jumbotron-section></jumbotron-section>
    <natural-products :products="store.naturalProducts"></natural-products>
</template>

<style>

</style>