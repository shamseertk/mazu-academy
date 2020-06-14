import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Game from './container/Game';
import Letters from './container/Letters';
import Writing from './container/Writing';
import Test from './container/Test';
import Home from './container/Home';

export default function Router() {
  return <Switch>
    <Route exact path="/"><Home /></Route>
    <Route exact path="/level1"><Letters /></Route>
    <Route path="/level1/word"><Letters /></Route>
    <Route path="/level1/games"><Game /> </Route>
    <Route path="/level1/test"><Test /></Route>
    <Route path="/level1/writing"><Writing /></Route>
    <Route path="*"><Letters /></Route>
  </Switch>
}
