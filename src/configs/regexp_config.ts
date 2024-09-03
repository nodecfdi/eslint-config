import tseslint from 'typescript-eslint';
import * as regexpPlugin from 'eslint-plugin-regexp';

export const regexpConfig: tseslint.ConfigWithExtends[] = [
  regexpPlugin.configs['flat/recommended'],
];
