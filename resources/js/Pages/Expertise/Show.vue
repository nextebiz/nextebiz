<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue"
import { onMounted } from "vue";
import { initFlowbite } from 'flowbite'
import { Head, Link, useForm } from "@inertiajs/vue3";
import Nav from "./Nav.vue";
import FeaturedJobs from '@/Components/FeaturedJobs.vue'
import IndustriesVue from "../Include/Industries.vue";
import Idea from "../Include/Idea.vue";
// import MySwiper from '@/Pages/Swiper/Swiper.vue';
import MySwiper from '@/Pages/Include/Gallery/Swiper/Swiper.vue';
import CarouselAutoscroll from '@/Pages/Include/Gallery/CarouselAutoscroll/Index.vue';
import ImageGrid from "@/Pages/Include/Gallery/Grid/Index.vue";

const props = defineProps({
    jobcategories: Object,
    jobcategory: Object,
    'categories': Object,
    'jobpostuser': Array
})


const form = useForm({
    grid_array: ['grid5', 'grid4', 'grid3', 'grid2', 'grid1'],
    selected_category: 1,
    galleryimages: props.jobcategory.galleryimages == "null" || props.jobcategory.galleryimages == null ? [] : JSON.parse(props.jobcategory.galleryimages),

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
        <div class="container m-auto my-[50px] px-0 dark:text-white">
            <!-- drawer component -->
            <div id="drawer-example" class="pt-[100px] fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800" tabindex="-1"
                aria-labelledby="drawer-label">

                <button type="button" data-drawer-hide="drawer-example" aria-controls="drawer-example"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span class="sr-only">Close menu</span>
                </button>


                <div class="grid grid-cols-2 gap-4">
                    <Nav :jobcategories="jobcategories" :jobcategory="jobcategory" />

                </div>
            </div>

            <div class="flex w-full ">
                <div class="hidden">
                    <Nav :jobcategories="jobcategories" :jobcategory="jobcategory" />
                </div>
                <div class="px-3 md:px-5">

                    <div class="flex items-center mb-3 ">
                        <div class="text-center block ">
                            <button class="text-white bg-gray-200 hover:bg-gray-300  rounded-md px-3 py-2 mr-3 " type="button" data-drawer-target="drawer-example" data-drawer-show="drawer-example"
                                aria-controls="drawer-example">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-[20px]">
                                    <path
                                        d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                                </svg>
                            </button>
                        </div>
                        <Link href="/expertise">
                        <div class="flex items-center link-orange">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-[16px] fill-orange-500 mr-2">
                                <path
                                    d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z" />
                            </svg>
                            <span class="">
                                Expertise
                            </span>
                        </div>
                        </Link>
                    </div>


                    <h1 class="mb-5">{{ jobcategory.title }}</h1>
                    <div class="myck mb-5" v-if="jobcategory.default_image_url != ''">
                        <img :src="jobcategory.default_image_url == '' ? '' : jobcategory.default_image_url" />
                    </div>

                    <div class="myck mb-5">
                        <div v-html="jobcategory.description"></div>
                    </div>

                    <div class="container m-auto mb-5" v-if="form.grid_array.indexOf(jobcategory.gallerystyle) > -1">
                        <ImageGrid :images="form.galleryimages" :gallerystyle="jobcategory.gallerystyle" />
                    </div>

                    <div class="container m-auto mb-5" v-if="jobcategory.gallerystyle == 'carouselauto'">
                        <CarouselAutoscroll :images="form.galleryimages" />
                    </div>

                    <div class="container m-auto mb-5" v-if="jobcategory.gallerystyle == 'carousel'">
                        <MySwiper :images="form.galleryimages" />
                    </div>
                    <div class=" w-full p-0 mb-5">

                        <button @click="changeSelectedCategory(jobcategory.id)" data-modal-target="crud-modal" data-modal-toggle="crud-modal" class="w-full" type="button">
                            <div class="block sm:flex items-center justify-center py-3 text-xl font-bold rounded-lg text-white  bg-orange-600 hover:bg-orange-500 hover:border-orange-800   transition-all">
                                <div>
                                    <span class="text-white text-lg font-normal md:text-2xl md:font-bold px-2 md:px-0">
                                        Hire {{ jobcategory.title }}
                                    </span>
                                </div>
                                <div class="w-[30px] mx-5 fill-white hidden md:inline-block">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                                        <path
                                            d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1c-4.2-4.5-10.1-7.1-16.3-7.1C266 128 256 138 256 150.3V208H160c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h96v57.7c0 12.3 10 22.3 22.3 22.3c6.2 0 12.1-2.6 16.3-7.1l99.9-107.1c3.5-3.8 5.5-8.7 5.5-13.8s-2-10.1-5.5-13.8L294.6 135.1z" />
                                    </svg>
                                </div>

                                <div>
                                    <span>
                                        Starting from ${{ jobcategory.min }} / Hour
                                    </span>
                                </div>
                            </div>
                        </button>
                        <!-- {{ form.galleryimages }} -->

                    </div>
                    <div class="mb-[50px]" v-if="categories[0].job_posts.length > 0">
                        <FeaturedJobs :categories="categories" :jobpostuser="jobpostuser"></FeaturedJobs>
                    </div>

                    <div class="mb-[50px]">
                        <h2 class="my-5 text-center">Hire {{ jobcategory.title }}</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div class="border text-center border-gray-300 dark:border-gray-600 py-10 px-5">
                                <h2 class="font-bold text-orange-500">Hourly</h2>
                                <h5>Staring From</h5>
                                <div class="text-5xl py-[20px] font-bold flex justify-center"><span class="text-2xl">$</span>
                                    <span>{{ Math.floor(jobcategory.min) }}</span>
                                </div>
                                <p class="mb-5">
                                    The model works well when you have a short-term project, need specialized service, or have a specific task to be completed.
                                </p>
                                <button @click="changeSelectedCategory(jobcategory.id)" data-modal-target="crud-modal" data-modal-toggle="crud-modal" class="w-full" type="button">
                                    <div
                                        class="bg-transparent hover:bg-gray-700 text-orange-500 font-semibold hover:text-white py-2 px-4 border border-gray-300 dark:border-gray-600 hover:border-transparent rounded transition-all">
                                        <span>
                                            Hire Resource ${{ jobcategory.min }} / Hour
                                        </span>
                                    </div>
                                </button>
                            </div>
                            <div class="border text-center border-gray-300 dark:border-gray-600 pt-10 pb-5 px-5">
                                <h2 class="font-bold text-orange-500">Monthly</h2>
                                <h5>Staring From</h5>
                                <div class="text-5xl py-[20px] font-bold flex justify-center"><span class="text-2xl">$</span>
                                    <span>{{ Math.floor(jobcategory.monthly) }}</span>
                                </div>
                                <p class="mb-5">
                                    When you seek a long-term partnership with a limited budget and in less time, hire our experienced developers monthly.

                                </p>
                                <button @click="changeSelectedCategory(jobcategory.id)" data-modal-target="crud-modal" data-modal-toggle="crud-modal" class="w-full" type="button">
                                    <div
                                        class="bg-transparent hover:bg-gray-700 text-orange-500 font-semibold hover:text-white py-2 px-4 border border-gray-300 dark:border-gray-600 hover:border-transparent rounded transition-all">
                                        <span>
                                            Hire Resource ${{ jobcategory.monthly }} / Month
                                        </span>
                                    </div>
                                </button>
                            </div>
                            <div class="border text-center border-gray-300 dark:border-gray-600 py-10 px-5">
                                <h2 class="font-bold text-orange-500">Quarterly</h2>
                                <h5>Staring From</h5>
                                <div class="text-5xl py-[20px] font-bold flex justify-center"><span class="text-2xl">$</span>
                                    <span>{{ Math.floor(jobcategory.quarterly) }}</span>
                                </div>
                                <p class="mb-5">
                                    Need constant support from developers to serve your volatile requirements? Hiring our developers quarterly will save you from all the hassle.
                                </p>
                                <button @click="changeSelectedCategory(jobcategory.id)" data-modal-target="crud-modal" data-modal-toggle="crud-modal" class="w-full" type="button">
                                    <div
                                        class="bg-transparent hover:bg-gray-700 text-orange-500 font-semibold hover:text-white py-2 px-4 border border-gray-300 dark:border-gray-600 hover:border-transparent rounded transition-all">
                                        <span>
                                            Hire Resource ${{ jobcategory.quarterly }} / Quarter
                                        </span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="text-center mb-[50px]">
                        <h2 class="mb-5">Perks Of Hiring A Dedicated Team</h2>
                        <p class="text-xl">
                            A team that is inclined towards one goal and is dedicated to utilizing every means to achieve the goal makes it easier for the imagination to become a reality. The dedicated team ensures
                            tremendous growth, effective communication, continuous analysis, rapid error fixing, transparency, integrity, and effective solution.
                        </p>
                    </div>

                    <div class="mb-5">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                            <div class="border border-gray-300 dark:border-gray-600 p-5 text-center bg-orange-50 dark:bg-gray-900">
                                <h4 class="mb-5 ">Guaranteed Outcome
                                </h4>
                                <p>A team with proven expertise is highly reliable in terms of project delivery.
                                </p>
                            </div>
                            <div class="border border-gray-300 dark:border-gray-600 p-5 text-center bg-green-50 dark:bg-gray-900">
                                <h4 class="mb-5">Quick Turnaround Time

                                </h4>
                                <p>
                                    The commitment to the project increases the on-time delivery of the project.
                                </p>
                            </div>
                            <div class="border border-gray-300 dark:border-gray-600 p-5 text-center bg-fuchsia-50 dark:bg-gray-900">
                                <h4 class="mb-5">
                                    Increased Productivity
                                </h4>
                                <p>
                                    A shared common goal and the ability to achieve it enhances productivity
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="mb-5">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                            <div class="border border-gray-300 dark:border-gray-600 p-5 text-center col-start-1  bg-blue-50 dark:bg-gray-900">
                                <h4 class="mb-5">
                                    Extended Support

                                </h4>
                                <p>
                                    The team has the back of the project at every development stage

                                </p>
                            </div>
                            <div class="border border-gray-300 dark:border-gray-600 p-5 text-center  bg-red-50 dark:bg-gray-900">
                                <h4 class="mb-5">Focus on your business

                                </h4>
                                <p>
                                    You can dedicate your time to the core function of your business.
                                </p>
                            </div>
                        </div>
                    </div>
                    <Idea :jobcategories="jobcategories" />
                    <div class="text-center py-[50px] px-5">
                        <h2 class="mb-5">
                            Our Industry-Specific Experience
                        </h2>
                        <p class="mb-5">
                            Next eBiz has consistently delivered top-notch software & mobile solutions over the past 15 years, providing unmatched service. We are committed to delivering tech solutions that not only meet
                            but exceed your industry guidelines, adhere to standards compliance, and fulfill all your requirements. When you hire our team, you’ll benefit from their extensive experience working across a
                            wide range of global industries.
                        </p>
                        <IndustriesVue />

                    </div>

                </div>

            </div>
        </div>

    </AuthenticatedLayout>
</template>


<style lang="scss" scoped></style>
