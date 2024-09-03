import preferEarlyReturn from '@regru/eslint-plugin-prefer-early-return';
import { allFilesSupported } from '../constants.js';
import { defineConfig } from '../define_config.js';

export const earlyReturnConfig = defineConfig({
  files: [allFilesSupported],
  plugins: { '@regru/prefer-early-return': preferEarlyReturn },
  rules: {
    '@regru/prefer-early-return/prefer-early-return': [
      'error',
      {
        maximumStatements: 1,
      },
    ],
  },
});
