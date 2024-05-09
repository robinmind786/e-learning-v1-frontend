"use client";

import React, { ReactNode, useEffect } from "react";
import { RootState } from "@/api/store";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

interface AuthProtectProps {
  children: ReactNode;
}

const AuthProtect: React.FC<AuthProtectProps> = ({ children }) => {
  const router = useRouter();
  const isAuth = useSelector((store: RootState) => store.auth.isAuth);

  useEffect(() => {
    if (!isAuth) {
      router.push("/");
    }
  }, [isAuth, router]);

  return isAuth ? <>{children}</> : null;
};

export default AuthProtect;
