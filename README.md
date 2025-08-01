# @nodecfdi/eslint-config

[![Source Code][badge-source]][source]
[![Discord][badge-discord]][discord]
[![Latest Version][badge-release]][release]
[![Software License][badge-license]][license]
[![Total Downloads][badge-downloads]][downloads]

> La libreria `@nodecfdi/eslint-config` exporta la configuración base para eslint usada en los proyectos de NodeCfdi.

:us: The documentation of this project is in spanish as this is the natural language for intended audience.

:mexico: La documentación del proyecto está en español porque ese es el lenguaje principal de los usuarios.

> [!WARNING]
> This package is native [ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) and no longer provides a CommonJS export. If your project uses CommonJS, you will have to [convert to ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). Please don't open issues for questions regarding CommonJS / ESM.

## Instalación

### NPM

```shell
npm i -D eslint @nodecfdi/eslint-config
```

### Yarn

```shell
yarn add -D eslint @nodecfdi/eslint-config
```

### PNPM

```shell
pnpm add -D eslint @nodecfdi/eslint-config
```

## Uso básico

Para habilitar está configuración crea un archivo `eslint.config.js` en el root del proyecto y copia y pega el siguiente contenido:

```js
// @ts-check
import nodecfdiConfig from '@nodecfdi/eslint-config';

const { defineConfig } = nodecfdiConfig(import.meta.dirname);

export default defineConfig(); // Puedes agregar mas reglas o bloques de configuracion dentro de esta funcion
```

> [!NOTE]  
> Por defecto tiene habilitado las siguientes opciones: projectService -> true, sonarjs -> true

Si deseas aplicar algun ajuste puedes y/o personalización puedes hacerlo de la siguiente manera:

```js
// @ts-check
import nodecfdiConfig from '@nodecfdi/eslint-config';

const { defineConfig } = nodecfdiConfig(import.meta.dirname, {
  vitest: true,
  adonisjs: true,
  sonarjs: true,
  n: true,
});

export default defineConfig(); // Puedes agregar mas reglas o bloques de configuracion dentro de esta funcion
```

## Ajustes y personalizaciones

```ts
type NodecfdiSettings = {
  /**
   * Vitest support.
   */
  vitest?: boolean;
  /**
   * AdonisJS support.
   */
  adonisjs?: boolean;
  /**
   * Vue3 Support.
   */
  vue?:
    | boolean
    | {
        globalComponentsPatterns?: string[];
        globalPropertiesPatterns?: string[];
      };
  /**
   * SonarJS support
   */
  sonarjs?: boolean;
  /**
   * N support
   */
  n?: boolean;
  /**
   * NX support
   */
  nx?: boolean;
  /**
   * Nuxt support
   */
  nuxt?: boolean;
  /**
   * Typescript eslint project service option
   */
  projectService?: boolean | ProjectServiceOptions;
  /**
   * This setting apply some ignore patterns to the whole config.
   */
  ignores?: {
    /**
     * Some commonly ignored folders.
     */
    recommended?: boolean;
    /**
     * With this setting, Nodecfdi will ignore all the files that are currently ignored by git. Chances are that if you are ignoring a file in git, you don't want to lint it, which usually is the case with temporary and autogenerated files.
     */
    inheritedFromGitignore?: boolean;
    /**
     * Include additional ignore files paths or regex paths to ignore on current eslint config
     */
    additional?: string[];
  };
};
```

## Soporte

Puedes obtener soporte abriendo un ticket en Github.

## Compatibilidad

Esta librería se mantendrá compatible con al menos la versión con
[soporte activo de Node](https://nodejs.org/es/about/releases/) más reciente y [soporte activo de Typescript](https://www.typescriptlang.org/) más reciente.

También utilizamos [Versionado Semántico 2.0.0](https://semver.org/lang/es/) por lo que puedes usar esta librería sin temor a romper tu aplicación.

## Contribuciones

Las contribuciones con bienvenidas. Por favor lee [CONTRIBUTING][] para más detalles y recuerda revisar el archivo [CHANGELOG][].

## Copyright and License

The `@nodecfdi/eslint-config` library is copyright © [NodeCfdi](https://github.com/nodecfdi) and licensed for use under the MIT License (MIT). Please see [LICENSE][] for more information.

[contributing]: https://github.com/nodecfdi/.github/blob/main/docs/CONTRIBUTING.md
[changelog]: https://github.com/nodecfdi/eslint-config/blob/main/CHANGELOG.md
[source]: https://github.com/nodecfdi/eslint-config
[discord]: https://discord.gg/AsqX8fkW2k
[release]: https://www.npmjs.com/package/@nodecfdi/eslint-config
[license]: https://github.com/nodecfdi/eslint-config/blob/main/LICENSE.md
[downloads]: https://www.npmjs.com/package/@nodecfdi/eslint-config
[badge-source]: https://img.shields.io/badge/source-nodecfdi/eslint--config-blue?logo=github
[badge-discord]: https://img.shields.io/discord/459860554090283019?logo=discord
[badge-release]: https://img.shields.io/npm/v/@nodecfdi/eslint-config?logo=npm
[badge-license]: https://img.shields.io/github/license/nodecfdi/eslint-config?logo=open-source-initiative
[badge-downloads]: https://img.shields.io/npm/dm/@nodecfdi/eslint-config?logo=npm
