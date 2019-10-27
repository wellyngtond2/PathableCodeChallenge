import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

import Communities from './Communities';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Communities} />
      </Switch>
    </BrowserRouter>
  );
}
