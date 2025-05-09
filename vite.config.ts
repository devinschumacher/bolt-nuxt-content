import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  },
  optimizeDeps: {
    include: ['vue']
  },
  server: {
    fs: {
      strict: false, // Allow serving files from outside the project root
      allow: ['/'] // Allow access to all files on the system
    }
  }
})