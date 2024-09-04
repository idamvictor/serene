import { apiSlice } from "../auth/apiSlice";

export const ChatSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getOtherUsers: builder.query({
            query: () => ({
                url: `/professional`, //* for now focusing on the users page
                method: "GET"
            }),
        }),
        // LoadChatMessages
    })
});


export const { useGetOtherUsersQuery } = ChatSlice;