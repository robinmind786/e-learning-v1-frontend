import CourseDetailsPreview from "@/components/course/CourseDetailsPreview";
import { coursedata } from "@/components/course/data";
import Layout from "@/components/layout/Layout";
import React from "react";

const page = () => {
  return (
    <>
      <Layout>
        <CourseDetailsPreview data={coursedata} />
      </Layout>
    </>
  );
};

export default page;
