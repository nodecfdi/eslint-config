import eslintRecommended from '@eslint/js';
import { configs, plugin } from 'typescript-eslint';
import { allFilesSupported, supportedFileTypeJs } from '../constants.js';
import { defineConfig, type Rules } from '../define_config.js';

const tsNamingConventionRule: Rules = {
  '@typescript-eslint/naming-convention': [
    'error',
    {
      format: ['camelCase', 'UPPER_CASE'],
      leadingUnderscore: 'allowSingleOrDouble',
      modifiers: ['const'],
      selector: 'variable',
      trailingUnderscore: 'allowSingleOrDouble',
      types: ['string', 'number'],
    },
    {
      format: null,
      leadingUnderscore: 'allowSingleOrDouble',
      selector: 'objectLiteralProperty',
      trailingUnderscore: 'allowSingleOrDouble',
    },
    {
      format: ['PascalCase'],
      leadingUnderscore: 'allowSingleOrDouble',
      selector: 'typeLike',
      trailingUnderscore: 'allowSingleOrDouble',
    },
    {
      format: null,
      modifiers: ['destructured'],
      selector: 'variable',
    },
    {
      format: null,
      selector: 'typeProperty',
    },
    {
      format: ['PascalCase'],
      selector: 'class',
    },
    {
      custom: {
        match: false,
        regex: '^I[A-Z]',
      },
      format: ['PascalCase'],
      selector: 'interface',
    },
    {
      selector: 'variable',
      format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
    },
  ],
};

const typescriptHandPickedRules: Rules = {
  '@typescript-eslint/array-type': 'error',
  '@typescript-eslint/ban-ts-comment': [
    'error',
    {
      'ts-check': true,
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': false,
      'ts-nocheck': false,
    },
  ],
  '@typescript-eslint/consistent-type-assertions': 'error',
  '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
  '@typescript-eslint/consistent-type-exports': [
    'error',
    { fixMixedExportsWithInlineTypeSpecifier: true },
  ],
  '@typescript-eslint/consistent-type-imports': [
    'error',
    {
      prefer: 'type-imports',
      fixStyle: 'inline-type-imports',
    },
  ],
  '@typescript-eslint/default-param-last': 'error',
  '@typescript-eslint/dot-notation': 'error',
  '@typescript-eslint/explicit-member-accessibility': 'error',
  '@typescript-eslint/explicit-module-boundary-types': 'error',
  '@typescript-eslint/method-signature-style': ['error', 'method'],
  '@typescript-eslint/no-array-constructor': 'off',
  '@typescript-eslint/no-empty-function': 'error',
  '@typescript-eslint/no-inferrable-types': 'error',
  '@typescript-eslint/no-loop-func': 'error',
  '@typescript-eslint/no-non-null-assertion': 'off',
  '@typescript-eslint/no-shadow': [
    'error',
    {
      allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      hoist: 'all',
      ignoreFunctionTypeParameterNameValueShadow: true,
      ignoreTypeValueShadow: true,
    },
  ],
  '@typescript-eslint/no-unsafe-assignment': 'off',
  '@typescript-eslint/no-unused-expressions': [
    'error',
    {
      allowShortCircuit: true,
      allowTaggedTemplates: true,
      allowTernary: true,
      enforceForJSX: true,
    },
  ],
  '@typescript-eslint/no-use-before-define': 'error',
  '@typescript-eslint/prefer-function-type': 'error',
  '@typescript-eslint/prefer-nullish-coalescing': ['error', { ignorePrimitives: { string: true } }],
  '@typescript-eslint/prefer-optional-chain': 'error',
  '@typescript-eslint/prefer-string-starts-ends-with': 'error',
  '@typescript-eslint/return-await': 'error',
  '@typescript-eslint/switch-exhaustiveness-check': 'error',
  '@typescript-eslint/unified-signatures': 'error',
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      args: 'all',
      argsIgnorePattern: '^_',
      caughtErrors: 'all',
      caughtErrorsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      ignoreRestSiblings: true,
    },
  ],
  '@typescript-eslint/restrict-template-expressions': 'off',
  '@typescript-eslint/no-extraneous-class': [
    'error',
    {
      allowStaticOnly: true,
      allowWithDecorator: true,
    },
  ],
  '@typescript-eslint/no-empty-object-type': ['error', { allowInterfaces: 'always' }],
};

const tseslintRules = [...configs.strictTypeChecked, ...configs.stylisticTypeChecked]
  .map((config) => config.rules ?? {})
  // eslint-disable-next-line unicorn/no-array-reduce
  .reduce((result, current) => {
    return { ...result, ...current };
  }, {});

export const typescriptConfig = defineConfig([
  {
    files: [allFilesSupported],
    rules: eslintRecommended.configs.recommended.rules,
  },
  {
    files: [allFilesSupported],
    plugins: {
      '@typescript-eslint': plugin,
    },
  },
  {
    files: [allFilesSupported],
    rules: {
      ...tseslintRules,
      ...typescriptHandPickedRules,
      ...tsNamingConventionRule,
    },
  },
  {
    files: ['**/types.ts', '**/types/**/*.ts', '**/*.d.ts'],
    rules: {
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-shadow': 'off',
    },
  },
  {
    files: [...supportedFileTypeJs],
    ...(configs.disableTypeChecked as NodeCfdiFlatConfig),
  },
]);
