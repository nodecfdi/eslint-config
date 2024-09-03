import tseslint from 'typescript-eslint';
import adonisJSPlugin from '@adonisjs/eslint-plugin';
import { supportedFileTypes } from '#src/constants';

export const adonisjsConfig: tseslint.ConfigWithExtends[] = [
  {
    files: [supportedFileTypes],
    plugins: {
      '@adonisjs': adonisJSPlugin,
    },
    rules: {
      '@adonisjs/prefer-lazy-controller-import': 'error',
      '@adonisjs/prefer-lazy-listener-import': 'error',
    },
  },
  {
    files: [
      '**/database/migrations/*.ts',
      '**/database/factories/*.ts',
      '**/database/seeders/*.ts',
      '**/bin/*.ts',
      '**/commands/*.ts',
      '**/app/middleware/*.ts',
      '**/app/exceptions/*.ts',
    ],
    rules: {
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      'unicorn/no-anonymous-default-export': 'off',
    },
  },
  {
    files: ['**/config/*.ts', '**/src/extensions/**/*.ts'],
    rules: {
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-shadow': 'off',
    },
  },
  {
    files: ['**/bin/*.ts'],
    rules: {
      '@typescript-eslint/no-misused-promises': 'off',
      'unicorn/prefer-top-level-await': 'off',
    },
  },
  {
    files: ['**/mixins/**/*.ts'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'unicorn/no-anonymous-default-export': 'off',
    },
  },
  {
    files: ['**/services/**/*.ts'],
    rules: {
      'import-x/no-mutable-exports': 'off',
    },
  },
  {
    files: ['**/define_config.ts'],
    rules: {
      '@typescript-eslint/require-await': 'off',
    },
  },
  {
    files: ['**/inertia/**/*.ts', '**/inertia/**/*.vue'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
  {
    files: ['**/app/middleware/*.ts'],
    rules: {
      '@typescript-eslint/no-unsafe-return': 'off',
    },
  },
  {
    files: ['**/app/controles/**/*.ts'],
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
];
