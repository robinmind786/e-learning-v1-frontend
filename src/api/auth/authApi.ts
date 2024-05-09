"use client";

import { apiSlice } from "../apiSlice";
import {
  IConfirmationRequest,
  IResponse,
  ISigninRequuest,
  ISigninResponse,
  ISignupRequuest,
  ISignupResponse,
} from "../featuresType";
import { userSignin, userSignup } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation<ISignupResponse, ISignupRequuest>({
      query: ({ fname, lname, email, password, passwordConfirm }) => ({
        url: "/user/signup",
        method: "POST",
        body: { fname, lname, email, password, passwordConfirm },
        credentials: "include" as const,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;

          dispatch(userSignup({ token: res.data.token }));
        } catch (error) {
          console.log("Error from signup route api", error);
        }
      },
    }),

    confirmation: builder.mutation<IResponse, IConfirmationRequest>({
      query: ({ activationToken, otp }) => ({
        url: "/user/activation",
        method: "POST",
        body: { activationToken, otp },
      }),
    }),

    signin: builder.mutation<ISigninResponse, ISigninRequuest>({
      query: ({ email, password }) => ({
        url: "/user/signin",
        method: "POST",
        body: { email, password },
        credentials: "include" as const,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;

          dispatch(
            userSignin({
              user: res.data.user,
              accessToken: res.data.accessToken,
            })
          );
        } catch (error) {
          //   console.error(error);
          console.log("Error from signin route api");
        }
      },
    }),
  }),
});

export const { useSignupMutation, useConfirmationMutation, useSigninMutation } =
  authApi;
