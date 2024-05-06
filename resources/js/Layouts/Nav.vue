<template>
    <div class="pb-[72px] sm:pb-[88px]">

        <nav class="fixed w-full z-50 bg-gray-200 border-b border-b-gray-300 dark:border-b-gray-800 dark:bg-gray-900">
            <div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
                <Link href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img :src="theme == 'dark' ? '/assets/img/nextebiz-white.svg' : '/assets/img/nextebiz-black.svg'" class="h-10 sm:h-14" alt="Nextebiz Logo" />
                </Link>

                <div class="flex items-center lg:order-2 space-x-1 lg:space-x-2 rtl:space-x-reverse">

                    <Link href="/login" class="nav-link-top flex" v-if="$page.props.auth?.user == null">
                    <div class="flex items-center">
                        <span class="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="mt-1 w-3 dark:fill-orange-600">
                                <path
                                    d="M144 144c0-44.2 35.8-80 80-80c31.9 0 59.4 18.6 72.3 45.7c7.6 16 26.7 22.8 42.6 15.2s22.8-26.7 15.2-42.6C331 33.7 281.5 0 224 0C144.5 0 80 64.5 80 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H144V144z" />
                            </svg>
                        </span>
                        <span>
                            Sign In
                        </span>
                    </div>
                    </Link>

                    <div class="flex sm:items-center sm:ms-6" v-if="$page.props.auth?.user !== null">
                        <!-- Settings Dropdown -->
                        <div class="ms-3 relative">
                            <Dropdown align="right" width="48">
                                <template #trigger>
                                    <span class="inline-flex rounded-md">
                                        <button type="button"
                                            class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150">
                                            {{ $page.props.auth?.user?.name }}

                                            <svg class="ms-2 -me-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                    </span>
                                </template>

                                <template #content>
                                    <div v-if="$page.props.auth?.user?.roles[0].name === 'candidate'">
                                        <DropdownLink :href="route('candidate.index')" class="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor"
                                                class="mr-3 flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">

                                                <path
                                                    d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V288H216c-13.3 0-24 10.7-24 24s10.7 24 24 24H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM384 336V288H494.1l-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39H384zm0-208H256V0L384 128z" />
                                            </svg>
                                            <span> My Applications</span>
                                        </DropdownLink>
                                        <DropdownLink href="/candidate/profile" class="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor"
                                                class="mr-3 flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                                                <path
                                                    d="M512 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H512zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM208 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H304c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H176zM376 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z" />
                                            </svg>
                                            <span>My Profile</span>
                                        </DropdownLink>
                                        <DropdownLink :href="route('profile.password')" class="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"
                                                class="mr-3 flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                                                <path
                                                    d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                                            </svg>

                                            <span>Change Password</span>
                                        </DropdownLink>
                                        <DropdownLink :href="route('profile.deleteaccount')" class="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"
                                                class="mr-3 flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                                                <path
                                                    d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                                            </svg>
                                            <span>Delete Account</span>
                                        </DropdownLink>
                                    </div>
                                    <div v-if="$page.props.auth?.user?.roles[0].name === 'employer'">
                                        <DropdownLink :href="route('employer.index')"> Employer Dashboard </DropdownLink>

                                    </div>
                                    <div v-if="$page.props.auth?.user?.roles[0].name === 'admin'">
                                        <DropdownLink :href="route('myadmin.index')"> Admin Dashboard </DropdownLink>
                                        <DropdownLink :href="route('profile.edit')"> Profile </DropdownLink>
                                    </div>

                                    <DropdownLink :href="route('logout')" method="post" as="button" class="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"
                                            class="mr-3 flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                                            <path
                                                d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                                        </svg>

                                        <span>Log Out</span>
                                    </DropdownLink>
                                </template>
                            </Dropdown>
                        </div>
                    </div>
                    <button data-collapse-toggle="mega-menu" type="button"
                        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mega-menu" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <button @click="toggleTheme" id="theme-toggle" type="button"
                        class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                        <svg id="theme-toggle-dark-icon" :class="theme == 'dark' ? 'hidden' : ''" class=" w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                        </svg>
                        <svg id="theme-toggle-light-icon" :class="theme !== 'dark' ? 'hidden' : ''" class=" w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                fill-rule="evenodd" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div id="mega-menu" class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1">
                    <ul class="flex flex-col mt-4 bg-gray-100 dark:bg-gray-900 lg:bg-transparent  rounded-lg font-medium lg:flex-row lg:mt-0 lg:space-x-8 rtl:space-x-reverse">

                        <!-- <li class="border-b-2 lg:border-0 border-b-gray-200 dark:border-b-gray-700">
                            <Link href="/about" class="nav-link-top">

                            About
                            </Link>
                        </li> -->
                        <li class="border-b-2 lg:border-0 border-b-gray-200 dark:border-b-gray-700">
                            <Link href="/expertise" class="nav-link-top">

                            Expertise
                            </Link>
                        </li>
                        <!-- <li class="border-b-2 lg:border-0 border-b-gray-200 dark:border-b-gray-700">
                            <Link href="/engage-team" class="nav-link-top">

                            Engage Team
                            </Link>
                        </li> -->
                        <li class="border-b-2 lg:border-0 border-b-gray-200 dark:border-b-gray-700">
                            <Link href="/open-positions" class="nav-link-top">
                            Open Positions
                            </Link>
                        </li>
                        <li class="border-b-2 lg:border-0 border-b-gray-200 dark:border-b-gray-700">
                            <Link href="/portfolio" class="nav-link-top">
                            Portfolio
                            </Link>
                        </li>
                        <li class="border-b-2 lg:border-0 border-b-gray-200 dark:border-b-gray-700">
                            <Link href="/contact" class="nav-link-top">
                            Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>


<script setup>
import { onMounted, computed, onUpdated } from "vue";
import { Link } from "@inertiajs/vue3";

import { SettingsStore } from "@/store/SettingsStore";
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';

const settingsStore = SettingsStore()

function toggleTheme() {
    setTheme(theme.value === 'dark' ? ('light') : ('dark'));
}
const theme = computed(() => {
    return settingsStore.getTheme;
})

function setTheme(theme) {
    settingsStore.setTheme(theme)
}

function checkTheme() {
    if (theme.value == "dark") {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

onUpdated(() => {
    checkTheme();
})
onMounted(() => {
    checkTheme();
})

</script>

<style lang="scss" scoped></style>
