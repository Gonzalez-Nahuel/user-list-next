import { NextRequest, NextResponse } from "next/server";
import { UserData } from "@/types/user-data";
import users from "@/db.json";

export async function GET(
  req: NextRequest
  /*{
    params,
  }: {
    params: { id: string };
  }*/
): Promise<Response> {
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();

  try {
    const user = (users as UserData[]).find(
      (u: UserData) => String(u.id) === String(id)
    );

    if (!user) {
      return NextResponse.json(
        {
          err: true,
          status: 404,
          message: "Usuario no encontrado",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(user);
  } catch {
    return NextResponse.json(
      {
        err: true,
        status: 500,
        message: "Error de lectura con la base de datos",
      },
      { status: 500 }
    );
  }
}
