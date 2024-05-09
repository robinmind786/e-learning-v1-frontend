"use client";
import React, { ReactNode } from "react";
import useUser from "./useUser";
import { useRouter } from "next/navigation";

interface AdminProtectProps {
  children: ReactNode;
}

const AdminProtect: React.FC<AdminProtectProps> = ({ children }) => {
  const router = useRouter();
  const user = useUser();

  if (!user || user.role !== "admin") {
    router.push("/");
    return null;
  }

  return <>{children}</>;
};

export default AdminProtect;
