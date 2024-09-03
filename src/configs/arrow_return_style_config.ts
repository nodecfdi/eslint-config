import arrowReturnStyle from 'eslint-plugin-arrow-return-style';
import { allFilesSupported } from '../constants.js';
import { defineConfig } from '../define_config.js';

export const arrowReturnStyleConfig = defineConfig({
  files: [allFilesSupported],
  plugins: { 'arrow-return-style': arrowReturnStyle },
  rules: {
    'arrow-return-style/arrow-return-style': 'off',
    'arrow-return-style/no-export-default-arrow': 'error',
  },
});
