"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as Yup from "yup";
import { useFormik } from "formik";
import useUser from "@/hooks/useUser";
import InputField from "../common/InputField";
import TextAreaField from "../common/TextAreaField";
import { Button } from "../ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import {
  CircleUser,
  LocateFixed,
  LocateIcon,
  Mail,
  Phone,
  UserSearch,
} from "lucide-react";
import defaultAvatar from "../../assets/images/avatar/01.jpg";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const validationSchema = Yup.object().shape({
  fname: Yup.string().required("First name is required ⚠️"),
  lname: Yup.string().required("Last name is required ⚠️"),
  email: Yup.string()
    .email("Invalid email address ⚠️")
    .required("Email is required ⚠️"),
  phone: Yup.string().required("Phone number is required ⚠️"),
  bio: Yup.string().required("Bio is required ⚠️"),
  location: Yup.string().required("Location is required ⚠️"),
  protfilo: Yup.string().url("Invalid URL format ⚠️"),
});

const EditProfile = () => {
  const user = useUser();
  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      phone: "",
      bio: "",
      location: "",
      protfilo: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <>
      <Card>
        <CardHeader className="max-sm:px-3">
          <CardTitle className="text-base">Edit Personal information</CardTitle>
        </CardHeader>
        <CardContent className="max-sm:px-3">
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-1">
              <Card>
                <CardContent className="flex flex-col items-center justify-center max-sm:px-3 py-6 max-sm:py-3">
                  {user.avatar ? (
                    <Avatar className="size-14">
                      <AvatarImage src={user.avatar.url} alt="admin" />
                    </Avatar>
                  ) : (
                    <Image
                      src={defaultAvatar}
                      alt="User"
                      width={80}
                      height={80}
                      className="rounded-full size-20"
                    />
                  )}
                  <CardTitle className="text-base">{user?.fname}</CardTitle>
                  <CardDescription>{user?.role}</CardDescription>
                </CardContent>
              </Card>
            </div>
            <div className="col-span-3">
              <Card>
                <CardContent className="max-sm:px-3 py-6 max-sm:py-3">
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6">
                      <InputField
                        type="text"
                        label="First name"
                        id="fname"
                        name={"fname"}
                        placeholder="Enter first name"
                        error={errors.fname}
                        touched={touched.fname}
                        value={values.fname}
                        handleChange={handleChange}
                      />
                      <InputField
                        type="text"
                        label="Last name"
                        id="lname"
                        name={"lname"}
                        placeholder="Enter last name"
                        error={errors.lname}
                        touched={touched.lname}
                        value={values.lname}
                        handleChange={handleChange}
                      />
                      <InputField
                        type="email"
                        label="Email address"
                        id="email"
                        name={"email"}
                        placeholder="Enter email address"
                        error={errors.email}
                        touched={touched.email}
                        value={values.email}
                        handleChange={handleChange}
                      />
                      <InputField
                        type="text"
                        label="Phone number"
                        id="phone"
                        name={"phone"}
                        placeholder="Enter phone number"
                        error={errors.phone}
                        touched={touched.phone}
                        value={values.phone}
                        handleChange={handleChange}
                      />
                      <InputField
                        type="url"
                        label="Profilo"
                        id="protfilo"
                        name={"protfilo"}
                        placeholder="Enter protfilo url"
                        error={errors.protfilo}
                        touched={touched.protfilo}
                        value={values.protfilo}
                        handleChange={handleChange}
                      />
                      <TextAreaField
                        label="About Me"
                        id="bio"
                        name="bio"
                        placeholder="Type about your self"
                        error={errors.bio}
                        touched={touched.bio}
                        value={values.bio}
                        handleChange={handleChange}
                      />
                      <div className="flex items-center justify-end">
                        <Button type="submit">
                          {/* <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> */}
                          Update
                        </Button>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default EditProfile;
