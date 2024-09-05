import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import { mostPopularVideosReducer } from "./mostPopularVideosSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    mostPopularVideos: mostPopularVideosReducer,
  },
});
