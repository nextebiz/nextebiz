<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue"
import { onMounted } from "vue";
import { initFlowbite } from 'flowbite'
import { Head, Link } from "@inertiajs/vue3";
import MySwiper from '@/Pages/Swiper/Swiper.vue';
import Industries from "@/Pages/Include/Industries.vue";
import Idea from "@/Pages/Include/Idea.vue";
import Speak from "../Include/Speak.vue";


const props = defineProps({
    jobcategories:Object,
    categories: Object,
    portfolio: Object,
    media: Array
})

function getImage(myportfolio) {

    let default_id = myportfolio.default_media_id;
    if (myportfolio.media.length === 0) {
        return '/assets//nextebiz-logo.png';
    }
    const find_media = myportfolio.media.find((p) => {
        return p.id == default_id;
    })
    if (find_media == undefined) {
        return myportfolio.media[0]?.original_url;
    }
    return find_media?.original_url;
}

onMounted(() => {
    initFlowbite();
})
</script>
<template>
    <AuthenticatedLayout>

        <Head title="Portfolio" />
        <div class="container m-auto px-4 md:px-5 dark:text-white">
            <div class="my-[50px]">
                <Link href="/portfolio">
                <div class="flex items-center link-orange">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-[16px] fill-orange-500 mr-2">
                        <path
                            d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z" />
                    </svg>
                    <span class="">
                        Portfolio
                    </span>
                </div>
                </Link>
                <h1 class=" mb-1">{{ portfolio.title }}</h1>
                <div class="mb-5">{{ portfolio.portfolio_category.title }}</div>
                <div v-html="portfolio.description" class="mb-5 myck">
                </div>

                <div>
                    <h3 class="text-center mb-1">Project Screenshots</h3>
                    <div class="text-center mb-5 text-2xl">Double tap on image to zoom in/out</div>
                    <MySwiper :images="media" />
                </div>

                <div class="mt-[50px]">
                    <div class="text-center mb-[20px]">
                        <h2 class="mb-5">Perks Of Hiring A Dedicated Team</h2>
                        <p class="text-xl">
                            A team that is inclined towards one goal and is dedicated to utilizing every means to achieve the goal makes it easier for the imagination to become a reality. The dedicated team ensures
                            tremendous growth, effective communication, continuous analysis, rapid error fixing, transparency, integrity, and effective solution.
                        </p>
                    </div>

                    <div class="mb-[30px] text-center">
                        <div class="flex justify-center">
                            <div
                                class="whitespace-nowrap inline-flex items-center justify-center px-5 py-3 mr-1 text-base font-medium text-center text-gray-900 dark:text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                                Get started
                                <svg class="w-5 h-5 ml-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd">
                                    </path>
                                </svg>
                            </div>

                            <Speak :jobcategories="props.jobcategories" />

                        </div>
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
                    <div class="text-center py-[50px] px-5">
                        <h2 class="mb-5">
                            Our Industry-Specific Experience
                        </h2>
                        <p class="mb-5">
                            Next eBiz has consistently delivered top-notch software & mobile solutions over the past 15 years, providing unmatched service. We are committed to delivering tech solutions that not only meet
                            but exceed your industry guidelines, adhere to standards compliance, and fulfill all your requirements. When you hire our team, you’ll benefit from their extensive experience working across a
                            wide range of global industries.
                        </p>
                        <Industries />

                    </div>
                </div>


            </div>
        </div>
        <section class="client-logo bg-gray-100 dark:bg-gray-700 ">
            <div class=" m-auto  ">
                <Idea :jobcategories="props.categories" />
            </div>
        </section>
    </AuthenticatedLayout>
</template>



<style lang="scss" scoped></style>
