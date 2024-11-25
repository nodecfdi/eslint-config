import eslintPluginImportX from 'eslint-plugin-import-x';
import { type ConfigWithExtends } from 'typescript-eslint';
import { allFilesSupported, allJsExtensions } from '#src/constants';

export const importConfig: ConfigWithExtends[] = [
  eslintPluginImportX.flatConfigs.recommended as ConfigWithExtends,
  eslintPluginImportX.flatConfigs.typescript,
  {
    files: [allFilesSupported],
    rules: {
      'import-x/consistent-type-specifier-style': ['error', 'prefer-inline'],
      'import-x/dynamic-import-chunkname': 'off',
      'import-x/export': 'error',
      'import-x/exports-last': 'off',
      'import-x/first': 'error',
      'import-x/group-exports': 'off',
      'import-x/max-dependencies': 'off',
      'import-x/newline-after-import': 'error',
      'import-x/no-absolute-path': 'error',
      'import-x/no-amd': 'error',
      'import-x/no-anonymous-default-export': 'off',
      'import-x/no-commonjs': 'off',
      'import-x/no-cycle': 'error',
      'import-x/no-default-export': 'off',
      'import-x/no-duplicates': ['error', { 'prefer-inline': true }],
      'import-x/no-extraneous-dependencies': [
        'error',
        { devDependencies: true, optionalDependencies: true, peerDependencies: true },
      ],
      'import-x/no-import-module-exports': 'off',
      'import-x/no-internal-modules': 'off',
      'import-x/no-mutable-exports': 'error',
      'import-x/no-named-as-default': 'error',
      'import-x/no-named-default': 'error',
      'import-x/no-named-export': 'off',
      'import-x/no-namespace': 'off',
      'import-x/no-nodejs-modules': 'off',
      'import-x/no-relative-packages': 'off',
      'import-x/no-relative-parent-imports': 'off',
      'import-x/no-restricted-paths': 'off',
      'import-x/no-self-import': 'error',
      'import-x/no-unassigned-import': [
        'error',
        { allow: ['**/*.{css,sass,scss}', 'reflect-metadata'] },
      ],
      'import-x/no-unused-modules': 'off',
      'import-x/no-useless-path-segments': [
        'error',
        {
          noUselessIndex: true,
        },
      ],
      'import-x/no-webpack-loader-syntax': 'error',
      'import-x/order': 'off',
      'import-x/prefer-default-export': 'off',
      'import-x/unambiguous': 'off',
      'import-x/no-dynamic-require': 'off',

      // TypeScript provides the same checks as part of standard type checking
      'import-x/named': 'off',
      'import-x/namespace': 'off',
      'import-x/default': 'off',
      'import-x/no-named-as-default-member': 'off',
      'import-x/no-unresolved': 'off',
      'import-x/extensions': 'off',
      'import-x/no-deprecated': 'off',
    },
  },
  {
    files: [`**/*.config.{${allJsExtensions}}`],
    rules: {
      'import-x/no-default-export': 'off',
    },
  },
];
