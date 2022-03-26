import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  return fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  ).then((response) => response.json());
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
  },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default postSlice.reducer;
