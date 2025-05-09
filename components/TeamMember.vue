<template>
  <div 
    class="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg"
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: index * 100, duration: 500 } }"
  >
    <div class="aspect-[3/4] overflow-hidden">
      <img 
        :src="image" 
        :alt="name" 
        class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div class="p-6">
      <h3 class="text-xl font-bold mb-1">{{ name }}</h3>
      <p class="text-primary-600 font-medium mb-3">{{ position }}</p>
      <p class="text-secondary-600 mb-4">{{ bio }}</p>
      <div class="flex space-x-3">
        <a 
          v-for="(social, i) in socials" 
          :key="i" 
          :href="social.url" 
          target="_blank"
          rel="noopener noreferrer"
          class="text-secondary-500 hover:text-primary-600 transition-colors"
          :aria-label="social.platform"
        >
          <Icon :name="social.icon" class="w-5 h-5" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  socials: {
    type: Array,
    default: () => []
  },
  index: {
    type: Number,
    default: 0
  }
});
</script>