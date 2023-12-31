export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-svgo',
    '@nuxtjs/stylelint-module',
    'maz-ui/nuxt',
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
  stylelint: {
    customSyntax: 'postcss-html',
    fix: true,
    cache: false,
    failOnWarning: false,
    lintOnStart: false,
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
  components: [
    {
      path: '@/components',
      pathPrefix: false,
    },
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
