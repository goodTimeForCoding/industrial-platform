import googleFontsConfig from './nuxt-config/googleFontsConfig';
import i18nConfig from './nuxt-config/i18nConfig';
import swiperConfig from './nuxt-config/swiperConfig';

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-svgo',
    'maz-ui/nuxt',
    '@pinia/nuxt',
    ['@nuxtjs/i18n', i18nConfig],
    ['@nuxtjs/google-fonts', googleFontsConfig],
    ['nuxt-swiper', swiperConfig],
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
