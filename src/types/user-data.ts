export type UserData = {
  id: string;
  name: {
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    timezone: {
      description: string;
    };
  };
  email: string;
  dob: {
    date: string;
  };
  cell: string;
  picture: {
    thumbnail: string;
  };
};
