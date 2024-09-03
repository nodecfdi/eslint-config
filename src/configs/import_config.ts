import tseslint from 'typescript-eslint';
import eslintPluginImportX from 'eslint-plugin-import-x';
import { allFilesSupported, allJsExtensions } from '#src/constants';

export const importConfig: tseslint.ConfigWithExtends[] = [
  eslintPluginImportX.flatConfigs.recommended,
  eslintPluginImportX.flatConfigs.typescript,
  {
    files: [allFilesSupported],
    rules: {
      'import-x/consistent-type-specifier-style': ['error', 'prefer-inline'],
      'import-x/default': 'error',
      'import-x/dynamic-import-chunkname': 'off',
      'import-x/export': 'error',
      'import-x/exports-last': 'off',
      // Disable for issue with imports in packages
      'import-x/extensions': 'off',
      'import-x/first': 'error',
      'import-x/group-exports': 'off',
      'import-x/max-dependencies': 'off',
      // TypeScript compilation already ensures that named imports exist in the referenced module
      'import-x/named': 'off',
      'import-x/namespace': 'off',
      'import-x/newline-after-import': 'error',
      'import-x/no-absolute-path': 'error',
      'import-x/no-amd': 'error',
      'import-x/no-anonymous-default-export': 'off',
      'import-x/no-commonjs': 'off',
      'import-x/no-cycle': 'error',
      'import-x/no-default-export': 'off',
      'import-x/no-deprecated': 'warn',
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
      'import-x/no-unresolved': 'off',
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
    },
  },
  {
    files: [`**/*.config.{${allJsExtensions}}`],
    rules: {
      'import-x/no-default-export': 'off',
    },
  },
];
