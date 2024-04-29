<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import { Head, useForm } from '@inertiajs/vue3';
import { onMounted } from 'vue';
import AdminMenu from '../AdminMenu.vue';
import MenuButton from '@/Components/MenuButton.vue';
import Nav from './Nav.vue';
const props = defineProps({
    // role: String
})

const form = useForm({
    title: '',
    min: 0,
    max: 0,
    enabled: true,
});

function submitCategory() {
    form.post(route('myadmin.jobcategories.store'));
}

onMounted(() => {
    initFlowbite();
})
</script>

<template>

    <Head title="Create New Job Category" />
    <AuthenticatedLayout>
        <MenuButton title="Create New Job Category" />

        <div class="pb-10">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <Nav />

                <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 sm:rounded-lg">
                    <div class="p-6 text-gray-900 dark:text-white">
                        <form @submit.prevent="submitCategory">
                            <div class="mb-5">
                                <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Category Title</label>
                                <input type="text" v-model="form.title" id="title"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Job Category Title" required />
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div class="mb-5">
                                    <label for="min" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Minimum Per Hour Rate ($)</label>
                                    <input type="number" v-model="form.min" id="min"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Minimum Per Hour Rate" required />
                                </div>
                                <div class="mb-5">
                                    <label for="max" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Maximum Per Hour Rate ($)</label>
                                    <input type="number" v-model="form.max" id="max"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Maximum Per Hour Rate" required />
                                </div>
                            </div>

                            <div class="flex items-start mb-5">
                                <div class="flex items-center h-5">
                                    <input id="enabled" type="checkbox" v-model="form.enabled"
                                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                        checked />
                                </div>
                                <label for="enabled" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Enabled Job Category</label>
                            </div>
                            <button type="submit"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Create Job Category
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="text-white p-4">
            {{ form }}
        </div>
        <AdminMenu />
    </AuthenticatedLayout>
</template>
