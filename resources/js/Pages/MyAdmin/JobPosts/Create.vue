<script setup>
import AdminLayout from "../AdminLayout.vue";
import { Head, useForm } from '@inertiajs/vue3';
import { onMounted } from 'vue';
import MenuButton from '@/Components/MenuButton.vue';
import Nav from './Nav.vue';

import MyCKEditor from '@/Components/MyCKEditor.vue'

const props = defineProps({
    jobcategories: Array,
    errors: Object
})

const form = useForm({
    job_category_id: 0,
    title: '',
    slug: '',
    featured: false,
    description: '',
    cities: '',
    job_type: '',
    working_hours: '',
    candidates_required: 1
});

function submitCategory() {
    form.post(route('myadmin.jobposts.store'));
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

    <Head title="Create New Job Post" />
    <AdminLayout>
        <MenuButton title="Create New Job Post" />
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
                                    :class="props.errors?.title ? 'border-red-500' : ''" placeholder="Job Category Title" />
                                <div v-if="props.errors?.title" class="form_error">{{ props.errors?.title }}</div>
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 ">

                                <div class="mb-5">
                                    <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Category</label>
                                    <select id="category" v-model="form.job_category_id"
                                        class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        :class="props.errors?.job_category_id ? 'border-red-500' : ''">
                                        <option v-for="category in jobcategories" :key="category.id" :value="category.id">{{ category.title }}</option>
                                    </select>
                                    <div v-if="props.errors?.job_category_id" class="form_error">Job Category is required.</div>

                                </div>

                                <div class="mb-5">
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Featured Job</label>

                                    <div class="flex items-start py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3">

                                        <div class="flex items-center h-5">
                                            <input id="enabled" type="checkbox" v-model="form.featured"
                                                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                                        </div>
                                        <label for="enabled" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Featured Job (Display on home page)</label>
                                    </div>
                                </div>
                            </div>

                            <div class="mb-5">
                                <label for="cities" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Category Cities</label>
                                <input type="text" v-model="form.cities" id="cities"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    :class="props.errors?.cities ? 'border-red-500' : ''" placeholder="Job Category Cities" />
                                <div v-if="props.errors?.cities" class="form_error">{{ props.errors?.cities }}</div>

                            </div>


                            <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 ">

                                <div class="mb-5">
                                    <label for="job_type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Type</label>
                                    <select id="job_type" v-model="form.job_type"
                                        class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        :class="props.errors?.job_type ? 'border-red-500' : ''">
                                        <option value="fulltime">Full-Time</option>
                                        <option value="parttime">Part-Time</option>
                                        <option value="contract">Contract</option>
                                    </select>
                                    <div v-if="props.errors?.job_type" class="form_error">{{ props.errors?.job_type }}</div>

                                </div>


                                <div class="mb-5">
                                    <label for="working_hours" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Working Hours</label>
                                    <select id="working_hours" v-model="form.working_hours"
                                        class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        :class="props.errors?.working_hours ? 'border-red-500' : ''">
                                        <option value="9to5">9:00 a.m. 5:00 p.m.</option>
                                        <option value="2to10">2:00 p.m. 10:00 p.m.</option>
                                        <option value="6to3">6:00 a.m. 3:00 a.m.</option>
                                        <option value="flexible">Flexible hours</option>
                                    </select>
                                    <div v-if="props.errors?.working_hours" class="form_error">{{ props.errors?.working_hours }}</div>

                                </div>
                                <div class="mb-5">
                                    <label for="candidates_required" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Candidates Required</label>
                                    <select id="candidates_required" v-model="form.candidates_required"
                                        class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        :class="props.errors?.candidates_required ? 'border-red-500' : ''">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                    <div v-if="props.errors?.candidates_required" class="form_error">{{ props.errors?.candidates_required }}</div>

                                </div>

                            </div>



                            <div class="mb-5">
                                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Description</label>
                                <!-- <textarea id="description" v-model="form.description"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea> -->

                                <MyCKEditor :content="form.description" @updateContent="updateDescription" class="myck" :class="props.errors?.description ? 'border-red-500 p-[1px] bg-red-500' : ''">
                                </MyCKEditor>
                                <div v-if="props.errors?.description" class="form_error">{{ props.errors?.description }}</div>

                            </div>
                            <button type="submit"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Create Job Post
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
    </AdminLayout>
</template>
