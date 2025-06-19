"use client";

import { useEffect, useState } from "react";
import { ParsedUser } from "@/types/parsed-user";
import { Err } from "@/types/err";
import { getUsers } from "@/helpers/getUsers";

type ReturnUseUserData = {
  data: ParsedUser[];
  err: Err | null;
  loading: boolean;
  setUserInfo: React.Dispatch<React.SetStateAction<ParsedUser | undefined>>;
  userInfo: ParsedUser | undefined;
};

export const useUserData = (): ReturnUseUserData => {
  const [data, setData] = useState<ParsedUser[]>([]);
  const [err, setErr] = useState<Err | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<ParsedUser | undefined>(undefined);

  useEffect(() => {
    setLoading(true);

    getUsers().then((res) => {
      if ("err" in res && res.err) {
        setErr(res);
        setData([]);
      } else {
        setErr(null);
        setData(res as ParsedUser[]);
      }
    });

    setLoading(false);
  }, []);

  return {
    data,
    err,
    loading,
    setUserInfo,
    userInfo,
  };
};
