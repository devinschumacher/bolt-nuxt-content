<template>
  <div 
    class="p-8 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: index * 100, duration: 500 } }"
  >
    <div class="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 text-primary-600">
      <Icon :name="icon" class="w-6 h-6" />
    </div>
    <h3 class="text-xl font-bold mb-3">{{ title }}</h3>
    <p class="text-secondary-600 mb-5">{{ description }}</p>
    <NuxtLink 
      :to="link" 
      class="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
    >
      Learn more
      <Icon name="heroicons:arrow-right" class="w-4 h-4 ml-1" />
    </NuxtLink>
  </div>
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
  icon: {
    type: String,
    required: true
  },
  link: {
    type: String,
    default: '/services'
  },
  index: {
    type: Number,
    default: 0
  }
});
</script>