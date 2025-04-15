/* eslint-disable prettier/prettier */
import { configureStore } from "@reduxjs/toolkit";
import authSlice from './slices/authSlices';

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export default store;
