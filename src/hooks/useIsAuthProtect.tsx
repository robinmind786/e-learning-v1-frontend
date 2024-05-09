"use client";

import React, { ReactNode } from "react";
import useUser from "./useUser";
import { redirect } from "next/navigation";

interface Props {
  children: ReactNode;
}

const UseIsAuthProtect: React.FC<Props> = ({ children }) => {
  const user = useUser();

  return user ? redirect("/") : <>{children}</>;
};

export default UseIsAuthProtect;
