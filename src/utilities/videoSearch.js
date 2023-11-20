import { createSlice } from "@reduxjs/toolkit";

const videoSearch=createSlice({
    name:"vsearch",
    initialState:{
        isSearch:false,
    },
    reducers:{
        toggleSearch:(state)=>{
            state.isSearch=!state.isSearch
        },
        

    }
})
export const {toggleSearch}=videoSearch.actions;

export default videoSearch.reducer;