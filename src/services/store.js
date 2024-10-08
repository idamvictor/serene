import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import { apiSlice } from "./auth/apiSlice";
import therapistReducer from "./auth/therapistSlice2";
import BookingReducer from "./auth/BookingSlice";
import  saveCallLinkReducer from "./auth/cryptoSlice";
// import communityReducer from "./community/CommunitySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    fetchTherapist: therapistReducer,
    Booking: BookingReducer,
    callLink: saveCallLinkReducer,
    // community: communityReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
