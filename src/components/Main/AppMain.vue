<script>
import JumbotronSection from './JumbotronSection.vue';
import { store } from '../../data/store';
export default {
    name: 'AppMain',
    components: { JumbotronSection },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <jumbotron-section></jumbotron-section>
</template>

<style>

</style>