import pluginPromise from 'eslint-plugin-promise';
import { type ConfigWithExtends } from 'typescript-eslint';
import { allFilesSupported } from '../constants.js';

export const promiseConfig: ConfigWithExtends[] = [
  pluginPromise.configs['flat/recommended'],
  {
    files: [allFilesSupported],
    rules: {
      'promise/prefer-await-to-then': 'error',
      'promise/valid-params': 'error',
    },
  },
];
