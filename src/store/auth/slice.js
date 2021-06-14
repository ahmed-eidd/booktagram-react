import { createSlice } from '@reduxjs/toolkit';
import {actionTypes}from './actionTypes';

const initialState = {
  user: {},
  loading: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.LOGIN_USER: {
      return {
        ...state,
        loading: true
      }
    }
    case actionTypes.LOGIN_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
      }
    }

    case actionTypes.LOGIN_USER_FAIL: {
      return {
        ...state,
        loading: false
      }
    }


    case actionTypes.LOGOUT: {
      return {
        ...state,
        loading: true,
      };
    }
    case actionTypes.LOGOUT_SUCCESS: {
      return { 
       user: {} ,
       loading: false
    };
    }
    case actionTypes.LOGOUT_FAIL: {
      return {
        ...state,
        loading: false
      }
    }

    default:
      return state;
  }
};

export default authReducer

// export const authSlice = createSlice({
//   name: 'authAction',
//   initialState: {
//     user: {},
//     loading: false,
//   },
//   reducers: {
//     loginUser: (state, action) => {
//       state.loading = true;
//     },
//     loginUserSuccess: (state, action) => {
//       state.items = { ...action.payload };
//       state.loading = false;
//     },
//     loginUserFail: (state, action) => {
//       state.loading = false;
//     },
//     signUpUser: (state, action) => {
//       state.loading = true;
//     },
//     signUpUserSuccess: (state) => {
//       state.loading = false;
//     },
//     signUpUserFail: (state) => {
//       state.loading = false;
//     },
//     signOut: (state) => {
//       state.loading = true;
//     },
//     signOutSuccess: (state) => {
//       state.loading = false;
//     },
//     signOutFail: (state) => {
//       state.loading = false;
//     },
//   },
// });

// export const {
//   loginUser,
//   loginUserFail,
//   loginUserSuccess,
//   signUpUser,
//   signUpUserFail,
//   signUpUserSuccess,
//   signOut,
//   signOutFail,
//   signOutSuccess,
// } = authSlice.actions;

// export default authSlice.reducer;
