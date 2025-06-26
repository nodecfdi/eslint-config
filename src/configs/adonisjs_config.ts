import adonisJSPlugin from '@adonisjs/eslint-plugin';
import { type ConfigWithExtends } from 'typescript-eslint';
import { supportedFileTypes } from '../constants.js';

export const adonisjsConfig: ConfigWithExtends[] = [
  {
    files: [supportedFileTypes],
    plugins: {
      '@adonisjs': adonisJSPlugin,
    },
    rules: {
      '@adonisjs/prefer-lazy-controller-import': 'error',
      '@adonisjs/prefer-lazy-listener-import': 'error',
      'import/no-cycle': 'off',
    },
  },
  {
    files: [
      '**/database/migrations/**/*.ts',
      '**/database/factories/**/*.ts',
      '**/database/seeders/**/*.ts',
      '**/bin/*.ts',
      '**/commands/**/*.ts',
      '**/middleware/**/*.ts',
      '**/exceptions/**/*.ts',
    ],
    rules: {
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      'unicorn/no-anonymous-default-export': 'off',
    },
  },
  {
    files: ['**/config/*.ts', '**/extensions/**/*.ts', '**/providers/**/*.ts'],
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
      'func-style': 'off',
    },
  },
  {
    files: ['**/services/**/*.ts'],
    rules: {
      'import/no-mutable-exports': 'off',
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
    files: ['**/middleware/**/*.ts'],
    rules: {
      '@typescript-eslint/no-unsafe-return': 'off',
    },
  },
  {
    files: ['**/controllers/**/*.ts'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
];
