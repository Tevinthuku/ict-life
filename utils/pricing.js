export const setCurrencyToLocalStorage = (currency = "Kenyan Shillings") => {
  if (global.window.localStorage) {
    return localStorage.setItem("currency", currency);
  }
};

export const getCurrencyFromLocalStorage = () => {
  const storedCurrency = global.window && localStorage.getItem("currency");
  return global.window && storedCurrency ? storedCurrency : "Kenyan Shillings";
};
