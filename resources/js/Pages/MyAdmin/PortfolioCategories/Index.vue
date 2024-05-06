<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import { Head, Link, useForm } from '@inertiajs/vue3';
import { onMounted } from 'vue';
import AdminMenu from '../AdminMenu.vue';
import MenuButton from '@/Components/MenuButton.vue';
import Nav from './Nav.vue';

const props = defineProps({
    portfoliocategories: Object
})

const form = useForm({
    portfolio_id: 0
})

function deletePortfolio(id) {
    if (confirm('Are you sure you want to delete this category?')) {
        form.portfolio_id = id;
        form.delete(route('myadmin.portfoliocategories.destroy', id));
    }
}

onMounted(() => {
    initFlowbite();
})
</script>

<template>

    <Head title="Portfolio Categories" />
    <AuthenticatedLayout>
        <MenuButton title="Portfolio Categories" />
        <div class="pb-10">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <Nav />

                <div class="">

                    <div class="relative overflow-x-auto">
                        <table v-if="portfoliocategories.length > 0" class=" min-w-[700px] sm:w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="text-center border border-gray-100 dark:border-gray-600 px-6 py-3 w-2">
                                        ID
                                    </th>
                                    <th scope="col" class="text-left border border-gray-100 dark:border-gray-600 px-6 py-3 ">
                                        Title
                                    </th>
                                    <th scope="col" class="text-center border border-gray-100 dark:border-gray-600 px-6 py-3 sm:w-[60px]">
                                        Enabled
                                    </th>
                                    <th scope="col" class="text-center border border-gray-100 dark:border-gray-600 px-6 py-3 sm:w-[60px] ">
                                        Edit
                                    </th>
                                    <th scope="col" class="text-center border border-gray-100 dark:border-gray-600 px-6 py-3 sm:w-[60px]">
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="portfolio in portfoliocategories" :key="portfolio.id" class="bg-white dark:bg-gray-800">
                                    <th scope="row" class="text-center border border-gray-100 dark:border-gray-600 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {{ portfolio.id }}
                                    </th>
                                    <td class="text-left border border-gray-100 dark:border-gray-600 px-6 py-4">
                                        {{ portfolio.title }}
                                    </td>

                                    <td class="text-center border border-gray-100 dark:border-gray-600 px-6 py-4">
                                        <div :class="portfolio.enabled == 1 ? 'text-green-500' : 'text-red-500'">
                                            {{ portfolio.enabled == 1 ? 'True' : 'False' }}
                                        </div>

                                    </td>
                                    <td class="text-center border border-gray-100 dark:border-gray-600 px-6 py-4">
                                        <Link :href="`/myadmin/portfoliocategories/${portfolio.id}/edit`" class="btn-edit">Edit</Link>
                                    </td>
                                    <td class="text-center border border-gray-100 dark:border-gray-600 px-6 py-4">
                                        <button @click="deletePortfolio(portfolio.id)" class="btn-delete">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div v-else>
                            <div class="p-6 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-500 rounded-lg">
                                No portfolio categories found
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <AdminMenu />
    </AuthenticatedLayout>
</template>
