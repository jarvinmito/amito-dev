import { CURRENCIES } from "@/lib/constants/currencies";

export const formatNumber = (
  number: number,
  decimalPlaces = 6,
  noCurrency = false,
  currency = CURRENCIES.USD
) => {
  const formattedNumber = Number(number).toLocaleString("en", {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimalPlaces,
  });
  if (formattedNumber === "NaN" || number <= 0)
    return `${noCurrency ? "" : currency}0`;
  return `${noCurrency ? "" : currency}${formattedNumber}`;
};
