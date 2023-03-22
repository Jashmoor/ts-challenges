export type AppendToObject<T extends {}, K extends string, V extends any> = {
  [Key in keyof T | K]: Key extends keyof T ? T[Key] : V;
};
