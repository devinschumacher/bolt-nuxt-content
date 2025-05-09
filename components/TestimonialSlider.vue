<template>
  <div class="relative">
    <div class="absolute top-12 left-0 right-0 -z-10">
      <div class="mx-auto max-w-3xl h-64 bg-primary-100 rounded-3xl opacity-50 blur-3xl"></div>
    </div>
    
    <UCarousel
      v-model="currentSlide"
      :items="testimonials"
      class="max-w-3xl mx-auto"
    >
      <template #item="{ item }">
        <div
          class="max-w-3xl mx-auto p-8 text-center"
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { duration: 500 } }"
          :exit="{ opacity: 0, transition: { duration: 300 } }"
        >
          <div class="mb-4 flex justify-center">
            <Icon name="heroicons:quote" class="w-10 h-10 text-primary-300" />
          </div>
          <p class="text-xl md:text-2xl font-medium text-secondary-800 mb-6 italic">
            "{{ item.quote }}"
          </p>
          <div class="flex flex-col items-center">
            <img 
              :src="item.avatar" 
              :alt="item.name" 
              class="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md mb-3"
            />
            <div>
              <h4 class="font-bold text-secondary-900">{{ item.name }}</h4>
              <p class="text-secondary-600">{{ item.title }}, {{ item.company }}</p>
            </div>
          </div>
        </div>
      </template>
    </UCarousel>
  </div>
</template>

<script setup>
const currentSlide = ref(0);
const testimonials = [
  {
    quote: "Working with Apex Digital transformed our online presence completely. Their strategic approach and attention to detail resulted in a website that not only looks stunning but also delivers real business results.",
    name: "Sarah Johnson",
    title: "Marketing Director",
    company: "TechNova",
    avatar: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    quote: "The team at Apex Digital went above and beyond our expectations. Their collaborative approach made the entire process smooth, and the final product has received countless compliments from our clients.",
    name: "Mark Williams",
    title: "CEO",
    company: "Elevate Studios",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    quote: "What sets Apex Digital apart is their combination of creativity and strategic thinking. They didn't just build us a beautiful website — they created a powerful tool that has measurably increased our conversion rates.",
    name: "Emily Zhang",
    title: "Product Manager",
    company: "Horizon Innovations",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];
</script>