import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['./app/assets/css/main.css'],
  devtools: { enabled: true },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'storeToRefs']
      }
    ],
    '@nuxt/eslint'
  ],
  nitro: {
    compressPublicAssets: {
      brotli: true
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
})
