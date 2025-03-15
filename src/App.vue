<script setup>
import { defineAsyncComponent } from 'vue';
const NavBar = defineAsyncComponent(() => import('@/components/NavBar.vue'));
const HeroSection = defineAsyncComponent(() => import('@/components/HeroSection.vue'));
const ServicesSection = defineAsyncComponent(() => import('@/components/ServicesSection.vue'));
const AboutSection = defineAsyncComponent(() => import('@/components/AboutSection.vue'));
const ExperianceAndSkills = defineAsyncComponent(() => import('@/components/ExperianceAndSkills.vue'));
const LatestProjects = defineAsyncComponent(() => import('@/components/LatestProjects.vue'));
const Footer = defineAsyncComponent(() => import('@/components/Footer.vue'));
const BackToTop = defineAsyncComponent(() => import('@/components/BackToTop.vue'));
</script>

<template>
  <div class="min-h-screen">

    <div>
      <NavBar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ExperianceAndSkills />
      <!-- <LatestProjects /> -->
      <Footer />
      <BackToTop />
    </div>
  </div>
</template>
