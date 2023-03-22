export type StringToUnion<
  T extends string,
  K extends string[] = [],
> = T extends `${infer Head}${infer Tail}`
  ? StringToUnion<Tail, [...K, Head]>
  : K[number];
