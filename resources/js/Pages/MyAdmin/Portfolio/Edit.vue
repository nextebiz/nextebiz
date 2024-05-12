<script setup>
import AdminLayout from "../AdminLayout.vue";
import { Head, Link, useForm } from '@inertiajs/vue3';
import { onMounted } from 'vue';
import MenuButton from '@/Components/MenuButton.vue';
import Nav from './Nav.vue';


import MyCKEditor from '@/Components/MyCKEditor.vue'

const props = defineProps({
    portfolio: Object,
    portfoliocategories: Array,
    errors: Object
})

const form = useForm({
    title: props.portfolio.title,
    portfolio_category_id: props.portfolio.portfolio_category_id,
    small_description: props.portfolio.small_description,
    pictures: null,
    default_media_id: props.portfolio.default_media_id,
    description: props.portfolio.description,
    enabled: props.portfolio.enabled == 1 ? true : false,
});

const form_delete = useForm({
    media_id: 0
})

function setDefaultImage(media_id) {
    form.default_media_id = media_id;
}

function updateCategory() {
    form.post(route('myadmin.portfolio.update', props.portfolio));
}
function updateDescription(description) {
    // console.log('i am parent', description)
    form.description = description;
}
function deleteImage(id) {
    if (confirm('Are you sure you want to delete this picture?')) {
        form_delete.media_id = id;
        form_delete.post(`/portfolio/${props.portfolio.slug}/media/delete`);
    }
}
onMounted(() => {
    initFlowbite();
})
</script>



<template>

    <Head title="Edit Portfolio" />
    <AdminLayout>
        <MenuButton title="Edit Portfolio" />
        <div class="pb-10">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <Nav />

                <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 sm:rounded-lg">
                    <div class="p-6 text-gray-900 dark:text-white">
                        <form @submit.prevent="updateCategory">
                            <div class="mb-5">
                                <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Category Title</label>
                                <input type="text" v-model="form.title" id="title"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    :class="props.errors?.title ? 'border-red-500' : ''" placeholder="Job Category Title" />
                                <div v-if="props.errors?.title" class="form_error">{{ props.errors?.title }}</div>
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 ">
                                <div class="mb-5">
                                    <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Portfolio Category</label>
                                    <select id="category" v-model="form.portfolio_category_id"
                                        class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        :class="props.errors?.portfolio_category_id ? 'border-red-500' : ''">
                                        <option v-for="category in props.portfoliocategories" :key="category.id" :value="category.id">
                                            {{ category.title }}
                                        </option>
                                    </select>
                                    <div v-if="props.errors?.portfolio_category_id" class="form_error">Job Category is required.</div>

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

                            <!-- {{ portfolio }} -->

                            <div class="mb-5">
                                <div class="flex items-center mb-2 ">
                                    <label for="pictures" class="block mr-3 text-sm font-medium text-gray-900 dark:text-white">Pictures</label>
                                    <span class="text-sm">(Only *.jpg image formats are supported)</span>
                                </div>
                                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1 items-center mb-5">
                                    <div v-for="media in portfolio.media" :key="media.id" class="mr-3 bg-gray-200 dark:bg-gray-800 p-2 relative"
                                        :class="form.default_media_id == media.id ? 'bg-green-300 dark:bg-green-300' : ''">
                                        <div @click.prevent="deleteImage(media.id)" class="cursor-pointer absolute right-[8px] bg-white w-[26px] h-[26px] flex items-center justify-center rounded-full fill-black">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path
                                                    d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
                                            </svg>
                                        </div>
                                        <img :src="media.original_url" class="w-[100%] h-[200px] m-auto object-contain" />
                                        <div class="w-full text-center my-2" v-if="form.default_media_id != media.id">
                                            <button type="button" @click.prevent="setDefaultImage(media.id)" class="btn-dark px-4 py-1">Set Default</button>
                                        </div>
                                        <div v-else class="text-center py-3">
                                            <div class="text-xs text-black">Selected as default image</div>
                                        </div>
                                    </div>
                                </div>

                                <input type="file" id="pictures" multiple accept="image/jpeg" class="mt-1 block w-full" @input="form.pictures = $event.target.files" />
                                <div v-if="props.errors?.pictures" class="form_error">{{ props.errors?.pictures }}</div>
                            </div>


                            <div class="mb-5">
                                <label for="small_description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Small Description</label>

                                <textarea id="small_description" v-model="form.small_description"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>

                                <div v-if="props.errors?.small_description" class="form_error">{{ props.errors?.small_description }}</div>

                            </div>

                            <div class="mb-5">
                                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Description</label>
                                <!-- <textarea id="description" v-model="form.description"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea> -->

                                <textarea v-model="form.description" class="w-full" />

                                <MyCKEditor :content="form.description" @updateContent="updateDescription" class="myck" :class="props.errors?.description ? 'border-red-500 p-[1px] bg-red-500' : ''">
                                </MyCKEditor>
                                <div v-if="props.errors?.description" class="form_error">{{ props.errors?.description }}</div>

                            </div>
                            <button type="submit"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Update Portfolio
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>

    </AdminLayout>
</template>
