module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'airbnb-base',
    '@nuxt/eslint-config',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: [
        'pages/**/*.vue',
        'components/**/*.vue',
        'store/**/*.js',
        'plugins/**/*.ts',
      ],
      rules: {
        'vue/multi-word-component-names': 0,
        'import/prefer-default-export': 'off',
      },
    },
  ],

  plugins: ['vue'],
  rules: {
    'max-len': ['error', { code: 120 }],
    'vue/max-len': [
      'error',
      {
        code: 120,
        template: 120,
      },
    ],
  },
  settings: {
    'import/resolver': {
      nuxt: {
        extensions: ['.js', '.vue'],
      },
    },
  },
};
