<template>
  <div>
    <!-- Hero Section -->
    <section class="pt-32 pb-20 bg-secondary-50">
      <div class="container">
        <div 
          class="max-w-3xl mx-auto text-center"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 700 } }"
        >
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p class="text-xl text-secondary-600">We offer a comprehensive range of digital services to help your business thrive in the modern landscape.</p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="section bg-white">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            v-for="(service, index) in services"
            :key="service.title"
            :title="service.title"
            :description="service.description"
            :icon="service.icon"
            :link="service.link"
            :index="index"
          />
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-primary-900 text-white py-20">
      <div 
        class="container text-center"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 700 } }"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
        <p class="text-xl text-primary-100 max-w-3xl mx-auto mb-10">Let's discuss how we can help your business achieve its digital goals.</p>
        <UButton
          color="white"
          size="xl"
          to="/contact"
          label="Get in Touch"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
});

useHead({
  title: 'Services - Apex Digital',
  meta: [
    { name: 'description', content: 'Explore our comprehensive range of digital services including brand strategy, web design, UI/UX design, and more.' }
  ]
});

// Services data
const services = [
  {
    title: 'Brand Strategy',
    description: 'We develop comprehensive brand strategies that help you stand out in the market and connect with your target audience.',
    icon: 'heroicons:light-bulb',
    link: '#brand-strategy'
  },
  {
    title: 'Web Design & Development',
    description: 'We create beautiful, functional websites that deliver exceptional user experiences and drive business results.',
    icon: 'heroicons:code-bracket-square',
    link: '#web-design'
  },
  {
    title: 'UI/UX Design',
    description: 'Our user-centered design approach ensures intuitive, engaging experiences that keep users coming back.',
    icon: 'heroicons:cursor-arrow-rays',
    link: '#ui-ux-design'
  },
  {
    title: 'Digital Marketing',
    description: 'We develop and execute digital marketing strategies that increase visibility and drive conversion.',
    icon: 'heroicons:chart-bar',
    link: '#digital-marketing'
  },
  {
    title: 'Content Creation',
    description: 'From copywriting to photography and video, we create compelling content that tells your story.',
    icon: 'heroicons:pencil-square',
    link: '#content-creation'
  },
  {
    title: 'App Development',
    description: 'We build native and cross-platform mobile apps that provide seamless user experiences.',
    icon: 'heroicons:device-phone-mobile',
    link: '#app-development'
  }
];
</script>