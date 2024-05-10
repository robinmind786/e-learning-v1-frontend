import CourseCreate from "@/components/course/CourseCreate";
import DLayout from "@/components/dashboard/DLayout";
import React from "react";

const CourseCreatePage = () => {
  return (
    <>
      <DLayout>
        <CourseCreate isCreate={false} />
      </DLayout>
    </>
  );
};

export default CourseCreatePage;
