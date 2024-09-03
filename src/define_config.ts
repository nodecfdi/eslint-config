export type Rules = NodeCfdiFlatAtomConfig['rules'] | Record<string, string>;

export type LanguageOptions = NodeCfdiFlatAtomConfig['languageOptions'] | { sourceType?: string };

type FixedFlatAtomConfig = Omit<NodeCfdiFlatAtomConfig, 'plugins' | 'rules' | 'languageOptions'> & {
  plugins?: Record<string, unknown> | null;
  rules?: Rules;
  languageOptions?: LanguageOptions;
};

type FixedFlatArrayConfig = FixedFlatAtomConfig[];

type CorrectReturnType<TFlatConfig extends FixedFlatArrayConfig | FixedFlatAtomConfig> =
  TFlatConfig extends FixedFlatArrayConfig ? NodeCfdiFlatConfig : NodeCfdiFlatAtomConfig;

export const defineConfig = <T extends FixedFlatArrayConfig | FixedFlatAtomConfig>(
  fn: T,
): CorrectReturnType<T> => {
  return fn as CorrectReturnType<T>;
};
