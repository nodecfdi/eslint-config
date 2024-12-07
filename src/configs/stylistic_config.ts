import stylisticTs from '@stylistic/eslint-plugin-ts';
import { type ConfigWithExtends } from 'typescript-eslint';
import { allFilesSupported } from '../constants.js';

export const stylisticConfig: ConfigWithExtends = {
  files: [allFilesSupported],
  plugins: {
    '@stylistic/ts': stylisticTs,
  } as ConfigWithExtends['plugins'],
  rules: {
    // Prettier doesn't have strong opinions about emptyLines. See: https://prettier.io/docs/en/rationale.html#empty-lines.
    '@stylistic/ts/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: ['interface', 'type'],
      },
      //require blank lines before all return statements, like the newline-before-return rule.
      { blankLine: 'always', next: 'return', prev: '*' },
    ],
    '@stylistic/ts/lines-between-class-members': ['error', 'always'],
    '@stylistic/ts/semi': ['error', 'always'],
    '@stylistic/ts/no-extra-semi': 'error',
    '@stylistic/ts/comma-spacing': 'error',
    '@stylistic/ts/quote-props': ['error', 'consistent'],
  },
};
