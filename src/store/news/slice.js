import { createSlice } from '@reduxjs/toolkit';

export const newsSlice = createSlice({
  name: 'newsAction',
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {
    fetchNews: (state, action) => {
      state.loading = true;
    },
    fetchNewsSuccess: (state, action) => {
      state.items = [...action.payload]
      state.loading = false
    },
    fetchNewsFail: (state, action) => {
      state.loading = false
    }
  },
});

export const { fetchNews, fetchNewsSuccess, fetchNewsFail} = newsSlice.actions

export default newsSlice.reducer

console.log(newsSlice.actions.fetchNewsSuccess().type);
