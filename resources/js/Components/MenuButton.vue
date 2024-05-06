<template>
    <header class="bg-white dark:bg-gray-700 shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">

            <div class="flex items-center">
                <button id="drawerbtn" class="me-5 border border-gray-300 dark:border-gray-500 fill-orange-500 hover:border-orange-500 p-2 rounded-md transition-all" data-drawer-target="drawer-navigation"
                    data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-6 ">
                        <path
                            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg>
                </button>

                <h3 class=" text-gray-800 dark:text-white">{{ title }}</h3>
            </div>
        </div>
    </header>

</template>

<script setup>
const props = defineProps({
    title: ''
})
</script>


<style lang="scss" scoped></style>
