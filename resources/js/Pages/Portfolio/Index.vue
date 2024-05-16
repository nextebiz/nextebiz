<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue"
import { onMounted } from "vue";
import { initFlowbite } from 'flowbite'
import { Head, Link, router, useForm } from "@inertiajs/vue3";
import { TailwindPagination } from 'laravel-vue-pagination';

const props = defineProps({
    portfolios: Object,
    portfoliocategories: Object,
    portfoliocategory_id: String
})

const form = useForm({
    portfoliocategory_id: props.portfoliocategory_id
})

function getCategoryData(id) {
    form.portfoliocategory_id = id;
    form.get('/portfolio');
}

function getResults(page) {

    if (form.portfoliocategory_id > 0) {
        router.get("/portfolio?portfoliocategory_id=" + form.portfoliocategory_id + "&page=" + page)
    } else {
        router.get('/portfolio?page=' + page)

    }
}

function getImage(myportfolio) {

    let default_image_url = myportfolio.default_image_url;
    if (default_image_url == '') {
        return '/assets//nextebiz-logo.png';
    }

    return default_image_url;
}

onMounted(() => {
    initFlowbite();
})
</script>
<template>
    <AuthenticatedLayout>

        <Head title="Portfolio" />
        <div class="container m-auto px-4 md:px-5 dark:text-white">
            <div class="my-[50px]">
                <h1 class=" mb-5">Portfolio</h1>

                <div class="flex flex-wrap mb-3">
                    <Link href="/portfolio">
                    <div class="cursor-pointer">
                        <div class="transition-all rounded-lg px-4 py-1 m-2"
                            :class="form.portfoliocategory_id == null ? 'bg-orange-500 text-white hover:text-white hover:bg-orange-600' : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-900'">
                            Show All</div>
                    </div>
                    </Link>
                    <div v-for="category in portfoliocategories" :key="category" :class="category.portfolios_count > 0 ? '' : 'hidden'">

                        <div class="cursor-pointer" @click.prevent="getCategoryData(category.id)">
                            <div class="flex transition-all rounded-lg px-4 py-1 m-2"
                                :class="category.id == form.portfoliocategory_id ? 'bg-orange-500 text-white hover:text-white hover:bg-orange-600' : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-900'">

                                {{ category.title }}

                                <span class="flex items-center justify-center w-[25px] h-[25px] ms-3 bg-gray-300 dark:bg-gray-800 dark:text-white  text-center text-sm rounded-full"
                                :class="category.id == form.portfoliocategory_id ? 'bg-gray-700 text-white hover:text-white ' : ''"
                                >{{ category.portfolios_count }}</span>
                            </div>
                        </div>

                    </div>
                </div>

                <div v-if="props.portfolios?.data.length" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    <div v-for="portfolio in props.portfolios?.data" :key="portfolio.id"
                        class="border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-900 hover:bg-white dark:hover:bg-gray-950 hover:border-orange-500 dark:hover:border-orange-500 transition-all p-3 ">
                        <Link :href="`/portfolio/${portfolio.slug}`">
                        <div>
                            <div class="p-1 bg-gray-300 dark:bg-gray-800 mb-3">
                                <div class="bg-gray-200 dark:bg-gray-900  h-[300px] flex" style="background-position: center; background-size: cover;"
                                :style="`background-image:url(${getImage(portfolio)})`"></div>
                            </div>

                        </div>
                        <div>
                            <h4 class=" mb-1">{{ portfolio.title }}</h4>
                            <div class=" mb-3 text-xs">{{ portfolio.portfolio_category.title }}</div>
                            <div>{{ portfolio.small_description }}</div>
                        </div>
                        </Link>
                    </div>
                </div>
                <div v-else class="my-5 p-5 border border-orange-500 rounded-lg">
                    No portfolio found</div>
                <div class="my-5">
                    <TailwindPagination :data="props.portfolios" @pagination-change-page="getResults" />
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<style lang="scss" scoped></style>
