<template>
    <header :class="[
        'flex justify-between items-center py-6 bg-opacity-50 relative z-20 transition-all duration-1000 ease-in-out',
        showHeader ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10',
        isVisible ? ' sticky bg-[#000012ed] top-0 left-0 w-full shadow-lg' : ''
    ]">

        <!-- Mobile Toggle Button -->
        <div class="md:hidden z-30">
            <button type="button" class="block focus:outline-none" @click="isMenuOpen = !isMenuOpen">
                <span v-if="isMenuOpen" class="text-5xl">
                    <img src="https://img.icons8.com/ios-filled/100/ffffff/delete-sign.png" alt="close" width="50"
                        height="50">
                </span>
                <span v-else class="text-5xl">
                    <img src="https://img.icons8.com/ios-filled/100/ffffff/menu--v6.png" alt="menu" width="50"
                        height="50">
                </span>
            </button>
        </div>

        <!-- Navbar Link -->
        <nav :class="['container mx-auto fixed inset-0 z-20 flex flex-col items-center justify-center bg-[#111827] md:relative md:bg-transparent md:flex md:justify-between md:flex-row',
            isMenuOpen ? 'block' : 'hidden']">
            <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
                <li v-for="item in Menu" :key="item.name">
                    <a :href="item.href"
                        class="relative block text-white transition hover:text-primary ease-linear text-2xl md:text-lg nav-link"
                        @click="scrollToSection(item.href)">
                        {{ item.name }}
                    </a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const Menu = ref([
    { name: 'Services', href: '#services' },
    { name: 'About Me', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
]);

const isMenuOpen = ref(false);
const showHeader = ref(false);

onMounted(() => {
    setTimeout(() => {
        showHeader.value = true;
    }, 500);
});

const scrollToSection = (href) => {
    isMenuOpen.value = false;
    const section = document.querySelector(href);
    if (section) {
        window.scrollBy(0, -1); 
        setTimeout(() => {
            section.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 10);
    }
};


const isVisible = ref(false);
const handleScroll = () => {
    isVisible.value = window.scrollY > 300;
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
})
</script>
<style>
.nav-link::before {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    inset-inline-start: 0;
    bottom: 0;
    background: #06d6a0;
    transition: all .3s;
}

.nav-link:hover::before {
    width: 100%;
}
</style>