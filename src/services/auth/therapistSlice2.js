import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // Assuming you're using axios, adjust if needed

// Define your API endpoint
const API_URL = "https://serene-lbyk.onrender.com/api/v1/professional"

export const fetchTherapist = createAsyncThunk(
  "therapist/fetchdata",
  async () => {
    try {
      const response = await axios.get(API_URL);
      console.log("API Response:", response);
      return response.data.data
    } catch (error) {
      console.error("API Error:", error);

    }
  }
);

const therapistSlice2 = createSlice({
  name: "therapist",
  initialState: {
    therapist: [],
    highestRatedTherapist: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTherapist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTherapist.fulfilled, (state, action) => {
        state.loading = false;
        state.therapist = action.payload; 
        state.highestRatedTherapist = action.payload.reduce(
          (highest, current) => {
            return current.experience > highest.experience ? current : highest;
          },
          action.payload[0]
        );
      })
      .addCase(fetchTherapist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default therapistSlice2.reducer;