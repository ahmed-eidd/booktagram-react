import {call, put, takeLatest} from 'redux-saga/effects';
import {fetchNews,
fetchNewsSuccess,fetchNewsFail} from './slice'
import * as api from './api'

function* fetchNewsSaga ({payload}) {
  try {
    const response = yield call(api.fetchNews)
    yield put(fetchNewsSuccess(response.data.results))
    console.log(response.data.results)
  } catch(error) {
    yield put(fetchNewsFail())
    console.log(error)
  }
}

export default function* newsSaga() {
  yield takeLatest(fetchNews, fetchNewsSaga)
}