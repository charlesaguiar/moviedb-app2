interface ICssVariable {
  [key: string]: string | number;
}

export const cn = (...classes: string[]) => {
  return [...classes].join(" ");
};

export const formatCssVariables = (
  ...vars: ICssVariable[]
): React.CSSProperties => {
  return [...vars].reduce(
    (acc, crr) => ({
      ...acc,
      [`--${crr.name}`]: crr.value,
    }),
    {} as React.CSSProperties
  );
};
