/* eslint-disable prettier/prettier */
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isUserLoggedIn: false,
  },
  reducers: {
    setLoginStatus: (state) => {
      state.isUserLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
export const {setLoginStatus} = authSlice.actions;
