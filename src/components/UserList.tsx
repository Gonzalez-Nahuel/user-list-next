"use client";
import { useUserData } from "@/hooks/useUsersData";
import { User } from "./User";

export const UserList = () => {
  const { data } = useUserData();

  return (
    <ul className="">
      {data.map((user) => (
        <User key={user.email} data={user} />
      ))}
    </ul>
  );
};
