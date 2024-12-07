import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';
import { type ConfigWithExtends } from 'typescript-eslint';
import { allFilesSupported } from '../constants.js';

export const commentsConfig: ConfigWithExtends[] = [
  comments.recommended,
  {
    files: [allFilesSupported],
    rules: {
      '@eslint-community/eslint-comments/disable-enable-pair': [
        'error',
        {
          allowWholeFile: true,
        },
      ],
      '@eslint-community/eslint-comments/no-restricted-disable': 'off',
      '@eslint-community/eslint-comments/no-unused-disable': 'off',
      '@eslint-community/eslint-comments/no-use': 'off',
      '@eslint-community/eslint-comments/require-description': 'off',
    },
  },
];
