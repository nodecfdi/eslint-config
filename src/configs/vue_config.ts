import pluginVue from 'eslint-plugin-vue';
import { type ConfigWithExtends, parser } from 'typescript-eslint';
import vueParser from 'vue-eslint-parser';
import { allJsExtensions } from '../constants.js';

export const vueConfig: ConfigWithExtends[] = [
  {
    files: ['**/*.vue'],
    extends: [pluginVue.configs['flat/recommended']],
    rules: {
      'vue/block-lang': [
        'error',
        {
          script: {
            lang: 'ts',
          },
        },
      ],
      'vue/block-order': 'error',
      'vue/block-tag-newline': 'error',
      'vue/component-api-style': ['error', ['script-setup']],
      'vue/component-name-in-template-casing': [
        'error',
        'kebab-case',
        {
          registeredComponentsOnly: true,
          ignores: ['Head', 'Link'],
        },
      ],
      'vue/component-options-name-casing': ['error', 'kebab-case'],
      'vue/define-macros-order': 'error',
      'vue/define-props-declaration': ['error', 'runtime'],
      'vue/no-empty-component-block': 'error',
      'vue/no-multiple-objects-in-class': 'error',
      'vue/no-ref-object-reactivity-loss': 'error',
      'vue/no-required-prop-with-default': 'error',
      'vue/no-root-v-if': 'error',
      'vue/no-template-target-blank': 'error',
      'vue/no-unused-properties': 'error',
      'vue/no-unused-refs': 'error',
      'vue/no-use-v-else-with-v-for': 'error',
      'vue/no-useless-mustaches': 'error',
      'vue/padding-line-between-blocks': 'error',
      'vue/prefer-true-attribute-shorthand': 'error',
      'vue/require-typed-ref': 'error',
      'vue/static-class-names-order': 'off',
      // Disable usage in vue files
      'unicorn/filename-case': 'off',
    },
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser,
        extraFileExtensions: ['.vue'],
      },
    },
  },
  {
    files: [`**/composables/**/*.{${allJsExtensions}}`],
    rules: {
      'unicorn/consistent-function-scoping': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
  {
    files: [
      '**/pages/**/*.vue',
      '**/layouts/**/*.vue',
      '**/components/**/*.vue',
      '**/dialogs/**/*.vue',
      '**/app.{js,ts,vue}',
      '**/error.vue',
    ],
    rules: {
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/naming-convention': 'off',
    },
  },
];
