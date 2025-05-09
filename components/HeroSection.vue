<template>
  <section class="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-b from-primary-50 to-white -z-10"></div>
    
    <!-- Hero content -->
    <div class="container">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
        <!-- Text content -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
          class="max-w-xl"
        >
          <h1 class="text-4xl font-bold md:text-5xl lg:text-6xl mb-6">
            {{ title }}
          </h1>
          <p class="text-xl text-secondary-600 mb-8">
            {{ subtitle }}
          </p>
          <div class="flex flex-wrap gap-4">
            <UButton
              color="primary"
              size="lg"
              :label="primaryBtnText"
              :to="primaryBtnLink"
            />
            <UButton
              color="white"
              variant="outline"
              size="lg"
              :label="secondaryBtnText"
              :to="secondaryBtnLink"
            />
          </div>
        </div>
        
        <!-- Image -->
        <div 
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{ opacity: 1, scale: 1, transition: { delay: 400, duration: 800 } }"
          class="relative"
        >
          <img 
            :src="imageUrl" 
            alt="Hero image" 
            class="w-full h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Creative Digital Agency'
  },
  subtitle: {
    type: String,
    default: 'We create digital experiences that elevate your brand and drive meaningful connections with your audience.'
  },
  primaryBtnText: {
    type: String,
    default: 'View Our Work'
  },
  primaryBtnLink: {
    type: String,
    default: '/case-studies'
  },
  secondaryBtnText: {
    type: String,
    default: 'Get in Touch'
  },
  secondaryBtnLink: {
    type: String,
    default: '/contact'
  },
  imageUrl: {
    type: String,
    default: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
});
</script>