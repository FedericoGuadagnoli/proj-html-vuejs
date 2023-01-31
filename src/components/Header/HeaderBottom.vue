<script>
export default {
    name: 'HeaderBottom',
    props: {
        links: Object
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
    <div class="header-bottom">
        <div class="container-fluid h-100">
            <div class="navbar h-100">
                <div class=" navbar-left col-6 h-100 d-flex align-items-center gap-5">
                    <img src="../../assets/img/logo.png" alt="Gogrin">
                    <ul class="h-100 d-flex gap-3 mb-0">
                        <li v-for="link in links" :key="link.id" class="h-100 d-flex ">
                            <a class=" d-flex align-items-center text-dark " href="#">{{ link.text }}
                                <img class="img-fluid h-25" v-if="link.icon" :src="buildImagePath(link.icon)" alt="#">
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="navbar-right col-6 d-flex h-100 align-items-center justify-content-end gap-3">
                    <div class=" search d-flex justify-content-center align-items-center text-light">
                        <font-awesome-icon icon="fa-solid fa-search"></font-awesome-icon>
                    </div>
                    <div class="shop d-flex align-items-center">
                        <font-awesome-icon icon="fa-solid fa-cart-shopping"></font-awesome-icon>
                        <div class="number-items-in-cart d-flex justify-content-center align-items-center text-light">0
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;

.header-bottom {
    height: 6rem;

    .container-fluid {
        width: 90%;
        margin: 0 auto;
    }
}

a {
    text-decoration: none;

    .img-fluid {
        transform: translateY(20%);
    }
}

.navbar-right {

    .search {
        height: 2rem;
        width: 2rem;
        background-color: $bg-orange;
        border-radius: 50%;
    }

    .shop {
        position: relative;
        color: $color-green;

        .number-items-in-cart {
            width: .85rem;
            height: .85rem;
            border-radius: 50%;
            background-color: $bg-orange;
            position: absolute;
            top: -45%;
            right: -45%;
        }
    }
}
</style>