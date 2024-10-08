import * as regexpPlugin from 'eslint-plugin-regexp';
import { type ConfigWithExtends } from 'typescript-eslint';

export const regexpConfig: ConfigWithExtends[] = [regexpPlugin.configs['flat/recommended']];
