import React from 'react'
import {Switch, Route} from 'react-router-dom';
import EventsList from './EventsList'
import Event from './Event';

const index = () => {
  return (
    <Switch>
      <Route path='/events' exact component={EventsList} />
      <Route path='/events/:id' exact component={Event} />
    </Switch>
  )
}

export default index
