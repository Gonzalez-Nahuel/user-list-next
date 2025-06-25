"use client";

import { formattedDate } from "@/helpers/formattedDate";
import { UserData } from "@/types/user-data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function UserCard({ id }: { id: string }) {
  const [notUser, setNotUser] = useState<false | string>(false);
  const [data, setData] = useState<UserData | false>(false);

  const router = useRouter();

  const isUser = (obj: unknown): obj is UserData => {
    return (
      typeof obj === "object" &&
      obj !== null &&
      typeof (obj as Record<string, unknown>).id === "string"
    );
  };

  const handlerClick = () => {
    router.push("/");
  };

  useEffect(() => {
    fetch(`/api/users/${id}`)
      .then((res) => {
        if (!res.ok) return Promise.reject(res.statusText);

        return res.json();
      })
      .then((json) => {
        if (json.err) {
          setNotUser(json.message);
          setData(false);
        } else {
          setData(json);
          setNotUser(false);
        }
      })
      .catch((err) => {
        setNotUser(err || "Not Found");
        setData(false);
      });
  }, [id]);

  if (notUser) return <h2 className="text-4xl text-center">{notUser}</h2>;

  if (isUser(data)) {
    return (
      <article className="bg-cyan-900 w-lg h-max p-2 ml-auto mr-auto mt-2 rounded-2xl shadow-custom">
        <h2 className="text-3xl font-extrabold p-2">Detalles de Usuario</h2>
        <div>
          <div className="flex justify-start gap-8 mb-2 p-2">
            <Image
              className="rounded-full"
              src={data.picture.thumbnail}
              alt={data.name.first}
              width={50}
              height={50}
              unoptimized
            />
            <div>
              <p className="font-bold text-2xl">
                {data.name.first + " " + data.name.last}
              </p>
              <p>{data.email}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 mb-1 p-2">
            <div className="flex flex-col gap-1">
              <span>{`${data.location.street.number} ${data.location.street.name}`}</span>
              <span>{data.cell}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span>{data.location.timezone.description}</span>
              <span>{formattedDate(data.dob.date)}</span>
            </div>
          </div>
          <button
            className="rounded-2xl ml-1 p-3 border-black hover: bg-cyan-950 hover: cursor-pointer"
            onClick={handlerClick}
          >
            Volver
          </button>
        </div>
      </article>
    );
  }
}
