<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
    jobcategories: Object,
    jobcategory: Object,
})

function addBodyScroll() {
    document.querySelector('body').classList.remove('overflow-hidden');
}

</script>
<template>
    <div class="text-center mb-4" style="width: 250px; min-width: 250px;">
        <div>
            <span class="font-bold">OUR EXPERTISE</span>
        </div>
        <div v-for="category in jobcategories" :key="category.id" class="mb-3 bg-gray-100 dark:bg-gray-700 p-0 border border-gray-300 dark:border-gray-500 hover:border-orange-500 hover:text-orange-500 transition-all"
            :class="category.id == jobcategory.id ? 'border-orange-500 text-orange-500' : ''">

            <Link @click="addBodyScroll" :href="`/expertise/${category.slug}`">
            <div class="bg-gray-300 dark:bg-gray-800 mb-1"
                :style="`height: 90px; background-repeat: no-repeat;  background-size: cover;   background-position: center; background-image: url('${category.media[0]?.original_url}');`">
            </div>

            <p class="mb-1 hover:text-orange-500 transition-all">{{ category.title }}</p>
            </Link>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
