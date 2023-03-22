type Falsey = 0 | "" | null | undefined | {} | [];

export type AnyOf<T extends readonly any[]> = T extends [
  infer Head,
  ...infer Tail
]
  ? keyof Head extends never
    ? false
    : Head extends keyof Falsey
    ? AnyOf<Tail>
    : true
  : false;

type Sample1 = AnyOf<[1, "", false, [], {}]>; // expected to be true.
type Sample2 = AnyOf<[0, "", false, [], {}]>; // expected to be false.
