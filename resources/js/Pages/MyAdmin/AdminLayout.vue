<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import { onMounted } from 'vue';
import AdminMenu from './AdminMenu.vue';

onMounted(() => {
    initFlowbite();
})
</script>

<template>
    <AuthenticatedLayout>

        <slot />


        <AdminMenu />
    </AuthenticatedLayout>
</template>
