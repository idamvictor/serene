import { apiSlice } from '../auth/apiSlice';


const userID = JSON.parse(localStorage.getItem("userInfo"))._id;
//   console.log(userId)

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
                body: { communityId, userId }
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
        getUserCommunity: builder.query({
            query: () => ({
                url: `community/usercommunity/${userID}`,
                method: "GET",
            })
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
        }),
        leaveCommunity: builder.mutation({
            query: ({communityId, userId}) => ({
                url: `/community/leave`,
                method: "POST",
                body: {communityId, userId}
            })
        })
    }),
});


export const { useGetCommunitiesQuery, useJoinCommunityMutation, useGetUserCommunityQuery, useGetCommunityPostQuery,  useSendCommunityPostMutation, useLeaveCommunityMutation } = CommunitySlice;