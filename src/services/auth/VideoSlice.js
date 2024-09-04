import { apiSlice } from "./apiSlice";

const VIDOES_URL = "api/v1/video"

const VideoSlice = apiSlice.injectEndpoints({
  endpoints: (builder)=>({
    getVideo: builder.query({
      query:()=>({
        url:VIDOES_URL,
        method: "GET"
      }),
      providesTags:["Question"]
    })
  })
})
export const {useGetVideoQuery} = VideoSlice