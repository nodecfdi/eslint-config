import tseslint from 'typescript-eslint';
import pluginSecurity from 'eslint-plugin-security';

export const securityConfig: tseslint.ConfigWithExtends[] = [pluginSecurity.configs.recommended];
