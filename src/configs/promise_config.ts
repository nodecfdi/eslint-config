import promisePlugin from 'eslint-plugin-promise';
import { allFilesSupported } from '../constants.js';
import { defineConfig } from '../define_config.js';

export const promiseConfig = defineConfig({
  files: [allFilesSupported],
  plugins: {
    promise: promisePlugin,
  },
  rules: {
    'promise/param-names': 'error',
    'promise/prefer-await-to-callbacks': 'off',
    'promise/prefer-await-to-then': 'error',
    'promise/valid-params': 'error',
  },
});
