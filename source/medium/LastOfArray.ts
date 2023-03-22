export type LastOfArray<T> = T extends [...infer _, infer Tail] ? Tail : never;
