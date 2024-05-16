<script setup>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, Zoom } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/css/zoom';
// import './style.css';

// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const modules = [Navigation, Pagination, Scrollbar, Zoom];

const onSwiper = (swiper) => {
    console.log(swiper);
};
const onSlideChange = () => {
    console.log('slide change');
};
</script>


<template>
    <swiper :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
    }" :zoom="true" :navigation="true" :pagination="{
        clickable: true,
    }" :modules="modules" class="mySwiper">
        <swiper-slide class="slide">
            <div class="swiper-zoom-container">
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </div>
        </swiper-slide>
        <swiper-slide class="slide">
            <div class="swiper-zoom-container">
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </div>
        </swiper-slide>
        <swiper-slide class="slide">
            <div class="swiper-zoom-container">
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </div>
        </swiper-slide>
        <swiper-slide class="slide">
            <div class="swiper-zoom-container">
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </div>
        </swiper-slide>
        <swiper-slide class="slide">
            <div class="swiper-zoom-container">
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </div>
        </swiper-slide>
        <swiper-slide class="slide">
            <div class="swiper-zoom-container">
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </div>
        </swiper-slide>
        <swiper-slide class="slide">
            <div class="swiper-zoom-container">
                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </div>
        </swiper-slide>
        <swiper-slide class="slide">
            <div class="swiper-zoom-container">
                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </div>
        </swiper-slide>
        <swiper-slide class="slide">
            <div class="swiper-zoom-container">
                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </div>
        </swiper-slide>
    </swiper>
</template>



<style scoped>
.slide {
    background-color: lightblue;
    height: 300px;
}
</style>
