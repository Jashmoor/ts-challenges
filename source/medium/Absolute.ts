export type Absolute<T extends string | number | bigint> =
  `${T}` extends `-${infer Number}` ? `${Number}` : `${T}`;
