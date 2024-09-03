import tseslint from 'typescript-eslint';
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';
import { allFilesSupported } from '#src/constants';

export const commentsConfig: tseslint.ConfigWithExtends[] = [
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
