<template>
  <NuxtLink 
    :to="`/case-studies/${slug}`" 
    class="group block overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl bg-white"
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: index * 100, duration: 500 } }"
  >
    <div class="relative overflow-hidden aspect-[16/9]">
      <img 
        :src="thumbnail" 
        :alt="title" 
        class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
      <div class="absolute bottom-0 left-0 right-0 p-6">
        <span 
          class="inline-block px-3 py-1 mb-3 text-xs font-medium text-white rounded-full" 
          :class="`bg-${categoryColor}-600`"
        >
          {{ category }}
        </span>
        <h3 class="text-xl font-bold text-white">{{ title }}</h3>
      </div>
    </div>
    <div class="p-6">
      <p class="mb-4 text-secondary-600">{{ description }}</p>
      <div class="flex items-center space-x-1 text-primary-600 font-medium">
        <span>View Case Study</span>
        <Icon name="heroicons:arrow-right" class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  categoryColor: {
    type: String,
    default: 'primary'
  },
  slug: {
    type: String,
    required: true
  },
  index: {
    type: Number,
    default: 0
  }
});
</script>