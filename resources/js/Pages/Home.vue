<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import FeaturedJobs from '@/Components/FeaturedJobs.vue'

import { Head, Link } from '@inertiajs/vue3';
import { onMounted, onUnmounted } from "vue"

import IndustriesVue from './Include/Industries.vue';
import Idea from "@/Pages/Include/Idea.vue";

import Speak from './Include/Speak.vue';

const props = defineProps({
    categories: Array,
    jobpostuser: Array,
    jobcategories: Object
})

onMounted(() => {
    initFlowbite();
})
// onUnmounted(() => {
//     initFlowbite();
// })
</script>
<template>

    <Head title="Your Full Stack Development Team - Next eBiz" />

    <AuthenticatedLayout>

        <section class="bg-gray-200 dark:bg-gray-900">
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7  mb-[50px] lg:mb-0">
                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white ">Unlock Innovation</h1>
                    <h2 class="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">Join Our Elite Tech Stack Crew!</h2>
                    <p class="max-w-2xl mb-6 font-light text-gray-700 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-200">
                        <strong>Join the Revolution:</strong> Become a part of our dynamic tech stack teams, where innovation knows no bounds and creativity thrives. We're shaping the future with cutting-edge
                        technologies and
                        unparalleled expertise.
                    </p>
                    <div class="flex">
                        <div class="hidden sm:flex items-center">
                            <Link href="/expertise/fullstack-development">
                            <div class="btn-border">
                                Go Fullstack
                            </div>
                            </Link>
                            <svg class="w-5 h-5 ml-5 dark:fill-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd">
                                </path>
                            </svg>
                        </div>
                        <div
                            class="inline-flex items-center justify-center px-5 py-3 mr-1 text-base font-medium text-center text-gray-900 dark:text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Get started
                            <svg class="w-5 h-5 ml-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd">
                                </path>
                            </svg>
                        </div>

                        <Speak :jobcategories="props.jobcategories" />

                    </div>
                </div>
                <div class=" lg:mt-0 lg:col-span-5 lg:flex ">
                    <img src="assets/img/home/nextebiz-full-stack-developer-pakistan.png" alt="nextebiz-full-stack-developer-pakistan">
                </div>
            </div>
        </section>

        <section class="bg-white dark:bg-gray-700">
            <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img src="assets/img/home/full-stack-developer-pakistan.png" alt="nextebiz-full-stack-developer-pakistan">

                <div class="mt-4 md:mt-0">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Web & Mobile App Development Company
                    </h2>
                    <h3 class="text-3xl mb-5  text-gray-900 dark:text-white">Startups . Agencies . Businesses
                    </h3>
                    <p class="mb-6 font-light text-gray-700 md:text-lg dark:text-gray-200">
                        Next eBiz is a comprehensive mobile and web app development firm that harnesses cutting-edge technology and digital transformation to provide leading digital solutions for your business needs.
                        With a global clientele, our dedicated team of mobile app developers delivers top-tier solutions.
                    </p>
                    <div class="projects-information mb-6">

                        <ul>

                            <li>

                                <strong class="developer">180

                                    <sup>+</sup>

                                </strong>

                                <span>Developers</span>

                            </li>

                            <li>

                                <strong class="customer">250

                                    <sup>+</sup>

                                </strong>

                                <span>Customers</span>

                            </li>

                            <li>

                                <strong class="experience">16

                                    <sup>+</sup>

                                </strong>

                                <span>Years of experience</span>
                            </li>
                            <li>
                                <strong class="project">1600
                                    <sup>+</sup>
                                </strong>
                                <span>Projects</span>
                            </li>
                        </ul>
                    </div>

                    <p class="mb-5 font-light text-gray-700 md:text-lg dark:text-gray-200">
                        At Next ebiz, we implement a comprehensive end-to-end approach to design and develop ultimate web and mobile-based business-ready apps. This ensures quick launches and updates, empowering our
                        clients to adapt swiftly to the evolving market landscape. We specialize in creating high-quality native interfaces on cross-platforms efficiently and effectively, delivering exceptional results in record time.
                    </p>

                    <div class="flex items-center">

                        <div
                            class="inline-flex items-center justify-center px-5 py-3 mr-1 text-base font-medium text-center text-gray-900 dark:text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Kickstart your journey
                            <svg class="w-5 h-5 ml-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd">
                                </path>
                            </svg>
                        </div>
                        <div class="flex items-center">
                            <Link href="/expertise/">
                            <div class="btn-border">
                                Hire Top Talent
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-white dark:bg-gray-800">
            <div class="bg-gray-100 dark:bg-gray-800 ">
                <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">

                    <div class="mt-4 md:mt-0">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Empowering Success Through Innovation
                        </h2>
                        <h3 class="text-3xl mb-5  text-gray-900 dark:text-white">Assess . Engage . Deliver
                        </h3>
                        <p class="mb-6 font-light text-gray-700 md:text-lg dark:text-gray-200">
                            At the forefront of technology, we deliver unparalleled services by continuously innovating and integrating cutting-edge solutions, enriching our clients' long-term success. Our strategic
                            solutions empower some of the world's most esteemed organizations, offering them a competitive edge. </p>

                        <p class="mb-6 font-light text-gray-700 md:text-lg dark:text-gray-200">
                            Pioneering technology, Next eBiz crafts unparalleled services by constantly innovating and seamlessly integrating cutting-edge solutions, ensuring our clients' enduring success. Our strategic
                            prowess empowers renowned global organizations, providing them with a distinct competitive edge.
                        </p>

                        <div class="flex items-center">

                            <div
                                class="inline-flex items-center justify-center px-5 py-3 mr-1 text-base font-medium text-center text-gray-900 dark:text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                                Get started today
                                <svg class="w-5 h-5 ml-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd">
                                    </path>
                                </svg>
                            </div>
                            <div class="flex items-center">
                                <Link href="/expertise/">
                                <div class="btn-border">
                                    Discover our expertise
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <img src="assets/img/home/banner-dedicated-staffing.png" alt="nextebiz-full-stack-developer-pakistan">
                </div>
            </div>

            <div>
                <FeaturedJobs :categories="categories" :jobpostuser="jobpostuser"></FeaturedJobs>
            </div>

            <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">

                <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 text-center dark:text-white">
                    <div>
                        <div class="grid-cell-home">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="" viewBox="0 0 512 512">
                                <path
                                    d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z" />
                            </svg>
                        </div>
                        <h3 class="">Full Stack Development</h3>
                        <p class="">
                            Unlock Full Potential: Laravel, Vue, React Stack Mastery. Harness the power of Laravel's robust backend framework. Elevate user experiences with dynamic interfaces through Vue & Reactjs.

                        </p>
                    </div>
                    <div>
                        <div class="grid-cell-home">

                            <svg xmlns="http://www.w3.org/2000/svg" class="" fill="currentColor" viewBox="0 0 512 512">
                                <path
                                    d="M64 0C46.3 0 32 14.3 32 32V96c0 17.7 14.3 32 32 32h80v32H87c-31.6 0-58.5 23.1-63.3 54.4L1.1 364.1C.4 368.8 0 373.6 0 378.4V448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V378.4c0-4.8-.4-9.6-1.1-14.4L488.2 214.4C483.5 183.1 456.6 160 425 160H208V128h80c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H64zM96 48H256c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16s7.2-16 16-16zM64 432c0-8.8 7.2-16 16-16H432c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16zm48-168a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm120-24a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM160 344a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM328 240a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM256 344a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM424 240a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM352 344a24 24 0 1 1 0-48 24 24 0 1 1 0 48z" />
                            </svg>
                        </div>
                        <h3 class="">e-Commerce Services</h3>
                        <p class="">
                            Streamline operations with Amazon sourcing, optimizing inventory management. Enhance customer engagement through personalized experiences with virtual assistant integration.
                        </p>
                    </div>
                    <div>
                        <div class="grid-cell-home">
                            <svg xmlns="http://www.w3.org/2000/svg" class="" fill="currentColor" viewBox="0 0 640 512">
                                <path
                                    d="M416 176c0 97.2-93.1 176-208 176c-38.2 0-73.9-8.7-104.7-23.9c-7.5 4-16 7.9-25.2 11.4C59.8 346.4 37.8 352 16 352c-6.9 0-13.1-4.5-15.2-11.1s.2-13.8 5.8-17.9l0 0 0 0 .2-.2c.2-.2 .6-.4 1.1-.8c1-.8 2.5-2 4.3-3.7c3.6-3.3 8.5-8.1 13.3-14.3c5.5-7 10.7-15.4 14.2-24.7C14.7 250.3 0 214.6 0 176C0 78.8 93.1 0 208 0S416 78.8 416 176zM231.5 383C348.9 372.9 448 288.3 448 176c0-5.2-.2-10.4-.6-15.5C555.1 167.1 640 243.2 640 336c0 38.6-14.7 74.3-39.6 103.4c3.5 9.4 8.7 17.7 14.2 24.7c4.8 6.2 9.7 11 13.3 14.3c1.8 1.6 3.3 2.9 4.3 3.7c.5 .4 .9 .7 1.1 .8l.2 .2 0 0 0 0c5.6 4.1 7.9 11.3 5.8 17.9c-2.1 6.6-8.3 11.1-15.2 11.1c-21.8 0-43.8-5.6-62.1-12.5c-9.2-3.5-17.8-7.4-25.2-11.4C505.9 503.3 470.2 512 432 512c-95.6 0-176.2-54.6-200.5-129zM228 72c0-11-9-20-20-20s-20 9-20 20V86c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V280c0 11 9 20 20 20s20-9 20-20V266.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V72z" />
                            </svg>
                        </div>
                        <h3 class="">Digital Marketing</h3>
                        <p class="">
                            Boost your online presence with tailored strategies for brand visibility and engagement. Our digital marketing services, including SEO and social media management, deliver measurable results.
                        </p>
                    </div>
                    <div>
                        <div class="grid-cell-home">


                            <svg xmlns="http://www.w3.org/2000/svg" class="" fill="currentColor" viewBox="0 0 384 512">
                                <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z" />
                            </svg>
                        </div>
                        <h3 class="">Mobile App Development</h3>
                        <p class="">
                            Unlock the power of cross-platform mobile app development with React Native and Flutter. From seamless user experiences to efficient codebase management, our expert developers craft versatile
                            apps tailored to your unique business needs.
                        </p>
                    </div>
                    <div>
                        <div class="grid-cell-home">

                            <svg xmlns="http://www.w3.org/2000/svg" class="" fill="currentColor" viewBox="0 0 512 512">
                                <path
                                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c31.2 31.2 81.9 31.2 113.1 0c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-50 50-131 50-181 0s-50-131 0-181s131-50 181 0c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-31.2-31.2-81.9-31.2-113.1 0s-31.2 81.9 0 113.1z" />
                            </svg>
                        </div>
                        <h3 class="">Enterprise Branding</h3>
                        <p class="">
                            Craft a distinctive identity and elevate your brand with Next eBiz's Enterprise Design and Branding services. From logo creation to comprehensive brand guidelines, our team delivers cohesive
                            visual elements that resonate with your target audience.
                        </p>
                    </div>
                    <div>
                        <div class="grid-cell-home">


                            <svg xmlns="http://www.w3.org/2000/svg" class="" fill="currentColor" viewBox="0 0 640 512">
                                <path
                                    d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM625 177L497 305c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L591 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                            </svg>
                        </div>
                        <h3 class="">
                            Dedicated
                            Staffing
                        </h3>
                        <p class="">
                            Next eBiz stands at the forefront of software development, offering a diverse range of services tailored to businesses worldwide. Leveraging our expertise and industry knowledge,
                            we
                            empower enterprises to build cutting-edge business solutions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="client-logo dark:text-white bg-gray-100 dark:bg-gray-700 py-[50px] pt-[100px]">
            <div class="container m-auto px-5 text-center">
                <h3 class="mb-10">Innovative Solutions, Global Impact: Empowering Businesses Worldwide</h3>
                <div class=" text-xl mb-10 ">
                    Embark on a digital journey with our innovative software company, where we craft bespoke solutions tailored to your needs. From cutting-edge software development to captivating app creations and
                    strategic digital marketing, we redefine excellence in multiple industries worldwide. Join hands with us to unlock the full potential of your business and soar to new heights of success.
                </div>
                <IndustriesVue />
            </div>
        </section>


        <section class="client-logo bg-gray-100 dark:bg-gray-700 ">
            <div class=" m-auto  ">
                <Idea :jobcategories="props.jobcategories" />
            </div>
        </section>


        <section class="client-logo bg-gray-100 dark:bg-gray-700 py-[100px]">
            <div class="container m-auto px-5 ">
                <div class="content-title mb-5">
                    <h2 class="text-6xl font-extrabold dark:text-white">We take a <span class="light-red">little pride</span><br>
                        in our solutions<br>
                        contributing <span class="light-green">to their growth.</span>
                    </h2>

                </div>
                <div class="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 gap-8  px-0 py-5">
                    <div class="box"><img src="assets/img/home/clients/client1.png" alt="client logo"></div>
                    <div class="box"><img src="assets/img/home/clients/client2.png" alt="client logo"></div>
                    <div class="box"><img src="assets/img/home/clients/client3.png" alt="client logo"></div>
                    <div class="box"><img src="assets/img/home/clients/client4.png" alt="client logo"></div>
                    <div class="box"><img src="assets/img/home/clients/client5.png" alt="client logo"></div>
                    <div class="box"><img src="assets/img/home/clients/client6.png" alt="client logo"></div>
                    <div class="box"><img src="assets/img/home/clients/client7.png" alt="client logo"></div>
                    <div class="box"><img src="assets/img/home/clients/client8.png" alt="client logo"></div>
                    <div class="box"><img src="assets/img/home/clients/client9.png" alt="client logo"></div>
                    <div class="box"><img src="assets/img/home/clients/client10.png" alt="client logo"></div>
                    <div class="box"><img src="assets/img/home/clients/client11.png" alt="client logo"></div>
                    <div class="box"><img src="assets/img/home/clients/client12.png" alt="client logo"></div>
                    <div class="box"><img src="assets/img/home/clients/client13.png" alt="client logo"></div>
                    <div class="box"><img src="assets/img/home/clients/client14.png" alt="client logo"></div>
                    <div class="box"><img src="assets/img/home/clients/client15.png" alt="client logo"></div>
                    <div class="box"><img src="assets/img/home/clients/client16.png" alt="client logo"></div>
                    <div class="box"><img src="assets/img/home/clients/client17.png" alt="client logo"></div>
                    <div class="box"><img src="assets/img/home/clients/client18.png" alt="client logo"></div>
                    <div class="box"><img src="assets/img/home/clients/client19.png" alt="client logo"></div>
                    <div class="box"><img src="assets/img/home/clients/client20.png" alt="client logo"></div>
                    <div class="box"><img src="assets/img/home/clients/client21.png" alt="client logo"></div>
                    <div class="box"><img src="assets/img/home/clients/client22.png" alt="client logo"></div>
                    <div class="box"><img src="assets/img/home/clients/client23.png" alt="client logo"></div>
                    <div class="box"><img src="assets/img/home/clients/client24.png" alt="client logo"></div>
                </div>
            </div>
        </section>
    </AuthenticatedLayout>
</template>


<style lang="scss" scoped>
.light-red {
    color: #f8752cde;

}

.light-green {
    color: #66d466d4;
}

.box {
    border: 1px solid rgb(101, 101, 101);
    border-radius: 5px;
    min-height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333;

    @apply bg-gray-800 hover:bg-gray-600 transition-all;
}

.box img {
    @apply max-w-[80px] hover:scale-125 transition-all
}

.projects-information {
    ul {
        @apply grid grid-cols-2 gap-0 max-w-[450px] dark:text-white;

        li {
            position: relative;

            strong {
                font-size: 50px;
                display: block;
                font-weight: bolder;
                padding-bottom: 20px;
                padding-left: 20px;

            }

            span {
                position: absolute;
                bottom: 6px;
                font-size: 17px;
                padding-left: 20px;
            }

            .developer {
                border-bottom: 1px solid rgb(179, 179, 179);
                border-right: 1px solid rgb(179, 179, 179);
                color: #ff975c;


            }

            .customer {
                border-bottom: 1px solid rgb(179, 179, 179);
                color: #6986dc;
            }

            .experience {
                border-right: 1px solid rgb(179, 179, 179);
                color: #9ac460;

            }

            .project {
                color: #ce65b7;

            }
        }

    }
}
</style>
