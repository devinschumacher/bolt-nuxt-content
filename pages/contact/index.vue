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
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p class="text-xl text-secondary-600">Have a project in mind? Let's discuss how we can help bring your vision to life.</p>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="section bg-white">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <!-- Contact Form -->
          <div>
            <h2 class="text-2xl font-bold mb-6">Send us a message</h2>
            <ContactForm />
          </div>

          <!-- Contact Info -->
          <div>
            <h2 class="text-2xl font-bold mb-6">Contact Information</h2>
            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-semibold mb-2">Address</h3>
                <p class="flex items-start space-x-3">
                  <Icon name="heroicons:map-pin" class="w-5 h-5 mt-1 flex-shrink-0 text-primary-600" />
                  <span>123 Design Street<br/>San Francisco, CA 94107</span>
                </p>
              </div>

              <div>
                <h3 class="text-lg font-semibold mb-2">Email</h3>
                <p class="flex items-center space-x-3">
                  <Icon name="heroicons:envelope" class="w-5 h-5 flex-shrink-0 text-primary-600" />
                  <a href="mailto:hello@apexdigital.co" class="hover:text-primary-600 transition-colors">
                    hello@apexdigital.co
                  </a>
                </p>
              </div>

              <div>
                <h3 class="text-lg font-semibold mb-2">Phone</h3>
                <p class="flex items-center space-x-3">
                  <Icon name="heroicons:phone" class="w-5 h-5 flex-shrink-0 text-primary-600" />
                  <a href="tel:+1234567890" class="hover:text-primary-600 transition-colors">
                    +1 (234) 567-890
                  </a>
                </p>
              </div>

              <div class="pt-6 border-t">
                <h3 class="text-lg font-semibold mb-4">Follow Us</h3>
                <div class="flex space-x-4">
                  <a 
                    v-for="social in socials" 
                    :key="social.name"
                    :href="social.url"
                    class="text-secondary-600 hover:text-primary-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon :name="social.icon" class="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
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
  title: 'Contact Us - Apex Digital',
  meta: [
    { name: 'description', content: 'Get in touch with Apex Digital. We\'d love to hear about your project and discuss how we can help.' }
  ]
});

const socials = [
  { name: 'Twitter', icon: 'mdi:twitter', url: '#' },
  { name: 'LinkedIn', icon: 'mdi:linkedin', url: '#' },
  { name: 'Instagram', icon: 'mdi:instagram', url: '#' },
  { name: 'Dribbble', icon: 'mdi:dribbble', url: '#' }
];
</script>