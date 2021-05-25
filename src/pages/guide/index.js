import React from 'react'
import {Switch, Route} from 'react-router-dom';
import GuideList from './GuideList'
import Guide from './Guide';

const index = () => {
  return (
    <Switch>
      <Route path='/guide' exact component={GuideList} />
      <Route path='/guide/:id' exact component={Guide} />
    </Switch>
  )
}

export default index