import { UserData } from "@/types/user-data";
import { ParsedUser } from "@/types/parsed-user";
import { formattedDate } from "@/helpers/formattedDate";
import { Err } from "@/types/err";

export const getUsers = async (): Promise<Err | ParsedUser[]> => {
  try {
    const res: Response = await fetch("/api/users");

    if (!res.ok) {
      return {
        err: true,
        status: res.status || 404,
        message: res.statusText || "Ocurrio un Error",
      };
    }

    const json: UserData[] = await res.json();

    const data: ParsedUser[] = json.map((user) => ({
      id: user.id,
      name: user.name.first + " " + user.name.last,
      email: user.email,
      picture: user.picture.thumbnail,
      cell: user.cell,
      street: {
        number: user.location.street.number,
        name: user.location.street.name,
      },
      timezone: user.location.timezone.description,
      date: formattedDate(user.dob.date),
    }));

    return data;
  } catch (error) {
    return {
      err: true,
      status: "Network Error",
      message: error instanceof Error ? error.message : "Ocurrio un Error",
    };
  }
};
