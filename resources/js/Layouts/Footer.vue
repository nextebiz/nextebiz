<template>


    <footer class="bg-gray-200 dark:bg-gray-900 dark:text-white">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div class="lg:flex lg:justify-between">
                <div class="mb-6 md:mb-0">
                    <a href="https://nextebiz.com" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img :src="theme === 'dark' ? '/assets/img/nextebiz-white.svg' : '/assets/img/nextebiz-black.svg'" class="h-14" alt="Nextebiz Logo" />
                    </a>
                    <div class="max-w-[500px] mt-5">
                        At Next eBiz, we're dedicated to pushing the boundaries of technology and innovation. With expertise spanning Laravel, React, Vue, and Flutter, we craft dynamic applications that propel businesses
                        forward. Partner with us to unlock the full potential of your
                        digital endeavors and stay ahead in today's rapidly evolving landscape.
                    </div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 m gap-2 sm:gap-4 ">
                    <div class="lg:col-span-2">
                        <h4 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Services</h4>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <a href="/expertise/fullstack-development   " class="hover:underline">Fullstack Laravel Development</a>
                            </li>
                            <li class="mb-4">
                                <a href="/expertise/wordpress-development" class="hover:underline">Wordpress Development</a>
                            </li>
                            <li class="mb-4">
                                <a href="/expertise/mobile-app-development" class="hover:underline">Mobile App Development</a>
                            </li>
                            <li class="mb-4">
                                <a href="/expertise/e-commerce-services" class="hover:underline">E-commerce Services</a>
                            </li>
                            <li class="mb-4">
                                <a href="/expertise/digital-marketing-expert" class="hover:underline">Digital Marketing Expert</a>
                            </li>
                            <li class="mb-4">
                                <a href="/expertise/virtual-assistant-ebay-amazon-walmart" class="hover:underline">Virtual Assistant Ebay/Amazon/Walmart
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="">
                        <h4 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">About</h4>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">

                            <li class="mb-4">
                                <Link href="/expertise" class="hover:underline">Expertise</Link>
                            </li>
                            <!-- <li class="mb-4">
                                <Link href="/engage-team" class="hover:underline">Engage Team</Link>
                            </li> -->

                            <li class="mb-4">
                                <Link href="/portfolio" class="hover:underline">Portfolio</Link>
                            </li>

                        </ul>
                    </div>
                    <div class="">
                        <h4 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Join Us</h4>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <Link href="/open-positions" class="hover:underline">Open Positions</Link>
                            </li>
                            <li class="mb-4">
                                <Link href="/candidate/register" class="hover:underline">Upload Resume</Link>
                            </li>
                            <li class="mb-4">
                                <Link href="/contact" class="hover:underline">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div class="block sm:flex sm:items-center sm:justify-between">
                <div class="sm:flex items-center text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    <div class="mb-3 sm:mb-0">
                        <span class="">© {{ new Date().getFullYear() }} <a href="https://nextebiz.com/" class="hover:underline">Next eBiz</a>.
                        </span>
                    </div>
                    <div class="flex items-center ">
                        <span class="ms-0 sm:ms-2">Site made with</span>

                        <div class="w-[20px] mx-1 fill-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                    d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                            </svg>
                        </div>

                        <span>in Laravel + Vue</span>
                    </div>
                </div>

            </div>
        </div>
    </footer>

</template>

<script setup>

import { SettingsStore } from "@/store/SettingsStore";
import { Link } from "@inertiajs/vue3";
import { computed, onUpdated, ref } from "vue";

const settingsStore = SettingsStore();

const theme = computed(() => {
    return settingsStore.getTheme;
})

</script>

<style lang="scss" scoped></style>
