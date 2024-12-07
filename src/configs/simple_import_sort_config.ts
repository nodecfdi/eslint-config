import simpleImportSort from 'eslint-plugin-simple-import-sort';
import { type ConfigWithExtends } from 'typescript-eslint';
import { allFilesSupported } from '../constants.js';

export const simpleImportSortConfig: ConfigWithExtends = {
  files: [allFilesSupported],
  plugins: {
    'simple-import-sort': simpleImportSort,
  },
  rules: {
    'simple-import-sort/imports': [
      'error',
      { groups: [[String.raw`^\u0000`, '^node:', String.raw`^@?\w`, '^', String.raw`^\.`]] },
    ],
    'simple-import-sort/exports': 'error',
  },
};
