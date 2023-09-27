export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'practice',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  server: {
    port: 3001,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ['pages', 'components'],
		// components 하위의 파일들을 자동으로 import 합니다.
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] }],
		// defineStore, acceptHMRUpdate를 일일히 선언하지 않아도 됩니다.
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    '@nuxtjs/i18n',
    '@element-plus/nuxt',
  ],
  imports: {
    dirs: ['stores'],
		// stores 하위의 파일들을 자동으로 import 합니다.
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
