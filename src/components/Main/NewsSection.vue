<script>
export default {
    name: 'NewsSection',
    props: {
        news: Object,
        logos: Array
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

    <!-- News Section -->
    <section id="news">
        <div class="container">
            <div class="row d-flex justify-content-center align-items-center">

                <!-- Title -->
                <div class="col-12 text-center">
                    <h4 class="mt-5 fw-bold">The news what we have</h4>
                    <h1 class="text-uppercase fw-bolder">gogrin latest
                        <span>news</span>
                        feed
                    </h1>
                </div>

                <!-- List Pictures -->
                <div v-for="news in this.news" class="col-4 my-5 d-flex flex-column gap-3">
                    <figure>
                        <img :src="buildImagePath(news.img)" alt="food" class=" img-fluid">
                    </figure>

                    <!-- Authors & Date Time -->
                    <figcaption class="d-flex gap-3">
                        <cite class="text-capitalize">
                            <font-awesome-icon class="icon" icon="fa-solid fa-user" />
                            {{ news.name }}
                        </cite>
                        <time>
                            <font-awesome-icon class="icon" icon="fa-solid fa-clock-four"></font-awesome-icon>
                            {{ news.date }}
                        </time>
                    </figcaption>

                    <!-- Pictures Descriptions -->
                    <h5 class="fw-bolder">{{ news.title }}</h5>
                    <p>{{ news.text }}</p>
                    <a class="text-uppercase fw-bold" href="#">{{ news.link }}</a>
                </div>
            </div>

            <!-- Logos -->
            <div class="row d-flex justify-content-center gap-5 pb-5 my-5">
                <div v-for="logo in this.logos" class="col-2">
                    <figure>
                        <img :src="buildImagePath(logo)" alt="logo">
                    </figure>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;

.container {
    margin-bottom: 10rem;

}

.row {

    /* TITLE */
    .col-12 {
        background-image: url(../../assets/img/title-shap.png);
        background-repeat: no-repeat;
        background-position: center;

        h4,
        h1 span {
            color: $color-orange;
        }

        h1 {
            font-size: 3rem;
            color: $color-lightblack;
        }
    }

    /* AUTHOR & DATE TIME */
    .col-4 {
        figcaption {

            cite,
            time {
                .icon {
                    color: $color-orange;
                }

            }
        }

        /* PICTURES DESCRIPTION */
        h5,
        a {
            text-decoration: none;
            color: $color-green;
        }

        p {
            color: $color-lightblack;
        }
    }
}
</style>