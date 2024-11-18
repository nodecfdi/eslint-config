import { type ConfigWithExtends } from 'typescript-eslint';

export const vueExtendedConfig = (props?: {
  globalComponentsPatterns?: string[];
  globalPropertiesPatterns?: string[];
}): ConfigWithExtends => {
  return {
    files: ['**/*.vue'],
    rules: {
      'vue/no-undef-components': [
        'error',
        {
          ignorePatterns: props?.globalComponentsPatterns ?? [String.raw`q(\-\w+)+`],
        },
      ],
      'vue/no-undef-properties': [
        'error',
        {
          ignores: props?.globalPropertiesPatterns ?? [String.raw`/^\$/`],
        },
      ],
    },
  };
};
