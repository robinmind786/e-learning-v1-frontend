"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "../common/InputField";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useSignupMutation } from "@/api/auth/authApi";
import { useRouter } from "next/navigation";

const schema = Yup.object().shape({
  fname: Yup.string()
    .required("First name is required")
    .matches(/^[A-Za-z\s]+$/, "First name can only contain letters and spaces"),
  lname: Yup.string()
    .required("Last name is required")
    .matches(/^[A-Za-z\s]+$/, "Last name can only contain letters and spaces"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
      "Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, one digit, and one special character."
    ),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Please confirm your password"),
});

const Signup = () => {
  const [signup, { data, error, isError, isSuccess, isLoading }] =
    useSignupMutation();
  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      toast.success(data.message);
      router.push("/confirmation");
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
  }, [isSuccess, data, isError, error, router]);

  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: schema,
    onSubmit: async ({ fname, lname, email, password, passwordConfirm }) => {
      const data = {
        fname,
        lname,
        email,
        password,
        passwordConfirm,
      };

      await signup(data);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  useEffect(() => {
    if (!isLoading && isSuccess) {
      formik.resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, isSuccess]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center py-12">
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-xl">Sign Up</CardTitle>
            <CardDescription>
              Enter your information to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <InputField
                    type="text"
                    label="First name"
                    id="fname"
                    name="fname"
                    placeholder="First name"
                    value={values.fname}
                    error={errors.fname}
                    touched={touched.fname}
                    handleChange={handleChange}
                    disabled={isLoading}
                  />
                  <InputField
                    type="text"
                    label="Last name"
                    id="lname"
                    name="lname"
                    placeholder="Last name"
                    value={values.lname}
                    error={errors.lname}
                    touched={touched.lname}
                    handleChange={handleChange}
                    disabled={isLoading}
                  />
                </div>
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
                <InputField
                  type="password"
                  label="password Confirm"
                  id="passwordConfirm"
                  name="passwordConfirm"
                  placeholder="Enter comfirm password"
                  value={values.passwordConfirm}
                  error={errors.passwordConfirm}
                  touched={touched.passwordConfirm}
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
                    "Create an account"
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
              Already have an account?{" "}
              <Link href="/signin" className="underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Signup;
