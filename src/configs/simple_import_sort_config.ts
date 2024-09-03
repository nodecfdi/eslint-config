import simpleImportSort from 'eslint-plugin-simple-import-sort';
import { allFilesSupported } from '../constants.js';
import { defineConfig } from '../define_config.js';

export const simpleImportSortConfig = defineConfig({
  files: [allFilesSupported],
  plugins: { 'simple-import-sort': simpleImportSort },
  rules: {
    'simple-import-sort/imports': [
      'error',
      { groups: [[String.raw`^\u0000`, '^node:', String.raw`^@?\w`, '^', String.raw`^\.`]] },
    ],
    'simple-import-sort/exports': 'error',
  },
});
