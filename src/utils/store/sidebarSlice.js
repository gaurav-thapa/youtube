import { createSlice } from "@reduxjs/toolkit";
const sidebar = createSlice({
  name: "sidebar",
  initialState: {
    isSidebarExpanded: true,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarExpanded = !state.isSidebarExpanded;
    },
    hideSidebar:(state)=>{
      state.isSidebarExpanded = false;
    }
  },
});

export default sidebar.reducer;
export const sidebarActions = sidebar.actions;
