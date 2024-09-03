import { type FlatESLintConfig } from 'eslint-define-config';

declare global {
  type NodeCfdiFlatAtomConfig = FlatESLintConfig;

  type NodeCfdiFlatConfig = FlatESLintConfig[];
}
