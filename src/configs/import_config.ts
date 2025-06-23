import eslintPluginImport from 'eslint-plugin-import';
import { type ConfigWithExtends } from 'typescript-eslint';
import { allFilesSupported, allJsExtensions } from '../constants.js';

export const importConfig: ConfigWithExtends[] = [
  eslintPluginImport.flatConfigs.recommended,
  eslintPluginImport.flatConfigs.typescript,
  {
    files: [allFilesSupported],
    rules: {
      'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
      'import/dynamic-import-chunkname': 'off',
      'import/export': 'error',
      'import/exports-last': 'off',
      'import/first': 'error',
      'import/group-exports': 'off',
      'import/max-dependencies': 'off',
      'import/newline-after-import': 'error',
      'import/no-absolute-path': 'error',
      'import/no-amd': 'error',
      'import/no-anonymous-default-export': 'off',
      'import/no-commonjs': 'off',
      'import/no-cycle': ['error', { disableScc: true, ignoreExternal: true }],
      'import/no-default-export': 'off',
      'import/no-duplicates': ['error', { 'prefer-inline': true }],
      'import/no-extraneous-dependencies': [
        'error',
        { devDependencies: true, optionalDependencies: true, peerDependencies: true },
      ],
      'import/no-import-module-exports': 'off',
      'import/no-internal-modules': 'off',
      'import/no-mutable-exports': 'error',
      'import/no-named-as-default': 'error',
      'import/no-named-default': 'error',
      'import/no-named-export': 'off',
      'import/no-namespace': 'off',
      'import/no-nodejs-modules': 'off',
      'import/no-relative-packages': 'off',
      'import/no-relative-parent-imports': 'off',
      'import/no-restricted-paths': 'off',
      'import/no-self-import': 'error',
      'import/no-unassigned-import': ['error', { allow: ['**/*.{css,sass,scss}', 'reflect-metadata'] }],
      'import/no-unused-modules': 'off',
      'import/no-useless-path-segments': [
        'error',
        {
          noUselessIndex: true,
        },
      ],
      'import/no-webpack-loader-syntax': 'error',
      'import/order': 'off',
      'import/prefer-default-export': 'off',
      'import/unambiguous': 'off',
      'import/no-dynamic-require': 'off',

      // TypeScript provides the same checks as part of standard type checking
      'import/named': 'off',
      'import/namespace': 'off',
      'import/default': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-unresolved': 'off',
      'import/extensions': 'off',
      'import/no-deprecated': 'off',
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
  },
  {
    files: [`**/*.config.{${allJsExtensions}}`],
    rules: {
      'import/no-default-export': 'off',
    },
  },
];
