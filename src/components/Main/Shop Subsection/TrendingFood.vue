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
    <subsection id="trending-food">
        <div class="container-fluid">
            <div class="row gy-3 d-flex justify-content-center my-5 py-5  gap-3">
                <div class="col-12 text-center">
                    <h4 class="mt-5 fw-bold">Running week top selling</h4>
                    <h1 class="text-uppercase fw-bolder">top
                        <span>trending</span>
                        organic food
                    </h1>
                </div>
                <div v-for="product in productsShop.slice(0, 4)" class="col-2 border text-center">
                    <figure>
                        <img :src="buildImagePath(product.image)" :alt="product.name">
                    </figure>
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
    </subsection>
</template>

<style scoped lang="scss">
@use '../../../assets/scss/partials/variables.scss' as *;

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

.col-2 {
    box-shadow: 10px 1px 15px lightgrey;

    .prizes {
        .old-prize {
            text-decoration: line-through;
        }
    }
}
</style>