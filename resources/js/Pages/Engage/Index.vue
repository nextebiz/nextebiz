<template>
    <AuthenticatedLayout>
        <div class="container m-auto">
            <h1>Engage</h1>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue"

import { onMounted } from "vue"
import { initFlowbite } from 'flowbite'

onMounted(() => {
    initFlowbite();
})
</script>

<style lang="scss" scoped></style>
