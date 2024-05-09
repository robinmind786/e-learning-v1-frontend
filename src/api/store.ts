"use client";

import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import authSlice from "./auth/authSlice";

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
  },
  devTools: false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

const initializeApp = (): AppThunk => async (dispatch) => {
  await dispatch(
    apiSlice.endpoints.refreshToken.initiate(undefined, {
      forceRefetch: true,
    })
  );

  await dispatch(
    apiSlice.endpoints.loadUser.initiate(undefined, {
      forceRefetch: true,
    })
  );
};

store.dispatch(initializeApp());
