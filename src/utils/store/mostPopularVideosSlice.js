import { createSlice } from "@reduxjs/toolkit";

const mostPopularVideosSlice = createSlice({
    name:'mostPopularVideos',
    initialState:null,
    reducers:{
        addVideos(state, action){
            return action.payload;
        }
    }
});
export const mostPopularVideosReducer = mostPopularVideosSlice.reducer;
export const mostPopularVideosActions = mostPopularVideosSlice.actions;