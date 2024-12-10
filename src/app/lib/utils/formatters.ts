import { CURRENCIES } from "@/app/lib/constants/currencies";

export const formatPositiveNumber = (number: number, decimalPlaces: number) => {
  return Number(Math.abs(number)).toLocaleString("en", {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimalPlaces,
  });
};

/** This is intended to format numbers for DISPLAY only */
export const formatNumber = (
  number: number,
  decimalPlaces = 6,
  noCurrency = false,
  currency = CURRENCIES.USD
) => {
  const formattedNumber = formatPositiveNumber(number, decimalPlaces);
  if (formattedNumber === "NaN") return `${noCurrency ? "" : currency}0`;
  if (number < 0) return `(${noCurrency ? "" : currency}${formattedNumber})`;
  return `${noCurrency ? "" : currency}${formattedNumber}`;
};

// Shortcut number formatting
export const formatNum = (num: number) =>
  formatNumber(num, 2, false, CURRENCIES.PHP);

/** This function generates a random string with a variable length */
export const generateRandomString = (length = 9, prefix = ""): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return prefix ? prefix + result : result;
};

export const trimText = (text: string, length = 4): string => {
  const front = text.substring(0, length);
  const back = text.substring(text.length - length);
  return `${front}...${back}`;
};

export const removeVowels = (text: string): string => {
  // Regular expression to match vowels (case-insensitive)
  const vowelPattern = /[aeiou]/gi;

  // Replace all vowel matches with empty strings and return the result
  return text.replace(vowelPattern, "");
};

export const capitalizeFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);
