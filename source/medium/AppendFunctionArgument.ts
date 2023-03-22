export type AppendFunctionArgument<
  T extends Function,
  K extends any,
> = T extends (...args: infer Args) => infer Return
  ? (...args: [...Args, K]) => Return
  : T;
