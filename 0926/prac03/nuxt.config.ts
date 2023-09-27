// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // modules: [
  //   '@vueuse/nuxt',
  //   '@unocss/nuxt',
  //   ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] }],
	// 	// defineStore, acceptHMRUpdate를 일일히 선언하지 않아도 됩니다.
  //   '@nuxtjs/color-mode',
  //   '@vite-pwa/nuxt',
  //   '@nuxtjs/i18n',
  //   '@element-plus/nuxt',
  // ],

  components: {
    dirs: ['pages', 'components'],
		// components 하위의 파일들을 자동으로 import 합니다.
  },

  imports: {
    dirs: ['stores'],
		// stores 하위의 파일들을 자동으로 import 합니다.
  },
})
