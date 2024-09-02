import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import { apiSlice } from "./auth/apiSlice";
<<<<<<< HEAD
// import communityReducer from "./community/CommunitySlice";
=======
import therapistReducer from "./auth/therapistSlice2";
import BookingReducer from "./auth/BookingSlice";
>>>>>>> 41b67be9aefcd055918f9bd4f9e28210c7aa80f3

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
<<<<<<< HEAD
    // community: communityReducer, 
=======
    fetchTherapist: therapistReducer,
    Booking:BookingReducer
>>>>>>> 41b67be9aefcd055918f9bd4f9e28210c7aa80f3
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware),
});
