<script setup>
import AdminLayout from "../AdminLayout.vue";
import { Head, useForm } from '@inertiajs/vue3';
import { onMounted } from 'vue';
import MenuButton from '@/Components/MenuButton.vue';
import Nav from './Nav.vue';

import MyCKEditor from '@/Components/MyCKEditor.vue'

const props = defineProps({
    portfoliocategories: Array,
    errors: Object
})

const form = useForm({
    title: '',
    portfolio_category_id: 0,
    slug: '',
    pictures: null,
    default_media_id: null,
    small_description: '',
    description: '',
    enabled: true
});

function submitCategory() {
    form.post(route('myadmin.portfolio.store'));
}
function updateDescription(description) {
    // console.log('i am parent', description)
    form.description = description;
}
onMounted(() => {
    initFlowbite();
})
</script>



<template>

    <Head title="Create New Portfolio" />
    <AdminLayout>
        <MenuButton title="Create New Portfolio" />
        <div class="pb-10">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <Nav />

                <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 sm:rounded-lg">
                    <div class="p-6 text-gray-900 dark:text-white">
                        <form @submit.prevent="submitCategory">
                            <div class="mb-5">
                                <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Portfolio Category Title</label>
                                <input type="text" v-model="form.title" id="title"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    :class="props.errors?.title ? 'border-red-500' : ''" placeholder="Portfolio Category Title" />
                                <div v-if="props.errors?.title" class="form_error">{{ props.errors?.title }}</div>
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 ">
                                <div class="mb-5">
                                    <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Portfolio Category</label>
                                    <select id="category" v-model="form.portfolio_category_id"
                                        class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        :class="props.errors?.portfolio_category_id ? 'border-red-500' : ''">
                                        <option v-for="category in props.portfoliocategories" :key="category.id" :value="category.id">{{ category.title }}</option>
                                    </select>
                                    <div v-if="props.errors?.portfolio_category_id" class="form_error">Portfolio Category is required.</div>
                                </div>

                                <div class="mb-5">
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enabled</label>

                                    <div class="flex items-start py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3">

                                        <div class="flex items-center h-5">
                                            <input id="enabled" type="checkbox" v-model="form.enabled"
                                                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                                        </div>
                                        <label for="enabled" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Enable Portfolio </label>
                                    </div>
                                </div>
                            </div>

                            <div class="mb-5">
                                <div class="flex items-center mb-2 ">
                                    <label for="pictures" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pictures</label>
                                    <span class="text-sm">(Only *.jpg image formats are supported)</span>
                                </div>
                                <input type="file" id="pictures" multiple accept="image/jpeg" class="mt-1 block w-full" @input="form.pictures = $event.target.files" />
                                <div v-if="props.errors?.pictures" class="form_error">{{ props.errors?.pictures }}</div>
                            </div>

                            <div class="mb-5 hidden">
                                <label for="small_description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Small Description</label>

                                <textarea id="small_description" v-model="form.small_description"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>

                                <div v-if="props.errors?.small_description" class="form_error">{{ props.errors?.small_description }}</div>

                            </div>

                            <div class="mb-5 hidden">
                                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Portfolio Description</label>
                                <!-- <textarea id="description" v-model="form.description"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea> -->

                                <MyCKEditor :content="form.description" @updateContent="updateDescription" class="myck" :class="props.errors?.description ? 'border-red-500 p-[1px] bg-red-500' : ''">
                                </MyCKEditor>
                                <div v-if="props.errors?.description" class="form_error">{{ props.errors?.description }}</div>

                            </div>
                            <button type="submit"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Create Portfolio
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>
