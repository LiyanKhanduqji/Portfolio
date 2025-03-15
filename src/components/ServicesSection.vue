<template>
    <section class="text-white mt-20" id="services">
        <div class="container mx-auto xl:pl-16">
            <h2 class="text-4xl font-bold text-white mb-20" data-aos="flip-up">My Services</h2>
        </div>
        <div
            class="container mx-auto flex justify-center items-center flex-wrap sm:grid-cols-2 md:gap-10 lg:grid-cols-3">
            <div v-for="service in services" :key="service.id">
                <div data-aos="zoom-out" data-aos-delay="200" class="service group border-2 rounded-full bg-[#111a3e] shadow-lg border-primary duration-500 w-32 h-32 flex justify-center items-center mx-auto service">
                    <div class="mx-auto h-24 w-24 text-center flex justify-center items-center">
                        <div>
                            <img :src="service.icon" alt="service icon" width="40" class="group-hover:scale-75 duration-500"> 
                        </div>
                    </div>

                </div>
                <div class="text-center h-44">
                    <h3
                        class="pt-8 text-lg text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text-xl w-64" data-aos="fade-up-right">
                        {{ service.name }}
                    </h3>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
const services = ref([
    {
        id: 1,
        icon: 'dev.svg',
        name: 'Web Application Development',
    },
    {
        id: 2,
        icon: 'spa.svg',
        name: 'Single Page Application (SPA) Development',
    },
    {
        id: 3,
        icon: 'res.svg',
        name: 'Responsive Web Design',
    },
])
</script>

<style scoped>
.service{
    transition: all .5s;
}
.service:hover{
    border: 15px solid #D60638;
}
</style>>