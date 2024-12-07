import eslintConfigPrettier from 'eslint-config-prettier';
import { type ConfigWithExtends } from 'typescript-eslint';
import { allFilesSupported } from '../constants.js';

export const prettierConfig: ConfigWithExtends[] = [
  eslintConfigPrettier,
  {
    files: [allFilesSupported],
    rules: {
      curly: ['error', 'all'],
    },
  },
];
