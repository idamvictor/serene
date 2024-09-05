import { apiSlice } from '../auth/apiSlice';


const userID = JSON.parse(localStorage.getItem("userInfo"))?._id;
if(!userID){
    //*TODO: Redirect to login screen or homepage
}


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
                  console.log('JOIN COMMUNITY API RESPONSE:', data);
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
            query: (communityId) => ({
                url: `/community/post/${communityId}`,
                method: "GET"
            }),
        }),
        sendCommunityPost: builder.mutation({
            query: ({communityId, userId, message}) => ({
               url: `/community/message`,
               method: "POST",
               body: { communityId, userId, message }
            }),
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                  const { data } = await queryFulfilled;
                  console.log('SEND POST API RESPONSE:', data);
                } catch (error) {
                  console.error('Error in sending post:', error);
                }
              },
        }),
        deletePost: builder.mutation({
            query: (postId) => ({
                url: `/community/post/${postId}`,
                method: "DELETE"
            }),
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                  const { data } = await queryFulfilled;
                  console.log('DELETE POST API RESPONSE:', data);
                } catch (error) {
                  console.error('Error in deleting post:', error);
                }
              },
        }),
        leaveCommunity: builder.mutation({
            query: ({communityId, userId}) => ({
                url: `/community/leave`,
                method: "POST",
                body: { communityId, userId }
            })
        })
    }),
});


export const { useGetCommunitiesQuery, useJoinCommunityMutation, useGetUserCommunityQuery, useGetCommunityPostQuery,  useSendCommunityPostMutation, useDeletePostMutation, useLeaveCommunityMutation } = CommunitySlice;