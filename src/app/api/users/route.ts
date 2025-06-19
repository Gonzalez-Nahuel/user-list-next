import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";
import { UserData } from "@/types/user-data";

export const GET = async (): Promise<Response> => {
  const filePath = path.join(process.cwd(), "src", "db.json");

  try {
    const fileData = await fs.readFile(filePath, "utf-8");
    const users: UserData[] = JSON.parse(fileData);

    return NextResponse.json(users);
  } catch (err) {
    return NextResponse.json(
      { error: err || "No se encontro el archivo" },
      { status: 500 }
    );
  }
};
