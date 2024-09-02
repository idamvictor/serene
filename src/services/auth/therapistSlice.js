import { apiSlice } from "./apiSlice";

<<<<<<< HEAD
const THERAPIST_URL = "/professional"
=======
const THERAPIST_URL = "api/v1/professional/"
>>>>>>> 41b67be9aefcd055918f9bd4f9e28210c7aa80f3

export const therapistSlice = apiSlice.injectEndpoints({
  endpoints:(builder)=>({
    getAllTherapist: builder.query({
      query:()=> ({
<<<<<<< HEAD
        url: THERAPIST_URL,
=======
        url:THERAPIST_URL,
>>>>>>> 41b67be9aefcd055918f9bd4f9e28210c7aa80f3
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