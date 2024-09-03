import eslintPrettierConfig from 'eslint-config-prettier';
import { allFilesSupported } from '../constants.js';
import { defineConfig } from '../define_config.js';

export const prettierConfig = defineConfig([
  eslintPrettierConfig,
  {
    files: [allFilesSupported],
    rules: {
      curly: ['error', 'all'],
    },
  },
]);
