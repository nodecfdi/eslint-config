import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import { allFilesSupported } from '#src/constants';

export const stylisticConfig: tseslint.ConfigWithExtends = {
  files: [allFilesSupported],
  plugins: {
    '@stylistic': stylistic,
  } as tseslint.ConfigWithExtends['plugins'],
  rules: {
    // Prettier doesn't have strong opinions about emptyLines. See: https://prettier.io/docs/en/rationale.html#empty-lines.
    '@stylistic/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: ['interface', 'type'],
      },
      //require blank lines before all return statements, like the newline-before-return rule.
      { blankLine: 'always', next: 'return', prev: '*' },
    ],
    '@stylistic/lines-between-class-members': ['error', 'always'],
    '@stylistic/semi': ['error', 'always'],
    '@stylistic/no-extra-semi': 'error',
    '@stylistic/comma-spacing': 'error',
    '@stylistic/quote-props': ['error', 'consistent'],
  },
};
