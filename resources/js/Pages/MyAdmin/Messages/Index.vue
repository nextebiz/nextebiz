<script setup>
import AdminLayout from "../AdminLayout.vue";

import { Head, Link, router, useForm } from '@inertiajs/vue3';
import { onMounted } from 'vue';
import MenuButton from '@/Components/MenuButton.vue';
import { TailwindPagination } from 'laravel-vue-pagination';


const props = defineProps({
    messages: Object
})

const form = useForm({
    message_id: 0
})

function deleteMessage(id) {
    if (confirm('Are you sure you want to delete this message?')) {
        form.message_id = id;
        form.delete(route('myadmin.messages.destroy', id));
    }
}

function getResults(page) {
    router.get('/myadmin/messages?page=' + page)
}

onMounted(() => {
    initFlowbite();
})
</script>

<template>

    <Head title="Messages" />
    <AdminLayout>

        <MenuButton title="Messages" />
        <div class="py-10">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="relative overflow-x-auto">
                    <div v-if="props.messages?.data.length > 0">
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
                                <tr v-for="message in props.messages.data" :key="message.id">
                                    <td scope="col" class="text-center border border-gray-100 dark:border-gray-600 px-6 py-3 w-2">
                                        {{ message.id }}
                                    </td>
                                    <td scope="col" class="text-left border border-gray-100 dark:border-gray-600 px-6 py-3 ">
                                        <div>
                                            <strong>Message type</strong>
                                            {{ message.message_type }}
                                        </div>
                                        <div>
                                            <strong>Name: </strong>
                                            {{ message.name }}
                                        </div>
                                        <div>
                                            <strong>Email: </strong>
                                            {{ message.email }}

                                        </div>
                                        <div>
                                            <strong>Phone: </strong>
                                            {{ message.phone }}

                                        </div>
                                        <div>
                                            <strong>Message: </strong>
                                            {{ message.message }}

                                        </div>
                                        <div>
                                            <strong>Category: </strong>
                                            {{ message.category_name }}

                                        </div>

                                        <div>
                                            <strong>URL: </strong>
                                            {{ message.url }}
                                        </div>
                                        <div>
                                            <strong>user_agent: </strong>
                                            {{ message.user_agent }}
                                        </div>
                                        <div>
                                            <strong>IP: </strong>
                                            {{ message.ip }}
                                        </div>
                                        <div>
                                            <strong>Created at: </strong>
                                            {{ message.created_at }}
                                        </div>

                                    </td>


                                    <td scope="col" class="text-center border border-gray-100 dark:border-gray-600 px-6 py-3 sm:w-[60px]">
                                        <button @click.prevent="deleteMessage(message.id)" class="btn-orange font-bold">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="my-3">
                            <TailwindPagination :data="messages" @pagination-change-page="getResults" />
                        </div>
                    </div>



                    <div v-else>
                        <div class="p-6 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg">
                            No Messages found
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </AdminLayout>
</template>
