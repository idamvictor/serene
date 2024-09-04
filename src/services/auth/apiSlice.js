import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://serene-lbyk.onrender.com/api/v1",
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (walletid) => ({
        url: "/user/login",
        method: "POST",
        body: { walletid },
      }),
      invalidatesTags: ["User"],
    }),
  }),
});
export const { useLoginUserMutation } = apiSlice;