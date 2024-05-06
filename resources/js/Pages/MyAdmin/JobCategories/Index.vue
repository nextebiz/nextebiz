<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import { Head, Link, useForm } from '@inertiajs/vue3';
import { onMounted } from 'vue';
import AdminMenu from '../AdminMenu.vue';
import MenuButton from '@/Components/MenuButton.vue';
import Nav from './Nav.vue';

const props = defineProps({
    jobcategories: Array
})

const form = useForm({
    job_category_id: 0
})

function deleteJobCategory(id) {
    if (confirm('Are you sure you want to delete this category?')) {
        form.job_category_id = id;
        form.delete(route('myadmin.jobcategories.destroy', id));
    }
}

onMounted(() => {
    initFlowbite();
})
</script>

<template>

    <Head title="Job Categories" />
    <AuthenticatedLayout>
        <MenuButton title="Job Categories" />
        <div class="pb-10">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <Nav />

                <div class="">

                    <div class="relative overflow-x-auto">
                        <table v-if="jobcategories.length > 0" class=" min-w-[700px] sm:w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="text-center border border-gray-100 dark:border-gray-600 px-6 py-3 w-2">
                                        ID
                                    </th>
                                    <th scope="col" class="text-left border border-gray-100 dark:border-gray-600 px-6 py-3 ">
                                        Title
                                    </th>
                                    <th scope="col" class="text-center border border-gray-100 dark:border-gray-600 px-6 py-3 sm:w-[60px]">
                                        Min
                                    </th>
                                    <th scope="col" class="text-center border border-gray-100 dark:border-gray-600 px-6 py-3 sm:w-[60px]">
                                        Max
                                    </th>
                                    <th scope="col" class="text-center border border-gray-100 dark:border-gray-600 px-6 py-3 sm:w-[60px]">
                                        Monthly
                                    </th>
                                    <th scope="col" class="text-center border border-gray-100 dark:border-gray-600 px-6 py-3 sm:w-[60px]">
                                        Quarterly
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
                                <tr v-for="category in jobcategories" :key="category.id" class="bg-white dark:bg-gray-800">
                                    <th scope="row" class="text-center border border-gray-100 dark:border-gray-600 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {{ category.id }}
                                    </th>
                                    <td class="text-left border border-gray-100 dark:border-gray-600 px-6 py-4">
                                        {{ category.title }}
                                    </td>
                                    <td class="text-center border border-gray-100 dark:border-gray-600 px-6 py-4">
                                        {{ category.min }}

                                    </td>
                                    <td class="text-center border border-gray-100 dark:border-gray-600 px-6 py-4">
                                        {{ category.max }}
                                    </td>

                                    <td class="text-center border border-gray-100 dark:border-gray-600 px-6 py-4">
                                        {{ category.monthly }}
                                    </td>
                                    <td class="text-center border border-gray-100 dark:border-gray-600 px-6 py-4">
                                        {{ category.quarterly }}
                                    </td>

                                    <td class="text-center border border-gray-100 dark:border-gray-600 px-6 py-4">
                                        <div :class="category.enabled == 1 ? 'text-green-500' : 'text-red-500'">
                                            {{ category.enabled == 1 ? 'True' : 'False' }}

                                        </div>

                                    </td>
                                    <td class="text-center border border-gray-100 dark:border-gray-600 px-6 py-4">
                                        <Link :href="`/myadmin/jobcategories/${category.slug}/edit`" class="btn-edit">Edit</Link>
                                    </td>
                                    <td class="text-center border border-gray-100 dark:border-gray-600 px-6 py-4">
                                        <button @click="deleteJobCategory(category.id)" class="btn-delete">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div v-else>
                            <div class="p-6 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg">
                                No job categories found
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <AdminMenu />
    </AuthenticatedLayout>
</template>
