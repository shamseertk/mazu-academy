import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import Letters from './container/Letters';

export default function Router() {
  return <Switch>
    <Route exact path="/"><Letters /></Route>
    <Route path="/game"><App /></Route>
    <Route path="*"><Letters /></Route>
  </Switch>
}
