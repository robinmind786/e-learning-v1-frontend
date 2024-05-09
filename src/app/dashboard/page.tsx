import React from "react";
import DLayout from "@/components/dashboard/DLayout/DLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to lms-v1 dashboard",
  description: "Generated by create next app",
};

const page = () => {
  return (
    <>
      <DLayout>
        <div>okdnf</div>
      </DLayout>
    </>
  );
};

export default page;
