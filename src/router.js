import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
  return <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/level1" element={<Letters />} />
    <Route path="/level1/vowels" element={<Vowels />} />
    <Route path="/level1/games" element={<Game />} />
    <Route path="/level1/vowel-practice" element={<VowelPractice />} />
    <Route path="/level1/fun" element={<Fun />} />
    <Route path="/level1/test" element={<Test />} />
    <Route path="/level1/writing" element={<Writing />} />
    <Route path="/level1/writing-practice" element={<WritingPractice />} />
    <Route exact path="/level2" element={<Words />} />
    <Route path="/level2/more-words" element={<MoreWords />} />
    <Route path="/level2/numbers" element={<Numbers />} />
    <Route path="/level2/months" element={<Months />} />
    <Route path="/level2/colors" element={<Colors />} />
    <Route path="/level2/family" element={<Family />} />
    <Route path="*" element={<Letters />} />
  </Routes>
}
