"use client";
import { configureStore } from "@reduxjs/toolkit";
import ideasReducer from "./IdeasSlice";

const store = configureStore({
  reducer: {
    ideas: ideasReducer,
  },
});

export default store;
