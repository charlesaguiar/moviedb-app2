export const formatCurrency = (
  amount: number,
  locale = "en-US",
  currency = "USD"
) => {
  const formatter = Intl.NumberFormat(locale, { style: "currency", currency });
  return formatter.format(amount);
};
