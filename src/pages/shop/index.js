import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShopItem from './ShopItem';
import ShopList from './ShopList';

const index = () => {
  return (
    <Switch>
      <Route path='/shop' exact component={ShopList} />
      <Route path='/shop/:id' exact component={ShopItem} />
    </Switch>
  );
};

export default index;
