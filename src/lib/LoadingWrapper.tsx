import { useLoadUserQuery } from "@/api/apiSlice";
import React, { ReactNode } from "react";

interface LoadingWrapperProps {
  children: ReactNode;
}

const LoadingWrapper: React.FC<LoadingWrapperProps> = ({ children }) => {
  // @ts-ignore
  const { isLoading } = useLoadUserQuery({});
  return (
    <>
      {isLoading ? (
        <>
          <div className="w-full h-screen flex items-center justify-center">
            <h1 className="text-4xl text-white">Loading...</h1>
          </div>
        </>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default LoadingWrapper;
