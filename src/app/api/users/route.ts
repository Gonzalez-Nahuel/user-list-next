import { NextResponse } from "next/server";
import users from "@/db.json";

export const GET = async (): Promise<Response> => {
  try {
    return NextResponse.json(users);
  } catch (err) {
    return NextResponse.json(
      { error: err || "No se encontro el archivo" },
      { status: 500 }
    );
  }
};
