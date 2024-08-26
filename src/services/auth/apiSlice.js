import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://serene-lbyk.onrender.com/",
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (walletid) => ({
        url: "api/v1/user/login",
        method: "POST",
        body: { walletid },
      }),
      invalidatesTags: ["User"],
    }),
  }),
});
export const { useLoginUserMutation } = apiSlice;