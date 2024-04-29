<script setup>

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import JobWorkingHours from '@/Components/JobWorkingHours.vue'
import { Link } from '@inertiajs/vue3';
import RegisterCandidate from "@/Components/RegisterCandidate.vue";
import { onMounted } from 'vue';

const props = defineProps({
    'jobpost': Object,
    'category': String,
    'countries': Array,
    'applied': Boolean
})
onMounted(() => {
    console.log(props.applied)
})
</script>

<template>
    <AuthenticatedLayout>
        <div class="container m-auto my-[50px] px-5">
            <!-- {{ props.applied === true ? 'yes' : 'no' }} -->
            <Link href="/open-positions" class="text-orange-500 fill-orange-500 hover:fill-orange-600 hover:text-orange-600 transition-all">

            <div class="flex items-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-[12px]  ">
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                </svg>
                <span class="ml-3">Open Positions</span>
            </div>

            </Link>
            <div class="border-b border-b-orange-500 pb-3 flex items-center justify-between">
                <h1 class="mr-5">{{ jobpost.title }}</h1>
                <a target="_blank" :href="`/share/${jobpost.slug}`">
                    <div class="flex items-center border border-gray-300 py-1 px-3 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-[25px]">
                            <path
                                d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z" />
                        </svg>
                        <span class="ms-3">share</span>
                    </div>
                </a>
            </div>
            <div class="mb-3">
                <div><span class="font-bold">ID: </span>
                    {{ jobpost?.id }}
                </div>
            </div>
            <div class="mb-3">
                <div><span class="font-bold">Job Category: </span>
                    {{ category }}
                </div>
            </div>
            <div class="mb-3">
                <div><span class="font-bold">Candidates Required: </span>
                    {{ jobpost.candidates_required }}
                </div>
            </div>
            <div class="mb-3">
                <div><span class="font-bold">Job Type: </span>
                    {{ jobpost.job_type == 'fulltime' ? 'Full-Time' : jobpost.job_type == 'parttime' ? 'Part-Time' : 'Contract' }}
                </div>
            </div>

            <div class="mb-3">
                <div><span class="font-bold">Timing: </span>
                    <JobWorkingHours :working_hours="jobpost.working_hours"></JobWorkingHours>
                </div>
            </div>
            <div class="flex items-center mb-3">
                <div class="mr-3 font-bold">Cities: </div>
                <div v-for="city in jobpost.cities" :key="city" class="border border-gray-200 px-3 py-1 mr-2 capitalize text-bold bg-gray-100 rounded-lg ">
                    {{ city }}
                </div>
            </div>
            <div class="border-b border-b-orange-500 pb-3 mb-3">
                <div v-html="jobpost?.description" class="myck">
                </div>
            </div>
            <div class="mt-[20px]">

                <div v-if="$page.props.auth?.user == null" class="max-w-[400px] m-auto">
                    <!-- not logged in -->
                    <h4 class="mb-[20px]">Apply Now</h4>
                    <RegisterCandidate :countries="countries" :jobpostid="jobpost?.id"></RegisterCandidate>

                </div>
                <div v-else>
                    <!-- logged in -->
                    <!-- check if user has already applied then show message -->
                    <div>
                        <div v-if="props.applied" class="flex items-center">

                            <div class="bg-green-500 px-5 py-2 text-white w-[120px] text-center mr-3">
                                <span>Applied</span>
                            </div>
                            You have already applied for this job.
                        </div>
                        <div v-else>
                            <button class="bg-orange-500 px-5 py-2 text-white">Apply</button>
                        </div>
                    </div>

                    <br>
                    else check if user has resume attached. also allow user to update resume

                    <br>
                    then apply

                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>


<style lang="scss" scoped></style>
