import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";

const CRYPTO_URL = "/session/create";

const cryptoSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendInfo: builder.mutation({
      query: (userDetail) => ({
        url: CRYPTO_URL,
        method: "POST",
        body: userDetail,
      }),
      invalidatesTags: ["crypto"],
    }),
  }),
});

const initialState = {
  callLink: null,
};

export const saveCallLink = createSlice({
  name: "callLink",
  initialState: initialState,
  reducers: {
    saveDate: (state, action) => {
      state.callLink = action.payload;
    },
  },
});

export const { useSendInfoMutation } = cryptoSlice;
export const { saveDate } = saveCallLink.actions;

export default saveCallLink.reducer;
