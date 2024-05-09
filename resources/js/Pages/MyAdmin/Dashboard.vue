<script setup>
import { Head, Link } from '@inertiajs/vue3';
import { onMounted } from 'vue';
import MenuButton from '@/Components/MenuButton.vue';
import AdminLayout from "./AdminLayout.vue";


onMounted(() => {
    initFlowbite();
    // document.getElementById('drawerbtn').click();
})
</script>

<template>

    <Head title="Candidate Dashboard" />
    <AdminLayout>
        <MenuButton title="Admin Dashboard" />
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">

                <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 sm:rounded-lg">

                    <div class="grid grid-cols-3 gap-4 p-4">
                        <div class=" text-gray-900 dark:text-white ">
                            <div class=" bg-gray-200 dark:bg-gray-800 p-6 rounded-lg">
                                <h4 class="mb-3">Job Posts</h4>
                                <Link class="btn-dark" :href="route('myadmin.jobposts.index')">Go to Job Posts</Link>
                            </div>
                        </div>
                        <div class=" text-gray-900 dark:text-white ">
                            <div class=" bg-gray-200 dark:bg-gray-800 p-6 rounded-lg ">
                                <h4 class="mb-3">Job Categories</h4>
                                <Link class="btn-dark" :href="route('myadmin.jobcategories.index')">See Job Categories</Link>
                            </div>
                        </div>
                        <div class=" text-gray-900 dark:text-white ">
                            <div class=" bg-gray-200 dark:bg-gray-800 p-6 rounded-lg ">
                                <h4 class="mb-3">Portfolio</h4>
                                <Link class="btn-dark" :href="route('myadmin.portfolio.index')">Go To Portfolio</Link>
                            </div>
                        </div>
                        <div class=" text-gray-900 dark:text-white ">
                            <div class=" bg-gray-200 dark:bg-gray-800 p-6 rounded-lg ">
                                <h4 class="mb-3">Portfolio Categories</h4>
                                <Link class="btn-dark" :href="route('myadmin.portfoliocategories.index')">See Portfolio Categories</Link>
                            </div>
                        </div>
                        <div class=" text-gray-900 dark:text-white ">
                            <div class=" bg-gray-200 dark:bg-gray-800 p-6 rounded-lg ">
                                <h4 class="mb-3">Client Messages</h4>
                                <Link class="btn-dark" :href="route('myadmin.messages.index')">Client Messages</Link>
                            </div>
                        </div>

                        <div class=" text-gray-900 dark:text-white ">
                            <div class=" bg-gray-200 dark:bg-gray-800 p-6 rounded-lg ">
                                <h4 class="mb-3">Users</h4>
                                <Link class="btn-dark" :href="route('myadmin.users.index')">Users</Link>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </AdminLayout>
</template>
