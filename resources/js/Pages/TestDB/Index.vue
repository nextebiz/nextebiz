<script setup>
import { router, useForm } from '@inertiajs/vue3';
import MyCKEditor from "@/Components/MyCKEditor.vue";
import { TailwindPagination } from "laravel-vue-pagination";

const props = defineProps({
    errors: Object,
    tests: Object,
    msg: String

})
const form = useForm({
    name: "",
    description: "",
})

function saveData() {
    form.post(route('testdb.store'));
}

function updateDescription(description) {
    form.description = description;
}
function getResults(page) {
    router.get('/testdb?page=' + page, {}, { preserveScroll: true })
}
</script>
<template>


    <div class="container m-auto my-[50px]" @submit.prevent="saveData">
        <div class="text-center text-5xl mb-[20px] mt-[50px]">Test for Uzair</div>
        <div class="text-center text-lg text-green-500 font-bold">-{{ props.msg }}-</div>
        <div class="mb-[10px]">
            <div>
                <div>Name: {{ form.name }}</div>
            </div>
            <div>
                <div>Description: {{ form.description }}</div>
            </div>
            <hr>
        </div>
        <form class=" mx-auto mb-5">
            <div class="mb-5">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                <input type="text" id="name" v-model="form.name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="your name" required />
            </div>
            <div class="mb-5">
                <label for="info" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Info</label>
                <MyCKEditor :content="form.description" @updateContent="updateDescription" class="myck" :class="props.errors?.description ? 'border-red-500 p-[1px] bg-red-500' : ''">
                </MyCKEditor>
            </div>

            <button type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>

        <hr>

        <div>
            <h2>Saved Data</h2>
            <div v-for="test in tests.data" :key="test.id" class="border-b border-b-red-500">
                <div>
                    <strong>id:</strong>: {{ test.id }}
                </div>
                <div>
                    <strong>name:</strong>: {{ test.name }}
                </div>
                <div>
                    <strong>description:</strong>: {{ test.description }}
                </div>
                <div>
                    <strong>created_at:</strong>: {{ test.created_at }}
                </div>
            </div>
        </div>

        <div class="my-3">
            <TailwindPagination :data="tests" @pagination-change-page="getResults" />
        </div>
    </div>

</template>



<style lang="scss" scoped></style>
