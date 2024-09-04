import { apiSlice } from "./apiSlice";

const THERAPIST_URL = "/professional"

export const therapistSlice = apiSlice.injectEndpoints({
  endpoints:(builder)=>({
    getAllTherapist: builder.query({
      query:()=> ({
        url: THERAPIST_URL,
        method: "GET",
      }),
      providesTags:["Therapist"],
      keepUnusedDataFor: 5
    }),
   getTherapist:builder.query({
    query:(id)=>({
      url: `${THERAPIST_URL}${id}`
    })

   })
  })
})

export const {useGetAllTherapistQuery,useGetTherapistQuery} = therapistSlice