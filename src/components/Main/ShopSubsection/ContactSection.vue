<script>
import AppButton from '../../AppButton.vue';
export default {
    name: 'ContactSection',
    components: { AppButton }
}
</script>

<template>
    <section id="contact-section">
        <div class="container-fluid py-5 my-5">
            <div class="row d-flex justify-content-center align-items-center">
                <div
                    class="col-7 d-flex flex-column justify-content-between align-items-center text-light my-5 gap-3 py-5">
                    <h4 class="text-uppercase fw-bold">here you can get 100% fresh organic food</h4>
                    <h1 class="fw-bolder text-center">Best organic food up to 25% off for all product</h1>
                    <p class="text-center fw-bold fs-5 ">The most beautiful people we have known defeat,known
                        suffering,known
                        struggle,known loss,and have
                        found their way out of those depths. The most beautiful perople we have known defeat,known
                        suffering</p>
                    <div>
                        <app-button class="btn text-light fw-bold me-2">
                            <font-awesome-icon icon="fa-solid fa-square-phone" class="fs-5" />
                            +088123 56 906
                        </app-button>
                        <app-button class="btn text-uppercase text-light fw-bold ms-2">apoinment</app-button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../../assets/scss/partials/variables.scss' as *;

.container-fluid {
    width: 90%;

    .row {
        background-image: url(../../../assets/img/call-to-bg.jpg);
        background-repeat: no-repeat;
        background-size: cover;
    }
}

h1 {
    font-size: 3rem;
}

.btn {
    border-radius: 5px;
    padding: 10px 30px;
}

.btn:first-child {
    background-color: $bg-orange;
}

.btn:last-child {
    background-color: $bg-green;
}
</style>