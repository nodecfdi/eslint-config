import sonarjs from 'eslint-plugin-sonarjs';
import { allFilesSupported } from '../constants.js';
import { defineConfig } from '../define_config.js';

export const sonarjsConfig = defineConfig({
  files: [allFilesSupported],
  plugins: { sonarjs },
  rules: {
    ...sonarjs.configs.recommended.rules,
    'sonarjs/cognitive-complexity': 'off',
    'sonarjs/prefer-immediate-return': 'off',
    'sonarjs/function-return-type': 'off',
    'sonarjs/todo-tag': 'warn',
    'sonarjs/new-cap': 'off',
    'sonarjs/no-os-command-from-path': 'off',
    'sonarjs/slow-regex': 'off',
    'sonarjs/sonar-no-unused-vars': 'off',
    'sonarjs/no-commented-code': 'off',
    'sonarjs/no-misused-promises': 'off',
    'sonarjs/no-hardcoded-credentials': 'off',
    'sonarjs/no-base-to-string': 'off',
    'sonarjs/different-types-comparison': 'off',
    'sonarjs/no-vue-bypass-sanitization': 'off',
  },
  settings: {
    react: {
      version: '999.999.999',
    },
  },
});
