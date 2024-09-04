import { type ConfigWithExtends } from 'typescript-eslint';
import pluginSecurity from 'eslint-plugin-security';
import { allFilesSupported } from '#src/constants';

export const securityConfig: ConfigWithExtends[] = [
  pluginSecurity.configs.recommended,
  {
    files: [allFilesSupported],
    rules: {
      'security/detect-object-injection': 'off',
      'security/detect-non-literal-fs-filename': 'off',
    },
  },
];
