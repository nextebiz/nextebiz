<template>
    <AuthenticatedLayout>
        <div class="container m-auto">
            <h1>Aboutx</h1>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import { onMounted, onUnmounted } from "vue"
import { initFlowbite } from 'flowbite'

onMounted(() => {
    initFlowbite();
})
onUnmounted(() => {
    initFlowbite();
})
</script>

<style lang="scss" scoped></style>
