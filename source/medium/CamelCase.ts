export type CamelCase<
  T extends string,
  K extends string = "-",
> = T extends `${infer Head}${K}${infer Rest}`
  ? Rest extends `${infer First}${infer End}`
    ? CamelCase<`${Head}${Uppercase<First>}${End}`>
    : T
  : T;
