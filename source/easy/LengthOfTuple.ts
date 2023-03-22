export type LengthOfTuple<T> = T extends any[] ? T["length"] : 0;
