export type PopArray<T> = T extends [...infer Head, infer _] ? Head : never;
