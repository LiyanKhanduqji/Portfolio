<template>
    <section class="relative w-full" data-aos="zoom-in-up">
        <div class="absolute top-0 inset-x-0 h-64 flex items-start">
            <div class="h-24 w-2/3 bg-gradient-to-br from-[#570cac] blur-2xl invisible opacity-40"></div>
            <div class="h-20 w-3/5 bg-gradient-to-r from-[#670ccf] opqcity-40 blur-2xl"></div>
        </div>
        <div class="container mx-auto relative">
            <div
                class="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
                <div class="lg:py-6">
                    <div class="text-center lg:text-left typewriter">
                        <h1 class="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl" data-aos="zoom-out"
                            data-aos-delay="200">
                            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#3a86ff]">
                                Liyan Khanduqji
                            </span>
                        </h1>
                        <p class="text-secondary">Frontend Developer</p>
                    </div>
                    <p class="text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-xl">
                        Frontend developer with experience building dynamic, responsive web applications using Vue.js.
                        Skilled in front-end and expanding my qualifications in this field, with a strong focus on
                        delivering scalable and efficient
                        solutions.
                    </p>
                    <div class="pt-9 flex-col sm:w-max sm:mx-auto lg:mx-0 md:w-fit">
                        <a href="Liyan-Resume.pdf" download="Liyan-Resume.pdf"
                            class="border-[1px] border-primary relative z-20 overflow-hidden text-primary bg-primary-white cursor-pointer flex gap-1 justify-center md:justify-start items-baseline mt-6 rounded-[32px] px-4 py-2">
                            Download resume
                            <div
                                class="hover:scale-105 transition-all ease-in-out flex justify-center items-center relative">
                                <div class="text-lg translate-y-[2px]">
                                    &#11183;
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="lg:h-full md:flex">
                    <div
                        class="flex w-full h-96 min-h-[24rem] lg:min-h-[none] lg:w-full lg:h-full items-center justify-center relative">
                        <div
                            class="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-gradient-to-tr opacity-25 from-[#570cac] to-primary blur-2xl">
                        </div>
                        <div
                            class="absolute h-full z-10 p-2 -translate-y-1/2 top-1/2 lg:right-3 md:right-40 rounded-full shadow-lg border border-primary">
                            <img src="@/assets/Liyan.jpeg" alt="Hero pic" width="500" height="auto" loading="lazy"
                                class="w-full h-full rounded-full object-cover">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ref } from 'vue';
AOS.init();

const personalDetails = ref([
    {
        id: 1,
        label: "GitHub",
        contact: "https://github.com/LiyanKhanduqji",
        image: ""
    }
])
</script>

<style scoped>
.typewriter p {
    overflow: hidden;
    border-right: .15em solid #D60638;
    white-space: nowrap;
    margin: 0 auto;
    animation:
        typing 2.5s steps(20, end),
        blink-caret .5s step-end infinite;
}

@keyframes typing {
    from {
        width: 0
    }

    to {
        width: 100%
    }
}

@keyframes blink-caret {

    from,
    to {
        border-color: transparent
    }

    50% {
        border-color: transparent
    }
}

a {
    z-index: 1;
    transition: 0.3;
    animation: bounce 1s infinite;
}

@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

a::before,
a::after {
    content: "";
    width: 12px;
    height: 12px;
    background-color: #D60638;
    position: absolute;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
}

a::before {
    left: -30px;
}

a::after {
    right: -30px;
}

a:hover::before {
    z-index: -1;
    animation: left-move 0.5s linear forwards;
}

a:hover::after {
    z-index: -1;
    animation: right-move 0.5s linear forwards;
}

a:hover {
    color: white;
    border: 2px solid white;
    transition-delay: 0.5s;
}

@keyframes left-move {
    50% {
        left: 0;
        width: 12px;
        height: 12px;
    }

    100% {
        left: 0;
        border-radius: 0;
        width: 50%;
        height: 100%;
    }
}

@keyframes right-move {
    50% {
        right: 0;
        width: 12px;
        height: 12px;
    }

    100% {
        right: 0;
        border-radius: 0;
        width: 50%;
        height: 100%;
    }
}
</style>