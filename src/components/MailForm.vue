<script>
import AppButton from './AppButton.vue';
export default {
    name: 'MailForm',
    components: { AppButton }
}
</script>

<template>
    <div class="row mb-3 d-flex justify-content-center">
        <div class="col-6 d-flex justify-content-between align-items-center p-5">
            <h2 class="text-uppercase text-light h-100 m-0">subscribe our newsletter</h2>
            <div class="w-50 d-flex justify-content-end">
                <input type="email" id="email" class="w-75 px-5  " placeholder="your email">
                <app-button class="btn text-light px-5 py-2 text-uppercase  ">send</app-button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables.scss' as *;

.col-6 {
    background-image: url(../assets/img/milesim-bg.jpg);

    div {
        .btn {
            background-color: $bg-green;
            border-radius: 0;
        }
    }
}
</style>