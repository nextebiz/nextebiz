<script setup>
import AdminLayout from "../AdminLayout.vue";

import { Head, Link, router, useForm } from '@inertiajs/vue3';
import { onMounted } from 'vue';
import MenuButton from '@/Components/MenuButton.vue';
import { TailwindPagination } from 'laravel-vue-pagination';

import { SettingsStore } from "@/store/SettingsStore";

const settingsStore = SettingsStore();

const props = defineProps({
    users: Object,
    total_users: Number
})

const form = useForm({
    user_id: 0
})

function deleteUser(id) {
    if (confirm('Are you sure you want to delete this user?')) {
        form.user_id = id;
        form.delete(route('myadmin.users.destroy', id));
    }
}

function getResults(page) {
    router.get('/myadmin/users?page=' + page)
}

onMounted(() => {
    settingsStore.setTotalUsers(props.total_users);
    initFlowbite();
})
</script>

<template>

    <Head title="Users" />
    <AdminLayout>

        <MenuButton :title="`Users - ${settingsStore.getTotalUsers}`" />
        <div class="py-10">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="relative overflow-x-auto">
                    <div v-if="props.users?.data.length > 0">
                        <table class=" min-w-[700px] sm:w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="text-center border border-gray-100 dark:border-gray-600 px-6 py-3 w-2">
                                        ID
                                    </th>
                                    <th scope="col" class="text-left border border-gray-100 dark:border-gray-600 px-6 py-3 ">
                                        Details
                                    </th>
                                    <th scope="col" class="text-center border border-gray-100 dark:border-gray-600 px-6 py-3 sm:w-[60px]">
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="user in props.users.data" :key="user.id">
                                    <td scope="col" class="text-center border border-gray-100 dark:border-gray-600 px-6 py-3 w-2">
                                        {{ user.id }}
                                    </td>
                                    <td scope="col" class="text-left border border-gray-100 dark:border-gray-600 px-6 py-3 ">
                                        <div>
                                            <strong class="text-orange-500">User Role: </strong>
                                            {{ user.roles[0]?.name }}
                                        </div>
                                        <div>
                                            <strong class="text-orange-500">Resume File: </strong>
                                            <a v-if="user.media[0]?.file_name" target="_blank" class="text-blue-500 font-bold" :href="user.media[0]?.original_url">{{ user.media[0]?.file_name }}</a>
                                            <span v-else>no file</span>
                                        </div>
                                        <div>
                                            <strong class="text-orange-500">Name: </strong>
                                            {{ user.name }}
                                        </div>
                                        <div>
                                            <strong class="text-orange-500">Email: </strong>
                                            {{ user.email }}

                                        </div>
                                        <div>
                                            <strong class="text-orange-500">Phone: </strong>
                                            {{ user.phone }}
                                        </div>
                                        <div>
                                            <strong class="text-orange-500">Ccountry: </strong>
                                            {{ user.country }}
                                        </div>
                                        <div>
                                            <strong class="text-orange-500">Created at: </strong>
                                            {{ user.created_at }}
                                        </div>

                                    </td>

                                    <td scope="col" class="text-center border border-gray-100 dark:border-gray-600 px-6 py-3 sm:w-[60px]">
                                        <button @click.prevent="deleteUser(user.id)" class="btn-orange font-bold">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="my-3">
                            <TailwindPagination :data="users" @pagination-change-page="getResults" />
                        </div>
                    </div>



                    <div v-else>
                        <div class="p-6 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg">
                            No Users found
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </AdminLayout>
</template>
