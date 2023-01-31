<script>
export default {
    name: 'HeaderTop',
    props: {
        brand: String
    }
}
</script>

<template>
    <div class="header-top container-fluid">
        <div class="row">
            <div class="col-2">
                <div>
                    <font-awesome-icon icon="fa-solid fa-location-dot"></font-awesome-icon>
                    <address>Noth baukhula, tala, USA</address>
                </div>
                <div>
                    <font-awesome-icon icon="fa-solid fa-envelope"></font-awesome-icon>
                    <span>demo@example.com</span>
                </div>
            </div>
            <div class="col-2">
                <font-awesome-icon icon="fa-solid fa-clock-four"></font-awesome-icon>
                <time>8.30AM-8.30PM</time>
            </div>
            <div>
                <font-awesome-icon :icon="brand"></font-awesome-icon>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>