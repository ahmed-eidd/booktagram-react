import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { gallerySlice } from '../store/gallery/slice';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

let sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
  routerMiddleware(history),
  sagaMiddleware,
];

const configStore = (preloadedState = {}) => {
  const store = configureStore({
    reducer: rootReducer(history),
    preloadedState,
    middleware,
  });
  sagaMiddleware.run(rootSaga);
  return store
};

// const store = (preloadedState = {}) =>
//   configureStore({
//     reducer: rootReducer(history),
//     preloadedState,
//     middleware,
//   });

const store = configStore()

export default store;
