import { createSlice } from "@reduxjs/toolkit";

const getUsersFromLocalStorage = () =>{
if(typeof window === "undefined"){
    const user = localStorage.getItem("userInfo")
    return user ? JSON.parse : null
}
return null
}

const initialState = {
   userInfo:getUsersFromLocalStorage()
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        setCredentials: (state,action) =>{
            state.userInfo = action.payload
            localStorage.setItem("userInfo",JSON.stringify(action.payload))
        },
        logout:(state,action)=>{
            state.userInfo = null
            localStorage.removeItem("userInfo")
        }
    }
})
export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;