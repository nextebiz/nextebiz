<template>
    <AuthenticatedLayout>
        <div class="container m-auto px-5">
            <div class="dark:text-white myck my-[50px]">
                <h2>We are Hiring!</h2>
                <p class="mb-3 ">At Next eBiz, we specialize in delivering cutting-edge software solutions to clients across diverse industries. From custom software development to innovative digital solutions,
                    we're committed to excellence in everything we do.
                </p>
                <h4>What We Offer:
                </h4>
                <ul>
                    <li>
                        Opportunity for Growth: Join a team that values your professional development and offers opportunities for growth.
                    </li>
                    <li>
                        Innovative Projects: Work on exciting projects that challenge and inspire you, pushing the boundaries of technology.
                    </li>
                    <li>
                        Collaborative Culture: Be part of a supportive and inclusive team that fosters collaboration and creativity.
                    </li>
                    <li>
                        Competitive Benefits: Enjoy competitive salaries, comprehensive benefits packages, and perks designed to enhance your work-life balance.
                    </li>
                </ul>
                <h4>Who We're Looking For:
                </h4>
                <p>
                    We're seeking passionate individuals with a drive for excellence and a desire to make a difference. Whether you're a seasoned developer, a creative designer, or a strategic thinker, we have
                    opportunities
                    for you to shine.
                </p>
                <h4>How to Apply:
                </h4>
                <p>
                    Ready to take the next step in your career? Visit our careers page at jobs to explore current openings and submit your application. Join us in shaping the future of technology!
                    Don't miss out on this exciting opportunity to be part of a dynamic team driving innovation in software services. Apply today and let's build something incredible together!
                </p>
            </div>


        </div>
        <div>
            <FeaturedJobs :categories="categories" full="full"></FeaturedJobs>
        </div>

    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue"
import { onMounted } from "vue";
import { initFlowbite, initModals } from 'flowbite'
import FeaturedJobs from '@/Components/FeaturedJobs.vue'

const props = defineProps({
    'categories': Object
})

onMounted(() => {
    initFlowbite();
})
</script>

<style lang="scss" scoped></style>
