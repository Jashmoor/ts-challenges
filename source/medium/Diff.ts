export type Diff<T extends object, K extends object> = {
  [Key in
    | Exclude<keyof T, keyof K>
    | Exclude<keyof K, keyof T>]: Key extends keyof T
    ? T[Key]
    : Key extends keyof K
    ? K[Key]
    : never;
};
