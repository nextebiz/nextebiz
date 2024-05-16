<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, Zoom, Thumbs } from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import 'swiper/css/zoom';
import { onMounted, ref } from 'vue';
import { useForm } from '@inertiajs/vue3';

const props = defineProps({
    images: Array,
});

const form = useForm({
    images: props.images
})

const modules = [Navigation, Pagination, Scrollbar, Zoom, Thumbs];

const onSwiper = (swiper) => {
    console.log(swiper);
};
const onSlideChange = () => {
    console.log('slide change');
};

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};
onMounted(() => {
    console.log('mounted swiper')
})
</script>
<template>
    <h3 class="text-center mb-1">Project Screenshots</h3>
    <div class="text-center mb-5 text-2xl">Double tap on image to zoom in/out</div>
    <swiper :style="{
        '--swiper-navigation-color': '#000000',
        '--swiper-pagination-color': '#000000',
    }" :zoom="true" :navigation="true" :pagination="{
        clickable: true,
    }" :modules="modules" :thumbs="{ swiper: thumbsSwiper }" class="mySwiper">

        <swiper-slide v-for="image in form.images" :key="image" class="slide">
            <div class="swiper-zoom-container">
                <img :src="image" />
            </div>
        </swiper-slide>
    </swiper>
    <div class="bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-600">
        <swiper @swiper="setThumbsSwiper" :loop="true" :spaceBetween="0" :slidesPerView="6" :freeMode="true" :watchSlidesProgress="true" :modules="modules" class="mySwiper">
            <swiper-slide v-for="image in form.images" :key="image" class="slide-thumb">
                <div class="swiper-zoom-container">
                    <img :src="image" />
                </div>
            </swiper-slide>
        </swiper>
    </div>

</template>


<style scoped></style>
