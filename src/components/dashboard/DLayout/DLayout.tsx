"use client";

import React, { ReactNode } from "react";

import DSidebar from "./DSidebar";
import DHeader from "./DHeader";

interface DLayoutProps {
  children: ReactNode;
}

const DLayout: React.FC<DLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="flex">
        <DSidebar />
        <div className="flex-1 self-start">
          <DHeader />
          <main className="flex flex-1 flex-col gap-6 p-6">{children}</main>
        </div>
      </div>
    </>
  );
};

export default DLayout;
