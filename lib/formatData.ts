export const formatPrice = (price: number) => {
  return price.toLocaleString("it-IT", { style: "currency", currency: "VND" });
};

export const formatDate = (rawDate: number) => {
  const formatter = new Intl.DateTimeFormat("vi-VN");
  return formatter.format(rawDate);
};
