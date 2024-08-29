import { apiSlice } from "./apiSlice";

const THERAPIST_URL = "api/v1/professional"

export const therapistSlice = apiSlice.injectEndpoints({
  endpoints:(builder)=>({
    getAllTherapist: builder.query({
      query:()=> ({
        url:THERAPIST_URL,
        method: "GET",
      }),
      providesTags:["Therapist"],
      keepUnusedDataFor: 5
    }),
   
  })
})

export const {useGetAllTherapistQuery} = therapistSlice