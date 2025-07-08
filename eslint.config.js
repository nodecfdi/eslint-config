// @ts-check
import nodecfdiConfig from '@nodecfdi/eslint-config/async';

const { defineConfig } = await nodecfdiConfig(import.meta.dirname, { sonarjs: true, n: true });

export default defineConfig();
