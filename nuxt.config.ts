import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['./app/assets/css/main.css'],
  devtools: { enabled: false },
  imports: {
    dirs: ['../shared/constants']
  },
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
  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: true
      }
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
})
