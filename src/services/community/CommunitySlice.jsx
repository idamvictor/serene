import { apiSlice } from '../auth/apiSlice';

export const CommunitySlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCommunities: builder.query({
            query: () => ({
                url: `/community`,
                method: "GET"
            }),
        }),
        joinCommunity: builder.mutation({
            query: ({communityId, userId}) => ({
                url:`/community/join`,
                method: "POST",
                body: {
                   communityId,
                    userId
                }
            }),
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                  const { data } = await queryFulfilled;
                  console.log('Server response:', data);
                } catch (error) {
                  console.error('Error in joinCommunity:', error);
                }
              },
        }),
        getCommunityPost: builder.query({
            query: (id) => ({
                url: `/community/post/${id}`,
                method: "GET"
            }),
        }),
        sendCommunityPost: builder.mutation({
            query: () => ({
               url: `/community/message`,
               method: "POST"
            }),
        })
    }),
});


export const { useGetCommunitiesQuery, useJoinCommunityMutation, useGetCommunityPostQuery,  useSendCommunityPostMutation } = CommunitySlice;