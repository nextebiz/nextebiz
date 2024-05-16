<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import { Head, useForm, usePage } from '@inertiajs/vue3';
import { onMounted, onUpdated, ref, watch } from 'vue';
import AdminMenu from '../AdminMenu.vue';
import MenuButton from '@/Components/MenuButton.vue';
import Nav from './Nav.vue';

import MyCKEditor from '@/Components/MyCKEditor.vue'

let alertmessage;
const showhtml = ref(false);

const props = defineProps({
    jobcategory: Object,
    errors: Object,
    csrf_token: String,
    message: String

});

const form_delete_media = useForm({
    media_id: 0
})

const form = useForm({
    id: props.jobcategory.id,
    title: props.jobcategory.title,
    slug: props.jobcategory.slug,
    min: props.jobcategory.min,
    max: props.jobcategory.max,
    monthly: props.jobcategory.monthly,
    quarterly: props.jobcategory.quarterly,
    pictures: null,
    small_description: props.jobcategory.small_description,
    description: props.jobcategory.description,
    enabled: props.jobcategory.enabled == 1 ? true : false,
    _token: props.csrf_token,
    default_image_url: props.jobcategory.default_image_url,
    gallerystyle: props.jobcategory.gallerystyle,
    galleryimages: props.jobcategory.galleryimages == "null" || props.jobcategory.galleryimages == null ? [] : JSON.parse(props.jobcategory.galleryimages),

});


function setDefaultImageUrl(imageurl) {

    if (form.default_image_url !== imageurl) {
        form.default_image_url = imageurl;
    } else {

        if (form.default_image_url == '') {
            form.default_image_url = imageurl;
        } else {
            form.default_image_url = ''
        }
    }
}
function addToGallery(imageurl) {

    form.galleryimages.push(imageurl)
}

function removeImagefromGallery(imageurl) {

    form.galleryimages = form.galleryimages.filter(img => img != imageurl)
}

function deleteImage(media) {
    if (confirm('Are you sure you want to delete this image')) {
        removeImagefromGallery(media.original_url);
        form_delete_media.media_id = media.id;
        let post_url = `/myadmin/jobcategory/${props.jobcategory?.slug}/media/${media.id}/delete`;
        form_delete_media.post(post_url, { preserveScroll: true });
    }
}

function submitCategory() {
    const post_url = `/myadmin/jobcategories/${props.jobcategory.slug}`;
    form.post(post_url);
}

function decodedData(encodedData) {
    // Create a temporary element
    let tempElement = document.createElement('div');
    // Set the innerHTML of the element to the encoded data
    tempElement.innerHTML = encodedData;
    // Use the textContent property to get the decoded content
    return tempElement.textContent || tempElement.innerText;
}


function htmlEncode(str) {
    return str.replace(/[\u00A0-\u9999<>\&]/gim, function (i) {
        return '&#' + i.charCodeAt(0) + ';';
    });
}

function updateDescription(description) {
    form.description = description;
}
onMounted(() => {
    alertmessage = document.getElementById('alertmessage');
    hideAertMessage()
    initFlowbite();
})
function checkInputValue() {
    let pictures = document.getElementById('pictures')
    pictures.value = null;
}
onUpdated(() => {
    checkInputValue()
    form.pictures = null;
    showAlertMessage();
    setTimeout(() => {
        hideAertMessage()
    }, 3000);
})
function showAlertMessage() {
    alertmessage.classList.remove('top-[-170px]');
    alertmessage.classList.add('top-[100px]');
}
function hideAertMessage() {
    alertmessage.classList.remove('top-[100px]');
    alertmessage.classList.add('top-[-170px]');
}

</script>

<template>

    <Head title="Edit New Job Category" />

    <AuthenticatedLayout>
        <MenuButton title="Edit Job Category" />
        <div id="alertmessage" class="fixed top-[100px] right-0 transition-all  " style="z-index: 1000000;">
            <div v-if="Object.keys(props.errors).length == 0"
                class="border max-w-lg m-auto flex items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800" role="alert">
                <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <div class="ms-3 text-sm font-medium me-3">
                    Page are saved successfully
                </div>
                <button type="button" @click.prevent="hideAertMessage"
                    class="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
                    data-dismiss-target="#alertmessage" aria-label="Close">
                    <span class="sr-only">Dismiss</span>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                </button>
            </div>
            <div v-if="Object.keys(props.errors).length != 0"
                class="transition-all fixed top-[100px] right-0 border max-w-lg m-auto flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800"
                role="alert">
                <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <div class="ms-3 text-sm font-medium me-3">
                    Please fix the errors on page
                </div>
                <button type="button" @click.prevent="hideAertMessage"
                    class="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
                    data-dismiss-target="#alertmessage" aria-label="Close">
                    <span class="sr-only">Dismiss</span>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                </button>
            </div>
        </div>
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
                                <label for="pictures" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pictures</label>

                                <div>
                                    <input type="file" id="pictures" multiple accept="image/jpeg" class="mt-1 block w-full" @input="form.pictures = $event.target.files" />
                                    <div v-if="props.errors?.pictures" class="form_error">{{ props.errors?.pictures }}</div>
                                </div>

                                <div class=" flex justify-start flex-wrap mb-5">
                                    <!-- <a target="_blank" v-if="props.media != ''" :href="props.media"><img :src="props.media" style="height: 200px;" /></a> -->
                                    <div v-for="media in props.jobcategory.media" :key="media.id" class="m-1 bg-gray-100 dark:bg-gray-700 p-1 text-center"
                                        :class="media.original_url == form.default_image_url ? 'bg-green-300 dark:bg-green-300' : ''">
                                        <div class="relative">
                                            <img :src="media.original_url" style="height: 200px;" class="m-auto" />
                                            <button @click.prevent="deleteImage(media)" class="text-sm btn-dark px-2 mr-1 absolute right-1 top-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-[16px] h-[16px] fill-white">
                                                    <path
                                                        d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                                                </svg>
                                            </button>

                                        </div>
                                        <div class="mt-2 mb-1">
                                            <button @click.prevent="addToGallery(media.original_url)" class="btn-dark text-sm px-2 py-1 mr-1">Add To Gallery</button>
                                            <button @click.prevent="setDefaultImageUrl(media.original_url)" class="btn-dark text-sm px-2 py-1"
                                                :class="media.original_url == form.default_image_url ? 'bg-green-500 text-white hover:bg-green-600' : ''">Set Default</button>

                                        </div>
                                    </div>
                                </div>
                                <div class="mb-5">
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gallery</label>

                                    <div class="flex flex-wrap bg-gray-100 dark:bg-gray-700 p-5 rounded-lg">
                                        <div v-for="myimage in form.galleryimages" :key="myimage" class="m-1 relative">
                                            <img :src="myimage" alt="" class=" h-[150px] ">

                                            <button @click.prevent="removeImagefromGallery(myimage)"
                                                class="text-sm bg-gray-100 hover:bg-red-300 transition-all p-[2px] absolute right-1 top-1 rounded-full w-[25px] h-[25px] flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-full">
                                                    <path
                                                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div class="" v-if="!form.galleryimages?.length">
                                            No images found in gallery
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-5">
                                    <label for="gallerystyle" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gallery Style</label>

                                    <select id="gallerystyle" v-model="form.gallerystyle"
                                        class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="carousel">
                                            Image Carousal
                                        </option>
                                        <option value="carouselauto">
                                            Image Carousal Auto-Scroll
                                        </option>
                                        <option value="grid5">
                                            Image Grid 5x
                                        </option>
                                        <option value="grid4">
                                            Image Grid 4x
                                        </option>
                                        <option value="grid3">
                                            Image Grid 3x
                                        </option>
                                        <option value="grid2">
                                            Image Grid 2x
                                        </option>
                                        <option value="grid1">
                                            Image Grid 1x
                                        </option>
                                        <option value="none">
                                            None
                                        </option>
                                    </select>
                                    <div v-if="props.errors?.galleryimages" class="form_error">{{ props.errors?.galleryimages }}</div>
                                    <div></div>
                                </div>

                            </div>
                            <div class="mb-5">
                                <label for="small_description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Small Description</label>

                                <textarea id="small_description" v-model="form.small_description"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>

                                <div v-if="props.errors?.small_description" class="form_error">{{ props.errors?.small_description }}</div>

                            </div>
                            <div class="mb-5">
                                <div class="flex items-center mb-2">
                                    <label for="description" class="block me-3 text-sm font-medium text-gray-900 dark:text-white">Job Description</label>
                                    <button class="text-sm" @click.prevent="showhtml = !showhtml">Show HTML</button>
                                </div>

                                <div :class="showhtml ? 'block' : 'hidden'">
                                    <textarea v-model="form.description" class="w-full h-[400px]  dark:bg-gray-800 dark:text-white" />
                                </div>

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
