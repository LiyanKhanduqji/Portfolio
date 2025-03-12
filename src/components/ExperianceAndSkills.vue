<template>
    <section class="text-white mt-18" id="skills">
        <div class="absolute right-0 top-[110rem] h-full w-full justify-end">
            <span class="flex opacity-20">
                <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
                <span class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"></span>
            </span>
        </div>
        <div class="py-8 px-4 xl:px-16">
            <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full">
                <h2 class="text-4xl font-bold text-white text-left mb-4" data-aos="flip-up">My
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Skills</span>
                </h2>
                <Skills />
            </div>
            <div data-aos="flip-left">
                <h2 class="text-4xl font-bold text-white text-left mb-8 md:text-center md:mt-0 mt-8">My Experiences</h2>
                <div class="space-y-8 py-8">
                    <div v-for="element in Experinces" :key="element.id"
                        class="flex items-center rounded-xl p-4 bg-[#111a3e] shadow-lg border border-[#1f1641] max-w-full">
                        <div class="w-1/4">
                            <img src="https://img.icons8.com/ios-filled/100/ffffff/lawyer.png" alt="lawyer">
                        </div>
                        <div class="w-3/4 pl-4">
                            <h3
                                class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
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
        role: 'Software Engineer',
        company: 'Microsoft',
        date: 'Mar 2023 - September 2024'
    },
    {
        id: 2,
        role: 'Frontend Developer',
        company: 'Spotify',
        date: 'Mar 2022 - September 2023'
    },
])
</script>