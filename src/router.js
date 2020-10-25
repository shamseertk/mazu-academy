import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Game from './container/Game';
import Fun from './container/Fun';
import Letters from './container/Letters';
import Vowels from './container/Vowels';
import Writing from './container/Writing';
import Test from './container/Test';
import Home from './container/Home';
import Words from './container/Words';
import WritingPractice from './container/WritingPractice';
import VowelPractice from './container/VowelPractice';
import MoreWords from './container/level2/MoreWords';
import Numbers from './container/level2/Numbers';
import Colors from './container/level2/Colors';
import Months from './container/level2/Months';
import Family from './container/level2/Family';

export default function Router() {
  return <Switch>
    <Route exact path="/"><Home /></Route>
    <Route exact path="/level1"><Letters /></Route>
    <Route path="/level1/vowels"><Vowels /></Route>
    <Route path="/level1/games"><Game /> </Route>
    <Route path="/level1/vowel-practice"><VowelPractice /> </Route>
    <Route path="/level1/fun"><Fun /> </Route>
    <Route path="/level1/test"><Test /></Route>
    <Route path="/level1/writing"><Writing /></Route>
    <Route path="/level1/writing-practice"><WritingPractice /></Route>
    <Route exact path="/level2"><Words /></Route>
    <Route path="/level2/more-words"><MoreWords /></Route>
    <Route path="/level2/numbers"><Numbers /></Route>
    <Route path="/level2/months"><Months /></Route>
    <Route path="/level2/colors"><Colors /></Route>
    <Route path="/level2/family"><Family /></Route>
    <Route path="*"><Letters /></Route>
  </Switch>
}
