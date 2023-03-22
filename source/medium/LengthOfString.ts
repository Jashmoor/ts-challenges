export type LengthOfString<
  T extends string,
  K extends string[] = [],
> = T extends `${infer Head}${infer Tail}`
  ? LengthOfString<Tail, [...K, Head]>
  : K["length"];
