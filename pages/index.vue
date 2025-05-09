<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      title="We Craft Digital Experiences That Matter"
      subtitle="We're a creative agency that combines strategy, design, and technology to build brands and digital products that make an impact."
      primaryBtnText="View Our Work"
      primaryBtnLink="/case-studies"
      secondaryBtnText="Learn More"
      secondaryBtnLink="/about"
      imageUrl="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    />
    
    <!-- Services Section -->
    <section class="section bg-white">
      <div class="container">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 
            class="section-title"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          >Our Services</h2>
          <p 
            class="section-subtitle"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 600 } }"
          >We offer a comprehensive range of services to help your business thrive in the digital landscape.</p>
        </div>
        
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
    
    <!-- Featured Case Studies -->
    <section class="section bg-secondary-50">
      <div class="container">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 
            class="section-title"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          >Featured Work</h2>
          <p 
            class="section-subtitle"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 600 } }"
          >Explore some of our recent projects and see how we've helped our clients achieve their goals.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CaseStudyCard
            v-for="(caseStudy, index) in featuredCaseStudies"
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
        
        <div class="text-center mt-12">
          <UButton
            color="primary"
            variant="outline"
            to="/case-studies"
            size="lg"
            label="View All Case Studies"
            class="mx-auto"
          />
        </div>
      </div>
    </section>
    
    <!-- Testimonials -->
    <section class="section bg-white">
      <div class="container">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 
            class="section-title"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          >What Our Clients Say</h2>
          <p 
            class="section-subtitle"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 600 } }"
          >Don't just take our word for it - hear what our clients have to say about working with us.</p>
        </div>
        
        <TestimonialSlider />
      </div>
    </section>
    
    <!-- Client Logos -->
    <ClientLogos />
    
    <!-- CTA Section -->
    <section class="bg-primary-900 text-white py-20">
      <div 
        class="container text-center"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 700 } }"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to transform your digital presence?</h2>
        <p class="text-xl text-primary-100 max-w-3xl mx-auto mb-10">Let's collaborate to create something exceptional that helps you achieve your business goals.</p>
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
  title: 'Apex Digital - Creative Digital Agency',
  meta: [
    { name: 'description', content: 'We craft digital experiences that transform brands and drive results.' }
  ]
});

// Services data
const services = [
  {
    title: 'Brand Strategy',
    description: 'We develop comprehensive brand strategies that help you stand out in the market and connect with your target audience.',
    icon: 'heroicons:light-bulb',
    link: '/services#brand-strategy'
  },
  {
    title: 'Web Design & Development',
    description: 'We create beautiful, functional websites that deliver exceptional user experiences and drive business results.',
    icon: 'heroicons:code-bracket-square',
    link: '/services#web-design'
  },
  {
    title: 'UI/UX Design',
    description: 'Our user-centered design approach ensures intuitive, engaging experiences that keep users coming back.',
    icon: 'heroicons:cursor-arrow-rays',
    link: '/services#ui-ux-design'
  },
  {
    title: 'Digital Marketing',
    description: 'We develop and execute digital marketing strategies that increase visibility and drive conversion.',
    icon: 'heroicons:chart-bar',
    link: '/services#digital-marketing'
  },
  {
    title: 'Content Creation',
    description: 'From copywriting to photography and video, we create compelling content that tells your story.',
    icon: 'heroicons:pencil-square',
    link: '/services#content-creation'
  },
  {
    title: 'App Development',
    description: 'We build native and cross-platform mobile apps that provide seamless user experiences.',
    icon: 'heroicons:device-phone-mobile',
    link: '/services#app-development'
  }
];

// Featured case studies
const featuredCaseStudies = [
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
    category: 'Web Development',
    categoryColor: 'success',
    slug: 'organic-bloom-ecommerce'
  }
];
</script>