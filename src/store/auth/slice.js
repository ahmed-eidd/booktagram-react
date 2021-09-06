import {actionTypes}from './actionTypes';

const initialState = {
  user: {},
  loading: false,
  modal:null 
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

    case actionTypes.SET_AUTH_MODAL_OPEN: {
      return {
        ...state,
        modal: payload
      }
    }
    
    case actionTypes.SET_AUTH_MODAL_CLOSE: {
      return {
        ...state, 
        modal: null 
      }
    }

    default:
      return state;
  }
};

export default authReducer