<script setup>
import AdminLayout from "../AdminLayout.vue";

import { Head, Link, router, useForm } from '@inertiajs/vue3';
import { onMounted } from 'vue';
import MenuButton from '@/Components/MenuButton.vue';
import { TailwindPagination } from 'laravel-vue-pagination';


const props = defineProps({
    messages: Object,
    mark_as_read: Number
})

const form = useForm({
    message_id: 0,
    mark_as_read: props.mark_as_read
})

function filter(e) {
    form.mark_as_read = e.target.value;
    form.get('/myadmin/messages?mark_as_read=' + form.mark_as_read)

}
function getResults(page) {
    router.get('/myadmin/messages?mark_as_read=' + form.mark_as_read + '&page=' + page)
}

function markAsRead(id) {
    form.message_id = id;
    form.patch(route('myadmin.messages.update', id), { preserveScroll: true });
}
function deleteMessage(id) {
    if (confirm('Are you sure you want to delete this message?')) {
        form.message_id = id;
        form.delete(route('myadmin.messages.destroy', id));
    }
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

                    <div class="w-[300px] mb-3">
                        <form>
                            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Filter Search</label>
                            <select @change="filter" id="countries"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="-1" :selected="form.mark_as_read == 2">Show All</option>
                                <option value="0" :selected="form.mark_as_read == 0">Show Mark As Unread</option>
                                <option value="1" :selected="form.mark_as_read == 1">Show Mark As Read</option>
                            </select>
                        </form>
                    </div>
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
                                        Mark As Read
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

                                        <button v-if="message.mark_as_read == 1" @click.prevent="markAsRead(message.id)" class="btn-dark font-bold whitespace-nowrap">Mark As Unread</button>

                                        <button v-else @click.prevent="markAsRead(message.id)" class="btn-green font-bold whitespace-nowrap">Mark As Read</button>
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
