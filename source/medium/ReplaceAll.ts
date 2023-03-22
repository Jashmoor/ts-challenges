export type ReplaceAll<
  T extends string,
  From extends string,
  To extends string,
> = T extends ""
  ? ""
  : T extends `${infer Head}${From}${infer Tail}`
  ? ReplaceAll<`${Head}${To}${Tail}`, From, To>
  : T;
