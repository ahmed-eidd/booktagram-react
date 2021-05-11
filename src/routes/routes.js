import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout/Layout.jsx';
import Home from '../pages/Home';
import Clubs from '../pages/club'
import Events from '../pages/events'

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route  path='/clubs' component={Clubs} />
        <Route path='/events' component={Events}/>
        {/* <Route exact path='/club/:id' component={club} /> */}
      </Switch>
    </Layout>
  )
}

export default Routes;
