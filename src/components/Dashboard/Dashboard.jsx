import React, { useEffect } from 'react';
import classes from './Dashboard.module.scss';
import Sidebar from './Sidebar/Sidebar';
import { useFirestoreConnect } from 'react-redux-firebase';

const Dashboard = ({ children }) => {
  
  useEffect(() => {}, []);
  useFirestoreConnect([
    { collection: 'clubs' }, // or 'todos'
  ]);
  return (
    <div className={classes.Dashboard}>
      <Sidebar />
      <div className={classes.Content}>{children}</div>
    </div>
  );
};

export default Dashboard;

// import React from 'react'
// import {
//   BrowserRouter,
//   Switch,
//   Route,
//   Redirect
// } from 'react-router-dom';

// // A wrapper for <Route> that redirects to the login
// // screen if you're not yet authenticated or if auth is not
// // yet loaded
// function PrivateRoute({ children, ...rest }) {
//   const auth = useSelector(state => state.firebase.auth)
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         isLoaded(auth) && !isEmpty(auth) ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }
