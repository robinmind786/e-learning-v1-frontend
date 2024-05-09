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
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default DLayout;
