import nuxtPlugin from '@nuxt/eslint-plugin';
import { type ConfigWithExtends } from 'typescript-eslint';

export const nuxtConfig: ConfigWithExtends = {
  name: 'nuxt/setup',
  plugins: {
    nuxt: nuxtPlugin,
  },
  rules: {
    'nuxt/prefer-import-meta': 'error',
  },
  languageOptions: {
    globals: {
      $fetch: 'readonly',
    },
  },
};
