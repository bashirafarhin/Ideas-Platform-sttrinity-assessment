"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// 🔹 Fetch ideas with pagination
export const fetchIdeas = createAsyncThunk(
  "ideas/fetchIdeas",
  async ({ pageNumber, pageSize }) => {
    try {
      console.log(API_URL, pageNumber, pageSize);
      const res = await axios.get(`${API_URL}/ideas`, {
        params: { pageNumber, pageSize },
      });
      console.log(res);
      return res.data.data;
    } catch (err) {
      console.error("Error fetching ideas:", err);
      throw err; // This will be caught by createAsyncThunk for rejected state
    }
  }
);

// 🔹 Submit new idea
export const addIdea = createAsyncThunk(
  "ideas/addIdea",
  async (text) => {
    try {
      const res = await axios.post(`${API_URL}/ideas`, { text });

      // res.data contains the backend response, e.g., { success: true, data: { ... } }
      // return the created idea object
      return res.data.data;
    } catch (err) {
      console.error("Error adding idea:", err);
      throw err;
    }
  }
);

// 🔹 Upvote idea
export const upvoteIdea = createAsyncThunk(
  "ideas/upvoteIdea",
  async (id) => {
    try {
      const res = await axios.post(`${API_URL}/ideas/${id}/upvote`);
      return res.data.data;
    } catch (err) {
      console.error("Error upvoting idea:", err);
      throw err;
    }
  }
);

const ideasSlice = createSlice({
  name: "ideas",
  initialState: {
    items: [],
    pageNumber: 1,
    pageSize: 5,
    totalPages: 1,
    loading: false,
    error: null,
  },
  reducers: {
    setPage: (state, action) => {
      state.pageNumber = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIdeas.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchIdeas.fulfilled, (state, action) => {
        state.loading = false;
          state.items = action.payload.items;          // array of ideas
  state.totalPages = action.payload.totalPages; // total pages
  state.pageNumber = action.payload.pageNumber; // current page
  state.pageSize = action.payload.pageSize;     // cu
      })
      .addCase(fetchIdeas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addIdea.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      })
      .addCase(upvoteIdea.fulfilled, (state, action) => {
        const idx = state.items.findIndex((i) => i.id === action.payload.id);
        if (idx !== -1) state.items[idx] = action.payload;
      });
  },
});

export const { setPage } = ideasSlice.actions;
export default ideasSlice.reducer;
