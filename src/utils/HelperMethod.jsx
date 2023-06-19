export const formatDate = (date) => {
  const options = { month: "2-digit", day: "2-digit", year: "numeric" };
  return date.toLocaleDateString("id-ID", options);
};

export const formatNumber = (number) => {
  const formatted = number.toLocaleString("en-US");
  return formatted;
};

export const formatNumberPrice = (number) => {
  const formattedPrice = number.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  return formattedPrice;
};
