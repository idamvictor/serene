import { apiSlice } from "../auth/apiSlice";


export const CommentSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getComments: builder.query({
            query: (postId) => ({
                url: `/comment/post/${postId}`,
                method: "GET"
            }),
        }),
        sendComments: builder.mutation({
            query: ({userId, comment, postID}) => ({
                url: `/comment/${postID}`,
                method: "POST", 
                body: { userId, comment }
            }),
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                  const { data } = await queryFulfilled;
                  console.log('SEND COMMENT API RESPONSE:', data);
                } catch (error) {
                  console.error('Error in sending comment:', error);
                }
              },
        }),
    })
});


export const { useGetCommentsQuery, useSendCommentsMutation } = CommentSlice;