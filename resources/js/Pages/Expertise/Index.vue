<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue"
import { onMounted } from "vue";
import { initFlowbite } from 'flowbite'
import { Head, Link, useForm } from "@inertiajs/vue3";
// import Modal from './Modal.vue';
import MessageForm from "../MessageBox/MessageForm.vue";

const props = defineProps({
    jobcategories: Object
})
const form = useForm({
    selected_category: 1
})
function changeSelectedCategory(id) {
    console.log('hi')
    form.selected_category = id
}
onMounted(() => {
    initFlowbite();
})
</script>
<template>

    <Head title="Our Expertise"></Head>

    <AuthenticatedLayout>

        <div>
            <!-- <Modal :jobcategories="props.jobcategories" :selected_category="form.selected_category" /> -->
        </div>
        <div class="container m-auto my-[50px] px-2 sm:px-5 dark:text-white">

            <h1 class="mb-5">Our Expertise</h1>

            <p class="mb-5">Embark on a transformative journey with our digital innovation hub, where creativity meets expertise, and innovation knows no bounds. Our dedicated team of professionals specializes in a
                diverse array of services, from web development to AI integration, ensuring that your business thrives in the ever-evolving digital landscape.</p>
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-4 text-center">
                <div v-for="category in jobcategories" :key="category.id" class="bg-gray-100 dark:bg-gray-700 p-0 pb-[40px] relative">
                    <div class="p-3">
                        <Link :href="`/expertise/${category.slug}`">
                        <div class="bg-gray-500 mb-5 h-[120px] sm:h-[230px]"
                            :style="`background-repeat: no-repeat;  background-size: cover;   background-position: center; background-image: url('${category.media[0]?.original_url}');`">
                        </div>
                        </Link>
                    </div>
                    <Link :href="`/expertise/${category.slug}`">
                    <h2 class="mb-3 hover:text-orange-500 transition-all">{{ category.title }}</h2>
                    </Link>

                    <div class="mb-5 p-3">
                        <p>

                            {{ category.small_description }}
                            <Link :href="`/expertise/${category.slug}`" class="link-orange">
                            <span class="link-orange  border border-transparent hover:border-orange-600 rounded-md">
                                Details ...
                            </span>
                            </Link>
                        </p>
                    </div>
                    <div class="bottom-0 absolute w-full p-3">
                        <button @click="changeSelectedCategory(category.id)" data-modal-target="crud-modal" data-modal-toggle="crud-modal" class="w-full" type="button">
                            <div class=" text-lg bg-gray-200 dark:bg-gray-800 py-2 border border-gray-300 dark:border-gray-600 hover:border-red-500 hover:text-orange-600">
                                Starting from ${{ category.min }} / Hour
                                <span class="text-orange-500 px-2 py-1">
                                    Hire {{ category.title }}
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>


        <!-- Main modal -->
        <div id="crud-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-md max-h-full">
                <!-- Modal content -->

                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal header -->
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            Hire Resource
                        </h3>

                        <button type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-toggle="crud-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div class="p-4 md:p-5">
                        <MessageForm :jobcategories="props.jobcategories" :selected_category="form.selected_category" :prices="true" />
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>


<style lang="scss" scoped></style>
