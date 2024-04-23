import { createSlice } from "@reduxjs/toolkit";

export const userReducer = createSlice({
  name: "userReducer",
  initialState: { user: null, loading: false, error: null },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    logoutUser: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
});



export const { setUser, logoutUser } = userReducer.actions;
