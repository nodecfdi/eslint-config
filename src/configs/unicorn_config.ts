import unicorn from 'eslint-plugin-unicorn';
import { allFilesSupported } from '../constants.js';
import { defineConfig } from '../define_config.js';

export const unicornConfig = defineConfig({
  files: [allFilesSupported],
  plugins: { unicorn },
  languageOptions: {
    ...unicorn.configs['flat/recommended'].languageOptions,
  },
  rules: {
    ...unicorn.configs['flat/recommended'].rules,
    'unicorn/consistent-destructuring': 'error',
    'unicorn/consistent-function-scoping': ['error', { checkArrowFunctions: false }],
    'unicorn/filename-case': [
      'error',
      {
        case: 'snakeCase',
      },
    ],
    'unicorn/no-null': 'off',
    // Enable usage for helpers classes
    'unicorn/no-static-only-class': 'off',
    // Dificult read a number
    'unicorn/numeric-separators-style': 'off',
    // Disable dom-node-because-usage with nodejs not its completed
    'unicorn/prefer-dom-node-append': 'off',
    'unicorn/prefer-dom-node-dataset': 'off',
    'unicorn/prefer-dom-node-remove': 'off',
    'unicorn/prefer-dom-node-text-content': 'off',
    'unicorn/prefer-modern-dom-apis': 'off',
    'unicorn/prefer-export-from': ['error', { ignoreUsedVariables: true }],
    // Disable because ssr not completed query selector
    'unicorn/prefer-query-selector': 'off',
    'unicorn/prefer-switch': ['error', { emptyDefaultCase: 'do-nothing-comment' }],
    // Disable prevent-abbrevations, its necessary in frameworks
    'unicorn/prevent-abbreviations': 'off',
    // Disable because not work with others function like then
    'unicorn/no-thenable': 'off',
  },
});
