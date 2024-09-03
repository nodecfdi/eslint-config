import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import { allFilesSupported } from '#src/constants';

export const prettierConfig: tseslint.ConfigWithExtends[] = [
  eslintConfigPrettier,
  {
    files: [allFilesSupported],
    rules: {
      curly: ['error', 'all'],
    },
  },
];
