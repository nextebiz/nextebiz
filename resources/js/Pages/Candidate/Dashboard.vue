<script setup>
import { Head, Link, useForm, usePage } from '@inertiajs/vue3';
import MenuButton from '@/Components/MenuButton.vue';
import CandidateLayout from './CandidateLayout.vue';

import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { ref } from 'vue';


const props = defineProps({
    auth: Object,
    jobpostusers: Object
});


const user = usePage().props.auth.user;

const form = useForm({
    user_id: props.auth?.user?.id,
    jobpost_id: 0
});

function withdraw(jobpost_id) {
    if (confirm('Are you sure you want to withdraw your application from this job?')) {
        form.user_id = props.auth?.user?.id;
        form.jobpost_id = jobpost_id;

        form.post('/candidate/withdraw');

    }
}

</script>

<template>

    <Head title="My Applications" />

    <CandidateLayout>

        <MenuButton title="My Applications" />
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 dark:text-white">

                <div class="relative overflow-x-auto px-5">
                    <div v-if="jobpostusers.length === 0">
                        You have not applied to any job.
                        <Link href="/open-positions" class="link-orange">Click here</Link> to view
                        <Link href="/open-positions" class="link-orange">open positions</Link>.
                    </div>
                    <div v-for="application in jobpostusers" :key="application" class=" block  justify-between md:flex md:justify-between border-b pb-5 mb-5">
                        <div class="">
                            <h5>Applied to</h5>
                            <Link :href="`/jobs/${application.jobpost.slug}`">

                            <h2 class="link-orange">{{ application.jobpost.title }}</h2>
                            </Link>
                            <div class="text-xs mb-3">Date Applied: {{ new Date(application.jobpost.created_at).toLocaleString() }}</div>
                            <p class="pe-5 mb-3">{{ application.jobpost.small_description }}</p>
                        </div>
                        <div class="md:text-center">
                            <p class="mb-3">
                                <span class="font-bold mr-2">Status:</span>
                                <span>Pending</span>
                            </p>
                            <button @click.prevent="withdraw(application.jobpost.id)" class="btn-orange font-bold whitespace-nowrap">Withdraw Application</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </CandidateLayout>
</template>
