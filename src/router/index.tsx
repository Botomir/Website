import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  About, Docs, Home, NotFound, Statistics,
} from '../pages';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/statistics" component={Statistics} />
        <Route exact path="/documentation" component={Docs} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
