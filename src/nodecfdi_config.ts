import getGitignorePatterns from 'eslint-config-flat-gitignore';
import tseslint, { type ConfigWithExtends } from 'typescript-eslint';
import vueParser from 'vue-eslint-parser';
import { adonisjsConfig } from '#src/configs/adonisjs_config';
import { commentsConfig } from '#src/configs/comments_config';
import { eslintBaseConfig } from '#src/configs/eslint_base_config';
import { importConfig } from '#src/configs/import_config';
import { nConfig } from '#src/configs/n_config';
import { overridesConfig } from '#src/configs/overrides_config';
import { prettierConfig } from '#src/configs/prettier_config';
import { promiseConfig } from '#src/configs/promise_config';
import { regexpConfig } from '#src/configs/regexp_config';
import { securityConfig } from '#src/configs/security_config';
import { simpleImportSortConfig } from '#src/configs/simple_import_sort_config';
import { sonarjsConfig } from '#src/configs/sonarjs_config';
import { stylisticConfig } from '#src/configs/stylistic_config';
import { typescriptConfig } from '#src/configs/typescript_config';
import { unicornConfig } from '#src/configs/unicorn_config';
import { vitestConfig } from '#src/configs/vitest_config';
import { vueConfig } from '#src/configs/vue_config';
import { ignores } from '#src/constants';
import { type NodecfdiSettings } from '#src/types';

const configureConfig = (
  tsconfigRootDir: string,
  userConfigPrefers?: NodecfdiSettings,
): {
  defineConfig(
    ...configBlocksToMerge: ConfigWithExtends[]
  ): ReturnType<(typeof tseslint)['config']>;
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
    }

    if (userConfigChoices.sonarjs) {
      blocksToMerge.push(...sonarjsConfig);
    }

    if (userConfigChoices.n) {
      blocksToMerge.push(nConfig);
    }

    blocksToMerge.push(...prettierConfig, ...overridesConfig);

    const hasIgnoresRecommended =
      userConfigChoices.ignores?.recommended === undefined
        ? true
        : userConfigChoices.ignores.recommended;

    const hasIgnoresInheritedFromGitIgnore =
      userConfigChoices.ignores?.inheritedFromGitignore === undefined
        ? true
        : userConfigChoices.ignores.inheritedFromGitignore;

    blocksToMerge.push(
      {
        ignores: [
          ...(hasIgnoresRecommended ? ignores : []),
          ...(hasIgnoresInheritedFromGitIgnore
            ? getGitignorePatterns({ strict: false }).ignores
            : []),
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
