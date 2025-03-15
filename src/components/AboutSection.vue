<template>
    <section class="text-white mt-20" id="about">
        <div class="absolute z-0 top-[93rem] inset-x-0 h-64 flex items-start">
            <div class="h-24 w-64 bg-gradient-to-br from-primary via-secondary blur-2xl to-[#570cac] opacity-20"></div>
        </div>
        <div class="container mx-auto z-1">
            <div data-aos="flip-right">
                <div class="absolute top-0 inset-x-0 h-64 flex items-start">
                    <div class="h-24 w-2/3 bg-gradient-to-br from-[#570cac] blur-2xl invisible opacity-40"></div>
                    <div class="h-20 w-3/5 bg-gradient-to-r from-[#670ccf] opqcity-40 blur-2xl"></div>
                </div>
                <h2 class="text-4xl font-bold text-white text-left mb-20" data-aos="flip-up">My Education</h2>
                <div class="space-y-8">
                    <div v-for="element in education" :key="element.id"
                        class="flex items-center w-full rounded-xl border-s-2 border-secondary shadow-lg p-6">
                        <div>
                            <img src="https://img.icons8.com/ios-glyphs/60/ffffff/graduation-cap--v1.png"
                                alt="graduation-cap--v1">
                        </div>
                        <div class="w-3/4 pl-4">
                            <h3
                                class="text-2xl font-semibold text-white">
                                {{ element.School }}
                            </h3>
                            <p class="text-white">{{ element.program }}</p>
                            <p class="text-white">{{ element.year }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
const education = ref([
    {
        id: 1,
        School: 'The University of Jordan - Bachelor\'s degree',
        program: 'Computer Information Systems - very good',
        year: '2019-2023'
    }
])
</script>