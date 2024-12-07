import getGitignorePatterns from 'eslint-config-flat-gitignore';
import tseslint, { type ConfigWithExtends } from 'typescript-eslint';
import vueParser from 'vue-eslint-parser';
import { adonisjsConfig } from './configs/adonisjs_config.js';
import { commentsConfig } from './configs/comments_config.js';
import { eslintBaseConfig } from './configs/eslint_base_config.js';
import { importConfig } from './configs/import_config.js';
import { nConfig } from './configs/n_config.js';
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
import { vueConfig } from './configs/vue_config.js';
import { vueExtendedConfig } from './configs/vue_extended_config.js';
import { ignores } from './constants.js';
import { type NodecfdiSettings } from './types.js';

const configureConfig = (
  tsconfigRootDir: string,
  userConfigPrefers?: NodecfdiSettings,
): {
  defineConfig(...configBlocksToMerge: ConfigWithExtends[]): ReturnType<(typeof tseslint)['config']>;
} => {
  const userConfigChoices = userConfigPrefers ?? {
    vitest: false,
    adonisjs: false,
    vue: false,
    projectService: true,
    sonarjs: false,
    n: false,
  };

  const defineConfig = (...configBlocksToMerge: ConfigWithExtends[]) => {
    const blocksToMerge: ConfigWithExtends[] = [
      ...typescriptConfig,
      eslintBaseConfig,
      ...unicornConfig,
      simpleImportSortConfig,
      ...regexpConfig,
      ...importConfig,
      ...commentsConfig,
      ...promiseConfig,
      ...securityConfig,
      stylisticConfig,
    ];

    if (userConfigChoices.vitest) {
      blocksToMerge.push(vitestConfig);
    }

    if (userConfigChoices.adonisjs) {
      blocksToMerge.push(...adonisjsConfig);
    }

    if (userConfigChoices.vue) {
      blocksToMerge.push(...vueConfig);

      const resolverGlobalComponents = typeof userConfigChoices.vue === 'boolean' ? undefined : userConfigChoices.vue;

      blocksToMerge.push(vueExtendedConfig(resolverGlobalComponents));
    }

    if (userConfigChoices.sonarjs) {
      blocksToMerge.push(...sonarjsConfig);
    }

    if (userConfigChoices.n) {
      blocksToMerge.push(nConfig);
    }

    blocksToMerge.push(...prettierConfig, ...overridesConfig);

    const hasIgnoresRecommended =
      userConfigChoices.ignores?.recommended === undefined ? true : userConfigChoices.ignores.recommended;

    const hasIgnoresInheritedFromGitIgnore =
      userConfigChoices.ignores?.inheritedFromGitignore === undefined
        ? true
        : userConfigChoices.ignores.inheritedFromGitignore;

    blocksToMerge.push(
      {
        ignores: [
          ...(hasIgnoresRecommended ? ignores : []),
          ...(hasIgnoresInheritedFromGitIgnore ? getGitignorePatterns({ strict: false }).ignores : []),
          ...(userConfigChoices.ignores?.additional ?? []),
        ],
      },
      ...configBlocksToMerge,
    );

    const vueSupport = userConfigChoices.vue ?? false;

    return tseslint.config(
      {
        languageOptions: {
          parser: vueSupport ? vueParser : tseslint.parser,
          parserOptions: {
            parser: vueSupport ? tseslint.parser : undefined,
            ecmaVersion: 'latest',
            sourceType: 'module',
            extraFileExtensions: vueSupport ? ['.vue'] : undefined,
            projectService: userConfigChoices.projectService ?? {
              allowDefaultProject: ['*.js', '*.cjs'],
            },
            tsconfigRootDir,
          },
        },
      },
      ...blocksToMerge,
    );
  };

  return {
    defineConfig,
  };
};

export default configureConfig;
