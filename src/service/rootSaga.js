import { fork } from 'redux-saga/effects';
import gallerySaga from '../store/gallery/saga';
import newsSaga from '../store/news/saga';
import authSaga from '../store/auth/saga';

export default function* rootSaga() {
  yield fork(gallerySaga);
  yield fork(newsSaga);
  yield fork(authSaga);
}
