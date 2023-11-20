import { createSlice } from "@reduxjs/toolkit";

const videoSearchSlice=createSlice({
    name:"videos",
    initialState:{},
    reducers:{
        searchResults:(state,action)=>
        {
            Object.assign(state,action.payload)
        }
    }
})

export const {searchResults}=videoSearchSlice.actions;
export default videoSearchSlice.reducer;