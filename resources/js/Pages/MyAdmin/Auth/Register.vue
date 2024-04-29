<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import Dropdown from '@/Components/Dropdown.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

const props = defineProps({
    countries: Array
})

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    phone: '',
    country: ''
});

const submit = () => {
    form.post(route('candidate.register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>

    <Head title="Register" />
    <AuthenticatedLayout>
        <div class="container m-auto my-[0px] sm:my-[50px]">
            <div class="grid grid-cols-1 lg:grid-cols-2 bg-gray-100 p-4 sm:p-10 pb-[50px]">
                <div class="border-r-0 lg:border-r-2 mb-5 lg:mb-0 pr-5 py-[30px] sm:py-[0px]">
                    <h2 class="text-4xl font-extrabold mb-5">Candidate Sign Up</h2>
                    <p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum voluptates numquam officia placeat dicta ipsam sit inventore perferendis beatae, amet nam culpa, repudiandae temporibus
                        corrupti, expedita maiores. Blanditiis, a molestiae!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum voluptates numquam officia placeat dicta ipsam sit inventore perferendis beatae, amet nam culpa, repudiandae temporibus corrupti,
                        expedita maiores. Blanditiis, a molestiae!</p>
                    {{ form }}
                </div>
                <div class="min-w-[320px] max-w-[400px] m-auto">

                    <form @submit.prevent="submit">
                        <div>
                            <InputLabel for="name" value="Candidate Name" />

                            <TextInput id="name" type="text" class="mt-1 block w-full" v-model="form.name" required autofocus autocomplete="name" />

                            <InputError class="mt-2" :message="form.errors.name" />
                        </div>

                        <div class="mt-4">
                            <InputLabel for="emailx" value="Candidate Email" />

                            <TextInput id="email" type="email" class="mt-1 block w-full" v-model="form.email" required autocomplete="username" />

                            <InputError class="mt-2" :message="form.errors.email" />
                        </div>

                        <div class="mt-4">
                            <InputLabel for="password" value="Password" />

                            <TextInput id="password" type="password" class="mt-1 block w-full" v-model="form.password" required autocomplete="new-password" />

                            <InputError class="mt-2" :message="form.errors.password" />
                        </div>

                        <div class="mt-4">
                            <InputLabel for="password_confirmation" value="Confirm Password" />

                            <TextInput id="password_confirmation" type="password" class="mt-1 block w-full" v-model="form.password_confirmation" required autocomplete="new-password" />

                            <InputError class="mt-2" :message="form.errors.password_confirmation" />
                        </div>

                        <div class="mt-4">

                            <InputLabel for="phone" value="Phone Number" />

                            <TextInput id="phone" type="text" class="mt-1 block w-full" v-model="form.phone" required autofocus autocomplete="name" />

                            <InputError class="mt-2" :message="form.errors.phone" />
                        </div>


                        <div class="mt-4">
                            <InputLabel for="countries" value="Country" class="mb-1" />

                            <select v-model="form.country" class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm">
                                <option id="countries" class="w-full" v-for="country in countries" :key="country.id" :value="country.name">
                                    {{ country.name }}
                                </option>
                            </select>
                            <InputError class="mt-2" :message="form.errors.country" />


                        </div>

                        <div class="flex items-center justify-end mt-4">
                            <Link :href="route('login')" class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Already registered?
                            </Link>

                            <PrimaryButton class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                Register
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
