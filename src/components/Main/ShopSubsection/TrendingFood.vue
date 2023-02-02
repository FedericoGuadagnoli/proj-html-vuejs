<script>
export default {
    name: 'TrendingFood',
    props: {
        productsShop: Object
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

    <!-- Section Trending Food -->
    <section id="trending-food">
        <div class="container-fluid">
            <div class="row gy-3 d-flex justify-content-center my-5 py-5  gap-3">

                <!-- Title -->
                <div class="col-12 text-center">
                    <h4 class="mt-5 fw-bold">Running week top selling</h4>
                    <h1 class="text-uppercase fw-bolder">top
                        <span>trending</span>
                        organic food
                    </h1>
                </div>

                <!-- Pictures -->
                <div v-for="product in productsShop.slice(0, 4)" class="col-2 border text-center">
                    <figure>
                        <img :src="buildImagePath(product.image)" :alt="product.name">
                        <div v-if="product.label" class="label-scount text-light text-uppercase fw-semibold fs-5">{{
                            product.label
                        }}
                        </div>
                    </figure>

                    <!-- Pictures Descriptions -->
                    <figcaption class="mb-3">
                        <h4 class="text-capitalize fw-bolder">{{ product.name }}</h4>
                        <div class="prizes">
                            <span v-if="product.oldPrize" class="old-prize me-1">{{ product.oldPrize }}</span>
                            <span class="prize">{{ product.prize }}</span>
                        </div>
                    </figcaption>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../../assets/scss/partials/variables.scss' as *;

/* TITLE */
.col-12 {
    background-image: url(../../../assets/img/title-shap.png);
    background-repeat: no-repeat;
    background-position: center;

    h4,
    span {
        color: $color-orange;
    }

    h1 {
        font-size: 3rem;
    }
}

/* PICTURES */
.col-2 {
    box-shadow: 10px 1px 15px lightgrey;

    /* LABEL SCOUNT */
    figure {
        position: relative;

        .label-scount {
            background-color: $bg-orange;
            position: absolute;
            padding: 5px 10px;
            top: 3%;
            right: 3%;
        }
    }

    /* PRIZES */
    .prizes {
        .old-prize {
            text-decoration: line-through;
        }
    }
}
</style>