import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import videoSearchSlice from "./videoSearchSlice";
import videoSearch from "./videoSearch";

const store = configureStore({

reducer:{
    app:appSlice,
    search:searchSlice,
    videos:videoSearchSlice,
    vsearch:videoSearch,
}


})
export default store;