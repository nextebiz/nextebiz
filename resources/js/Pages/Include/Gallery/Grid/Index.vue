<script setup>
import { onBeforeMount, onMounted } from "vue"

const props = defineProps({
    images: Array,
    gallerystyle: String
})

// let gridclass = "grid grid-cols-2 md:grid-cols-5 gap-4";
let gridclass = "";

onBeforeMount(() => {
    gridclass = "grid grid-cols-1 sm:grid-cols-2 gap-4";

    if (props.gallerystyle == "grid5") {
        gridclass = "grid grid-cols-1 sm:grid grid-cols-2 md:grid-cols-5 gap-4";
    } else if (props.gallerystyle == "grid4") {
        gridclass = "grid grid-cols-1 sm:grid grid-cols-2 md:grid-cols-4 gap-4";
    }
    else if (props.gallerystyle == "grid3") {
        gridclass = "grid grid-cols-1 sm:grid grid-cols-2 md:grid-cols-3 gap-4";
    }
    else if (props.gallerystyle == "grid1") {
        gridclass = "grid grid-cols-1 gap-4";
    }

})

onMounted(() => {
    console.log('grid loaded')
})

</script>

<template>

    <div :class="gridclass">
        <div v-for="image in props.images" :key="image" class="flex items-start justify-center ">
            <img class="h-auto max-w-full rounded-lg" :src="image" alt="">
        </div>
    </div>

</template>



<style lang="scss" scoped></style>
