<script>
import AppButton from './AppButton.vue';
export default {
    name: 'MailForm',
    components: { AppButton },
    data() {
        return {
            mail: ''
        }
    },
    emit: ['mail inserted']
}
</script>

<template>

    <!-- MAIL FORM -->
    <div class="row mb-3 d-flex justify-content-center">
        <div class="col-7 d-flex justify-content-between align-items-center p-5">
            <h2 class="text-uppercase text-light h-100 m-0">subscribe our newsletter</h2>
            <div class="w-50 d-flex justify-content-end">
                <input type="email" id="email" class="w-75 px-5 " v-model.trim="mail" placeholder="your email">
                <app-button class="btn text-light px-5 py-2 text-uppercase"
                    @click="$emit('mail-inserted', mail)">send</app-button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables.scss' as *;

.col-7 {
    background-image: url(../assets/img/milesim-bg.jpg);

    div {
        .btn {
            background-color: $bg-green;
            border-radius: 0;
        }
    }
}
</style>