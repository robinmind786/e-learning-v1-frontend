"use client";

import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { coursedata, stepperOptions } from "./data";
import {
  Benefit,
  CourseData,
  CourseDetails,
  FAQ,
  Lecture,
  Prerequisite,
} from "./courseType";
import { Card, CardContent, CardHeader } from "../ui/card";
import Stepper from "../common/Stepper";
import CourseDetailsForm from "./CourseDetailsForm";
import CourseMediaForm from "./CourseMediaForm";
import CourseLecturesForm from "./CourseLecturesForm";
import CourseFaqForm from "./CourseFaqForm";
import CourseOptionsForm from "./CourseOptionsForm";
import CourseDetailsPreview from "./CourseDetailsPreview";
import CreatedSuccess from "./CourseUtils/CreatedSuccess";

interface CourseCreateProps {
  isCreate?: boolean;
}

const CourseCreate: React.FC<CourseCreateProps> = ({ isCreate = true }) => {
  const [data, setData] = useState<CourseData>(coursedata);
  const [active, setActive] = useState<number>(1);
  const [courseDetails, setCourseDetails] = useState<CourseDetails>(
    isCreate
      ? {
          title: "",
          thumbnail: "",
          shortDescription: "",
          description: "",
          price: null || "",
          disPrice: null || "",
          duration: "",
          category: "",
          level: "",
          language: "",
          featured: false,
          totalLecture: null || "",
          tags: [],
          demoUrl: "",
        }
      : { ...data?.courseDetails }
  );

  const [courseLectures, setCourseLectures] = useState<Lecture[]>(
    isCreate
      ? [
          {
            videoUrl: [
              {
                title: "",
                description: "",
                videoLenth: "",
                url: "",
                links: [
                  {
                    title: "",
                    url: "",
                  },
                ],
              },
            ],
            videoSection: "Module 1: ",
            suggestions: "",
          },
        ]
      : data.lectures
  );

  const [courseFaq, setCourseFaq] = useState<FAQ[]>(isCreate ? [] : data.faq);

  const [benefits, setBenefits] = useState<Benefit[]>(
    isCreate ? [{ title: "" }] : data.benefits
  );

  const [prerequisite, setPrerequisite] = useState<Prerequisite[]>(
    isCreate ? [{ title: "" }] : data.prerequisites
  );

  const handleCourseSubmit = () => {
    const inputData: CourseData = {
      courseDetails: courseDetails,
      lectures: courseLectures,
      faq: courseFaq,
      benefits: benefits,
      prerequisites: prerequisite,
    };
    setData(inputData);
  };

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/course">Course</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Create</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card>
        <CardHeader className="max-sm:p-3">
          <Stepper active={active} options={stepperOptions} />
        </CardHeader>
        <CardContent className="max-sm:px-3">
          {active === 1 && (
            <CourseDetailsForm
              courseDetails={courseDetails}
              setCourseDetails={setCourseDetails}
              active={active}
              setActive={setActive}
              isCreate={isCreate}
            />
          )}
          {active === 2 && (
            <CourseMediaForm
              courseDetails={courseDetails}
              setCourseDetails={setCourseDetails}
              active={active}
              setActive={setActive}
            />
          )}
          {active === 3 && (
            <CourseLecturesForm
              courseLectres={courseLectures}
              setCourseLectures={setCourseLectures}
              active={active}
              setActive={setActive}
            />
          )}
          {active === 4 && (
            <CourseFaqForm
              courseFaq={courseFaq}
              setCourseFaq={setCourseFaq}
              active={active}
              setActive={setActive}
              isCreate={isCreate}
            />
          )}
          {active === 5 && (
            <CourseOptionsForm
              benefits={benefits}
              setBenefits={setBenefits}
              prerequisite={prerequisite}
              setPrerequisite={setPrerequisite}
              active={active}
              setActive={setActive}
              handleCourseSubmit={handleCourseSubmit}
            />
          )}
          {active === 6 && (
            <CourseDetailsPreview
              data={data}
              isPreview={true}
              active={active}
              setActive={setActive}
            />
          )}
          {active === 7 && <CreatedSuccess />}
        </CardContent>
      </Card>
    </>
  );
};

export default CourseCreate;
