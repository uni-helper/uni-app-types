export type RemoveUnderscoreFirstLetter<S extends string> =
  S extends `${infer FirstLetter}${infer U}`
    ? `${FirstLetter extends '_' ? U : `${FirstLetter}${U}`}`
    : S;

export type CamelToKebab<S extends string> = S extends `${infer T}${infer U}`
  ? `${T extends Capitalize<T> ? '-' : ''}${RemoveUnderscoreFirstLetter<
      Lowercase<T>
    >}${CamelToKebab<U>}`
  : S;

export type CamelKeysToKebab<T extends Record<string, any>> = {
  [K in keyof T as CamelToKebab<K & string>]: T[K];
};

export type PropsWithKebabKeys<T extends Record<string, any>> = T & CamelKeysToKebab<T>;
