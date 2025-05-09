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
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
          <p class="text-xl text-secondary-600">Explore our case studies to see how we've helped businesses transform their digital presence and achieve their goals.</p>
        </div>
      </div>
    </section>
    
    <!-- Filters -->
    <section class="py-12 bg-white border-b border-secondary-100">
      <div class="container">
        <div class="flex flex-wrap items-center justify-center gap-4">
          <UButton
            v-for="category in categories" 
            :key="category.value"
            :variant="activeCategory === category.value ? 'solid' : 'ghost'"
            :color="activeCategory === category.value ? 'primary' : 'gray'"
            size="md"
            :label="category.label"
            @click="setActiveCategory(category.value)"
          />
        </div>
      </div>
    </section>
    
    <!-- Case Studies Grid -->
    <section class="section bg-white">
      <div class="container">
        <div 
          v-if="filteredCaseStudies.length === 0" 
          class="text-center py-12"
        >
          <Icon name="heroicons:document-search" class="w-16 h-16 mx-auto text-secondary-300 mb-4" />
          <h3 class="text-xl font-semibold mb-2">No case studies found</h3>
          <p class="text-secondary-600 mb-4">We couldn't find any case studies matching your current filter.</p>
          <UButton
            variant="soft"
            color="secondary"
            label="Clear Filters"
            @click="activeCategory = 'all'"
          />
        </div>
        
        <div 
          v-else
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <CaseStudyCard
            v-for="(caseStudy, index) in filteredCaseStudies"
            :key="caseStudy.title"
            :title="caseStudy.title"
            :description="caseStudy.description"
            :thumbnail="caseStudy.thumbnail"
            :category="caseStudy.category"
            :category-color="caseStudy.categoryColor"
            :slug="caseStudy.slug"
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
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to be our next success story?</h2>
        <p class="text-xl text-primary-100 max-w-3xl mx-auto mb-10">Let's collaborate to create a digital experience that helps you achieve your business goals.</p>
        <UButton
          color="white"
          size="xl"
          to="/contact"
          label="Start Your Project"
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
  title: 'Case Studies - Apex Digital',
  meta: [
    { name: 'description', content: 'Explore our portfolio of work and case studies showcasing our design and development expertise.' }
  ]
});

// Categories for filtering
const categories = [
  { label: 'All Work', value: 'all' },
  { label: 'Branding', value: 'Branding' },
  { label: 'Web Development', value: 'Web Development' },
  { label: 'App Development', value: 'App Development' },
  { label: 'UI/UX Design', value: 'UI/UX Design' },
  { label: 'E-commerce', value: 'E-commerce' },
];

// Active category state
const activeCategory = ref('all');

const setActiveCategory = (category) => {
  activeCategory.value = category;
};

// Case studies data
const caseStudies = [
  {
    title: 'Horizon Rebrand',
    description: 'A complete brand transformation for a tech company ready to expand globally.',
    thumbnail: 'https://images.pexels.com/photos/5849588/pexels-photo-5849588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Branding',
    categoryColor: 'primary',
    slug: 'horizon-rebrand'
  },
  {
    title: 'Pulse Fitness App',
    description: 'A mobile fitness application that personalizes workouts and tracks user progress.',
    thumbnail: 'https://images.pexels.com/photos/5063085/pexels-photo-5063085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'App Development',
    categoryColor: 'accent',
    slug: 'pulse-fitness-app'
  },
  {
    title: 'Organic Bloom E-commerce',
    description: 'An e-commerce platform for an organic skincare brand with a focus on sustainability.',
    thumbnail: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'E-commerce',
    categoryColor: 'success',
    slug: 'organic-bloom-ecommerce'
  },
  {
    title: 'Nomad Travel Platform',
    description: 'A travel booking platform with a focus on authentic, local experiences.',
    thumbnail: 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Web Development',
    categoryColor: 'warning',
    slug: 'nomad-travel-platform'
  },
  {
    title: 'Fintech Dashboard',
    description: 'A comprehensive dashboard for a financial technology company with complex data visualization needs.',
    thumbnail: 'https://images.pexels.com/photos/7821486/pexels-photo-7821486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'UI/UX Design',
    categoryColor: 'error',
    slug: 'fintech-dashboard'
  },
  {
    title: 'Culinary Network',
    description: 'A social platform connecting chefs, home cooks, and food enthusiasts to share recipes and cooking techniques.',
    thumbnail: 'https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'App Development',
    categoryColor: 'accent',
    slug: 'culinary-network'
  },
  {
    title: 'Echo Speaker Product Launch',
    description: 'A product launch campaign for a premium audio brand\'s new smart speaker series.',
    thumbnail: 'https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Branding',
    categoryColor: 'primary',
    slug: 'echo-speaker-launch'
  },
  {
    title: 'Verde Sustainable Packaging',
    description: 'Brand identity and packaging design for an eco-friendly packaging company.',
    thumbnail: 'https://images.pexels.com/photos/7262897/pexels-photo-7262897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Branding',
    categoryColor: 'success',
    slug: 'verde-sustainable-packaging'
  },
  {
    title: 'Metro News Redesign',
    description: 'A complete overhaul of a major news publication\'s digital platform for better readability and engagement.',
    thumbnail: 'https://images.pexels.com/photos/3731255/pexels-photo-3731255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'UI/UX Design',
    categoryColor: 'secondary',
    slug: 'metro-news-redesign'
  }
];

// Filter case studies based on active category
const filteredCaseStudies = computed(() => {
  if (activeCategory.value === 'all') {
    return caseStudies;
  }
  
  return caseStudies.filter(study => study.category === activeCategory.value);
});
</script>