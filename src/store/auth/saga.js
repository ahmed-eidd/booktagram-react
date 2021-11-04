import { takeLatest, put, call } from 'redux-saga/effects';
// import {
//   loginUser,
//   loginUserFail,
//   loginUserSuccess,
//   signUpUserFail,
//   signUpUser,
//   signUpUserSuccess,
//   signOutSuccess,
//   signOutFail,
//   signOut,
// } from './slice';
import {loginUserSuccessAction,loginUserFailAction,logoutFailAction,logoutSuccessAction} from './action'
import {actionTypes} from './actionTypes'
import firebase from 'firebase';
// import Cookies from 'js-cookie';
import { toastFail, toastSuccess } from '../../utilities/Toast';
import {push} from 'connected-react-router';

// const firebase = getFirebase();

function* loginSaga({ payload }) {

  const auth = firebase.auth();
  try {
    const result = yield call(
      [auth, auth.signInWithEmailAndPassword],
      payload.email,
      payload.password
    );
    yield put(push('/success'))
    console.log(result)
    yield put(loginUserSuccessAction());
    toastSuccess('Log in Success');
  } catch (error) {
    yield put(loginUserFailAction());
    console.log(error);
    toastFail('error');
  }
}

// function* signUpSaga({ payload }) {
//   const auth = firebase.auth();
//   try {
//     const result = yield call(
//       [auth, auth.createUserWithEmailAndPassword],
//       payload.email,
//       payload.password
//     );
//     const user = firebase.auth().currentUser;
//     yield call([user, user.updateProfile], {
//       displayName: `${payload.firstName} ${payload.lastName}`,
//     });
//     yield put(push('/success'))
//     yield put(signUpUserSuccess());
//     toastSuccess('Sign Up Success');
//     console.log(result);
//     // Cookies.set('token', )
//   } catch (error) {
//     yield put(signUpUserFail());
//     toastFail(`Sign Up Fail ${error}`);
//   }
// }

function* logoutSaga() {
  try {
    const ref = firebase.auth();
    yield call([ref, ref.signOut]);
    yield put(push('/'))
    toastSuccess('Log Out Success, Bye!');
    yield put(logoutSuccessAction());
  } catch (error) {
    toastFail(error);
    yield put(logoutFailAction());
  }
}

export default function* authSaga() {
  // yield takeLatest(signUpUser, signUpSaga);
  yield takeLatest(actionTypes.LOGIN_USER, loginSaga);
  yield takeLatest(actionTypes.LOGOUT, logoutSaga);
}
