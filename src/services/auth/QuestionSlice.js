import { apiSlice } from "./apiSlice";

const QUESTIONS_URL = "/api/v1/survey"

export const QuestionSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getQuestions: builder.query({
            query:()=>({
                url: QUESTIONS_URL,
                method:"GET",
            }),
             transformResponse: (response) => {
                return response.data.map((question) => ({
                    ...question,
                    type: question.type || "radio", // Default to "radio" if type is not provided
                }));
            },
            providesTags:["Question"],
            keepUnusedDataFor: 5
    }),
    submitSurvey: builder.mutation({
        query:(responses)=>({
            url:`${QUESTIONS_URL}/save`,
            method: "POST",
            headers:{
                'Content-type': 'application/type',
            },
            body:JSON.stringify({responses}),
        }),
        invalidatesTags:["Questions"]
    }),
}),
});
export const {useGetQuestionsQuery, useSubmitSurveyMutation}= QuestionSlice;