import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import Letters from './container/Letters';
import Writing from './container/Writing';

export default function Router() {
  return <Switch>
    <Route exact path="/"><Letters /></Route>
    <Route path="/game"><App /></Route>
    <Route path="/writing"><Writing /></Route>
    <Route path="*"><Letters /></Route>
  </Switch>
}
