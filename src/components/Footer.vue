<template>
    <footer class="mt-20 border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
        <ContactSection />
        <div class="pb-2 pt-6 flex justify-center">
            <p class="text-slate-600 text-sm">&copy; 2025 Liyan. All rights reserved.</p>
        </div>
    </footer>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const ContactSection = defineAsyncComponent(() => import('@/components/ContactSection.vue'));

</script>
