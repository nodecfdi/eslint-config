import nuxtPlugin from '@nuxt/eslint-plugin';
import { type ConfigWithExtends } from 'typescript-eslint';

export const nuxtConfig: ConfigWithExtends[] = [
  {
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
  },
  {
    files: ['utils/**/*.ts', 'app/utils/**/*.ts'],
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
];
