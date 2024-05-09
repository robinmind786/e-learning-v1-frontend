"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../featuresType";

const initialState: AuthState = {
  token: null,
  user: null,
  accessToken: null,
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userSignup: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
    },
    userSignin: (
      state,
      action: PayloadAction<{ accessToken: string; user: any }>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.isAuth = true;
    },
    userLogout: (state) => {
      state.accessToken = "";
      state.user = "";
    },
  },
});

export const { userSignup, userSignin, userLogout } = authSlice.actions;
export default authSlice.reducer;
