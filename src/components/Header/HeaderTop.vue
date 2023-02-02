<script>
export default {
    name: 'HeaderTop',
    props: {
        brands: Array
    }
}
</script>

<template>
    <div class="header-top">
        <div class="container-fluid h-100">
            <div class="row d-flex justify-content-between h-100 text-light">

                <!-- Address & Mail contact -->
                <div class="col-4 d-flex h-100  align-items-center gap-5">
                    <div class="d-flex gap-1 align-items-center">
                        <font-awesome-icon class="" icon="fa-solid fa-location-dot"></font-awesome-icon>
                        <address class="m-0">Noth baukhula, tala, USA</address>
                    </div>
                    <div class="d-flex gap-1 align-items-center">
                        <font-awesome-icon icon="fa-solid fa-envelope"></font-awesome-icon>
                        <span>demo@example.com</span>
                    </div>
                </div>

                <!-- Time & Brands -->
                <div class="col-4 d-flex h-100 justify-content-end align-items-center gap-5">
                    <div>
                        <font-awesome-icon icon="fa-solid fa-clock-four"></font-awesome-icon>
                        <time class="ms-2">8.30AM-8.30PM</time>
                    </div>
                    <div>
                        <a href="#" v-for="brand in brands" class="text-light">
                            <font-awesome-icon class="mx-2" :icon="brand"></font-awesome-icon>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;

.header-top {
    background-color: $bg-green;
    height: 3rem;

    .container-fluid {
        width: 90%;
        margin: 0 auto;
    }
}
</style>