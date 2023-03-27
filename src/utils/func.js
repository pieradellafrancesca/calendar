export const getDaysCurrentMonth = (plusMonth = 0) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1 + plusMonth;
  const daysInCurrentMonth = new Date(currentYear, currentMonth, 0).getDate();
  return daysInCurrentMonth;
};

export const capitalizeFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const getMonthName = (month = new Date().getMonth()) =>
  new Date(new Date().setMonth(month)).toLocaleString("default", {
    month: "long",
  });
