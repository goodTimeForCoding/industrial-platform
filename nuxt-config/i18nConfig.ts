const i18nConfig = {
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
};

export default i18nConfig;
