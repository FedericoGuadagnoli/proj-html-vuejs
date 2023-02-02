<script>
export default {
    name: 'TestimonialSection'
}
</script>

<template>

    <!-- Testimonial -->
    <section id="testimonial">
        <div class="container-fluid">
            <div class="row mt-5 pt-5">

                <!-- Content -->
                <div class="col-12 d-flex justify-content-center">
                    <div class="card w-50 text-center border-0">

                        <!-- Image -->
                        <figure class="h-25 d-flex align-items-center justify-content-center">
                            <img src="../../../assets/img/testi-icon.png" alt="icon" class="img-fluid h-50">
                        </figure>

                        <!-- Text -->
                        <p class="fw-semibold">"Dessert pudding dessert jelly beans cupkace sweet caramels gingerbread.
                            Fruitcake niscuit
                            cheescake. Cookie topping sweets muffine pudding tart bear claw sugar plum croissant". We
                            started as a small legal consultancy. We have proved our competence and had many satisfied
                            clients.</p>

                        <!-- Author -->
                        <h4 class="text-capitalize fw-bold">martha alex</h4>

                        <!-- Role -->
                        <span class="role text-capitalize fw-bold">manager</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../../assets/scss/partials/variables.scss' as *;

.role {
    color: $color-orange;
}
</style>