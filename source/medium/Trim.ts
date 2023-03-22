export type TrimLeft<T extends string> = T extends `${" "}${infer Rest}`
  ? TrimLeft<Rest>
  : T;
export type TrimEnd<T extends string> = T extends `${infer Head}${" "}`
  ? TrimEnd<Head>
  : T;
export type Trim<
  T extends string,
  K extends string = " ",
> = T extends `${K}${infer Rest}`
  ? Trim<Rest>
  : T extends `${infer Start}${K}`
  ? Trim<Start>
  : T;
