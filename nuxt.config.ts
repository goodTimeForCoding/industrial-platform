export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-svgo',
    'maz-ui/nuxt',
    '@pinia/nuxt',
    [
      '@nuxtjs/i18n',
      {
        langDir: 'locales',
        legacy: false,
        strategy: 'prefix',
        defaultLocale: 'ru',
        locales: [
          {
            code: 'ru',
            iso: 'ru',
            name: 'Russian',
            file: 'ru.json',
          },
          {
            code: 'en',
            iso: 'en',
            name: 'English',
            file: 'en.json',
          },
        ],
        detectBrowserLanguage: false,
      },
    ],
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Montserrat: [400, 500, 600, 700, 800],
          'Open Sans': [400, 500, 600, 700, 800],
        },
      },
    ],
    [
      'nuxt-swiper',
      {
        prefix: 'Swiper',
        styleLang: 'scss',
      },
    ],
  ],
  routeRules: {
    '/': { redirect: '/ru/industries/dip' },
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
  runtimeConfig: {
    public: {
      postFormUrl: process.env.postFormUrl,
      getProductsUrl: process.env.getProductsUrl,
      recaptchaSiteKey: process.env.recaptchaSiteKey,
    },
  },
  css: [
    'normalize.css',
    '@/assets/styles/global.scss',
    '@/assets/styles/settings.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use '@/assets/styles/breakpoint.scss' as *; @use '@/assets/styles/variables.scss' as *;`,
        },
      },
    },
  },
});
