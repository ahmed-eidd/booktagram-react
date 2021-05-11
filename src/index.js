import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './styles/globals.scss';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import * as locales from './content/locale/';
import store from './service/configureStore';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import firebase from 'firebase/app';
import { ReactReduxFirebaseProvider,get } from 'react-redux-firebase';
import { BrowserRouter } from 'react-router-dom';
import 'firebase/firestore'
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
  // apiKey: process.env.NEXT_PUBLIC_apiKey,
  // authDomain:process.env.NEXT_PUBLIC_authDomain,
  // projectId: process.env.NEXT_PUBLIC_projectId,
  // storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  // messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  // appId:process.env.NEXT_PUBLIC_appId,
  // measurementId: process.env.NEXT_PUBLIC_measurementId,
};

console.log('firebase', fbconfing);

const rrfConfing = {
  userProfie: 'users',
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
};

const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: '#21545F',
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <ChakraProvider theme={theme}>
          <IntlProvider
            locale={language}
            // defaultLocale={defaultLocale}
            messages={locales[language]}
          >
            <BrowserRouter>
              <App />
            </BrowserRouter>
            {/* <ToastContainer /> */}
          </IntlProvider>
        </ChakraProvider>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

//   return (
//     <>
// <Provider store={store}>
//   <ReactReduxFirebaseProvider {...rrfProps}>
//     <ChakraProvider theme={theme}>
//       <IntlProvider
//         locale={locale}
//         defaultLocale={defaultLocale}
//         messages={locales[locale]}
//       >
//         <Component {...pageProps} />
//         <ToastContainer />
//       </IntlProvider>
//     </ChakraProvider>
//   </ReactReduxFirebaseProvider>
// </Provider>
//     </>
//   );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
