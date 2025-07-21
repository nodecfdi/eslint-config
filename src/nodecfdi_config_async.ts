import getGitignorePatterns from 'eslint-config-flat-gitignore';
import { config, type ConfigArray, type ConfigWithExtends } from 'typescript-eslint';
import { commentsConfig } from './configs/comments_config.js';
import { eslintBaseConfig } from './configs/eslint_base_config.js';
import { importConfig } from './configs/import_config.js';
import { overridesConfig } from './configs/overrides_config.js';
import { prettierConfig } from './configs/prettier_config.js';
import { promiseConfig } from './configs/promise_config.js';
import { simpleImportSortConfig } from './configs/simple_import_sort_config.js';
import { stylisticConfig } from './configs/stylistic_config.js';
import { typescriptConfig } from './configs/typescript_config.js';
import { unicornConfig } from './configs/unicorn_config.js';
import { allFilesSupported, ignores } from './constants.js';
import { type NodecfdiSettings } from './types.js';

const configureConfigAsync = async (
  tsconfigRootDir: string,
  userConfigPrefers?: NodecfdiSettings,
): Promise<{
  defineConfig: (...configBlocksToMerge: ConfigWithExtends[]) => ConfigArray;
}> => {
  const userConfigChoices = userConfigPrefers ?? {
    vitest: false,
    adonisjs: false,
    vue: false,
    projectService: true,
    sonarjs: true,
    n: false,
    nx: false,
    nuxt: false,
  };

  const blocksToMerge: ConfigWithExtends[] = [
    ...typescriptConfig,
    eslintBaseConfig,
    ...unicornConfig,
    simpleImportSortConfig,
    ...importConfig,
    ...commentsConfig,
    ...promiseConfig,
    stylisticConfig,
  ];

  if (userConfigChoices.vitest) {
    const { vitestConfig } = await import('./configs/vitest_config.js');

    blocksToMerge.push(vitestConfig);
  }

  if (userConfigChoices.adonisjs) {
    const { adonisjsConfig } = await import('./configs/adonisjs_config.js');

    blocksToMerge.push(...adonisjsConfig);
  }

  if (userConfigChoices.vue) {
    const { vueConfig } = await import('./configs/vue_config.js');
    const { vueExtendedConfig } = await import('./configs/vue_extended_config.js');

    blocksToMerge.push(...vueConfig);
    const resolverGlobalComponents = typeof userConfigChoices.vue === 'boolean' ? undefined : userConfigChoices.vue;
    blocksToMerge.push(vueExtendedConfig(resolverGlobalComponents));
  }

  if (userConfigChoices.sonarjs) {
    const { sonarjsConfig } = await import('./configs/sonarjs_config.js');

    blocksToMerge.push(...sonarjsConfig);
  }

  if (userConfigChoices.n) {
    const { nConfig } = await import('./configs/n_config.js');

    blocksToMerge.push(nConfig);
  }

  if (userConfigChoices.nx) {
    const { nxConfig } = await import('./configs/nx_config.js');

    blocksToMerge.push(...nxConfig);
  }

  if (userConfigChoices.nuxt) {
    const { nuxtConfig } = await import('./configs/nuxt_config.js');

    blocksToMerge.push(...nuxtConfig);
  }

  blocksToMerge.push(...prettierConfig, ...overridesConfig);
  const hasIgnoresRecommended = userConfigChoices.ignores?.recommended ?? true;
  const hasIgnoresInheritedFromGitIgnore = userConfigChoices.ignores?.inheritedFromGitignore ?? true;

  const defineConfig = (...configBlocksToMerge: ConfigWithExtends[]) => {
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

    return config(
      {
        files: [allFilesSupported],
        languageOptions: {
          parserOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
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

export default configureConfigAsync;
