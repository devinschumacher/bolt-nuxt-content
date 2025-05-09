<template>
  <header 
    ref="header" 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5']"
  >
    <div class="container flex items-center justify-between">
      <NuxtLink to="/" class="relative z-10 flex items-center space-x-2">
        <span class="text-xl font-bold text-primary-600">Apex Digital</span>
      </NuxtLink>
      
      <!-- Desktop Menu -->
      <nav class="items-center hidden space-x-8 lg:flex">
        <NuxtLink 
          v-for="item in navItems" 
          :key="item.label" 
          :to="item.path"
          class="text-secondary-900 hover:text-primary-600 font-medium"
          :class="{ 'text-primary-600': isActive(item.path) }"
        >
          {{ item.label }}
        </NuxtLink>
        <UButton
          color="primary"
          variant="solid"
          label="Contact Us"
          to="/contact"
          size="md"
        />
      </nav>
      
      <!-- Mobile Menu Button -->
      <button 
        class="relative z-10 lg:hidden" 
        @click="mobileMenuOpen = !mobileMenuOpen"
        aria-label="Toggle menu"
      >
        <Icon 
          :name="mobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" 
          class="w-6 h-6 text-secondary-900"
        />
      </button>
      
      <!-- Mobile Menu -->
      <transition 
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <div 
          v-if="mobileMenuOpen" 
          class="fixed inset-0 z-40 flex bg-white"
        >
          <div class="flex flex-col w-full h-full p-8 space-y-8">
            <div class="flex items-center justify-between">
              <span class="text-xl font-bold text-primary-600">Apex Digital</span>
              <button @click="mobileMenuOpen = false">
                <Icon name="heroicons:x-mark" class="w-6 h-6 text-secondary-900" />
              </button>
            </div>
            <nav class="flex flex-col space-y-6">
              <NuxtLink 
                v-for="item in navItems" 
                :key="item.label" 
                :to="item.path"
                class="text-xl font-medium text-secondary-900"
                @click="mobileMenuOpen = false"
              >
                {{ item.label }}
              </NuxtLink>
              <UButton
                color="primary"
                variant="solid"
                label="Contact Us"
                to="/contact"
                size="lg"
                block
                @click="mobileMenuOpen = false"
              />
            </nav>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false);
const scrolled = ref(false);
const route = useRoute();

// Navigation items
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Services', path: '/services' },
];

// Track if we're on the current route
const isActive = (path) => {
  return route.path === path;
};

// Add scroll event listener for header background
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};
</script>