<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue"
import { onMounted } from "vue";
import { initFlowbite, initModals } from 'flowbite'
import MessageForm from "@/Pages/MessageBox/MessageForm.vue"
import { Head, useForm } from "@inertiajs/vue3";
const props = defineProps({
    jobcategories: Object
})
const form = useForm({
    selected_category: 1
})

onMounted(() => {
    initFlowbite();
})
</script>

<template>
    <AuthenticatedLayout>

        <Head title="Contact Us" />
        <div class="container m-auto my-[50px] dark:text-white px-3 sm:px-5">
            <h1 class="mb-5">Contact</h1>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="border-e border-e-gray-200 dark:border-e-gray-600 p-3">
                    <div class="mb-5">
                        <h4 class="mb-3 border-b border-b-gray-200 dark:border-b-gray-600 pb-3">Next eBiz - Pakistan</h4>
                        <p class="mb-3">
                            LG10, Empire Heights Block A<br />
                            Hill Road, Phase 6, Bahria Town<br />
                            Islamabad, Pakistan.
                        </p>
                        <p class="mb-3">
                            <strong>Phone / WhatsApp</strong>: <a href="tel:+923361633321">+92-3361633321</a> (Imran Malik)
                        </p>
                        <p class="mb-3">
                            <strong>Phone / WhatsApp</strong>: <a href="tel:+923005512030">+92-3005512030</a> (Izhar khan)
                        </p>
                        <p class="mb-3">
                            <strong>Email</strong>: <a href="mailto:info@nextebiz.com">info@nextebiz.com</a>
                        </p>
                    </div>
                    <div>
                        <h4 class="mb-3 border-b border-b-gray-200 dark:border-b-gray-600 pb-3">Next eBiz - Dubai</h4>
                        <p class="mb-3">
                            3rd Floor Office #308<br/>
                            Dusseldorf Business Point - Al Barsha 1 <br/>
                            Dubai - United Arab Emirates
                        </p>
                        <p class="mb-3">
                            <strong>Phone / WhatsApp</strong>: <a href="tel:+971509511507">+971-509511507</a>
                        </p>
                        <p class="mb-3">
                            <strong>Email</strong>: <a href="mailto:uae@nextebiz.com">uae@nextebiz.com</a>
                        </p>
                    </div>
                </div>
                <div class="p-3">
                    <h4 class="mb-3">Send Us Message</h4>
                    <p class="mb-3">
                        For questions about pricing or how our services can benefit your organization, please complete and submit the form below and a member of our team will be in touch to discuss your
                        requirements.

                    </p>
                    <div>
                        <MessageForm :jobcategories="props.jobcategories" :selected_category="form.selected_category" :prices="false" />
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>



<style lang="scss" scoped></style>
