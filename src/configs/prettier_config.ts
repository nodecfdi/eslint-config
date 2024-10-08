import eslintConfigPrettier from 'eslint-config-prettier';
import { type ConfigWithExtends } from 'typescript-eslint';
import { allFilesSupported } from '#src/constants';

export const prettierConfig: ConfigWithExtends[] = [
  eslintConfigPrettier,
  {
    files: [allFilesSupported],
    rules: {
      curly: ['error', 'all'],
    },
  },
];
