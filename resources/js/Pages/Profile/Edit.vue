<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import DeleteUserForm from './Partials/DeleteUserForm.vue';
import UpdatePasswordForm from './Partials/UpdatePasswordForm.vue';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import { computed } from 'vue';
const props = defineProps({
    mustVerifyEmail: Boolean,
    status: String,
    auth: Object
});
const form = useForm({
    role: props.auth?.user?.roles[0].name
})
function goToDashboard() {
    let role = props.auth?.user?.roles[0].name;
}

const dashboard = computed(() => {
    let role = props.auth?.user?.roles[0].name;
    if (role === 'admin') {
        return 'myadmin'
    }
    if (role === 'employer') {
        return 'employer'
    }
    if (role === 'candidate') {
        return 'candidate'
    }
})
</script>

<template>

    <Head title="Profile" />

    <AuthenticatedLayout>
        <header class="bg-white dark:bg-gray-700 shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">

                <div class="flex items-center">
                    <Link :href="dashboard" class="px-4 me-5 border border-gray-300 dark:border-gray-500 fill-orange-500 hover:border-orange-500 p-2 rounded-md transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-6 ">
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                    </svg>
                    </Link>

                    <h3 class=" text-gray-800 dark:text-white">Profile</h3>
                </div>
            </div>
        </header>


        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <UpdateProfileInformationForm :must-verify-email="props.mustVerifyEmail" :status="props.status" class="max-w-xl" />
                </div>

                <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <UpdatePasswordForm class="max-w-xl" />
                </div>

                <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <DeleteUserForm class="max-w-xl" />
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
