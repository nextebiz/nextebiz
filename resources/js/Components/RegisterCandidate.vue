<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import Dropdown from '@/Components/Dropdown.vue';
const props = defineProps({
    countries: Array,
    jobpostid: Number
})
const form = useForm({
    name: 'asim',
    email: 'asim@malik.com',
    password: 'imranmalik',
    password_confirmation: 'imranmalik',
    phone: '03331231234',
    country: 'Pakistan',
    resume_file: '',
    jobpostid: props.jobpostid
});

const submit = () => {
    form.post(route('candidate.register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>
<template>
    <div class="">
        <form @submit.prevent="submit">
            <div>
                <InputLabel for="name" value="Candidate Name" />

                <TextInput placeholder="Candidate Name" id="name" type="text" class="mt-1 block w-full" v-model="form.name" required  autocomplete="name" />

                <InputError class="mt-2" :message="form.errors.name" />
            </div>

            <div class="mt-4">
                <InputLabel for="emailx" value="Candidate Email" />

                <TextInput id="email" placeholder="Candidate Email" type="email" class="mt-1 block w-full" v-model="form.email" required autocomplete="username" />

                <InputError class="mt-2" :message="form.errors.email" />
            </div>

            <div class="mt-4">
                <InputLabel for="password" value="Password" />

                <TextInput placeholder="Password" id="password" type="password" class="mt-1 block w-full" v-model="form.password" required autocomplete="new-password" />

                <InputError class="mt-2" :message="form.errors.password" />
            </div>

            <div class="mt-4">
                <InputLabel for="password_confirmation" value="Confirm Password" />

                <TextInput placeholder="Re-Type Password" id="password_confirmation" type="password" class="mt-1 block w-full" v-model="form.password_confirmation" required autocomplete="new-password" />

                <InputError class="mt-2" :message="form.errors.password_confirmation" />
            </div>

            <div class="mt-4">

                <InputLabel for="phone" value="Phone Number" />

                <TextInput placeholder="Phone Number" id="phone" type="text" class="mt-1 block w-full" v-model="form.phone" required  autocomplete="name" />

                <InputError class="mt-2" :message="form.errors.phone" />
            </div>


            <div class="mt-4">
                <InputLabel for="countries" value="Country" class="mb-1" />

                <select v-model="form.country" class="dark:text-gray-900 w-[320px] sm:w-[400px] border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm">
                    <option id="countries" class="w-full" v-for="country in countries" :key="country.id" :value="country.name">
                        {{ country.name }}
                    </option>
                </select>
                <InputError class="mt-2" :message="form.errors.country" />


            </div>


            <div class="mt-4">

                <InputLabel for="resume_file" value="Resume / CV file (PDF Doc, or Docx)" />

                <input type="file" id="resume_file" class="mt-1 block w-full" @input="form.resume_file = $event.target.files[0]" required  autocomplete="name" />
                <!-- <TextInput id="resume_file" type="file" class="mt-1 block w-full" v-model="form.resume_file" required  autocomplete="name" /> -->
                <InputError class="mt-2" :message="form.errors.resume_file" />


            </div>

            <div class="flex items-center justify-end mt-4">
                <Link :href="route('login')" class="underline text-sm text-gray-600 hover:text-gray-900 dark:hover:text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Already registered?
                </Link>

                <PrimaryButton class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Register & Apply
                </PrimaryButton>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped></style>
