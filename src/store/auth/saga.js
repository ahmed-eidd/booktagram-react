import { takeLatest, put, call } from 'redux-saga/effects';
import {
  loginUser,
  loginUserFail,
  loginUserSuccess,
  signUpUserFail,
  signUpUser,
  signUpUserSuccess,
  signOutSuccess,
  signOutFail,
  signOut,
} from './slice';
import firebase from 'firebase';
import { getFirebase } from 'react-redux-firebase';
import { createStandaloneToast } from '@chakra-ui/react';
import Cookies from 'js-cookie';
import { toastFail, toastSuccess } from '../../utilities/Toast'


// const firebase = getFirebase();
const toast = createStandaloneToast();

function* loginSaga({ payload }, getstate) {
  console.log('auth-saga', firebase); 
}

function* signUpSaga({ payload }) {
  console.log('signUp Payload', payload);
  try {
    const auth = firebase.auth();
    const result = yield call(
      [auth, auth.createUserWithEmailAndPassword],
      payload.email,
      payload.password
    );
    const user = firebase.auth().currentUser;
    yield call([user,user.updateProfile], {displayName: `${payload.firstName} ${payload.lastName}`}) 
         console.log(user);
    yield put(signUpUserSuccess());
    toastSuccess('Sign Up Success')
    console.log(result)
    // Cookies.set('token', )
  } catch (error) {
    yield put(signUpUserFail());
    toastFail(`Sign Up Fail ${error}`)
  }
}

function* signOutSaga() {
  try {
    const ref = firebase.auth();
    yield call([ref, ref.signOut])
    toastSuccess('Log Out Success, Bye!')
    yield put(signOutSuccess())
  } catch(error) {
    toastFail(error);
    yield put(signOutFail())
  }
}

export default function* authSaga() {
  yield takeLatest(loginUser, loginSaga);
  yield takeLatest(signOut, signOutSaga);
  yield takeLatest(signUpUser, signUpSaga);
}
