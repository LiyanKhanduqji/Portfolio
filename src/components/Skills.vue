<template>
    <div class="wrapper py-16" dir="ltr">
        <div class="carousel">
            <div v-for="(svgPath, index) in svgPaths" :key="index" class="text-center">
                <div class="h-12 w-28">
                    <img :src="svgPath.path" :alt="svgPath.alt" class="w-8 mx-auto" />
                </div>
                <div class="w-28">
                    <p class="text-[#fff] md:text-lg md:block hidden pt-3 text-center">{{ svgPath.alt }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from "jquery";
import "slick-carousel";
import { ref } from 'vue';

const svgPaths = ref([
    { path: "vue.svg", alt: "Vue" },
    { path: "react.svg", alt: "React" },
    { path: "html.svg", alt: "HTML" },
    { path: "css.svg", alt: "CSS" },
    { path: "alpine.svg", alt: "Alpine" },
    { path: "sass.svg", alt: "Sass" },
    { path: "tailwind.svg", alt: "Tailwind" },
    { path: "bootstrap.svg", alt: "Bootstrap" },
    { path: "angular.svg", alt: "Angular" },
    { path: "veutify.svg", alt: "Veutify" },
    { path: "TypeScript.svg", alt: "TypeScript" },
]);

$(document).ready(() => {
    $(".carousel").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
        arrows: false,
    });
});
</script>