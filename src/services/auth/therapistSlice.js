import { apiSlice } from "./apiSlice";

const THERAPIST_URL = "/professional"

export const therapistSlice = apiSlice.injectEndpoints({
  endpoints:(builder)=>({
    getTherapist: builder.query({
      query:()=> ({
        url: THERAPIST_URL,
        method: "GET",
      }),
      providesTags:["Therapist"]
    })
  })
})

export const {useGetTherapistQuery} = therapistSlice