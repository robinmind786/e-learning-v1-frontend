import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface UserData {
  sessionUser: any;
  accessToken: string;
}

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

    loadUser: builder.query<UserData, void>({
      query: () => ({
        url: "/user/me",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
  }),
});

export const { useRefreshTokenQuery, useLoadUserQuery } = apiSlice;
