export type Replace<
  T extends string,
  K extends string,
  V extends string,
> = T extends `${infer Head}${K}${infer Tail}` ? `${Head}${V}${Tail}` : T;
