import { apiSlice } from "./apiSlice";

const THERAPIST_URL = "api/v1/professional"

export const therapistSlice = apiSlice.injectEndpoints({
  endpoints:(builder)=>({
    getTherapist: builder.query({
      query:()=> ({
        url:"api/v1/professional",
        method: "GET",
      }),
      providesTags:["Therapist"]
    })
  })
})

export const {useGetTherapistQuery} = therapistSlice