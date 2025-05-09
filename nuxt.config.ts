export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    '@vueuse/motion/nuxt',
    'nuxt-icon',
    '@nuxthq/studio'
  ],
  
  app: {
    pageTransition: { 
      name: 'page', 
      mode: 'out-in'
    },
    head: {
      title: 'Apex Digital - Creative Agency',
      meta: [
        { name: 'description', content: 'We craft digital experiences that transform brands and drive results.' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },
  
  content: {
    documentDriven: false,
    markdown: {
      remarkPlugins: ['remark-unwrap-images']
    }
  },
  
  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: ''
  },
  
  googleFonts: {
    families: {
      Inter: [400, 500, 700]
    },
    display: 'swap'
  },
  
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css'
  },
  
  ui: {
    safelistColors: ['primary', 'secondary', 'accent']
  }
})