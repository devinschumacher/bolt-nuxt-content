<template>
  <footer class="bg-secondary-900 text-white pt-16 pb-8">
    <div class="container">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
        <!-- Brand Column -->
        <div class="space-y-4">
          <h3 class="text-xl font-bold text-white">Apex Digital</h3>
          <p class="text-secondary-300">We craft digital experiences that transform brands and drive results.</p>
          <div class="flex space-x-4">
            <a href="#" class="text-secondary-300 hover:text-white transition-colors" aria-label="Twitter">
              <Icon name="mdi:twitter" class="w-5 h-5" />
            </a>
            <a href="#" class="text-secondary-300 hover:text-white transition-colors" aria-label="LinkedIn">
              <Icon name="mdi:linkedin" class="w-5 h-5" />
            </a>
            <a href="#" class="text-secondary-300 hover:text-white transition-colors" aria-label="Instagram">
              <Icon name="mdi:instagram" class="w-5 h-5" />
            </a>
            <a href="#" class="text-secondary-300 hover:text-white transition-colors" aria-label="Dribbble">
              <Icon name="mdi:dribbble" class="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h3 class="text-white font-bold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li v-for="item in navItems" :key="item.label">
              <NuxtLink 
                :to="item.path" 
                class="text-secondary-300 hover:text-white transition-colors"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        
        <!-- Services -->
        <div>
          <h3 class="text-white font-bold mb-4">Services</h3>
          <ul class="space-y-2">
            <li v-for="service in services" :key="service">
              <NuxtLink 
                to="/services" 
                class="text-secondary-300 hover:text-white transition-colors"
              >
                {{ service }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        
        <!-- Contact Info -->
        <div>
          <h3 class="text-white font-bold mb-4">Contact</h3>
          <ul class="space-y-2 text-secondary-300">
            <li class="flex items-start space-x-2">
              <Icon name="heroicons:map-pin" class="w-5 h-5 mt-0.5 flex-shrink-0" />
              <span>123 Design Street, San Francisco, CA 94107</span>
            </li>
            <li class="flex items-center space-x-2">
              <Icon name="heroicons:envelope" class="w-5 h-5 flex-shrink-0" />
              <a href="mailto:hello@apexdigital.co" class="hover:text-white transition-colors">
                hello@apexdigital.co
              </a>
            </li>
            <li class="flex items-center space-x-2">
              <Icon name="heroicons:phone" class="w-5 h-5 flex-shrink-0" />
              <a href="tel:+1234567890" class="hover:text-white transition-colors">
                +1 (234) 567-890
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="pt-8 mt-8 border-t border-secondary-800">
        <div class="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p class="text-secondary-400 text-sm">
            &copy; {{ new Date().getFullYear() }} Apex Digital. All rights reserved.
          </p>
          <div class="flex space-x-4 text-sm text-secondary-400">
            <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" class="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Navigation items
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

// Services list
const services = [
  'Brand Strategy',
  'Web Design',
  'UI/UX Design',
  'Digital Marketing',
  'Content Creation',
  'App Development'
];
</script>