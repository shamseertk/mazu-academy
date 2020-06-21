import React from 'react';
import FunLevelOne from '../component/FunLevelOne';
import SubNav from '../component/common/SubNav';

function Fun() {
  return <React.Fragment>
    <SubNav pageTitle="Level1 &#8608; Fun" />
    <div className="container">
      <FunLevelOne />
    </div>
  </React.Fragment>
}

export default Fun;
