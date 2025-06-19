import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";
import { UserData } from "@/types/user-data";

export async function GET(
  req: Request,
  {
    params,
  }: {
    params: { id: string };
  }
): Promise<Response> {
  const filePath = path.join(process.cwd(), "src", "db.json");

  try {
    const fileData = await fs.readFile(filePath, "utf-8");
    const data: UserData[] = JSON.parse(fileData);
    const user = data.find((u: UserData) => String(u.id) === String(params.id));

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
  } catch (err) {
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
