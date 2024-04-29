<template>
    <div class="bg-white dark:bg-gray-800">
        <Nav />
        <!-- Page Heading -->
        <slot name="header" />
        <slot />
        <Footer />
    </div>
</template>

<script setup>
import Nav from './Nav.vue';
import Footer from './Footer.vue';

</script>

<style lang="scss" scoped></style>
