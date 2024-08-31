const getHourlyLogo = (hourly: string) => {
  if (hourly === "mañana") return "/day.png";
  if (hourly === "mediodía") return "/afternoon.png";
  if (hourly === "tarde") return "/afternoon.png";
  return "/night.png";
};

export default getHourlyLogo;
