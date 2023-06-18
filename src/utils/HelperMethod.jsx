export const formatDate = (date) => {
  const options = { month: "2-digit", day: "2-digit", year: "numeric" };
  return date.toLocaleDateString("id-ID", options);
};

export const formatNumber = (number) => number.toLocaleString("en-US");
