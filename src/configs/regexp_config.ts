import * as regexpPlugin from 'eslint-plugin-regexp';
import { allFilesSupported } from '../constants.js';
import { defineConfig } from '../define_config.js';

export const regexpConfig = defineConfig({
  files: [allFilesSupported],
  plugins: {
    regexp: regexpPlugin,
  },
  rules: regexpPlugin.configs['flat/recommended'].rules,
});
