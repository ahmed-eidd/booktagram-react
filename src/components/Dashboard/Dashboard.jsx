import React, { useEffect } from 'react'
import classes from './Dashboard.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { fetchGallery } from '../../store/gallery/slice'

const Dashboard = ({children}) => {
  const dispatch = useDispatch();
  const gallery = useSelector((state) => state.gallery.items )
  // useEffect(() => {
  // dispatch(fetchGallery());   
  // }, []) 
  return (
    <div className={classes.Dashboard}>
        {/* {gallery.map((el) => <div>{el.id}</div> )} */}
      <div className={classes.Sidebar}></div>
      <div className={classes.Content}>{children}</div>
    </div>
  )
}

export default Dashboard;


// 


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
