import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   selectedDateTime: null
}

const BookingSlice = createSlice({
    name: 'Booking',
    initialState:initialState,
    reducers:{
        setSelectedTime: (state,action)=>{
            state.selectedDateTime= action.payload
            
        }
    }

})

export const {setSelectedTime} = BookingSlice.actions

export default BookingSlice.reducer