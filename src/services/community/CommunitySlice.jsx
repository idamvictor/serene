import { apiSlice } from '../auth/apiSlice';

export const CommunitySlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCommunities: builder.query({
            query: () => ({
                url: `/community`,
                method: "GET"
            }),
        }),
        getCommunityPost: builder.query({
            query: () => ({
                url: `/community/post`,
                method: "GET"
            }),
        }),
        sendCommunityPost: builder.query({
            query: () => ({
               url: `/community/message`,
               method: "POST"
            }),
        })
    }),
});


export const { useGetCommunitiesQuery, useGetCommunityPostQuery,  useSendCommunityPostQuery } = CommunitySlice;