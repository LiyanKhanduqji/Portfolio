<template>
    <section class="text-white mt-20" id="skills">
        <div class="absolute right-0 top-[110rem] max-h-full w-full justify-end">
            <span class="flex justify-end me-10 opacity-20">
                <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
                <span class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"></span>
            </span>
        </div>
        <div class="container mx-auto py-8">
            <div class="text-left flex flex-col z-10 h-full">
                <h2 class="text-4xl font-bold text-white text-left my-20" data-aos="flip-up">My
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Skills</span>
                </h2>
                <Skills />
            </div>
            <div data-aos="flip-left" class="mt-24">
                <h2 class="text-start text-4xl font-bold text-white my-20" data-aos="flip-up" data-aos-delay="200">My Experiences</h2>
                <div class="flex items-center justify-center gap-2 flex-wrap">
                    <div v-for="element in Experinces" :key="element.id"
                        class="flex items-center rounded-xl p-4 shadow-lgborder-secondary md:w-[49%] sm:w-full bg-dark"
                        data-aos="fade-down-right">
                        <div class="relative overflow-hidden rounded-full w-20 h-20 flex items-center justify-center">
                            <img :src="element.logo" alt="lawyer" class="absolute w-fit" width="20" height="20"
                                :class="{ 'w-[49px]': element.id === 2 }" data-aos="fade-down-left" data-aos-delay="200">
                        </div>
                        <div class="w-3/4 pl-4">
                            <h3 class="text-2xl font-semibold text-white">
                                {{ element.role }}
                            </h3>
                            <p class="text-white">{{ element.company }}</p>
                            <p class="text-white">{{ element.date }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
import { defineAsyncComponent } from 'vue';
const Skills = defineAsyncComponent(() => import('@/components/Skills.vue'));


const Experinces = ref([
    {
        id: 1,
        logo: "chain.png",
        role: 'Software Engineer Intern',
        company: 'Chain Reaction',
        date: 'Nov 2023 - Feb 2024'
    },
    {
        id: 2,
        logo: "evo.png",
        role: 'Frontend Developer',
        company: 'Evokey',
        date: 'Feb 2024 - Mar 2025'
    },
])
</script>