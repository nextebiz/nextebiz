<script setup>
import { useForm } from "@inertiajs/vue3";
import { onMounted, onUpdated, ref } from "vue";
import { useReCaptcha } from "vue-recaptcha-v3";

const props = defineProps({
    jobcategories: Object,
    selected_category: Number,
    prices: Boolean,
})

const sent = ref(false);

const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()
const recaptcha = async () => {
    await recaptchaLoaded()
    form.captcha_token = await executeRecaptcha('login')
    sendMessage();
}


const form = useForm({
    name: "",
    email: '',
    phone: '',
    category_id: 1,
    category_name: '',
    message: '',
    message_type: 'Client Query'
})


function resetForm() {
    sent.value = false;
    form.message = '';
}
function sendMessage() {
    form.category_name = props.jobcategories[form.category_id - 1].title;
    form.post('/messagebox', { preserveScroll: true });
    sent.value = true;
}
function catchange(e) {
}
onUpdated(() => {
    // form.name = props.name
    form.category_id = props.selected_category;
})
onMounted(() => {
    // console.log(props.jobcategories)
    // console.log(props.selected_category)
    initFlowbite();
})
</script>
<template>

    <form v-if="sent == false" class="" @submit.prevent="recaptcha">
        <div class="grid gap-4 mb-4 grid-cols-2">
            <div class="col-span-2">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="text" v-model="form.name" id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type your name" required>
            </div>
            <div class="col-span-2">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" v-model="form.email" id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type email" required>
            </div>
            <div class="col-span-2">
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                <input type="text" v-model="form.phone" id="phone"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type phone" required>
            </div>

            <div class="col-span-2">
                <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Required Talent</label>
                <select id="category" v-model="form.category_id" @change="catchange"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option selected>Select category</option>
                    <option v-for="category in props.jobcategories" :key="category.id" :value="category.id" :selected="category.id == props.selected_category">
                        <div v-if="prices">
                            {{ category.title }} - Starting from ${{ category.min }} / Hour
                        </div>
                        <div v-else>
                            {{ category.title }}

                        </div>
                    </option>
                </select>
            </div>
            <div class="col-span-2">
                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Description</label>
                <textarea id="description" rows="4" v-model="form.message"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write project description here" required></textarea>
            </div>
        </div>
        <button type="submit"
            class="mb-5 text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path>
            </svg>
            Send Message
        </button>
        <div v-if="form.errors.captcha_token" class="my-3 text-red-500">
            {{ form.errors.captcha_token }}
        </div>
        <div class="flex items-center justify-center mb-0 border border-gray-200 dark:border-gray-600 p-2 rounded-lg fill-red-500 dark:fill-gray-400 dark:text-white">

            <div class="w-[50px] mr-5 pe-5 border-e border-e-gray-200 dark:border-e-gray-600 ">
                <a href="https://wa.me/+923361633321" target="_blank" class="fill-gray-600 dark:fill-gray-400 hover:fill-orange-500 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path
                            d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                </a>
            </div>
            <div class="w-[50px] mr-5 pe-5 border-e border-e-gray-200 dark:border-e-gray-600  ">
                <a href="tel:+923361633321" target="_blank" class="fill-gray-600 dark:fill-gray-400 hover:fill-orange-500 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                            d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" />
                    </svg>
                </a>

            </div>
            <div class="text-lg">
                <a href="tel:+923361633321" target="_blank" class="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-all">
                    +92-3361633321
                </a>
            </div>

        </div>
        <div class="mb-3 text-center font-bold uppercase text-gray-600 dark:text-white">
            Sales
        </div>

        <div class="mb-0 flex items-center justify-center border border-gray-200 dark:border-gray-600 p-2 rounded-lg fill-red-500 dark:fill-gray-400 dark:text-white">
            <div class="w-[50px] mr-5 pe-5 border-e border-e-gray-200 dark:border-e-gray-600 ">
                <a href="https://wa.me/+923144661771" target="_blank" class="fill-gray-600 dark:fill-gray-400 hover:fill-orange-500 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path
                            d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                </a>
            </div>
            <div class="w-[50px] mr-5 pe-5 border-e border-e-gray-200 dark:border-e-gray-600  ">
                <a href="tel:+923144661771" target="_blank" class="fill-gray-600 dark:fill-gray-400 hover:fill-orange-500 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                            d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" />
                    </svg>
                </a>

            </div>
            <div class="text-lg">
                <a href="tel:+923144661771" target="_blank" class="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-all">
                    +92-3144661771
                </a>
            </div>
        </div>
        <div class="mb-3 text-center font-bold uppercase text-gray-600 dark:text-white">
            Talent
        </div>

        <div class="flex items-center justify-center border border-gray-200 dark:border-gray-600 p-2 rounded-lg fill-red-500 dark:fill-gray-400 dark:text-white">

            <div class="w-[50px] mr-5 pe-5 border-e border-e-gray-200 dark:border-e-gray-600  ">
                <a href="skype:nextebiz?chat" target="_blank" class="fill-gray-600 dark:fill-gray-400 hover:fill-orange-500 transition-all">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path
                            d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z" />
                    </svg>
                </a>

            </div>
            <div class="text-lg">
                <a href="skype:nextebiz?chat" target="_blank" class="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-all">
                    nextebiz
                </a>
            </div>
        </div>
        <div class="text-center font-bold uppercase text-gray-600 dark:text-white mb-1">
            Skype
        </div>
    </form>
    <div v-else class="p-5 text-center dark:text-white dark:fill-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-[100px] m-auto mb-[20px]">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
        </svg>
        <p class="mb-[20px] text-2xl">Message Sent. </p>
        <p class="mb-[20px]">Our team will contact you shortly.</p>
        <div>
            <button @click="resetForm" class="px-4 py-2 mb-5 btn-orange">Send Another Message?</button>
        </div>
    </div>

</template>



<style lang="scss" scoped></style>
