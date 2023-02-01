<script>
export default {
    name: 'StrengthsSection',
    props: {
        strengths: {
            type: Object,
            required: true
        }
    },
    methods: {
        buildImagePath(image) {
            const url = new URL(`../../../assets/img/${image}`,
                import.meta.url);
            return url.href;
        }
    }
}
</script>

<template>
    <section id="strengths">
        <div class="container-fluid">
            <div class="row d-flex justify-content-center align-items-center">
                <div v-for="strength in this.strengths" class="col-2 py-5">
                    <div class="card  border-0 d-flex flex-row justify-content-center align-items-center gap-5">
                        <div class="text-center">
                            <h1 class="fw-bolder">{{ strength.number }}</h1>
                            <p class="text-light text-capitalize fw-semibold fs-5">{{ strength.text }}</p>
                        </div>
                        <figure>
                            <img v-if="strength.img" :src="buildImagePath(strength.img)" alt="counter">
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../../assets/scss/partials/variables.scss' as *;

.container-fluid {
    width: 90%;

    .row {
        background-image: url(../../../assets/img/counter-bg.jpg);

        .col-2 {
            .card {
                background-color: transparent;

                h1 {
                    color: $color-orange;
                    font-size: 4rem;
                }
            }
        }
    }
}
</style>