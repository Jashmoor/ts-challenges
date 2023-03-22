export type Flatten<T extends any[]> = T extends [infer Head, ...infer Tail]
  ? [...(Head extends any[] ? Flatten<Head> : [Head]), ...Flatten<Tail>]
  : [];
