"use client";

import { RootState } from "@/api/store";
import { useSelector } from "react-redux";

type TokenType = string | null;

const useToken = (): TokenType => {
  const token = useSelector((store: RootState) => store.auth.token);
  return token;
};

export default useToken;
