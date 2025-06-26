import n from 'eslint-plugin-n';
import globals from 'globals';
import { type ConfigWithExtends } from 'typescript-eslint';

export const nConfig: ConfigWithExtends = {
  languageOptions: {
    globals: {
      ...n.configs['recommended-module'].globals,
      ...globals.node,
    },
    parserOptions: {
      ecmaFeatures: {
        globalReturn: true,
      },
    },
  },
  plugins: {
    n,
  },
  rules: {
    'no-restricted-globals': [
      'error',
      {
        name: 'Buffer',
        message: 'Import Buffer from `node:buffer` instead',
      },
      {
        name: 'process',
        message: 'Import process from `node:process` instead',
      },
      {
        name: 'setTimeout',
        message: 'Import setTimeout from `node:timers` instead',
      },
      {
        name: 'setInterval',
        message: 'Import setInterval from `node:timers` instead',
      },
      {
        name: 'setImmediate',
        message: 'Import setImmediate from `node:timers` instead',
      },
      {
        name: 'clearTimeout',
        message: 'Import clearTimeout from `node:timers` instead',
      },
      {
        name: 'clearInterval',
        message: 'Import clearInterval from `node:timers` instead',
      },
      {
        name: 'clearImmediate',
        message: 'Import clearImmediate from `node:timers` instead',
      },
    ],
    'import/no-unresolved': 'off',
    'n/callback-return': 'error',
    'n/exports-style': 'off',
    'n/file-extension-in-import': 'off',
    'n/global-require': 'off',
    'n/handle-callback-err': 'error',
    'n/no-callback-literal': 'error',
    'n/no-deprecated-api': 'error',
    'n/no-exports-assign': 'error',
    'n/no-extraneous-import': 'off',
    'n/no-extraneous-require': 'off',
    'n/no-missing-import': 'off',
    'n/no-missing-require': 'off',
    'n/no-mixed-requires': 'off',
    'n/no-new-require': 'error',
    'n/no-path-concat': 'error',
    'n/no-process-env': 'off',
    'n/no-process-exit': 'off',
    'n/no-restricted-import': 'off',
    'n/no-restricted-require': 'off',
    'n/no-sync': [
      'error',
      {
        allowAtRootLevel: true,
      },
    ],
    'n/no-unpublished-bin': 'error',
    'n/no-unpublished-import': 'off',
    'n/no-unpublished-require': 'off',
    'n/no-unsupported-features/es-builtins': 'off',
    'n/no-unsupported-features/es-syntax': 'off',
    'n/no-unsupported-features/node-builtins': 'off',
    'n/prefer-global/buffer': ['error', 'never'],
    'n/prefer-global/console': ['error', 'always'],
    'n/prefer-global/process': ['error', 'never'],
    'n/prefer-global/text-decoder': ['error', 'never'],
    'n/prefer-global/text-encoder': ['error', 'never'],
    'n/prefer-global/url': ['error', 'never'],
    'n/prefer-global/url-search-params': ['error', 'never'],
    'n/prefer-promises/dns': 'off',
    'n/prefer-promises/fs': 'off',
    'n/process-exit-as-throw': 'error',
    'n/shebang': [
      'error',
      {
        convertPath: {
          'src/**/*.js': [String.raw`^src/(.+?)\.js$`, 'dist/$1.js'],
        },
      },
    ],
    'unicorn/prefer-node-protocol': 'error',
    'unicorn/require-post-message-target-origin': 'off',
  },
};
