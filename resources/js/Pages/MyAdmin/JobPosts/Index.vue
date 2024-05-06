<script setup>
import AdminLayout from "../AdminLayout.vue";

import { Head, Link, router, useForm } from '@inertiajs/vue3';
import { onMounted } from 'vue';
import MenuButton from '@/Components/MenuButton.vue';
import Nav from './Nav.vue';
import { TailwindPagination } from 'laravel-vue-pagination';


const props = defineProps({
    jobposts: Object
})

const form = useForm({
    job_post_id: 0
})

function deleteJobPost(id) {
    if (confirm('Are you sure you want to delete this category?')) {
        form.job_post_id = id;
        form.delete(route('myadmin.jobposts.destroy', id));
    }
}

function getResults(page) {
    router.get('/myadmin/jobposts?page=' + page)
}

onMounted(() => {
    initFlowbite();
})
</script>

<template>

    <Head title="Job Posts" />
    <AdminLayout>
        <MenuButton title="Job Posts" />

        <div class="pb-10">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <Nav />

                <div class="relative overflow-x-auto">
                    <div v-if="jobposts.data.length > 0">
                        <table class=" min-w-[700px] sm:w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="text-center border border-gray-100 dark:border-gray-600 px-6 py-3 w-2">
                                        ID
                                    </th>
                                    <th scope="col" class="text-left border border-gray-100 dark:border-gray-600 px-6 py-3 ">
                                        Title
                                    </th>
                                    <th scope="col" class="text-left border border-gray-100 dark:border-gray-600 px-6 py-3 ">
                                        job category
                                    </th>
                                    <th scope="col" class="text-left border border-gray-100 dark:border-gray-600 px-6 py-3 ">
                                        Applicants
                                    </th>
                                    <th scope="col" class="text-left border border-gray-100 dark:border-gray-600 px-6 py-3 ">
                                        Preview
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
                                <tr v-for="job in jobposts.data" :key="job.id" class="bg-white dark:bg-gray-800">
                                    <th scope="row" class="text-center border border-gray-100 dark:border-gray-600 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {{ job.id }}
                                    </th>
                                    <td class="text-left border border-gray-100 dark:border-gray-600 px-6 py-4">
                                        <div>
                                            {{ job.title }}
                                        </div>
                                        <div :class="job.featured == 1 ? 'text-green-500 block text-xs' : 'hidden'">
                                            {{ job.featured == 1 ? 'Featured on Home Page' : '' }}
                                        </div>
                                    </td>

                                    <td class=" border border-gray-100 dark:border-gray-600 px-6 py-4">
                                        <div>
                                            {{ job.job_category.title }}
                                        </div>

                                    </td>


                                    <td class=" border border-gray-100 dark:border-gray-600 px-6 py-4">
                                        <div>
                                            <Link :href="`/myadmin/${job.slug}/applicants`" class="text-orange-500">
                                                {{ job.users_count }}
                                            </Link>
                                        </div>

                                    </td>
                                    <td class=" border border-gray-100 dark:border-gray-600 px-6 py-4">
                                        <div>
                                            <a target='_blank' :href="`/jobs/${job.slug}`" class="text-orange-500">Preview</a>
                                        </div>

                                    </td>
                                    <td class="text-center border border-gray-100 dark:border-gray-600 px-6 py-4">
                                        <Link :href="`/myadmin/jobposts/${job.slug}/edit`" class="btn-edit">Edit</Link>
                                    </td>
                                    <td class="text-center border border-gray-100 dark:border-gray-600 px-6 py-4">
                                        <button @click="deleteJobPost(job.slug)" class="btn-delete">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="my-3">
                            <TailwindPagination :data="jobposts" @pagination-change-page="getResults" />
                        </div>
                    </div>



                    <div v-else>
                        <div class="p-6 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg">
                            No job categories found
                        </div>
                    </div>
                </div>

            </div>


        </div>
    </AdminLayout>
</template>
