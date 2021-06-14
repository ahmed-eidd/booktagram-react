import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout/Layout.jsx';
import Home from '../pages/Home';
import Clubs from '../pages/club';
import Events from '../pages/events';
import Success from '../pages/Success.js';
import Dashboard from '../components/Dashboard/Dashboard.jsx';
import Guide from '../pages/guide';
import { useSelector } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import Logout from '../components/Auth/Logout/Logout.jsx';

const Routes = () => {
  const auth = useSelector((state) => state.firebase.auth);
  console.log(isEmpty(auth));
  const Wrapper = isEmpty(auth) && isLoaded(auth) ? Layout : Dashboard;
  return (
    <>
      <Wrapper>
        <Switch>
          <Route exact path="/" component={isEmpty(auth) ? Home : null} />
          <Route path="/clubs" component={Clubs} />
          <Route path="/events" component={Events} />
          <Route path='/guide' component={Guide} />
          <Route path="/success" component={Success} />
          <Route path="/logout" component={Logout} />
          {/* <Route exact path='/club/:id' component={club} /> */}
        </Switch>
      </Wrapper>
    </>
  );
};

export default Routes;
