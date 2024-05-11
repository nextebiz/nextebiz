<script setup>
import { Link } from "@inertiajs/vue3"

const props = defineProps({
    'categories': Array,
    'full': String,
    'jobpostuser': Array
})


</script>

<template>

    <div class=" py-[100px] bg-gray-900" style="  background-attachment: fixed;  background-repeat: no-repeat; background-size: cover; background-image: url('/assets/img/bg/laravel-11-bg.jpg');">
        <div class="container mx-auto myck px-5 ">
            <div class="text-white ">
                <div v-if="full != 'full'" class="flex items-center">
                    <h2 class="me-5">We are Hiring!</h2>
                    <Link href="/open-positions" class="text-blue-400 flex">
                    <div class="mt-[5px]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="me-3 w-[15px] h-[15px] fill-orange-500">
                            <path
                                d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                        </svg>
                    </div>
                    <div>
                        See all open jobs
                    </div>
                    </Link>
                </div>
                <p class="mb-3 text-white">At Next eBiz, we specialize in delivering cutting-edge software solutions to clients across diverse industries. From custom software development to innovative digital solutions,
                    we're committed to excellence in everything we do.
                </p>
            </div>

            <div v-for="category in categories" :key="category.id" class="">
                <div v-if="category.job_posts?.length > 0">
                    <div class="text-center mb-5 pb-3 border-b border-b-gray-600 dark:border-b-gray-700">
                        <div class="flex items-center justify-start mt-[50px]">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="me-3 w-[20px] h-[20px] fill-orange-500">
                                <path
                                    d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                            </svg>
                            <span class="text-white text-center p-0 m-0 text-xl md:text-2xl lg:text-3xl text-bold">{{ category.title }} Jobs</span>
                        </div>
                    </div>
                    <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div v-for="job in category.job_posts" :key="job.id" class="bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 p-5">
                            <div class="flex mb-5">
                                <div v-for="city in job.cities" :key="city"
                                    class="text-gray-600 dark:text-white border border-gray-300 dark:border-gray-700 px-3 py-1 mr-2 capitalize text-bold bg-gray-100 dark:bg-gray-900 rounded-lg ">
                                    {{ city }}
                                </div>
                            </div>
                            <div class="text-xl mb-5 dark:text-white">{{ job.title }}</div>
                            <div class=" flex justify-between items-center">
                                <div v-if="jobpostuser.includes(job.id)">
                                    <Link :href="`/jobs/${job.slug}`" class="btn-green font-bold uppercase flex items-center whitespace-nowrap">
                                    <span class="">Applied</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="w-[16px] h-[16px] fill-white ms-1">
                                        <path
                                            d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM305 273L177 401c-9.4 9.4-24.6 9.4-33.9 0L79 337c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L271 239c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                    </svg>
                                    </Link>
                                </div>
                                <div v-else>
                                    <Link :href="`/jobs/${job.slug}`" class="btn-orange font-bold uppercase flex items-center whitespace-nowrap">
                                    <span>Apply</span>
                                    </Link>
                                </div>
                                <a target="_blank" :href="`/share/${job.slug}`" class="btn-gray   uppercase ">
                                    <div class="flex items-center">
                                        <div class="mr-2">
                                            Share
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-[15px] fill-gray-500">
                                            <path
                                                d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z" />
                                        </svg>
                                    </div>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped></style>
