import { actionTypes } from './actionTypes';

export const loginUserAction = (userData) => ({
  type: actionTypes.LOGIN_USER,
  payload: userData,
});

export const loginUserSuccessAction = () => ({
  type: actionTypes.LOGIN_USER_SUCCESS,
});

export const loginUserFailAction = () => ({
  type: actionTypes.LOGIN_USER_FAIL,
});

export const logoutAction = () => ({
  type: actionTypes.LOGOUT,
});

export const logoutSuccessAction = () => ({
  type: actionTypes.LOGOUT_SUCCESS,
});

export const logoutFailAction = () => ({
  type: actionTypes.LOGOUT_FAIL,
});

export const setAuthModalOpen = (modalType) => ({
  type: actionTypes.SET_AUTH_MODAL_OPEN,
  payload: modalType
})

export const setAuthModalClose = () => ({
  type: actionTypes.SET_AUTH_MODAL_CLOSE,
})