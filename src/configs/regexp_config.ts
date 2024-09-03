import { type ConfigWithExtends } from 'typescript-eslint';
import * as regexpPlugin from 'eslint-plugin-regexp';

export const regexpConfig: ConfigWithExtends[] = [regexpPlugin.configs['flat/recommended']];
