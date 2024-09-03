import tseslint from 'typescript-eslint';
import vueParser from 'vue-eslint-parser';
import getGitignorePatterns from 'eslint-config-flat-gitignore';
import { NodecfdiSettings } from '#src/types';
import { eslintBaseConfig } from '#src/configs/eslint_base_config';
import { typescriptConfig } from '#src/configs/typescript_config';
import { unicornConfig } from '#src/configs/unicorn_config';
import { simpleImportSortConfig } from '#src/configs/simple_import_sort_config';
import { regexpConfig } from '#src/configs/regexp_config';
import { importConfig } from '#src/configs/import_config';
import { commentsConfig } from '#src/configs/comments_config';
import { promiseConfig } from '#src/configs/promise_config';
import { securityConfig } from '#src/configs/security_config';
import { stylisticConfig } from '#src/configs/stylistic_config';
import { vitestConfig } from '#src/configs/vitest_config';
import { adonisjsConfig } from '#src/configs/adonisjs_config';
import { vueConfig } from '#src/configs/vue_config';
import { prettierConfig } from '#src/configs/prettier_config';
import { overridesConfig } from '#src/configs/overrides_config';
import { ignores } from '#src/constants';

const configureConfig = (tsconfigRootDir: string, userConfigPrefers?: NodecfdiSettings) => {
  const userConfigChoices = userConfigPrefers ?? {
    vitest: false,
    adonisjs: false,
    vue: false,
    projectService: true,
  };

  const defineConfig = (...configBlocksToMerge: tseslint.ConfigWithExtends[]) => {
    const blocksToMerge: tseslint.ConfigWithExtends[] = [
      eslintBaseConfig,
      ...typescriptConfig,
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

    return tseslint.config(
      {
        languageOptions: {
          parser: userConfigChoices.vue ? vueParser : tseslint.parser,
          parserOptions: {
            parser: userConfigChoices.vue ? tseslint.parser : undefined,
            projectService: userConfigChoices.projectService,
            tsconfigRootDir,
            ecmaVersion: 'latest',
            sourceType: 'module',
            extraFileExtensions: userConfigChoices.vue ? ['.vue'] : undefined,
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
