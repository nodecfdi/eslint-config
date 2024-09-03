import { type ConfigWithExtends } from 'typescript-eslint';
import pluginSecurity from 'eslint-plugin-security';

export const securityConfig: ConfigWithExtends[] = [pluginSecurity.configs.recommended];
