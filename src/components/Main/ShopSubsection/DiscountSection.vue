<script>
export default {
    name: 'DiscountSection',
    props: {
        discounts: Object
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

    <!-- Section Maxi Discount -->
    <section id="maxi-discount">
        <div class="container-fluid">
            <div class="row d-flex justify-content-center py-5 my-5">

                <!-- Content -->
                <div v-for="scount in discounts" class="col-auto">

                    <!-- Pictures -->
                    <figure>
                        <img :src="buildImagePath(scount.image)" alt="tomato" class="img-fluid">
                    </figure>

                    <!-- Picture description & link -->
                    <figcaption class="d-flex flex-column justify-content-between">
                        <h2 class="text-light fw-bolder">{{ scount.text }}</h2>
                        <a class="text-light fs-5 text-uppercase fw-bold" href="#">{{ scount.link }}</a>
                    </figcaption>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.col-auto {
    position: relative;

    figcaption {
        position: absolute;
        top: 5%;
        bottom: 15%;
        left: 5%;
        width: 70%;

        a {
            text-decoration: none;
            letter-spacing: -1px;
        }
    }
}
</style>