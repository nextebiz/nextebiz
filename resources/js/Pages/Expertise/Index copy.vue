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

            <p class="mb-10">Embark on a transformative journey with our digital innovation hub, where creativity meets expertise, and innovation knows no bounds. Our dedicated team of professionals specializes in a
                diverse array of services, from web development to AI integration, ensuring that your business thrives in the ever-evolving digital landscape.</p>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 text-center">
                <div v-for="category in jobcategories" :key="category.id" class="bg-gray-100 dark:bg-gray-700 p-0 pb-[40px] relative">
                    <div class="p-3">
                        <Link :href="`/expertise/${category.slug}`">
                        <div class="bg-gray-500 mb-5 h-[130px] sm:h-[230px] md:h-[230px]"
                            :style="`background-repeat: no-repeat;  background-size: cover;   background-position: center; background-image: url('${category.media[0]?.original_url}');`">
                        </div>
                        </Link>
                    </div>
                    <Link :href="`/expertise/${category.slug}`">
                    <h2 class="mb-[50px] hover:text-orange-500 transition-all hover:scale-110">{{ category.title }}</h2>
                    </Link>
                    <div class="bottom-0 absolute w-full p-3">
                        <button @click="changeSelectedCategory(category.id)" data-modal-target="crud-modal" data-modal-toggle="crud-modal" class="w-full" type="button">
                            <div
                                class="flex items-center justify-center text-lg bg-gray-200 dark:bg-gray-800 py-2 border border-gray-300 dark:border-gray-600 hover:border-orange-500 hover:text-orange-500 hover:fill-orange-500 dark:fill-white dark:hover:fill-orange-500">

                                <div class="mr-3 text-md md:text-lg lg:text-lg">
                                    <span class="hidden sm:inline-block">{{ category.title }}</span> starting from <strong class="font-bold">${{ category.min }} / Hour </strong>
                                </div>

                                <div class="w-[25px] ">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path
                                            d="M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4c-8.2 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1zM26.3 423.8c-1.6 2.7-3.3 5.4-5.1 8.1l-.3 .5c-1.6 2.3-3.2 4.6-4.8 6.9c-3.5 4.7-7.3 9.3-11.3 13.5c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c5.1 0 10.2-.3 15.3-.8l.7-.1c4.4-.5 8.8-1.1 13.2-1.9c.8-.1 1.6-.3 2.4-.5c17.8-3.5 34.9-9.5 50.1-16.1c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9zM144 272a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm144-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm80 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
                                    </svg>
                                </div>
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
