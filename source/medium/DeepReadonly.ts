export type DeepReadonly<T extends {}> = {
  readonly [Key in keyof T]: T[Key] extends object
    ? DeepReadonly<T[Key]>
    : T[Key];
};
