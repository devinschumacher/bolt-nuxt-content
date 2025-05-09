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
          <h1 class="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p class="text-xl text-secondary-600">Get to know the team behind Apex Digital and our approach to creating exceptional digital experiences.</p>
        </div>
      </div>
    </section>
    
    <!-- Our Story -->
    <section class="section bg-white">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
          >
            <h2 class="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p class="text-secondary-700 mb-4">
              Founded in 2018, Apex Digital began with a simple mission: to help businesses succeed in the digital landscape by creating meaningful connections with their audiences.
            </p>
            <p class="text-secondary-700 mb-4">
              What started as a small team of passionate designers and developers has grown into a full-service creative agency with a global client base. But our core values remain unchanged: creativity, innovation, and a relentless focus on delivering results.
            </p>
            <p class="text-secondary-700">
              We believe that great design is about more than aesthetics—it's about solving problems and creating experiences that people love. This philosophy guides everything we do, from brand strategy to web development and digital marketing.
            </p>
          </div>
          <div 
            class="relative"
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
          >
            <img 
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Our team collaborating" 
              class="rounded-lg shadow-xl"
            />
            <div class="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-600 rounded-lg -z-10"></div>
            <div class="absolute -top-6 -left-6 w-32 h-32 bg-accent-100 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Our Values -->
    <section class="section bg-secondary-50">
      <div class="container">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 
            class="section-title"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          >Our Values</h2>
          <p 
            class="section-subtitle"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 600 } }"
          >These core principles guide our work and shape our culture.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(value, index) in values" 
            :key="value.title"
            class="bg-white p-8 rounded-lg shadow-md"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: index * 100, duration: 500 } }"
          >
            <div class="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-5" :class="`bg-${value.color}-100 text-${value.color}-600`">
              <Icon :name="value.icon" class="w-6 h-6" />
            </div>
            <h3 class="text-xl font-bold mb-3">{{ value.title }}</h3>
            <p class="text-secondary-600">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Our Team -->
    <section class="section bg-white">
      <div class="container">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 
            class="section-title"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          >Meet Our Team</h2>
          <p 
            class="section-subtitle"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 600 } }"
          >We're a diverse team of creatives, strategists, and technologists united by our passion for creating exceptional digital experiences.</p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <TeamMember 
            v-for="(member, index) in teamMembers"
            :key="member.name"
            :name="member.name"
            :position="member.position"
            :bio="member.bio"
            :image="member.image"
            :socials="member.socials"
            :index="index"
          />
        </div>
      </div>
    </section>
    
    <!-- Stats Section -->
    <section class="section bg-primary-900 text-white">
      <div class="container">
        <div 
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 700 } }"
        >
          <div class="p-8">
            <div class="text-5xl font-bold mb-2 text-white">100+</div>
            <p class="text-primary-200 text-lg">Happy Clients</p>
          </div>
          <div class="p-8">
            <div class="text-5xl font-bold mb-2 text-white">250+</div>
            <p class="text-primary-200 text-lg">Projects Completed</p>
          </div>
          <div class="p-8">
            <div class="text-5xl font-bold mb-2 text-white">15+</div>
            <p class="text-primary-200 text-lg">Awards Won</p>
          </div>
          <div class="p-8">
            <div class="text-5xl font-bold mb-2 text-white">5+</div>
            <p class="text-primary-200 text-lg">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="section bg-white">
      <div 
        class="container max-w-4xl text-center"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 700 } }"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to work with us?</h2>
        <p class="text-xl text-secondary-600 max-w-3xl mx-auto mb-10">We're always looking for new challenges and exciting projects. Let's create something amazing together.</p>
        <div class="flex flex-wrap justify-center gap-4">
          <UButton
            color="primary"
            size="xl"
            to="/contact"
            label="Get in Touch"
          />
          <UButton
            color="white"
            variant="outline"
            size="xl"
            to="/case-studies"
            label="View Our Work"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
});

useHead({
  title: 'About Us - Apex Digital',
  meta: [
    { name: 'description', content: 'Learn about Apex Digital, our team, values, and approach to creating exceptional digital experiences.' }
  ]
});

// Values data
const values = [
  {
    title: 'Creativity',
    description: 'We approach every challenge with a fresh perspective, pushing boundaries to create innovative solutions that stand out.',
    icon: 'heroicons:light-bulb',
    color: 'primary'
  },
  {
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards in everything we do, from the smallest details to the overall strategy.',
    icon: 'heroicons:star',
    color: 'success'
  },
  {
    title: 'Collaboration',
    description: 'We believe the best work happens when we combine our expertise with yours, working as true partners.',
    icon: 'heroicons:users',
    color: 'accent'
  },
  {
    title: 'Integrity',
    description: 'We build relationships based on trust, transparency, and honest communication at every step.',
    icon: 'heroicons:shield-check',
    color: 'secondary'
  },
  {
    title: 'Results-Driven',
    description: 'We focus on delivering measurable outcomes that help your business grow and succeed.',
    icon: 'heroicons:chart-bar',
    color: 'warning'
  },
  {
    title: 'Innovation',
    description: 'We stay ahead of the curve, embracing new technologies and approaches to solve complex problems.',
    icon: 'heroicons:rocket-launch',
    color: 'error'
  }
];

// Team members data
const teamMembers = [
  {
    name: 'Alex Chen',
    position: 'Founder & Creative Director',
    bio: 'With over 15 years of experience in design and branding, Alex leads our creative vision and strategy.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socials: [
      { platform: 'Twitter', icon: 'mdi:twitter', url: '#' },
      { platform: 'LinkedIn', icon: 'mdi:linkedin', url: '#' },
      { platform: 'Dribbble', icon: 'mdi:dribbble', url: '#' }
    ]
  },
  {
    name: 'Sarah Johnson',
    position: 'Design Lead',
    bio: 'Sarah brings a human-centered approach to design, creating intuitive and beautiful user experiences.',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socials: [
      { platform: 'Twitter', icon: 'mdi:twitter', url: '#' },
      { platform: 'LinkedIn', icon: 'mdi:linkedin', url: '#' },
      { platform: 'Dribbble', icon: 'mdi:dribbble', url: '#' }
    ]
  },
  {
    name: 'Marcus Williams',
    position: 'Technical Director',
    bio: 'Marcus oversees all technical aspects of our projects, ensuring they\'re built with the right technology.',
    image: 'https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socials: [
      { platform: 'Twitter', icon: 'mdi:twitter', url: '#' },
      { platform: 'LinkedIn', icon: 'mdi:linkedin', url: '#' },
      { platform: 'GitHub', icon: 'mdi:github', url: '#' }
    ]
  },
  {
    name: 'Emily Zhang',
    position: 'Strategy Director',
    bio: 'Emily helps our clients navigate the digital landscape, developing strategies that deliver results.',
    image: 'https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socials: [
      { platform: 'Twitter', icon: 'mdi:twitter', url: '#' },
      { platform: 'LinkedIn', icon: 'mdi:linkedin', url: '#' }
    ]
  }
];
</script>