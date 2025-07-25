export const typescriptExtensions = ['.ts', '.tsx', '.mts', '.cts'];

export const jsExtensions = ['.js', '.jsx', '.mjs', '.cjs'];

export const jsAndTsExtensions = [...typescriptExtensions, ...jsExtensions];

export const allJsExtensions = jsAndTsExtensions.map((item) => item.replace('.', '')).join(',');

export const supportedFileTypes = `**/*.{${allJsExtensions}}`;

export const supportedFileTypeJs = jsExtensions.map((extension) => `**/*${extension}`);

export const allFilesSupported = `**/*.{${allJsExtensions},d.ts,vue}`;

export const ignores = [
  '**/node_modules/**',
  '**/dist/**',
  '**/build/**',
  '**/artifacts/**',
  '**/coverage/**',
  '**/docs/**',
  '**/temp/**',
  '**/vendor/**',
  '**/public/**',
  `**/eslint.config.{${allJsExtensions}}`, // we currently cannot lint the eslint.config.js itself. It is currently only provided as a .js file and this config currently only supports .ts files. Therefore, eslint.config.js can only be re-enabled once this config support pure .js files too, or the ESLint team support the eslint.config.ts file.
  `**/prettier.config.{${allJsExtensions}}`,
  `**/commitlint.config.{${allJsExtensions}}`,
  '**/package-lock.json',
  '**/pnpm-lock.yaml',
  '**/yarn.lock',
  '**/composer.lock',
  '**/composer.json',
  '**/package.json',
  '**/*.min.*',
  '**/.pnpm-store/**',
  '**/.adonisjs/**',
  '**/.husky/**',
  'LICENSE*',
  'CHANGELOG.md',
  '__snapshots__',
  '!.github',
  '!.vscode',
  `**/ecosystem.config.{${allJsExtensions}}`,
  '**/components.d.ts',
  '**/vite.config.*.timestamp*',
  '**/vitest.config.*.timestamp*',
  '**/vite.config.ts.timestamp*',
  '**/*.tsconfig.json',
  '**/tsconfig.json',
  '**/bin/**',
];
