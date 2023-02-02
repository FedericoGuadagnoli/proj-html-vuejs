<script>
export default {
    name: 'FooterTop',
    props: {
        icons: Array,
        logos: Array,
        links: Array,
        blogs: Object,
        gallery: Array
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
    <div class="footer-top">
        <div class="container">
            <div class="row d-flex">
                <div class="col-3">
                    <figure>
                        <img src="../../assets/img/footer-logo.png" alt="Gogrin">
                    </figure>
                    <p class="text-light fw-semibold">War should never be entered upon until every agency of peace has
                        failed
                        not to
                        be good</p>
                    <font-awesome-icon v-for="icon in this.icons" :icon="icon"
                        class="icon p-3 mx-1 text-light"></font-awesome-icon>
                </div>
                <div class="col-3 text-light">
                    <ul>
                        <li>
                            <h3 class="text-capitalize fw-bolder pb-3">emergency link</h3>
                        </li>
                        <li class="my-3 fw-semibold text-capitalize" v-for="link in this.links">{{ link }}</li>
                    </ul>
                </div>
                <div class="col-3 text-light ">
                    <ul class="p-0">
                        <li v-for="blog in this.blogs">
                            <h3 class="pb-3 text-capitalize fw-bolder" v-if="blog.title">{{ blog.title }}</h3>
                            <figure v-if="blog.image" class="d-flex gap-3 m-0 pb-3">
                                <img :src="buildImagePath(blog.image)" alt="food" class="img-fluid h-50">
                                <figcaption class="fw-semibold">
                                    <p class="m-0">{{ blog.text }}</p>
                                    <time>{{ blog.date }}</time>
                                </figcaption>
                            </figure>
                        </li>
                    </ul>
                </div>
                <div class="col-3 p-0 text-light">
                    <h3 class="text-capitalize fw-bolder pb-3">our gallery</h3>
                    <figure class="d-flex flex-wrap gap-2 justify-content-center w-75">
                        <img v-for="pic in gallery" :src="buildImagePath(pic)" alt="food">
                    </figure>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;

.footer-top {
    background-image: url(../../assets/img/footer-bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;

    .container {
        padding: 10rem 0 3rem;
    }
}

.col-3 {
    .icon {
        width: 1rem;
        height: 1rem;
        background-color: $bg-green;
        border-radius: 5px;
    }

    ul {
        list-style-type: none;

        li {

            figure {

                figcaption {
                    font-size: 0.82rem;
                }
            }
        }
    }

}
</style>