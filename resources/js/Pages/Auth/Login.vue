<script setup>
import Checkbox from '@/Components/Checkbox.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import MessageForm from "../MessageBox/MessageForm.vue";
import { initFlowbite } from 'flowbite'
import { onMounted } from 'vue';

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
    jobcategories: Object

});


const form = useForm({
    email: '',
    password: '',
    remember: false,
    selected_category: 1

});

function changeSelectedCategory(id) {
    form.selected_category = id
}

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};

onMounted(() => {
    initFlowbite();
})
</script>

<template>

    <Head title="Log in" />
    <AuthenticatedLayout>

        <div class="container m-auto my-[0px] sm:my-[50px] lg:my-[100px]">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 bg-gray-100 dark:bg-gray-700 p-0 sm:p-10 dark:text-white">
                <div class="bg-gray-200 dark:bg-gray-800 p-10">
                    <div class="text-center  py-5 mb-3">
                        <h2 class="text-4xl font-extrabold">Sign Up</h2>
                        <div class="border-b-2 border-gray-300 dark:border-gray-600 border-dashed mt-3"></div>
                    </div>
                    <div class="">
                        <div class="grid grid-cols-1 xl:grid-cols-2 gap-3   ">
                            <div class="bg-gray-300 dark:bg-gray-900 p-4 py-8 xl:p-8 text-center rounded-lg relative">
                                <div class="m-auto bg-red-500 w-[12px] h-0">
                                    <svg class="w-[24px] absolute top-[-8px] fill-gray-900 dark:fill-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path
                                            d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z" />
                                    </svg>
                                </div>
                                <p class="mb-2">Searching For Talent?</p>
                                <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" class="w-full" type="button">
                                    <div class="btn-dark py-1 dark:bg-gray-600 dark:hover:bg-gray-700 whitespace-nowrap dark:border dark:border-gray-600">
                                        <span class=" ">
                                            Employer Connect
                                        </span>
                                    </div>
                                </button>
                                <!-- <Link class="btn-dark dark:bg-gray-600 dark:hover:bg-gray-700 whitespace-nowrap dark:border dark:border-gray-600" href="/employer/register">
                                Employer Connect
                                </Link> -->

                            </div>
                            <div class="bg-gray-300 dark:bg-gray-900 p-4 py-8 xl:p-8  text-center rounded-lg relative">
                                <div class="m-auto bg-red-500 w-[12px] h-0">
                                    <svg class="w-[24px] absolute top-[-8px] fill-orange-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path
                                            d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z" />
                                    </svg>
                                </div>
                                <p class="mb-3">Searching for Job?</p>
                                <Link class="btn-orange whitespace-nowrap" href="/candidate/register">Candidate Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="  bg-gray-200 dark:bg-gray-800">
                    <div class="px-[20px] min-w-[300px] max-w-[400px] m-auto p-10">
                        <div class="text-center  py-5">
                            <h2 class="text-4xl font-extrabold">Sign In</h2>
                            <div class="border-b-2 border-gray-300 dark:border-gray-600 border-dashed mt-3"></div>
                        </div>
                        <form @submit.prevent="submit">
                            <div>
                                <InputLabel for="email" value="Email" />

                                <TextInput id="email" type="email" class="mt-1 block w-full" v-model="form.email" required autofocus autocomplete="username" />

                                <InputError class="mt-2" :message="form.errors.email" />
                            </div>

                            <div class="mt-4">
                                <InputLabel for="password" value="Password" />

                                <TextInput id="password" type="password" class="mt-1 block w-full" v-model="form.password" required autocomplete="current-password" />

                                <InputError class="mt-2" :message="form.errors.password" />
                            </div>

                            <div class="block mt-4">
                                <label class="flex items-center">
                                    <Checkbox name="remember" v-model:checked="form.remember" />
                                    <span class="ms-2 text-sm text-gray-600">Remember me</span>
                                </label>
                            </div>

                            <div class="flex items-center justify-end mt-4">
                                <Link v-if="canResetPassword" :href="route('password.request')"
                                    class="underline text-sm text-gray-600 hover:text-gray-900 dark:hover:text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Forgot your password?
                                </Link>

                                <PrimaryButton class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                    Log in
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
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
                        <MessageForm :jobcategories="jobcategories" :selected_category="form.selected_category" :prices="false" />
                    </div>
                </div>
            </div>
        </div>

    </AuthenticatedLayout>
</template>
