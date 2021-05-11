import { createSlice } from '@reduxjs/toolkit';

export const gallerySlice = createSlice({
  name: 'galleryAction',
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {
    fetchGallery: (state, action) => {
      state.loading = true;
    },
    fetchGallerySuccess: (state, action) => {
      state.items = [...action.payload]
      state.loading = false
    },
    fetchGalleryFail: (state, action) => {
      state.loading = false
    }
  },
});

export const { fetchGallery, fetchGallerySuccess, fetchGalleryFail} = gallerySlice.actions

export default gallerySlice.reducer

console.log(gallerySlice.actions.fetchGallerySuccess().type);
