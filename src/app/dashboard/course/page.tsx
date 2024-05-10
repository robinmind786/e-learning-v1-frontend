"use client";

import React from "react";
import DLayout from "@/components/dashboard/DLayout";
import DCourseList from "@/components/dashboard/course/DCourseList";

const CoursePage = () => {
  return (
    <>
      <DLayout>
        <DCourseList />
      </DLayout>
    </>
  );
};

export default CoursePage;
