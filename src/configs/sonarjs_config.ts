import sonarjs from 'eslint-plugin-sonarjs';
import { type ConfigWithExtends } from 'typescript-eslint';
import { allFilesSupported } from '../constants.js';

const disableTypescriptEslintRulesOverlapped: ConfigWithExtends['rules'] = {
  '@typescript-eslint/no-redundant-type-constituents': 'off',
  '@typescript-eslint/default-param-last': 'off',
  '@typescript-eslint/no-base-to-string': 'off',
  '@typescript-eslint/prefer-promise-reject-errors': 'off',
  '@typescript-eslint/prefer-return-this-type': 'off',
  '@typescript-eslint/no-unnecessary-type-constraint': 'off',
  '@typescript-eslint/no-deprecated': 'off',
  'sonarjs/no-empty-function': 'off',
  'sonarjs/no-unused-expressions': 'off',
};

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
      'sonarjs/no-unused-vars': 'off',
      'sonarjs/no-commented-code': 'off',
      'sonarjs/no-misused-promises': 'off',
      'sonarjs/no-hardcoded-credentials': 'off',
      'sonarjs/no-base-to-string': 'off',
      'sonarjs/different-types-comparison': 'off',
      'sonarjs/no-vue-bypass-sanitization': 'off',
      // Disable because xml namespaces need usage of http protocol
      'sonarjs/no-clear-text-protocols': 'off',
      'sonarjs/no-nested-functions': ['error', { threshold: 5 }],
      'sonarjs/no-hardcoded-passwords': 'off',
      'sonarjs/void-use': 'off',
      'sonarjs/no-useless-intersection': 'off',
      ...disableTypescriptEslintRulesOverlapped,
    },
  },
];
