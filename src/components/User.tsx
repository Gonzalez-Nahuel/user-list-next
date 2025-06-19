"use client";
import { useRouter } from "next/navigation";
import { ParsedUser } from "@/types/parsed-user";
import Image from "next/image";

type UserDetailsProps = {
  data: ParsedUser;
  //setUserInfo: React.Dispatch<React.SetStateAction<ParsedUser | undefined>>;
};

export const User = ({ data }: UserDetailsProps) => {
  const router = useRouter();

  const handlerClick = (): void => {
    router.push(`/user/${data.id}`);
  };

  return (
    <li
      onClick={handlerClick}
      className="flex gap-6 p-2 cursor-pointer hover:bg-cyan-950 rounded-2xl"
    >
      <Image
        className="rounded-full"
        src={data.picture}
        alt={data.name}
        width={50}
        height={50}
      />
      <div className="text-start">
        <p className="font-extrabold">{data.name}</p>
        <p>{data.email}</p>
      </div>
    </li>
  );
};
