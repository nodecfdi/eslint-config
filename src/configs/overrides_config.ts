import tseslint from 'typescript-eslint';
import { allJsExtensions } from '#src/constants';

export const overridesConfig: tseslint.ConfigWithExtends[] = [
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
      'import-x/no-unassigned-import': 'off',
      '@typescript-eslint/unbound-method': 'off',
    },
  },
];
