import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

import Communities from './Communities';
import People from './People';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Communities} />
        <Route path="/peoples" component={People} />
      </Switch>
    </BrowserRouter>
  );
}
