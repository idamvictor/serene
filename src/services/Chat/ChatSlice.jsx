import { apiSlice } from "../auth/apiSlice";

export const ChatSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getOtherUsers: builder.query({
            query: () => ({
                url: `/professional`, //* for now focusing on the users page
                method: "GET"
            }),
        }),
        chatUser: builder.mutation({
            query: ({ userId1, userId2 }) => ({
                url: `/chat/create`,
                method: "POST",
                body: { userId1, userId2 }
            }),
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log('CHAT USER API RESPONSE:', data);
                  } catch (error) {
                    console.error('Error in chatting user:', error);
                  }
            }
        }),
        loadChatMessages: builder.query({
            query: ({roomId}) => ({
                url: `/chat/message/${roomId}`,
                method: "GET",
            }),
        }),
    }),
});


export const { useGetOtherUsersQuery, useChatUserMutation, useLoadChatMessagesQuery } = ChatSlice;