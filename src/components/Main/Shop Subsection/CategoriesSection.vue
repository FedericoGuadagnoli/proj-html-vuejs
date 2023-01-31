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
    <Subsection id="categories-section">
        <div class="container-fluid">
            <div class="row">
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
                <div class="col-12">
                    <ul class="d-flex justify-content-center py-5 gap-5 h5 ">
                        <li v-for="product in productsCategories">
                            <a href="#" class=" text-light text-capitalize">{{ product }}</a>
                        </li>
                    </ul>
                </div>
                <div class="col-8 offset-2 gap-5 g-5 d-flex flex-wrap justify-content-center">
                    <div v-for="product in productsShop" class="card-product text-center">
                        <figure class="w-100">
                            <img :src="buildImagePath(product.image)" :alt="product.name" class="img-fluid w-100">
                        </figure>
                        <figcaption>
                            <h4 class="text-light text-capitalize fw-bolder">{{ product.name }}</h4>
                            <div class="prizes fw-bolder">
                                <span v-if="product.oldPrize" class="old-prize me-1">{{ product.oldPrize }}</span>
                                <span class="prize">{{ product.prize }}</span>
                            </div>
                        </figcaption>
                    </div>
                </div>
                <div class="col-12 d-flex justify-content-center align-items-center">
                    <app-button class="btn text-uppercase text-light py-3 px-5 fw-bolder">all products</app-button>
                </div>
            </div>
        </div>
    </Subsection>
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
    }

}

h1 {
    font-size: 3rem;
}

span,
h3 {
    color: $bg-orange;
}

ul {
    list-style-type: none;

    li {
        a {
            text-decoration: none;
        }
    }
}

.card-product {
    flex-basis: calc(25% - 3rem);

    .prizes {
        .old-prize {
            text-decoration: line-through;
            opacity: .5;
        }
    }
}

.btn {
    background-color: $bg-orange;
    margin: 5rem 0;
    letter-spacing: -1px;
}
</style>