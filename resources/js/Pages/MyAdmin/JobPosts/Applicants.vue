<script setup>
import AdminLayout from "../AdminLayout.vue";

import { Head, Link, router, useForm } from '@inertiajs/vue3';
import { onMounted } from 'vue';
import MenuButton from '@/Components/MenuButton.vue';
import Nav from './Nav.vue';
import { TailwindPagination } from 'laravel-vue-pagination';
import moment from 'moment';


const props = defineProps({
    jobpost: Object,
    jobpostusers: Object
})

const form = useForm({
    job_post_id: 0
})


// function getResults(page) {
//     router.get('/myadmin/jobposts?page=' + page)
// }

onMounted(() => {
    initFlowbite();
})
</script>

<template>

    <Head title="Job Applicants" />
    <AdminLayout>
        <MenuButton title="Job Applicants" />


        <div class="pb-10">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 dark:text-white">

                <div class="flex items-center">
                    <Link href="/myadmin/jobposts" class="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-[30px] mr-3 fill-orange-500">
                        <path
                            d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z" />
                    </svg>
                    </Link>
                    <h2 class="my-5">{{ jobpost.title }}</h2>
                </div>

                <div class="relative overflow-x-auto">
                    <div v-if="jobpostusers.data.length > 0">
                        <table class=" min-w-[700px] sm:w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="text-center border border-gray-100 dark:border-gray-600 px-6 py-3 w-2">
                                        ID
                                    </th>
                                    <th scope="col" class="text-left border border-gray-100 dark:border-gray-600 px-6 py-3 ">
                                        Applicant Name
                                    </th>
                                    <th scope="col" class="text-left border border-gray-100 dark:border-gray-600 px-6 py-3 ">
                                        Date Applied
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="jobpostuser in jobpostusers.data" :key="jobpostuser" class="bg-white dark:bg-gray-800">
                                    <th scope="row" class="text-center border border-gray-100 dark:border-gray-600 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {{ jobpostuser.user.id }} </th>
                                    <td class="text-left border border-gray-100 dark:border-gray-600 px-6 py-4">
                                        <div>
                                            <div>{{ jobpostuser.user.name }}</div>
                                            <div>{{ jobpostuser.user.email }}</div>
                                            <div>Phone: {{ jobpostuser.user.phone }}</div>
                                        </div>
                                    </td>
                                    <td class="text-left border border-gray-100 dark:border-gray-600 px-6 py-4">
                                        <div>

                                            {{ moment(jobpostuser.user.created_at).format('DD/MMM/YYYY') }}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="my-3">
                            <TailwindPagination :data="jobpostusers" @pagination-change-page="getResults" />
                        </div>
                    </div>



                    <div v-else>
                        <div class="p-6 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg">
                            No applicants found
                        </div>
                    </div>
                </div>

            </div>


        </div>
    </AdminLayout>
</template>
