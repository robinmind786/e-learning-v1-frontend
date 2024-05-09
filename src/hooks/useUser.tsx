"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/api/store";
import { IUser } from "@/api/featuresType";

const useUser = () => {
  const user: IUser = useSelector((store: RootState) => store.auth.user);
  return user;
};

export default useUser;
