import React from 'react';
import Alphabet from '../component/Alphabet';
import SubNav from '../component/common/SubNav';

import PageTitle from '../component/common/PageTitle';

function Game() {
  return <React.Fragment>
    <SubNav />
    <div className="container">
      <PageTitle pageTitle="Level1 &#8608; Alphabet Self Test" />
      <Alphabet />
    </div>
  </React.Fragment>
}

export default Game;
