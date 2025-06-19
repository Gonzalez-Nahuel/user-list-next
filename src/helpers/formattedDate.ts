export const formattedDate = (d: string): string => {
  const date: Date = new Date(d);

  const newDate: string = new Intl.DateTimeFormat("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  }).format(date);

  return newDate;
};
