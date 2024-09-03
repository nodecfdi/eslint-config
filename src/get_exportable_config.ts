import getGitignorePatterns from 'eslint-config-flat-gitignore';
import { type FlatESLintConfig } from 'eslint-define-config';
import tseslint from 'typescript-eslint';
import vueParser from 'vue-eslint-parser';
import { adonisjsConfig } from './configs/adonisjs_config.js';
import { arrowReturnStyleConfig } from './configs/arrow_return_style_config.js';
import { commentsConfig } from './configs/comments_config.js';
import { earlyReturnConfig } from './configs/early_return_config.js';
import { eslintBaseConfig } from './configs/eslint_base_config.js';
import { importConfig } from './configs/import_config.js';
import { overridesConfig } from './configs/overrides_config.js';
import { prettierConfig } from './configs/prettier_config.js';
import { promiseConfig } from './configs/promise_config.js';
import { regexpConfig } from './configs/regexp_config.js';
import { securityConfig } from './configs/security_config.js';
import { simpleImportSortConfig } from './configs/simple_import_sort_config.js';
import { sonarjsConfig } from './configs/sonarjs_config.js';
import { stylisticConfig } from './configs/stylistic_config.js';
import { typescriptConfig } from './configs/typescript_config.js';
import { unicornConfig } from './configs/unicorn_config.js';
import { vitestConfig } from './configs/vitest_config.js';
import { vueAccessibilityConfig } from './configs/vue_accessibility_config.js';
import { vueConfig } from './configs/vue_config.js';
import { ignores } from './constants.js';
import { type NodecfdiSettings } from './types.js';

const getLanguageOptionsTypescript = (
  userChosenTsConfig?: string | string[],
  vueSupport = false,
  tsconfigRootDir?: string,
): NodeCfdiFlatAtomConfig['languageOptions'] => {
  let languageOptions: {
    parser: typeof vueParser | typeof tseslint.parser;
    parserOptions: Record<string, unknown>;
  } = {
    parser: vueSupport ? vueParser : tseslint.parser,
    parserOptions: {
      parser: vueSupport ? tseslint.parser : undefined,
      ecmaVersion: 'latest',
      sourceType: 'module',
      extraFileExtensions: vueSupport ? ['.vue'] : undefined,
    },
  };

  languageOptions = tsconfigRootDir
    ? {
        ...languageOptions,
        parserOptions: {
          ...languageOptions.parserOptions,
          projectService: true,
          tsconfigRootDir,
        },
      }
    : {
        ...languageOptions,
        parserOptions: {
          ...languageOptions.parserOptions,
          project: userChosenTsConfig || true,
        },
      };

  return languageOptions as NodeCfdiFlatAtomConfig['languageOptions'];
};

export const getExportableConfig = (userConfigPrefers?: NodecfdiSettings): FlatESLintConfig[] => {
  const userConfigChoices = userConfigPrefers ?? {
    vitest: false,
    adonisjs: false,
    vue: false,
    experimentalProjectService: undefined,
  };

  const exportableConfig: NodeCfdiFlatConfig = [
    {
      languageOptions: getLanguageOptionsTypescript(
        userConfigChoices.pathsOverrides?.tsconfigLocation,
        userConfigChoices.vue,
        userConfigChoices.experimentalProjectService,
      ),
    },
    ...typescriptConfig,
    eslintBaseConfig,
    unicornConfig,
    simpleImportSortConfig,
    regexpConfig,
    earlyReturnConfig,
    sonarjsConfig,
    arrowReturnStyleConfig,
    ...importConfig,
    commentsConfig,
    promiseConfig,
    securityConfig,
    stylisticConfig,
  ];

  if (userConfigChoices.vitest) {
    exportableConfig.push(vitestConfig(userConfigChoices));
  }

  if (userConfigChoices.adonisjs) {
    exportableConfig.push(...adonisjsConfig);
  }

  if (userConfigChoices.vue) {
    exportableConfig.push(...vueConfig, ...vueAccessibilityConfig);
  }

  exportableConfig.push(...prettierConfig, ...overridesConfig);

  const hasIgnoresRecommended =
    userConfigChoices.ignores?.recommended === undefined
      ? true
      : userConfigChoices.ignores.recommended;

  const hasIgnoresInheritedFromGitIgnore =
    userConfigChoices.ignores?.inheritedFromGitignore === undefined
      ? true
      : userConfigChoices.ignores.inheritedFromGitignore;

  exportableConfig.push({
    ignores: [
      ...(hasIgnoresRecommended ? ignores : []),
      ...(hasIgnoresInheritedFromGitIgnore ? getGitignorePatterns({ strict: false }).ignores : []),
      ...(userConfigChoices.ignores?.additional ?? []),
    ],
  });

  return exportableConfig;
};
