import { type ConfigWithExtends } from 'typescript-eslint';
import { allFilesSupported, allJsExtensions } from '../constants.js';

export const overridesConfig: ConfigWithExtends[] = [
  {
    files: ['**/types/**/*.ts', '**/types.ts'],
    rules: {
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-shadow': 'off',
    },
  },
  {
    files: [
      `**/*.{test,spec}.{${allJsExtensions}}`,
      `**/tests/**/*.{${allJsExtensions}}`,
      `**/__tests__/**/*.{${allJsExtensions}}`,
    ],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'unicorn/no-anonymous-default-export': 'off',
      'import/no-unassigned-import': 'off',
      '@typescript-eslint/unbound-method': 'off',
    },
  },
  {
    files: ['ace.js'],
    rules: {
      'import/no-unassigned-import': 'off',
    },
  },
  {
    files: [allFilesSupported],
    rules: {
      'arrow-body-style': 'off',
      'default-param-last': 'off',
      'dot-notation': 'off',
      'no-undef': 'off',
      'no-empty-function': 'off',
      'no-nested-ternary': 'off',
      'no-return-await': 'off',
      'no-shadow': 'off',
      'no-unused-expressions': 'off',
      'no-unused-vars': 'off',
      'no-use-before-define': 'off',
    },
  },
];
