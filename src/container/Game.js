import React from 'react';
import Alphabet from '../component/Alphabet';
import SubNav from '../component/common/SubNav';

function Game() {
  return <React.Fragment>
    <SubNav pageTitle="Level1 &#8608; Alphabet Self Test" />
    <div className="container">
      <Alphabet />
    </div>
  </React.Fragment>
}

export default Game;
