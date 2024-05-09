"use client";

import React, { ReactNode } from "react";
import useToken from "./useToken";
import { redirect } from "next/navigation";

interface Props {
  children: ReactNode;
}

const UseTokenProtect: React.FC<Props> = ({ children }) => {
  const token = useToken();

  return token ? <>{children}</> : redirect("/");
};

export default UseTokenProtect;
