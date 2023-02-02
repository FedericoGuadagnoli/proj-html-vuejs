<script>
export default {
    name: 'FooterBottom',
    props: {
        info: Object,
        links: Array
    }
}
</script>

<template>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
        <div class="container">
            <div class="row d-flex justify-content-between align-items-center py-3 fs-5 fw-semibold">

                <!-- Copyright -->
                <div class="col-4">
                    <span class="text-light">{{ info.copyright }}</span>
                </div>

                <!-- Links -->
                <div class="col-3">
                    <ul class="d-flex justify-content-between m-0">
                        <li v-for="link in this.links">
                            <a class="text-light" href="#">{{ link }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;

.footer-bottom {
    background-color: $bg-green;
}

/* LINKS */
.col-3 {
    ul {
        li {
            list-style-type: none;

            a {
                text-decoration: none;
            }
        }
    }
}
</style>