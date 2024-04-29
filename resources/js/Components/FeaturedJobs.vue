<template>
    <div class=" py-[100px] bg-gray-900" style="  background-attachment: fixed;  background-repeat: no-repeat; background-size: cover; background-image: url('/assets/img/bg/laravel-11-bg.jpg');">
        <div class="container mx-auto myck px-5">
            <div class="text-white">
                <h2>We are Hiring!</h2>
                <p class="mb-3 text-white">At Next eBiz, we specialize in delivering cutting-edge software solutions to clients across diverse industries. From custom software development to innovative digital solutions,
                    we're committed to excellence in everything we do.
                </p>
            </div>

            <div v-for="category in categories" :key="category.id" class="mb-[50px]">
                <div v-if="category.job_posts.length > 0">
                    <div class="text-center mb-5 pb-3 border-b border-b-gray-700">
                        <div class="flex items-center justify-start">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="me-3 w-[20px] h-[20px] fill-orange-500">
                                <path
                                    d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                            </svg>
                            <span class="text-white text-center p-0 m-0 text-xl md:text-2xl lg:text-3xl text-bold">{{ category.title }} Jobs</span>
                        </div>
                    </div>
                    <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div v-for="job in category.job_posts" :key="job.id" class="bg-gray-100 border p-5">
                            <div class="flex mb-5">
                                <div v-for="city in job.cities" :key="city" class="border border-gray-300 px-3 py-1 mr-2 capitalize text-bold bg-gray-100 rounded-lg ">
                                    {{ city }}
                                </div>
                            </div>
                            <div class="text-xl mb-5">{{ job.title }}</div>
                            <div class=" flex justify-between items-center">

                                <Link :href="`/jobs/${job.slug}`" class="bg-orange-500 text-white px-5 py-2 text-lg  hover:bg-orange-600 transition-all uppercase">Apply</Link>
                                <a target="_blank" :href="`/share/${job.slug}`" class="bg-gray-200 text-gray-900 px-5 py-2 text-lg  hover:bg-blue-600 hover:text-gray-100 transition-all uppercase ">
                                <div class="flex items-center">
                                    <div class="mr-2">
                                        Share
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-[20px] fill-gray-500">
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

            <div v-if="full != 'full'" class="b-5 pb-3 border-b border-b-gray-700">

                <div>
                    <Link href="/open-positions" class="text-blue-400 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="me-3 w-[20px] h-[20px] fill-orange-500">
                        <path
                            d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                    </svg>
                    <span>
                        See all jobs ...
                    </span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Link } from "@inertiajs/vue3"



const props = defineProps({
    'categories': Array,
    'full': String
})

</script>

<style lang="scss" scoped></style>
