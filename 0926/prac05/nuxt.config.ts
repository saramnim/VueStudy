export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] }],
  ],
  components: {
    dirs: ['pages', 'components'],
  },

  imports: {
    dirs: ['stores'],
  },
  css: [
    '~/assets/css/_global.css'
  ],
})