<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import { Head, useForm } from '@inertiajs/vue3';
import { onMounted } from 'vue';
import AdminMenu from '../AdminMenu.vue';
import MenuButton from '@/Components/MenuButton.vue';
import Nav from './Nav.vue';

import MyCKEditor from '@/Components/MyCKEditor.vue'

const props = defineProps({
    jobcategory: Object,
    media: String,
    errors: Object,

})

const form = useForm({
    id: props.jobcategory.id,
    title: props.jobcategory.title,
    slug: props.jobcategory.slug,
    min: props.jobcategory.min,
    max: props.jobcategory.max,
    monthly: props.jobcategory.monthly,
    quarterly: props.jobcategory.quarterly,
    picture: props.jobcategory.picture,
    small_description: props.jobcategory.small_description,
    description: props.jobcategory.description,
    enabled: props.jobcategory.enabled == 1 ? true : false,
    csrf: document.head.querySelector('meta[name="csrf-token"]').content
});

function submitCategory() {
    const post_url = `/myadmin/jobcategories/${props.jobcategory.slug}`;
    form.post(post_url);
    // form.post(post_url, form.id);
}
function updateDescription(description) {
    form.description = description;
}
onMounted(() => {
    initFlowbite();
})
</script>

<template>

    <Head title="Edit New Job Category" />

    <AuthenticatedLayout>
        <MenuButton title="Edit Job Category" />
        {{ form }}
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
                                <div v-if="props.errors?.title" class="form_error">{{ props.errors?.title }}</div>

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
                                <div class="mb-5">
                                    <label for="monthly" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Monthly Rate ($)</label>
                                    <input type="number" v-model="form.monthly" id="monthly"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Monthly Rate" required />
                                </div>
                                <div class="mb-5">
                                    <label for="quarterly" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quarterly Rate ($)</label>
                                    <input type="number" v-model="form.quarterly" id="quarterly"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Quarterly Rate" required />
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

                            <div class="mb-5">
                                <label for="picture" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Picture</label>
                                <div class=" flex justify-start">
                                    <a target="_blank" v-if="props.media != ''" :href="props.media"><img :src="props.media" style="height: 200px;" /></a>
                                </div>
                                <div>
                                    <input type="file" id="picture" accept="image/x-png,image/gif,image/jpeg" class="mt-1 block w-full" @input="form.picture = $event.target.files[0]" />
                                    <div v-if="props.errors?.picture" class="form_error">{{ props.errors?.picture }}</div>
                                </div>

                            </div>
                            <div class="mb-5">
                                <label for="small_description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Small Description</label>

                                <textarea id="small_description" v-model="form.small_description"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>

                                <div v-if="props.errors?.small_description" class="form_error">{{ props.errors?.small_description }}</div>

                            </div>
                            <div class="mb-5">
                                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Description</label>

                                <textarea v-model="form.description" class="w-full" />

                                <MyCKEditor :content="form.description" @updateContent="updateDescription" class="myck" :class="props.errors?.description ? 'border-red-500 p-[1px] bg-red-500' : ''">
                                </MyCKEditor>
                                <div v-if="props.errors?.description" class="form_error">{{ props.errors?.description }}</div>

                            </div>
                            <div class="flex items-center">
                                <button type="submit"
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Update Job Category
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>

        <AdminMenu />
    </AuthenticatedLayout>
</template>
