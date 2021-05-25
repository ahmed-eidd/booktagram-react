import {call, put,takeLatest} from 'redux-saga/effects';
import {fetchGallery,
fetchGallerySuccess,fetchGalleryFail} from './slice'
import * as api from './api'

function* fetchGallerySaga ({payload}) {
  try {
    const response = yield call(api.fetchGallery)
    yield put(fetchGallerySuccess(response.data))
    console.log(response.data)
  } catch(error) {
    yield put(fetchGalleryFail())
    console.log(error)
  }
}

export default function* gallerySaga() {
  yield takeLatest(fetchGallery, fetchGallerySaga)
}