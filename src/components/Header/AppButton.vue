<script>
export default {
    name: 'AppButton'
}
</script>

<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<style scoped>
.btn {
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
}
</style>