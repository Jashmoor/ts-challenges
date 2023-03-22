export type If<T extends boolean, K, U> = T extends true ? K : U;
