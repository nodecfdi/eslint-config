import { allFilesSupported } from '../constants.js';
import { defineConfig } from '../define_config.js';

export const eslintBaseConfig = defineConfig({
  files: [allFilesSupported],
  rules: {
    'array-callback-return': ['error', { allowImplicit: true, checkForEach: true }],
    // we are using the @typescript/eslint version
    'arrow-body-style': 'off',
    // we are using the @typescript/eslint version
    'default-param-last': 'off',
    // we are using the @typescript/eslint version
    'dot-notation': 'off',
    'eqeqeq': 'error',
    'func-style': 'error',
    'logical-assignment-operators': ['error', 'never'],
    'no-array-constructor': 'error',
    'no-caller': 'error',
    'no-console': ['error', { allow: ['warn', 'error', 'debug', 'info', 'table'] }],
    'no-constant-binary-expression': 'error',
    'no-else-return': ['error', { allowElseIf: false }],
    // we are using the @typescript/eslint version
    'no-empty-function': 'off',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-implicit-coercion': 'error',
    'no-lone-blocks': 'error',
    'no-multi-assign': 'error',
    'no-multi-str': 'error',
    'no-negated-condition': 'error',
    // we are using the unicorn version
    'no-nested-ternary': 'off',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': ['error', { props: false }],
    'no-plusplus': 'error',
    'no-promise-executor-return': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-restricted-imports': ['error', { paths: ['prop-types'] }],
    'no-restricted-properties': [
      'error',
      {
        message: 'Please use Number.isFinite instead',
        object: 'global',
        property: 'isFinite',
      },
      {
        message: 'Please use Number.isFinite instead',
        object: 'self',
        property: 'isFinite',
      },
      {
        message: 'Please use Number.isFinite instead',
        object: 'window',
        property: 'isFinite',
      },
      {
        message: 'Please use Number.isNaN instead',
        object: 'global',
        property: 'isNaN',
      },
      {
        message: 'Please use Number.isNaN instead',
        object: 'self',
        property: 'isNaN',
      },
      {
        message: 'Please use Number.isNaN instead',
        object: 'window',
        property: 'isNaN',
      },
    ],
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'off',
    'no-sequences': ['error', { allowInParentheses: false }],
    // we are using the @typescript/eslint version
    'no-shadow': 'off',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-unreachable-loop': 'error',
    // we are using the @typescript/eslint version
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-useless-call': 'error',
    'no-void': ['error', { allowAsStatement: true }],
    'object-shorthand': 'error',
    'operator-assignment': ['error', 'always'],
    'prefer-arrow-callback': 'error',
    'prefer-destructuring': [
      'error',
      {
        AssignmentExpression: {
          array: false,
          object: false,
        },
        VariableDeclarator: {
          array: false,
          object: true,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'prefer-object-has-own': 'error',
    'prefer-object-spread': 'error',
    'prefer-template': 'error',
    'require-atomic-updates': ['error', { allowProperties: true }],
    'strict': ['error', 'never'], // we are using the eslint-plugin-arrow-return-style version
  },
});
