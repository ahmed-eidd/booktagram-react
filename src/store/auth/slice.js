import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'authAction',
  initialState: {
    user: {},
    loading: false,
  },
  reducers: {
    loginUser: (state, action) => {
      state.loading = true;
    },
    loginUserSuccess: (state, action) => {
      state.items = { ...action.payload };
      state.loading = false;
    },
    loginUserFail: (state, action) => {},
    signUpUser: (state, action) => {
      state.loading = true;
    },
    signUpUserSuccess: (state) => {
      state.loading = false;
    },
    signUpUserFail: (state) => {
      state.loading = false;
    },
    signOut: (state) => {
      state.loading = true;
    },
    signOutSuccess: (state) => {
      state.loading = false;
    },
    signOutFail: (state) => {
      state.loading = false;
    },
  },
});

export const {
  loginUser,
  loginUserFail,
  loginUserSuccess,
  signUpUser,
  signUpUserFail,
  signUpUserSuccess,
  signOut,
  signOutFail,
  signOutSuccess
} = authSlice.actions;

export default authSlice.reducer;
