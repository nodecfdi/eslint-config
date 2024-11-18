import pluginSecurity from 'eslint-plugin-security';
import { type ConfigWithExtends } from 'typescript-eslint';
import { allFilesSupported } from '#src/constants';

export const securityConfig: ConfigWithExtends[] = [
  pluginSecurity.configs.recommended,
  {
    files: [allFilesSupported],
    rules: {
      'security/detect-object-injection': 'off',
      'security/detect-non-literal-fs-filename': 'off',
      'security/detect-unsafe-regex': 'off',
      'security/detect-non-literal-regexp': 'off',
    },
  },
];
