import vuejsAccessibility from 'eslint-plugin-vuejs-accessibility';
import { defineConfig } from '../define_config.js';

export const vueAccessibilityConfig = defineConfig([
  ...vuejsAccessibility.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    rules: {
      'vuejs-accessibility/mouse-events-have-key-events': 'off',
    },
  },
]);
