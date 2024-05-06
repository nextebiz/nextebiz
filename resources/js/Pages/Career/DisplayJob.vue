<script setup>

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import JobWorkingHours from '@/Components/JobWorkingHours.vue'
import { Head, Link, useForm } from '@inertiajs/vue3';
import RegisterCandidate from "@/Components/RegisterCandidate.vue";
import { onMounted } from 'vue';

const props = defineProps({
    'jobpost': Object,
    'category': String,
    'countries': Array,
    'applied': Boolean,
    'auth': Object
})

const form = useForm({
    jobpost_id: props.jobpost?.id,
    user_id: props.auth?.user?.id
})

function applyjob() {
    form.post('/applyjob', { preserveScroll: true });
}

onMounted(() => {
    // console.log(props.applied)
})
</script>

<template>

    <Head :title="`${jobpost?.title}`" />

    <AuthenticatedLayout>
        <div class="container m-auto my-[50px] px-5 dark:text-white">
            <!-- {{ props.applied === true ? 'yes' : 'no' }} -->
            <Link href="/open-positions" class="link-orange fill-orange-500 hover:fill-orange-600 hover:text-orange-600 transition-all">

            <div class="flex items-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-[12px]  ">
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                </svg>
                <span class="ml-3">Open Positions</span>
            </div>
            </Link>
            <div class="border-b border-b-orange-500 pb-3 flex items-center justify-between mb-3">
                <h1 class="mr-5">{{ jobpost.title }}</h1>
                <a target="_blank" :href="`/share/${jobpost.slug}`" class="btn-gray">
                    <div class="flex items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-[20px] fill-gray-600">
                            <path
                                d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z" />
                        </svg>
                        <span class="ms-3">share</span>
                    </div>
                </a>
            </div>
            <div class="mb-3 hidden">
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
                <div v-for="city in jobpost.cities" :key="city" class="border border-gray-200 dark:border-gray-600 px-3 py-1 mr-2 capitalize text-bold bg-gray-100 dark:bg-gray-800 rounded-lg ">
                    {{ city }}
                </div>
            </div>
            <div class="border-b border-b-orange-500 pb-3 mb-3">
                <div v-html="jobpost?.description" class="myck">
                </div>
            </div>
            <div class="mt-[20px]">
                <!-- {{ $page.props.auth?.user?.roles[0].name }} -->
                <div v-if="$page.props.auth?.user == null || $page.props.auth?.user.roles[0].name !== 'candidate'" class="max-w-[400px] m-auto">
                    <!-- not logged in -->
                    <h4 class="mb-[20px]">Apply Now</h4>
                    <RegisterCandidate :countries="countries" :jobpostid="jobpost?.id"></RegisterCandidate>


                </div>
                <div v-else>
                    <!-- logged in -->
                    <!-- check if user has already applied then show message -->
                    <div>
                        <div v-if="props.applied" class="flex items-center">

                            <div class="bg-green-500 px-5 py-2 text-white w-[150px] text-center mr-3 font-bold flex items-center justify-center">
                                <span>Applied</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="w-[20px] h-[20px] fill-white ms-3">
                                    <path
                                        d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM305 273L177 401c-9.4 9.4-24.6 9.4-33.9 0L79 337c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L271 239c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                </svg>
                            </div>
                            You have applied for this job.
                            <Link class="text-orange-500 mx-1" href="/open-positions">Click here</Link> to see more jobs.
                        </div>
                        <div v-else>
                            <div class="flex items-center">
                                <button @click="applyjob" class="btn-orange font-bold uppercase">
                                    <span>Apply Now</span>
                                </button>
                                <div class="ms-3">You are logged in as {{ auth.user.name }}</div>
                            </div>

                            <br>

                            <Link href="/candidate/profile" class="link-orange flex items-center mt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-[20px] h-[20px] fill-orange-500 mr-2">
                                <path
                                    d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
                            </svg>
                            <span>Click here to update resume</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>


<style lang="scss" scoped></style>
