<script>
export default {
    name: 'NaturalProducts',
    props: {
        products: Array
    },
    methods: {
        buildImagePath(image) {
            const url = new URL(`../../assets/img/${image}`,
                import.meta.url);
            return url.href;
        }
    }
}
</script>

<template>
    <section id="natural-products">
        <div class="container-fluid">
            <div class="row pe-3 d-flex g-1 ">
                <div class="col-4 offset-2 d-flex align-items-center">
                    <h1 class="fw-bolder">
                        <span>Look what</span>
                        consumer power has done with
                        <span>organic food;</span>
                        we can do the same with clothes.
                    </h1>
                </div>
                <div class="col-4 d-flex flex-column justify-content-center">
                    <p>I have a need to make this sorts of connections literal sometimes, and a
                        vehicle often helps
                        to do that. I have a relantionship to hosting culture.
                        <span>It isn't really about it helps to do that. I have a relantionship to hosting
                            culture.</span>
                    </p>
                    <p>Need to make these sorts of connections literal sometimes, and a vehicle often helps to do
                        that. I have a relantionship to hosting culture.</p>
                </div>
                <div class="col-2 text-end ">
                    <figure>
                        <img src="../../assets/img/fe-shap1-1.png" alt="100% natural" class="img-fluid">
                    </figure>
                </div>
                <div class="col-12 d-flex justify-content-center gap-4">
                    <figure v-for="product in products">
                        <img :src="buildImagePath(product)" alt="#">
                    </figure>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;

.container-fluid {
    width: 90%;

    .row {
        margin: 7rem 0;
    }
}

h1 {
    color: $color-green;
    font-size: 2.5rem;
}

span {
    color: $color-orange;
}
</style>