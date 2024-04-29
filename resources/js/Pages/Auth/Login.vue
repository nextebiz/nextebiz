<script setup>
import Checkbox from '@/Components/Checkbox.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>

    <Head title="Log in" />
    <AuthenticatedLayout>

        <div class="container m-auto my-[0px] sm:my-[50px] lg:my-[100px]">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 bg-gray-100 p-0 sm:p-10">
                <div class="bg-gray-200 p-10">
                    <div class="text-center  py-5">
                        <h2 class="text-4xl font-extrabold">Sign Up</h2>
                        <div class="border-b-2 border-gray-300 border-dashed mt-3"></div>
                        <div>
                            <h2>hi there</h2>
                        </div>
                    </div>
                    <div class="">
                        <div class="grid grid-cols-1 xl:grid-cols-2 gap-3   ">
                            <div class="bg-gray-300 p-4 py-8 xl:p-8 text-center rounded-lg relative">
                                <div class="m-auto bg-red-500 w-[12px] h-0">
                                    <svg class="w-[24px] absolute top-[-8px] fill-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path
                                            d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z" />
                                    </svg>
                                </div>
                                <p class="mb-3">Searching For Talent?</p>
                                <Link class="btn-dark whitespace-nowrap" href="/employer/register">Employer Sign Up</Link>

                            </div>
                            <div class="bg-gray-300 p-4 py-8 xl:p-8  text-center rounded-lg relative">
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
                <div class="  bg-gray-200 ">
                    <div class="px-[20px] min-w-[300px] max-w-[400px] m-auto p-10">
                        <div class="text-center  py-5">
                            <h2 class="text-4xl font-extrabold">Sign In</h2>
                            <div class="border-b-2 border-gray-300 border-dashed mt-3"></div>
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
                                    class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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


    </AuthenticatedLayout>
</template>
