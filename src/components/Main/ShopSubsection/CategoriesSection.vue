<script>
import AppButton from '../../AppButton.vue';
export default {
    name: 'CategoriesSection',
    components: { AppButton },
    props: {
        productsCategories: Array,
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

    <!-- Section -->
    <section id="categories">
        <div class="container-fluid">
            <div class="row">

                <!-- Title -->
                <div class="col-12 text-center mb-3">
                    <h3 class="text-capitalize">trending online store</h3>
                    <h1 class="text-uppercase text-light">gogrin all
                        <span>organic</span>
                        food
                    </h1>
                </div>
                <div class="col-12 text-center">
                    <h3 class="text-capitalize">trending online store</h3>
                    <h1 class="text-uppercase text-light">gogrin all
                        <span>organic</span>
                        food
                    </h1>
                </div>

                <!-- Links -->
                <div class="col-12">
                    <ul class="d-flex justify-content-center py-5 gap-5 h5 ">
                        <li v-for="product in productsCategories">
                            <a href="#" class=" text-light text-capitalize fw-bold">{{ product }}</a>
                        </li>
                    </ul>
                </div>

                <!-- List Products -->
                <div class="col-8 offset-2 gap-5 g-5 d-flex flex-wrap justify-content-center">
                    <div v-for="product in productsShop" class="card-product text-center">

                        <!-- Pictures -->
                        <figure class="w-100">
                            <img :src="buildImagePath(product.image)" :alt="product.name" class="img-fluid w-100">
                            <div v-if="product.label" class="label-scount text-light text-uppercase fw-semibold fs-5">{{
                                product.label
                            }}
                            </div>
                        </figure>

                        <!-- Names products and Prizes -->
                        <figcaption>
                            <h4 class="text-light text-capitalize fw-bolder">{{ product.name }}</h4>
                            <div class="prizes fw-bolder">
                                <span v-if="product.oldPrize" class="old-prize me-1">{{ product.oldPrize }}</span>
                                <span class="prize">{{ product.prize }}</span>
                            </div>
                        </figcaption>
                    </div>
                </div>

                <!-- Button -->
                <div class="col-12 d-flex justify-content-center align-items-center">
                    <app-button class="btn text-uppercase text-light py-3 px-5 fw-bolder">all products</app-button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../../assets/scss/partials/variables.scss' as *;

.container-fluid {
    width: 90%;
    background-image: url(../../../assets/img/shop-bg-img.jpg);
    background-repeat: no-repeat;
    background-size: cover;

    .row {
        padding-top: 5rem;

        .col-12,
        .col-8 {

            /* TITLE */
            h1 {
                font-size: 3rem;
            }

            /* TITLE & PRIZES */
            span,
            h3 {
                color: $bg-orange;
            }

            /* LINKS */
            ul {
                list-style-type: none;

                li {
                    a {
                        text-decoration: none;
                    }
                }
            }

            /* PRODUCTS */
            .card-product {
                flex-basis: calc(25% - 3rem);

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

                /* OLD PRIZES */
                figcaption {
                    .prizes {
                        .old-prize {
                            text-decoration: line-through;
                            opacity: .5;
                        }
                    }
                }

            }

            /* BUTTON */
            .btn {
                background-color: $bg-orange;
                margin: 5rem 0;
                letter-spacing: -1px;
            }
        }
    }

}
</style>