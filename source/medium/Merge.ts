export type Merge<T extends {}, K extends {}> = {
  [Key in keyof K | keyof T]: Key extends keyof K
    ? K[Key]
    : Key extends keyof T
    ? T[Key]
    : never;
};
