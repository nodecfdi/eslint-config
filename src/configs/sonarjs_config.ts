import sonarjs from 'eslint-plugin-sonarjs';
import { type ConfigWithExtends } from 'typescript-eslint';
import { allFilesSupported } from '#src/constants';

export const sonarjsConfig: ConfigWithExtends[] = [
  sonarjs.configs.recommended,
  {
    files: [allFilesSupported],
    rules: {
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
      // Disable because xml namespaces need usage of http protocol
      'sonarjs/no-clear-text-protocols': 'off',
      'sonarjs/no-nested-functions': ['error', { threshold: 5 }],
    },
  },
];
