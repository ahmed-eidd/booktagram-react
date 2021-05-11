import { combineReducers} from 'redux'
import { firebaseReducer} from 'react-redux-firebase'
import { firestoreReducer} from 'redux-firestore'
import galleryReducer from '../store/gallery/slice';
import newsReducer from '../store/news/slice';
import authReducer from '../store/auth/slice';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  gallery: galleryReducer,
  news: newsReducer,
  auth: authReducer
})

export default rootReducer
