"use client";
import React, { ReactNode } from "react";
import { redirect } from "next/navigation";
import useUser from "./useUser";

interface AdminProtectProps {
  children: ReactNode;
}

const AdminProtect: React.FC<AdminProtectProps> = ({ children }) => {
  const user = useUser();

  if (!user || user.role !== "admin") {
    return redirect("/");
  }

  return <>{children}</>;
};

export default AdminProtect;
