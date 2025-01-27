declare module '@eslint-community/eslint-plugin-eslint-comments/configs' {
  import { type TSESLint } from '@typescript-eslint/utils';

  const recommended: TSESLint.FlatConfig.Config;
  export = { recommended };
}

declare module 'eslint-plugin-promise' {
  import { type TSESLint } from '@typescript-eslint/utils';

  export const configs: {
    'flat/recommended': TSESLint.FlatConfig.Config;
  };
}
