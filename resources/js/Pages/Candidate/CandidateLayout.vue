<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import { onMounted } from 'vue';
import CandidateMenu from './CandidateMenu.vue';

onMounted(() => {
    initFlowbite();
})
</script>

<template>
    <AuthenticatedLayout>

        <slot />
        <CandidateMenu />
    </AuthenticatedLayout>
</template>
