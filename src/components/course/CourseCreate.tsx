"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Benefit,
  CourseData,
  CourseDetails,
  FAQ,
  Lecture,
  Prerequisite,
} from "./courseType";
import { coursedata, stepperOptions } from "./data";
import Stepper from "../common/Stepper";
import CourseDetailsForm from "./CourseDetailsForm";
import CourseMediaForm from "./CourseMediaForm";
import CourseLecturesForm from "./CourseLecturesForm";
import CourseFaqForm from "./CourseFaqForm";

interface CourseCreateProps {
  isCreate?: boolean;
}

const CourseCreate: React.FC<CourseCreateProps> = ({ isCreate = true }) => {
  const [data, setData] = useState<CourseData>(coursedata);
  const [active, setActive] = useState<number>(3);
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
    <div className="grid grid-cols-1 gap-4">
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

      <div className="grid grid-cols-5 max-lg:grid-cols-3 gap-4">
        <Card
          className="col-span-4 max-lg:col-span-2 max-md:col-span-3 self-start"
          x-chunk="dashboard-05-chunk-0"
        >
          {active === 1 && (
            <CourseDetailsForm
              courseDetails={courseDetails}
              setCourseDetails={setCourseDetails}
              active={active}
              setActive={setActive}
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
        </Card>
        <Card
          className="col-span-1 max-lg:col-span-1 max-md:col-span-3 max-md:order-first self-start"
          x-chunk="dashboard-05-chunk-0"
        >
          <CardContent className="pt-6 pb-0">
            <Stepper active={active} options={stepperOptions} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CourseCreate;
