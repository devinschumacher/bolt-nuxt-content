<template>
  <div>
    <!-- Hero Section -->
    <section 
      class="pt-32 pb-16 bg-secondary-50"
      v-if="caseStudy"
    >
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            v-motion
            :initial="{ opacity: 0, x: -20 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 700 } }"
          >
            <span 
              class="inline-block px-3 py-1 mb-4 text-sm font-medium text-white rounded-full" 
              :class="`bg-${caseStudy.categoryColor}-600`"
            >
              {{ caseStudy.category }}
            </span>
            <h1 class="text-4xl md:text-5xl font-bold mb-6">{{ caseStudy.title }}</h1>
            <p class="text-xl text-secondary-600 mb-8">{{ caseStudy.description }}</p>
            <div class="flex flex-wrap gap-4 mb-8">
              <UButton
                color="primary"
                size="lg"
                :label="caseStudy.ctaText || 'Visit Website'"
                :to="caseStudy.ctaLink || '#'"
                target="_blank"
                v-if="caseStudy.ctaLink"
              />
              <UButton
                color="white"
                variant="outline"
                size="lg"
                label="Back to Case Studies"
                to="/case-studies"
              />
            </div>
          </div>
          <div 
            class="relative"
            v-motion
            :initial="{ opacity: 0, x: 20 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 700 } }"
          >
            <img 
              :src="caseStudy.thumbnail" 
              :alt="caseStudy.title" 
              class="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Case Study Content -->
    <section 
      v-if="caseStudy" 
      class="py-16 bg-white"
    >
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <!-- Sidebar with project info -->
          <div class="order-2 lg:order-1 lg:col-span-1">
            <div class="bg-secondary-50 rounded-lg p-8 mb-8 sticky top-32">
              <h3 class="text-xl font-bold mb-6">Project Details</h3>
              
              <div class="space-y-6">
                <div>
                  <h4 class="text-sm font-semibold text-secondary-500 mb-2">CLIENT</h4>
                  <p class="font-medium">{{ caseStudy.client }}</p>
                </div>
                
                <div>
                  <h4 class="text-sm font-semibold text-secondary-500 mb-2">SERVICES</h4>
                  <div class="flex flex-wrap gap-2">
                    <span 
                      v-for="service in caseStudy.services" 
                      :key="service"
                      class="px-3 py-1 bg-white text-secondary-700 text-sm rounded-full"
                    >
                      {{ service }}
                    </span>
                  </div>
                </div>
                
                <div>
                  <h4 class="text-sm font-semibold text-secondary-500 mb-2">TIMELINE</h4>
                  <p class="font-medium">{{ caseStudy.timeline }}</p>
                </div>
                
                <div v-if="caseStudy.technologies?.length">
                  <h4 class="text-sm font-semibold text-secondary-500 mb-2">TECHNOLOGIES</h4>
                  <div class="flex flex-wrap gap-2">
                    <span 
                      v-for="tech in caseStudy.technologies" 
                      :key="tech"
                      class="px-3 py-1 bg-white text-secondary-700 text-sm rounded-full"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Main content -->
          <div class="order-1 lg:order-2 lg:col-span-2">
            <!-- Overview -->
            <div class="mb-16">
              <h2 class="text-3xl font-bold mb-6">Overview</h2>
              <p class="text-lg text-secondary-700 mb-4">{{ caseStudy.overview }}</p>
            </div>
            
            <!-- Challenge -->
            <div class="mb-16">
              <h2 class="text-3xl font-bold mb-6">Challenge</h2>
              <p class="text-lg text-secondary-700 mb-4">{{ caseStudy.challenge }}</p>
            </div>
            
            <!-- Process -->
            <div class="mb-16">
              <h2 class="text-3xl font-bold mb-6">Our Approach</h2>
              <p class="text-lg text-secondary-700 mb-8">{{ caseStudy.approach }}</p>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div 
                  v-for="(step, index) in caseStudy.process" 
                  :key="index"
                  class="bg-secondary-50 p-6 rounded-lg"
                >
                  <div class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold mb-4">
                    {{ index + 1 }}
                  </div>
                  <h3 class="text-xl font-bold mb-2">{{ step.title }}</h3>
                  <p class="text-secondary-700">{{ step.description }}</p>
                </div>
              </div>
            </div>
            
            <!-- Results -->
            <div class="mb-16">
              <h2 class="text-3xl font-bold mb-6">Results</h2>
              <p class="text-lg text-secondary-700 mb-8">{{ caseStudy.results }}</p>
              
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div 
                  v-for="(stat, index) in caseStudy.stats" 
                  :key="index"
                  class="bg-white border border-secondary-100 p-6 rounded-lg text-center"
                >
                  <div class="text-4xl font-bold text-primary-600 mb-2">{{ stat.value }}</div>
                  <p class="text-secondary-700">{{ stat.label }}</p>
                </div>
              </div>
            </div>
            
            <!-- Additional Images -->
            <div v-if="caseStudy.images?.length" class="mb-16">
              <h2 class="text-3xl font-bold mb-6">The Result</h2>
              <div class="grid grid-cols-1 gap-8">
                <div v-for="(image, index) in caseStudy.images" :key="index" class="overflow-hidden rounded-lg shadow-md">
                  <img 
                    :src="image.src" 
                    :alt="image.alt || caseStudy.title" 
                    class="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            
            <!-- Testimonial -->
            <div v-if="caseStudy.testimonial" class="mb-16 bg-secondary-50 rounded-lg p-8">
              <div class="mb-4 flex justify-center">
                <Icon name="heroicons:quote" class="w-10 h-10 text-primary-300" />
              </div>
              <p class="text-xl md:text-2xl font-medium text-secondary-800 mb-6 italic text-center">
                "{{ caseStudy.testimonial.quote }}"
              </p>
              <div class="flex flex-col items-center">
                <h4 class="font-bold text-secondary-900">{{ caseStudy.testimonial.name }}</h4>
                <p class="text-secondary-600">{{ caseStudy.testimonial.title }}, {{ caseStudy.testimonial.company }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Next Project -->
    <section v-if="caseStudy && nextProject" class="py-16 bg-secondary-50">
      <div class="container">
        <div class="text-center mb-8">
          <h3 class="text-lg font-medium text-secondary-600 mb-2">Next Case Study</h3>
          <h2 class="text-3xl font-bold">{{ nextProject.title }}</h2>
        </div>
        
        <div class="flex justify-center">
          <UButton
            color="primary"
            size="xl"
            :to="`/case-studies/${nextProject.slug}`"
            label="View Next Project"
          />
        </div>
      </div>
    </section>
    
    <!-- Error state -->
    <section v-if="!caseStudy" class="py-32 bg-white">
      <div class="container text-center">
        <h2 class="text-3xl font-bold mb-6">Case Study Not Found</h2>
        <p class="text-lg text-secondary-600 mb-8">We couldn't find the case study you're looking for.</p>
        <UButton
          color="primary"
          size="lg"
          to="/case-studies"
          label="Browse All Case Studies"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;

definePageMeta({
  layout: 'default'
});

// Case studies data (in a real app, this would come from Nuxt Content)
const caseStudiesData = [
  {
    title: 'Horizon Rebrand',
    description: 'A complete brand transformation for a tech company ready to expand globally.',
    thumbnail: 'https://images.pexels.com/photos/5849588/pexels-photo-5849588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Branding',
    categoryColor: 'primary',
    slug: 'horizon-rebrand',
    client: 'Horizon Technologies',
    services: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Marketing Collateral'],
    timeline: '3 months',
    technologies: ['Adobe Creative Suite', 'Figma'],
    overview: 'Horizon Technologies, a growing tech company with a decade of history, approached us for a complete rebrand to support their global expansion plans. They needed a fresh identity that would position them as a forward-thinking industry leader while honoring their established reputation.',
    challenge: 'The main challenge was creating a brand identity that would appeal to both their existing B2B client base and new consumer markets they planned to enter. The new brand needed to convey technical expertise while being approachable and modern.',
    approach: 'We took a collaborative approach, working closely with the Horizon team to understand their vision, values, and business goals. This informed our strategic and creative process.',
    process: [
      {
        title: 'Research & Discovery',
        description: 'We conducted stakeholder interviews, market research, and competitive analysis to understand the landscape and identify opportunities.'
      },
      {
        title: 'Brand Strategy',
        description: 'We developed a comprehensive brand strategy including positioning, messaging, and value proposition.'
      },
      {
        title: 'Visual Identity Design',
        description: 'We created a new logo, color palette, typography system, and visual elements that embodied the brand\'s personality.'
      },
      {
        title: 'Brand Guidelines',
        description: 'We documented all brand elements and usage guidelines to ensure consistent implementation across all touchpoints.'
      }
    ],
    results: 'The new brand identity was successfully launched across all channels and received overwhelmingly positive feedback from both existing clients and new markets. The rebrand has helped Horizon position itself as a premium provider in the industry and has supported their expansion into new territories.',
    stats: [
      {
        value: '35%',
        label: 'Increase in brand recognition'
      },
      {
        value: '42%',
        label: 'Growth in new market leads'
      },
      {
        value: '28%',
        label: 'Increase in website engagement'
      }
    ],
    images: [
      {
        src: 'https://images.pexels.com/photos/5849574/pexels-photo-5849574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'Horizon brand guidelines'
      },
      {
        src: 'https://images.pexels.com/photos/6207815/pexels-photo-6207815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'Horizon marketing materials'
      }
    ],
    testimonial: {
      quote: "The team at Apex Digital truly understood our vision and translated it into a brand identity that perfectly represents who we are and where we\'re going. The rebrand has been transformative for our business.",
      name: 'Michael Chen',
      title: 'CEO',
      company: 'Horizon Technologies'
    },
    ctaText: 'Visit Horizon',
    ctaLink: '#'
  },
  {
    title: 'Pulse Fitness App',
    description: 'A mobile fitness application that personalizes workouts and tracks user progress.',
    thumbnail: 'https://images.pexels.com/photos/5063085/pexels-photo-5063085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'App Development',
    categoryColor: 'accent',
    slug: 'pulse-fitness-app',
    client: 'Pulse Fitness',
    services: ['UI/UX Design', 'App Development', 'Content Strategy', 'Analytics Setup'],
    timeline: '6 months',
    technologies: ['React Native', 'Node.js', 'Firebase', 'Figma'],
    overview: 'Pulse Fitness wanted to create a mobile app that would provide personalized workout plans and track user progress, helping users stay motivated and achieve their fitness goals. The app needed to stand out in a crowded marketplace through exceptional UX and innovative features.',
    challenge: 'The fitness app market is highly competitive, with many established players. We needed to create an app that offered genuine value and differentiation through personalization, while making complex fitness concepts accessible to users of all experience levels.',
    approach: 'We focused on creating a highly personalized experience with an intuitive interface that would make fitness tracking seamless and motivating for users.',
    process: [
      {
        title: 'User Research',
        description: 'We conducted extensive user interviews and competitive analysis to identify pain points and opportunities in the fitness app landscape.'
      },
      {
        title: 'UX/UI Design',
        description: 'We designed an intuitive user experience with clean, motivating visuals and clear progression indicators.'
      },
      {
        title: 'Development',
        description: 'We built the app using React Native for cross-platform functionality, with a robust backend to support personalization algorithms.'
      },
      {
        title: 'Testing & Iteration',
        description: 'We conducted multiple rounds of user testing and iterative improvements before launch.'
      }
    ],
    results: 'Pulse Fitness launched successfully and quickly gained a devoted user base. The app has maintained an average rating of 4.8 stars across app stores, with users particularly praising its personalization features and intuitive design.',
    stats: [
      {
        value: '250K+',
        label: 'Downloads in first 3 months'
      },
      {
        value: '78%',
        label: 'User retention rate'
      },
      {
        value: '4.8',
        label: 'Average app store rating'
      }
    ],
    images: [
      {
        src: 'https://images.pexels.com/photos/3912956/pexels-photo-3912956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'Pulse Fitness app on smartphone'
      },
      {
        src: 'https://images.pexels.com/photos/5059013/pexels-photo-5059013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'User tracking their workout on Pulse app'
      }
    ],
    testimonial: {
      quote: 'Apex Digital delivered beyond our expectations. They understood our vision and created an app that our users love. The attention to detail in both design and functionality has been key to our success.',
      name: 'Sarah Rodriguez',
      title: 'Product Director',
      company: 'Pulse Fitness'
    },
    ctaText: 'Download App',
    ctaLink: '#'
  }
];

// Find the current case study
const caseStudy = computed(() => {
  return caseStudiesData.find(study => study.slug === slug);
});

// Find the next case study for navigation
const nextProject = computed(() => {
  if (!caseStudy.value) return null;
  
  const currentIndex = caseStudiesData.findIndex(study => study.slug === slug);
  const nextIndex = (currentIndex + 1) % caseStudiesData.length;
  
  return caseStudiesData[nextIndex];
});

// Set page metadata based on case study
useHead(() => {
  if (caseStudy.value) {
    return {
      title: `${caseStudy.value.title} - Apex Digital`,
      meta: [
        { name: 'description', content: caseStudy.value.description }
      ]
    };
  }
  
  return {
    title: 'Case Study Not Found - Apex Digital',
    meta: [
      { name: 'description', content: 'The requested case study could not be found.' }
    ]
  };
});
</script>