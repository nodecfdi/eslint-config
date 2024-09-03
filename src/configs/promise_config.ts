import tseslint from 'typescript-eslint';
import pluginPromise from 'eslint-plugin-promise';
import { allFilesSupported } from '#src/constants';

export const promiseConfig: tseslint.ConfigWithExtends[] = [
  pluginPromise.configs['flat/recommended'],
  {
    files: [allFilesSupported],
    rules: {
      'promise/prefer-await-to-then': 'error',
      'promise/valid-params': 'error',
    },
  },
];
