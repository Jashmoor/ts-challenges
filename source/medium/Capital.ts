export type Capital<T extends string> = T extends `${infer Head}${infer Rest}`
  ? `${Uppercase<Head>}${Rest}`
  : "";
