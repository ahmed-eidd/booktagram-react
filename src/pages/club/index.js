import React from 'react';
import { Switch , Route } from 'react-router-dom';
import ClubList from './ClubsList';
import Club from './Club'



const index = () => {
  return (
    <div>
    <Switch>
      <Route path='/clubs' exact component={ClubList} />
      <Route path='/clubs/:id' exact component={Club}/>
       
    </Switch>
    </div>
  )
}

export default index
