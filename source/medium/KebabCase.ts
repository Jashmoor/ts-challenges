export type KebabCase<T extends string> = T extends `${infer Head}${infer Rest}`
  ? Rest extends Uncapitalize<Rest>
    ? `${Lowercase<Head>}${KebabCase<Rest>}`
    : `${Lowercase<Head>}-${KebabCase<Uncapitalize<Rest>>}`
  : T;
