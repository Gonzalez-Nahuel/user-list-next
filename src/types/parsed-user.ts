export type ParsedUser = {
  id: string;
  name: string;
  email: string;
  picture: string;
  cell: string;
  street: {
    number: number;
    name: string;
  };
  timezone: string;
  date: string;
};
