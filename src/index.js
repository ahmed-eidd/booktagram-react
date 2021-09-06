import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import * as locales from './content/locale/';
import store, { history } from './service/configureStore';
import { ConnectedRouter } from 'connected-react-router';
import firebase from 'firebase/app';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import 'firebase/firestore';
import 'firebase/auth';

const language = navigator.language.split(/[-_]/)[0];

const fbconfing = {
  apiKey: 'AIzaSyA6dFWd86WNPcx7YDqAkldnFxDsg6BKEyk',
  authDomain: 'booktagram-f29df.firebaseapp.com',
  projectId: 'booktagram-f29df',
  storageBucket: 'booktagram-f29df.appspot.com',
  messagingSenderId: '1041639497306',
  appId: '1:1041639497306:web:504683d81bae6df8f10263',
  measurementId: 'G-FN3XP1DL6W',
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain:process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId:process.env.REACT_APP_appId,
  // measurementId: process.env.REACT_APP_measurementId,
};

const rrfConfing = {
  userProfile: 'users',
  useFirestoreForProfile: true,
};

// firebase.initializeApp(fbconfing);
if (!firebase.apps.length) {
  firebase.initializeApp(fbconfing);
  firebase.firestore();
} else {
  firebase.app(); // if already initialized, use that one
  firebase.firestore();
}
const rrfProps = {
  firebase,
  config: rrfConfing,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const theme = extendTheme({
  styles: {
    global: {
      body: {

      },
    },
  },
  colors: {
    greenDark: '#21545F',
    secondary: '#E7FAFC',
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {/* <BrowserRouter> */}
        <ReactReduxFirebaseProvider {...rrfProps}>
          <ChakraProvider theme={theme}>
            <IntlProvider
              locale={language}
              // defaultLocale={defaultLocale}
              messages={locales[language]}
            >
              <App />
              {/* <ToastContainer /> */}
            </IntlProvider>
          </ChakraProvider>
        </ReactReduxFirebaseProvider>{' '}
        {/* </BrowserRouter> */}
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
