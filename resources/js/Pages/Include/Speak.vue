<script setup>
import { useForm } from '@inertiajs/vue3';
import { onMounted } from 'vue';
import MessageForm from "../MessageBox/MessageForm.vue";

const props = defineProps({
    jobcategories: Object,
    'categories': Object,
})
const form = useForm({
    selected_category: 1
})
function changeSelectedCategory(id) {
    form.selected_category = id
}
onMounted(() => {
    initFlowbite();
})
</script>

<template>

    <div>
        <button @click="changeSelectedCategory(jobcategory.id)" data-modal-target="crud-modal" data-modal-toggle="crud-modal" type="button">
            <div
                class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Speak to Sales
            </div>
        </button>
    </div>


    <!-- Main modal -->
    <div id="crud-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-md max-h-full">
            <!-- Modal content -->

            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                        Hire Resource
                    </h3>

                    <button type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-toggle="crud-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <div class="p-4 md:p-5">
                    <MessageForm :jobcategories="props.jobcategories" :selected_category="form.selected_category" :prices="true" />
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
