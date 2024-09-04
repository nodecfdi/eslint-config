import { type ConfigWithExtends } from 'typescript-eslint';
import { allFilesSupported } from '#src/constants';

export const eslintBaseConfig: ConfigWithExtends = {
  files: [allFilesSupported],
  rules: {
    'array-callback-return': ['error', { allowImplicit: true, checkForEach: true }],
    'eqeqeq': 'error',
    'func-style': 'error',
    'logical-assignment-operators': ['error', 'never'],
    'no-array-constructor': 'error',
    'no-caller': 'error',
    'no-console': ['error', { allow: ['warn', 'error', 'debug', 'info', 'table'] }],
    'no-constant-binary-expression': 'error',
    'no-else-return': ['error', { allowElseIf: false }],
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-implicit-coercion': 'error',
    'no-lone-blocks': 'error',
    'no-multi-assign': 'error',
    'no-multi-str': 'error',
    'no-negated-condition': 'error',
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
    'no-sequences': ['error', { allowInParentheses: false }],
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-unreachable-loop': 'error',
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
  },
};
