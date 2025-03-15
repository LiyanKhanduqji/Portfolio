<template>
        <div class="container mx-auto pt-6">
            <div class="flex items-center justify-start gap-4 flex-wrap">
                <div v-for="element in contactInfo" :key="element.id">
                    <div class="flex items-center justify-start gap-3 flex-1"
                        data-aos="zoom-out" data-aos-delay="200">
                        <span class="bg-primary bg-opacity-30 p-2 flex items-center justify-center rounded-full">
                            <img :src="element.image" :alt="element.label" width="10">
                        </span>
                        <p class="text-white text-sm">{{ element.contact }}</p>
                    </div>
                </div>
            </div>
    
            <!-- <div class="grid md:grid-cols-2 gap-4 relative mt-8" data-aos="zoom-in-up">
                <div class="bg-gradient-to-tr opacity-25 from-[#570cac] to-primary blur-2xl h-20 w-80 z-0 absolute -top-1/2 -left-4 transform -translate-x-2/3 
            -translate-1/2
            "></div>
            </div> -->
        </div>
</template>
<script setup>
import { ref } from 'vue';
const contactInfo = ref([
    {
        id: 1,
        label: "Email",
        contact: "layankhandukji@gmail.com",
        image: "email.svg"
    },
    {
        id: 2,
        label: "Phone",
        contact: "+962 788 465 314",
        image: "phone.svg"
    }
])

</script>