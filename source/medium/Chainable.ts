export declare const config: Chainable<{}>;
export type Chainable<T extends {}> = T & {
  option: <K extends string | number | symbol, V>(
    key: K,
    value: V,
  ) => Chainable<
    T & {
      [P in K]: V;
    }
  >;
  get: () => T;
};
