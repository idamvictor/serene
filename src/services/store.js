import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import { apiSlice } from "./auth/apiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware),
});
