import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userSignin } from "./auth/authSlice";
import { IUser } from "./featuresType";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SERVER_URL,
  }),
  endpoints: (builder) => ({
    refreshToken: builder.query<void, void>({
      query: () => ({
        url: "/user/update-token",
        method: "GET",
        credentials: "include" as const,
      }),
    }),

    loadUser: builder.query<IUser, void>({
      query: () => ({
        url: "/user/me",
        method: "GET",
        credentials: "include" as const,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          dispatch(
            userSignin({
              user: res.data.sessionUser,
              accessToken: res.data.accessToken,
            })
          );
        } catch (error) {
          console.log("Error occured");
        }
      },
    }),
  }),
});

export const { useRefreshTokenQuery, useLoadUserQuery } = apiSlice;