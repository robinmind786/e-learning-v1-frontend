"use client";

import Image from "next/image";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import elementSignin from "../../assets/images/element/02.svg";
import avatar1 from "../../assets/images/avatar/01.jpg";
import avatar2 from "../../assets/images/avatar/02.jpg";
import avatar3 from "../../assets/images/avatar/03.jpg";
import avatar4 from "../../assets/images/avatar/04.jpg";
import { useSigninMutation } from "@/api/auth/authApi";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import InputField from "../common/InputField";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Signin = () => {
  const [signin, { data, error, isError, isSuccess, isLoading }] =
    useSigninMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success(data.message);
      redirect("/");
    }

    if (isError) {
      const apiError = error as {
        data?: {
          [x: string]: any;
          message?: string;
        };
      };
      if (apiError && apiError.data) {
        const errorMessage = apiError.data.message;
        toast.error(errorMessage || apiError.data.error.message);
      } else {
        console.log("Internal server error");
      }
    }
  }, [isSuccess, data, isError, error]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async ({ email, password }) => {
      const data = {
        email: email,
        password,
      };

      await signin(data);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (
    <>
      <div className="w-full lg:grid lg:grid-cols-2 min-h-screen h-full">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-balance text-muted-foreground">
                Enter your email below to login to your account
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              {" "}
              <div className="grid gap-4">
                <InputField
                  type="email"
                  label="Email"
                  id="email"
                  name="email"
                  placeholder="Email address"
                  value={values.email}
                  error={errors.email}
                  touched={touched.email}
                  handleChange={handleChange}
                  disabled={isLoading}
                />
                <InputField
                  type="password"
                  label="password"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  value={values.password}
                  error={errors.password}
                  touched={touched.password}
                  handleChange={handleChange}
                  disabled={isLoading}
                />
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                      Please wait
                    </>
                  ) : (
                    "Signup"
                  )}
                </Button>
                <Button variant="outline" className="w-full" type="button">
                  Sign up with Google
                </Button>
                <Button variant="outline" className="w-full" type="button">
                  Sign up with GitHub
                </Button>
              </div>
            </form>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="underline">
                Sign up
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden bg-muted lg:block">
          <div className="flex flex-col items-center justify-center p-12 text-center">
            <h2 className="prose-h2 mb-1">Welcome to our largest community</h2>
            <p className="text-sm text-muted-foreground">
              Let&apos;s learn something new today!
            </p>
          </div>
          <Image
            src={elementSignin}
            alt="Image"
            className="h-auto w-4/5 mx-auto"
          />
          <ul className="flex items-center py-6 justify-center">
            <li className="inline-block size-10 relative -mr-3">
              <Image
                src={avatar1}
                alt="avatar1"
                className="size-full object-cover rounded-full ring-2 ring-white"
              />
            </li>
            <li className="inline-block size-10 relative -mr-3">
              <Image
                src={avatar2}
                alt="avatar2"
                className="size-full object-cover rounded-full ring-2 ring-white"
              />
            </li>
            <li className="inline-block size-10 relative -mr-3">
              <Image
                src={avatar3}
                alt="avatar3"
                className="size-full object-cover rounded-full ring-2 ring-white"
              />
            </li>
            <li className="inline-block size-10 relative -mr-3">
              <Image
                src={avatar4}
                alt="avatar4"
                className="size-full object-cover rounded-full ring-2 ring-white"
              />
            </li>
            <li className="inline-block size-10 relative -mr-3">
              <div className="size-full object-cover rounded-full ring-2 ring-white bg-blue-500 flex items-center justify-center">
                <span className="text-white font-normal text-sm">1K+</span>
              </div>
            </li>
            <li className="ml-6">
              <p className="text-xs">
                4k+ Students joined us, now it&apos;s your turn.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Signin;
