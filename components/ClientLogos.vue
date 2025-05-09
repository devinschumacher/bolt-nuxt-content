<template>
  <div class="py-16 bg-secondary-50">
    <div class="container">
      <h3 class="text-center text-xl font-semibold text-secondary-600 mb-12">Trusted by leading brands worldwide</h3>
      
      <div 
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <div v-for="(logo, index) in logos" :key="index" class="h-12 flex items-center justify-center">
          <img 
            :src="logo.src" 
            :alt="logo.alt" 
            class="h-8 max-w-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const logos = [
  { 
    src: 'https://cdn.dribbble.com/users/148448/screenshots/14701155/media/44e97fa0682b07a3e4ed3cc110a08dfc.png?resize=400x0', 
    alt: 'Velocity Company' 
  },
  { 
    src: 'https://cdn.dribbble.com/users/148448/screenshots/14701089/media/daaec5b2f48ef35ab225de9bd77c6717.png?resize=400x0', 
    alt: 'Summit Industries' 
  },
  { 
    src: 'https://cdn.dribbble.com/users/148448/screenshots/14701086/media/d33e4b16cbb2fadf06a4be38aa6e26c5.png?resize=400x0', 
    alt: 'Spark Digital' 
  },
  { 
    src: 'https://cdn.dribbble.com/users/148448/screenshots/14701165/media/bd9bd4c3608a07edcb1131047a026c9f.png?resize=400x0', 
    alt: 'Zenith Solutions' 
  },
  { 
    src: 'https://cdn.dribbble.com/users/148448/screenshots/14701162/media/0bb6b51a7eb9ba83709c230132738681.png?resize=400x0', 
    alt: 'Fusion Tech' 
  },
  { 
    src: 'https://cdn.dribbble.com/users/148448/screenshots/14701169/media/fee6c26ae4b7e7ad7a8ddb3e5aa7c536.png?resize=400x0', 
    alt: 'Prism Labs' 
  }
];
</script>