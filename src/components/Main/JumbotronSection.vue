<script>
import AppButton from '../AppButton.vue';
export default {
    name: 'JumbotronSection',
    components: { AppButton }
}
</script>

<template>

    <section id="jumbotron">
        <img src="../../assets/img/H3-slider3.jpg" alt="slider" class="img-fluid w-100">
        <div class="row d-flex justify-content-center">
            <div class="col-11 text-light text-center">
                <h3 class="text-uppercase">gogrin organic food store</h3>
                <h1>Eating naturally & organic is always be healty</h1>
                <app-button class="btn text-uppercase h1 text-light py-3 px-5 me-2">about us</app-button>
                <app-button class="btn text-uppercase h1 text-light py-3 px-5 ms-2">out history</app-button>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;

#jumbotron {
    position: relative;
}

.row {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .col-11 {
        h1 {
            font-size: 5rem;
        }

        h1,
        h3 {
            font-weight: 900;
        }

        .btn:nth-child(3) {
            background-color: $bg-orange;
        }

        .btn:nth-child(4) {
            background-color: $bg-green;
        }

    }
}
</style>