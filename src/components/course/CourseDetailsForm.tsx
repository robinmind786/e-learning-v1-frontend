"use client";

import React, { useState } from "react";
import { CourseDetails } from "./courseType";
import * as Yup from "yup";
import { useFormik } from "formik";
import InputField from "../common/InputField";
import TextAreaField from "../common/TextAreaField";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories, languages, level, SelectionOption } from "./data";
import { Label } from "../ui/label";
import Editor from "../common/Editor";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  shortDescription: Yup.string().required("Short description is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.string().required("Price is required"),
  disPrice: Yup.string().required("Discounted price is required"),
  duration: Yup.string().required("Duration is required"),
  category: Yup.string().required("Category is required"),
  level: Yup.string().required("Level is required"),
  language: Yup.string().required("Language is required"),
  featured: Yup.boolean().required("Featured is required"),
  totalLecture: Yup.string().required("Total lecture is required"),
  demoUrl: Yup.string().required("Demo url is required"),
});

interface CourseCreateDetailsProps {
  courseDetails: CourseDetails;
  setCourseDetails: React.Dispatch<React.SetStateAction<CourseDetails>>;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  isCreate?: boolean;
}

const CourseDetailsForm: React.FC<CourseCreateDetailsProps> = ({
  courseDetails,
  setCourseDetails,
  active,
  setActive,
  isCreate,
}) => {
  const [initialValues] = useState<CourseDetails>(courseDetails);
  const [categoriesData, setCategoriesData] =
    useState<SelectionOption[]>(categories);

  const formik = useFormik<CourseDetails>({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      setCourseDetails(values);
      setActive(active + 1);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-6">
            <InputField
              type="text"
              label="Course title"
              id="title"
              name={"title"}
              placeholder="Enter title"
              error={errors.title}
              touched={touched.title}
              value={values.title}
              handleChange={handleChange}
            />
            <TextAreaField
              label="Short Description"
              id="shortDescription"
              name="shortDescription"
              placeholder="Type short description here"
              error={errors.shortDescription}
              touched={touched.shortDescription}
              value={values.shortDescription}
              handleChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1 max-lg:gap-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="category" className="capitalize">
                Category
              </Label>
              <Select
                name="category"
                value={values.category}
                onValueChange={(data) => {
                  formik.setFieldValue("category", data);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    {categoriesData
                      ?.sort((a, b) => a.value.localeCompare(b.value))
                      .map((item: SelectionOption, index: number) => (
                        <SelectItem key={index} value={item.value}>
                          {item.value}
                        </SelectItem>
                      ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.category && touched.category && (
                <p className="text-sm text-red-600 mt-1.5">{errors.category}</p>
              )}
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="level" className="capitalize">
                Level
              </Label>
              <Select
                name="level"
                value={values.level}
                onValueChange={(data) => {
                  formik.setFieldValue("level", data);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Level</SelectLabel>
                    {level?.map((item: SelectionOption, index: number) => (
                      <SelectItem key={index} value={item.value}>
                        {item.value}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.category && touched.category && (
                <p className="text-sm text-red-600 mt-1.5">{errors.category}</p>
              )}
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="language" className="capitalize">
                Language
              </Label>
              <Select
                name="language"
                value={values.language}
                onValueChange={(data) => {
                  formik.setFieldValue("language", data);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Languages</SelectLabel>
                    {languages
                      ?.sort((a, b) => a.value.localeCompare(b.value))
                      .map((item: SelectionOption, index: number) => (
                        <SelectItem key={index} value={item.value}>
                          {item.value}
                        </SelectItem>
                      ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.category && touched.category && (
                <p className="text-sm text-red-600 mt-1.5">{errors.category}</p>
              )}
            </div>
            <InputField
              type="text"
              label="Duration"
              id="duration"
              name={"duration"}
              placeholder="Enter duration"
              error={errors.duration}
              touched={touched.duration}
              value={values.duration}
              handleChange={handleChange}
            />
            <InputField
              type="number"
              label="Total Lecture"
              id="totalLecture"
              name={"totalLecture"}
              placeholder="Enter lecture length"
              error={errors.totalLecture}
              touched={touched.totalLecture}
              value={values.totalLecture}
              handleChange={handleChange}
            />
            <InputField
              type="number"
              label="Price"
              id="price"
              name={"price"}
              placeholder="Enter price"
              error={errors.price}
              touched={touched.price}
              value={values.price}
              handleChange={handleChange}
            />
            <InputField
              type="number"
              label="Discount price"
              id="disPrice"
              name={"disPrice"}
              placeholder="Enter discount price"
              error={errors.disPrice}
              touched={touched.disPrice}
              value={values.disPrice}
              handleChange={handleChange}
            />
            <InputField
              type="text"
              label="Demo Url"
              id="demoUrl"
              name={"demoUrl"}
              placeholder="Enter demo url"
              error={errors.demoUrl}
              touched={touched.demoUrl}
              value={values.demoUrl}
              handleChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 gap-5">
            <Editor
              label="Add Description"
              placeholder={"Write something..."}
              error={errors.description}
              touched={touched.description}
              value={values.description}
              handleChange={(selectedOption) => {
                formik.setFieldValue("description", selectedOption || "");
              }}
            />
          </div>
          <div className="flex items-center justify-end space-x-1.5">
            <Switch
              id="featured"
              checked={values.featured}
              onCheckedChange={() => {
                formik.setFieldValue("featured", !values.featured);
              }}
            />
            <Label htmlFor="featured" className="capitalize">
              featured
            </Label>
          </div>
          <div className="flex items-center justify-end">
            <Button type="submit">Next</Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CourseDetailsForm;
